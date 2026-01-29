import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { fetchWebAppSummary } from "../services/webAppSummary";

const DEFAULT_SUMMARY = {
  rating: 4.8,
  reviews_count: 100,
  monthly_price: 9.99,
  currency: "USD",
};

const WebAppSummaryContext = createContext();

export function WebAppSummaryProvider({ children }) {
  const [summary, setSummary] = useState(DEFAULT_SUMMARY);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadSummary() {
      try {
        const data = await fetchWebAppSummary({ signal: controller.signal });
        setSummary({ ...DEFAULT_SUMMARY, ...data });
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") return;

        console.error("Failed to fetch web app summary", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadSummary();

    return () => controller.abort();
  }, []);

  const value = useMemo(
    () => ({
      summary,
      loading,
      error,
    }),
    [summary, loading, error],
  );

  return (
    <WebAppSummaryContext.Provider value={value}>
      {children}
    </WebAppSummaryContext.Provider>
  );
}

export function useWebAppSummary() {
  const context = useContext(WebAppSummaryContext);
  if (!context) {
    throw new Error("useWebAppSummary must be used within a WebAppSummaryProvider");
  }
  return context;
}

export const defaultWebAppSummary = DEFAULT_SUMMARY;
