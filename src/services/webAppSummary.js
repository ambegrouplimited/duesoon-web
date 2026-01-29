const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";
const SUMMARY_ENDPOINT = `${API_BASE_URL}/api/web-app/summary`;

/**
 * Retrieves summary data (pricing and social proof) shown across the marketing site.
 */
export async function fetchWebAppSummary({ signal } = {}) {
  const response = await fetch(SUMMARY_ENDPOINT, { signal });

  if (!response.ok) {
    throw new Error("Unable to load the latest pricing details.");
  }

  return response.json();
}

export const webAppSummaryEndpoint = SUMMARY_ENDPOINT;
