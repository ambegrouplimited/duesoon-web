import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import {
  fetchClientPaymentInstructions,
  reportClientPayment,
} from "../services/clientPayments";
import { formatCurrency } from "../utils/currency";
import duesoonLogo from "../assets/duesoonlogo.png";

function InfoRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex flex-col gap-1 rounded-2xl bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
      <span className="text-sm font-medium text-slate-500">{label}</span>
      <span className="text-base font-semibold text-slate-900">{value}</span>
    </div>
  );
}

function PaymentOptionCard({ option }) {
  const hasLink = Boolean(option.url);
  return (
    <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            {option.type?.replace(/_/g, " ") ?? "Payment option"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">{option.label}</h3>
        </div>
        {hasLink ? (
          <a
            href={option.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 px-4 py-1 text-sm font-medium text-slate-700 hover:border-slate-400 hover:text-slate-900"
          >
            Open link
          </a>
        ) : null}
      </div>
      <p className="mt-4 text-sm text-slate-700">{option.display_text}</p>
    </div>
  );
}

export default function ClientPayment() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token")?.trim() ?? "";
  const [loading, setLoading] = useState(Boolean(token));
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [reportMessage, setReportMessage] = useState(null);
  const [reportError, setReportError] = useState(null);
  const [reporting, setReporting] = useState(false);
  const [redirectTimeoutId, setRedirectTimeoutId] = useState(null);

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    setError(null);
    const controller = new AbortController();
    fetchClientPaymentInstructions({ token, signal: controller.signal })
      .then((payload) => {
        setData(payload);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError(err.message ?? "Unable to load payment instructions.");
      })
      .finally(() => {
        setLoading(false);
      });
    return () => controller.abort();
  }, [token]);

  const amountLabel = useMemo(() => {
    if (!data) return null;
    return formatCurrency(data.amount, data.currency);
  }, [data]);

  const dueDateLabel = useMemo(() => {
    if (!data?.due_date) {
      return null;
    }
    try {
      return new Date(data.due_date).toLocaleDateString("en-US", {
        dateStyle: "long",
      });
    } catch {
      return data.due_date;
    }
  }, [data?.due_date]);

  const hasOptions = Boolean(data?.payment_options?.length);
  const hasProviderLinks = Boolean(data?.stripe_invoice_url || data?.paypal_invoice_url);

  useEffect(() => {
    return () => {
      if (redirectTimeoutId) {
        clearTimeout(redirectTimeoutId);
      }
    };
  }, [redirectTimeoutId]);

  const handleReport = async () => {
    setReporting(true);
    setReportMessage(null);
    setReportError(null);
    try {
      const response = await reportClientPayment(token);
      setReportMessage(response?.message ?? "Thanks! We let the team know.");
      const timeout = setTimeout(() => {
        navigate("/");
      }, 2500);
      setRedirectTimeoutId(timeout);
    } catch (err) {
      setReportError(err.message ?? "Unable to submit your confirmation just yet.");
    } finally {
      setReporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="px-6 py-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link to="/" aria-label="Back to DueSoon home">
            <img src={duesoonLogo} alt="DueSoon" className="h-8 w-auto" />
          </Link>
          <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Client payment portal
          </span>
        </div>
      </header>
      <main className="relative px-4 pb-20">
        <div className="mx-auto w-full max-w-3xl rounded-3xl bg-white p-6 shadow-lg md:p-12">
          {!token ? (
            <div className="space-y-3 text-center">
              <h1 className="text-2xl font-semibold">Link missing</h1>
              <p className="text-slate-600">
                This page needs the secure token from your reminder email. Please return to the
                email or message you received and tap the payment button again.
              </p>
            </div>
          ) : loading ? (
            <div className="space-y-3 text-center">
              <p className="text-base font-medium text-slate-600">Loading payment details…</p>
            </div>
          ) : error ? (
            <div className="space-y-3 text-center">
              <h1 className="text-2xl font-semibold text-slate-900">Link unavailable</h1>
              <p className="text-slate-600">{error}</p>
              <p className="text-sm text-slate-500">
                Reach out to the sender to request a new reminder if you think this is a mistake.
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-wide text-amber-500">
                  Hi {data?.client_name ?? "there"}
                </p>
                <h1 className="text-3xl font-semibold">
                  Here’s how to pay {data?.business_name ?? "your freelancer"}.
                </h1>
                <p className="text-base text-slate-600">
                  {data?.business_name ?? "They"} requested {amountLabel}{" "}
                  {data?.invoice_description ? (
                    <>
                      for <span className="font-medium">{data.invoice_description}</span>
                    </>
                  ) : null}
                  . Once you’ve sent the payment, use the button below so we can update their
                  records.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <InfoRow label="Amount due" value={amountLabel} />
                <InfoRow label="Due date" value={dueDateLabel} />
              </div>

              {hasProviderLinks ? (
                <div className="mt-10 space-y-3">
                  <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                    Pay using a provider
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    {data?.stripe_invoice_url ? (
                      <a
                        href={data.stripe_invoice_url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 rounded-2xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
                      >
                        Open Stripe invoice
                      </a>
                    ) : null}
                    {data?.paypal_invoice_url ? (
                      <a
                        href={data.paypal_invoice_url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 rounded-2xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-900 hover:border-slate-400"
                      >
                        View PayPal invoice
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : null}

              <div className="mt-10 space-y-4">
                <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Manual payment instructions
                </p>
                {hasOptions ? (
                  <div className="space-y-4">
                    {data.payment_options.map((option) => (
                      <PaymentOptionCard key={`${option.label}-${option.type}-${option.display_text}`} option={option} />
                    ))}
                  </div>
                ) : (
                  <p className="rounded-2xl border border-dashed border-slate-200 p-4 text-sm text-slate-600">
                    This invoice doesn’t have additional manual payment instructions. Use the
                    provider links above or reply directly to the reminder if you need help.
                  </p>
                )}
              </div>

              <div className="mt-12 space-y-4">
                <button
                  type="button"
                  onClick={handleReport}
                  disabled={reporting}
                  className="w-full rounded-2xl bg-amber-400 px-6 py-4 text-base font-semibold text-slate-900 transition hover:bg-amber-300 disabled:opacity-70"
                >
                  {reporting ? "Sending..." : "I’ve paid"}
                </button>
                {reportMessage ? (
                  <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
                    {reportMessage} Redirecting you to DueSoon…
                  </div>
                ) : null}
                {reportError ? (
                  <p className="text-sm font-medium text-red-600">{reportError}</p>
                ) : null}
                <p className="text-center text-sm text-slate-500">
                  Need to make a change? Reply to the email or message you received and the sender
                  will be notified right away.
                </p>
              </div>
            </>
          )}
        </div>
        {reporting ? (
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-white/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
              <div className="h-14 w-14 animate-spin rounded-full border-4 border-amber-400 border-t-transparent" />
              <p className="text-base font-semibold text-slate-700">Letting DueSoon know…</p>
            </div>
          </div>
        ) : null}
      </main>
      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        Powered by DueSoon • secure payment reminders for freelancers and agencies
      </footer>
    </div>
  );
}
