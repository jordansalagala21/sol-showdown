// Kicker + heading on the left, short intro on the right, so the intro doesn't add height.
// The heading is split into words so they can animate in one after another.
export default function SectionHead({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="sec-head">
      <div>
        <span className="kicker">{kicker}</span>
        <h2 aria-label={title}>
          {title.split(" ").map((w, i) => (
            <span key={i} aria-hidden="true">
              <span className="w" style={{ "--i": i } as React.CSSProperties}>{w}</span>{" "}
            </span>
          ))}
        </h2>
      </div>
      {children && <p>{children}</p>}
    </div>
  );
}
