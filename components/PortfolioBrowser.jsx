// PortfolioBrowser — browser-window mockup with portfolio donut chart

const PortfolioBrowser = () => {
  // donut data
  const sectors = [
  { name: "Tech", pct: 32, color: "#519872" },
  { name: "Financials", pct: 22, color: "#34252F" },
  { name: "Healthcare", pct: 16, color: "#7A9B7E" },
  { name: "Industrials", pct: 14, color: "#3B5249" },
  { name: "Energy", pct: 9, color: "#A4B494" },
  { name: "Other", pct: 7, color: "#C9D1B8" }];

  const total = sectors.reduce((a, s) => a + s.pct, 0);
  let cumulative = 0;
  const radius = 56,stroke = 16;
  const circ = 2 * Math.PI * radius;

  return (
    <div style={{
      background: "var(--pascal-paper-card)",
      border: "1px solid var(--pascal-line)",
      borderRadius: 18,
      boxShadow: "0 24px 60px -22px rgba(42,74,71,0.22)",
      overflow: "hidden"
    }}>
      {/* Browser chrome */}
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "12px 16px",
        borderBottom: "1px solid var(--pascal-line)",
        background: "var(--pascal-paper-soft)"
      }}>
        <span style={{ display: "flex", gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF8B82" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFC149" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#52C26B" }} />
        </span>
        <span style={{
          marginLeft: 10,
          flex: 1, height: 26, borderRadius: 6,
          background: "var(--pascal-paper-card)", border: "1px solid var(--pascal-line)",
          display: "flex", alignItems: "center", gap: 8,
          padding: "0 12px",
          fontSize: 12, color: "var(--pascal-fg-muted)",
          fontFamily: "var(--font-mono)"
        }}>
          <i data-lucide="lock" style={{ width: 11, height: 11 }} />
          pascal.your-firm.com/portfolio/exposure
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: 22 }} data-comment-anchor="7e1da11334-div-53-7">
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "5px 10px", borderRadius: 999,
            background: "var(--pascal-mint)", color: "var(--pascal-emerald)",
            fontSize: 11, fontWeight: 600
          }}>
            <i data-lucide="sparkles" style={{ width: 12, height: 12 }} />
            AI Summary
          </span>
          <span style={{ fontSize: 13, color: "var(--pascal-fg-muted)" }}>Portfolio Exposure · Global Equity Fund</span>
        </div>

        <div style={{ fontSize: 22, fontWeight: 700, color: "var(--pascal-ink)", letterSpacing: "-0.02em", lineHeight: 1.25, marginBottom: 18 }}>
          Tech overweight at 32%,{" "}
          <span style={{ color: "var(--pascal-fg-muted)", fontWeight: 500 }}>
            500 bps above benchmark — driven by AI infrastructure exposure across NVDA, AVGO, and TSMC.
          </span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "180px 1fr",
          gap: 24,
          alignItems: "center"
        }}>
          {/* Donut */}
          <svg viewBox="0 0 160 160" width="180" height="180">
            <g transform="translate(80,80) rotate(-90)">
              {sectors.map((s, i) => {
                const dash = s.pct / total * circ;
                const offset = -(cumulative / total) * circ;
                cumulative += s.pct;
                return (
                  <circle key={i}
                  r={radius} cx={0} cy={0}
                  fill="none"
                  stroke={s.color}
                  strokeWidth={stroke}
                  strokeDasharray={`${dash} ${circ - dash}`}
                  strokeDashoffset={offset} />);


              })}
            </g>
            <text x="80" y="76" textAnchor="middle" fontSize="11" fill="var(--pascal-fg-muted)" fontFamily="var(--font-sans)">AUM</text>
            <text x="80" y="94" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--pascal-ink)" fontFamily="var(--font-sans)" letterSpacing="-0.02em">$4.2B</text>
          </svg>

          {/* Legend */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {sectors.map((s, i) =>
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 8,
              fontSize: 13, color: "var(--pascal-ink)"
            }}>
                <span style={{ width: 10, height: 10, borderRadius: 3, background: s.color, flex: "none" }} />
                <span style={{ flex: 1 }}>{s.name}</span>
                <span style={{ color: "var(--pascal-fg-muted)", fontVariantNumeric: "tabular-nums" }}>{s.pct}%</span>
              </div>
            )}
          </div>
        </div>

        <div style={{
          marginTop: 18,
          padding: "10px 14px",
          background: "var(--pascal-paper-soft)",
          border: "1px solid var(--pascal-line)",
          borderRadius: 10,
          display: "flex", alignItems: "center", gap: 10,
          fontSize: 12, color: "var(--pascal-fg-muted)"
        }}>
          <i data-lucide="book-open" style={{ width: 14, height: 14, color: "var(--pascal-emerald)" }} />
          Sourced from FactSet · Internal positions · Updated 2 min ago
          <span style={{ marginLeft: "auto", color: "var(--pascal-emerald)", fontWeight: 600 }}>View 14 citations →</span>
        </div>
      </div>
    </div>);

};

Object.assign(window, { PortfolioBrowser });