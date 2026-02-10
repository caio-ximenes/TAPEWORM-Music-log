export function useShortFormatter(stats) {
  if (!stats) return {};

  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });

  const formattedStats = {};
  const keys = Object.keys(stats);

  keys.forEach((key) => {
    const value = stats[key];
    formattedStats[key] =
      typeof value === "number" ? formatter.format(value).toLowerCase() : value;
  });

  return formattedStats;
}
