export function StarRating({
  value,
  count,
  size = 16,
}: {
  value: number;
  count?: number;
  size?: number;
}) {
  const pct = `${(value / 5) * 100}%`;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
      <span className="stars" style={{ ["--pct" as string]: pct, fontSize: size }}>
        <span />
      </span>
      <span style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 600 }}>
        {value.toFixed(1)}
        {typeof count === "number" && (
          <span style={{ color: "var(--ink-faint)", fontWeight: 400 }}>
            {" "}
            ({count})
          </span>
        )}
      </span>
    </span>
  );
}
