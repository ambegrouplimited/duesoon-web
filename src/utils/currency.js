const USD_FORMATTER = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatUsd(amount) {
  return USD_FORMATTER.format(amount ?? 0);
}

export function formatCurrency(amount, currency = "USD") {
  if (!currency) {
    return formatUsd(amount);
  }
  try {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatter.format(amount ?? 0);
  } catch {
    return `${currency.toUpperCase()} ${Number(amount ?? 0).toFixed(2)}`;
  }
}
