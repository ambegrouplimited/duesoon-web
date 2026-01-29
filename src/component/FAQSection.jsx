import { useMemo, useState } from "react";
import { faqs } from "../data/faqs";
import { FAQItem } from "./FAQItem";
import { useWebAppSummary } from "../context/WebAppSummaryContext.jsx";
import { formatUsd } from "../utils/currency.js";

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  const { summary } = useWebAppSummary();
  const monthlyPrice = summary?.monthly_price ?? 9.99;
  const formattedPrice = formatUsd(monthlyPrice);

  const faqItems = useMemo(
    () =>
      faqs.map((faq) => {
        if (faq.id !== 6) return faq;

        return {
          ...faq,
          answer:
            `DueSoon is free for the first month. After that, it's ${formattedPrice} per month for unlimited reminders and platform integrations.`,
        };
      }),
    [formattedPrice],
  );

  return (
    <section className="section py-24">
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 px-6">
        <div>
          <p className="text-muted text-sm sm:text-[20px]">Frequently Asked Questions.</p>
          <h2 className="mt-2 text-2xl sm:text-[50px] font-semibold">
            Everything you need to know about DueSoon.
          </h2>

          <button className="mt-6 btn-primary">
            View more FAQs
          </button>
        </div>

        <div className="space-y-4">
          {faqItems.map((faq, i) => (
            <FAQItem
              key={faq.id}
              {...faq}
              isOpen={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
