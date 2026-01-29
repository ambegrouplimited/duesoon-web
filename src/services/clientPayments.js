const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

export async function fetchClientPaymentInstructions({ token, signal } = {}) {
  if (!token) {
    throw new Error("Missing payment token.");
  }

  const url = new URL("/api/client/payments/instructions", API_BASE_URL);
  url.searchParams.set("token", token);

  const response = await fetch(url.toString(), { signal });
  if (!response.ok) {
    const detail = await response.json().catch(() => ({}));
    throw new Error(detail?.detail ?? "Unable to load payment instructions.");
  }
  return response.json();
}

export async function reportClientPayment(token) {
  if (!token) {
    throw new Error("Missing payment token.");
  }
  const response = await fetch(`${API_BASE_URL}/api/client/payments/report`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
  if (!response.ok) {
    const detail = await response.json().catch(() => ({}));
    throw new Error(detail?.detail ?? "Unable to submit your payment confirmation.");
  }
  return response.json();
}
