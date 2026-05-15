// Solutions.jsx — pill-button switcher with hero product visual per industry

const SOLUTION_HREFS = {
  hedge: "hedge-funds.html",
  am:    "asset-management.html",
  ib:    "investment-banking.html",
  pe:    "private-equity.html",
};

const SOLUTIONS = [
  {
    key: "hedge",
    label: "Hedge Funds",
    title: "Alpha generation with auditable evidence trails.",
    body: "Long/short conviction, factor exposure, event monitoring. Filings, transcripts, and alt-data synthesised in real time with citations back to source.",
    kpi: [
      { l: "Faster idea velocity", v: "5–8×"  },
      { l: "Filings indexed",      v: "100%"  },
      { l: "Time to thesis",       v: "< 2h"  },
    ],
    visual: "hedge",
  },
  {
    key: "am",
    label: "Asset Management",
    title: "IC memos, portfolio monitoring, and quarterly letters.",
    body: "From morning packs to quarterly client letters. Drafted in your house voice, governed by your style guide.",
    kpi: [
      { l: "IC memo draft time",  v: "−65%" },
      { l: "Portfolio coverage",  v: "100%" },
      { l: "Letter cycle time",   v: "−40%" },
    ],
    visual: "am",
  },
  {
    key: "ib",
    label: "Investment Banking",
    title: "Pitch books, sector coverage, and live deal teams.",
    body: "Benchmark comps, precedent transactions, full pitch decks at deal speed. Formatting and disclaimers pre-approved by compliance.",
    kpi: [
      { l: "Pitchbook turnaround", v: "2× faster"  },
      { l: "Comps refresh",        v: "Live"        },
      { l: "Saved per analyst",    v: "20+ hrs/wk"  },
    ],
    visual: "ib",
  },
  {
    key: "pe",
    label: "Private Markets",
    title: "From sourcing to diligence on a single orchestrated stack.",
    body: "Target-list builds, CIM reviews, rep-and-warranty queries on one stack. Pascal carries the institutional memory of every deal your firm has touched.",
    kpi: [
      { l: "CIM review time",      v: "−72%"   },
      { l: "Targets screened/wk",  v: "1,200+" },
      { l: "Deal-room indexing",   v: "Native" },
    ],
    visual: "pe",
  },
];

const Solutions = () => {
  const [active, setActive] = React.useState(0);
  const [k, setK] = React.useState(0);
  const s = SOLUTIONS[active];
  const switchTo = (i) => { if (i === active) return; setActive(i); setK(x => x + 1); };

  return (
    <section className="section" style={{ background: "var(--pascal-paper-soft)" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
          <span className="eyebrow">Solutions</span>
          <h2 style={{
            marginTop: 18, fontSize: 48, fontWeight: 700,
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.025em", color: "var(--pascal-ink)", lineHeight: 1.05,
          }}>
            Built for Finance.<br/>
            <span style={{ color: "var(--pascal-ink)", fontWeight: 700 }}>Sovereign by Design.</span>
          </h2>
          <p style={{ marginTop: 22, fontSize: 18, lineHeight: 1.55, color: "var(--pascal-fg-muted)" }}>
            Purpose-built for banks, asset managers, and hedge funds. Live at ICICI Prudential AMC and Kotak Mahindra AMC.
          </p>
        </div>

        {/* Pill buttons */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
          {SOLUTIONS.map((it, i) => (
            <button key={it.key} onClick={() => switchTo(i)} style={{
              padding: "12px 22px", borderRadius: 999,
              border: "1px solid " + (i === active ? "var(--pascal-ink)" : "var(--pascal-line-strong)"),
              background: i === active ? "var(--pascal-ink)" : "var(--pascal-paper-card)",
              color: i === active ? "#fff" : "var(--pascal-fg-muted)",
              fontSize: 14.5, fontWeight: 500, cursor: "pointer",
              transition: "all 200ms ease", fontFamily: "inherit",
            }}>
              {it.label}
            </button>
          ))}
        </div>

        {/* Visual card */}
        <div key={k} className="fade-in" style={{
          background: "var(--pascal-paper-card)",
          border: "1px solid var(--pascal-line)",
          borderRadius: 20,
          boxShadow: "rgba(0,0,0,0.04) 0px -2px 0px 0px inset, rgba(0,0,0,0.10) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 16px 0px",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          minHeight: 460,
        }}>
          {/* Left copy */}
          <div style={{
            padding: 48, display: "flex", flexDirection: "column", justifyContent: "center",
            background: "linear-gradient(180deg, var(--pascal-paper-card) 0%, var(--pascal-paper-soft) 100%)",
            borderRight: "1px solid var(--pascal-line)",
          }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "5px 12px", borderRadius: 999,
              background: "var(--pascal-paper-soft)", color: "var(--pascal-ink)",
              fontSize: 12, fontWeight: 600, alignSelf: "flex-start", marginBottom: 18,
            }}>
              For {s.label}
            </span>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: 28, fontWeight: 700, color: "var(--pascal-ink)",
              letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 18,
            }}>{s.title}</h3>
            <p style={{ fontSize: 16, color: "var(--pascal-fg-muted)", lineHeight: 1.6, marginBottom: 28 }}>{s.body}</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              {s.kpi.map((row, i) => (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  paddingBottom: 12,
                  borderBottom: i < s.kpi.length - 1 ? "1px solid var(--pascal-line)" : "none",
                }}>
                  <span style={{ fontSize: 14, color: "var(--pascal-fg-muted)" }}>{row.l}</span>
                  <span style={{ fontSize: 22, fontWeight: 700, color: "var(--pascal-ink)", letterSpacing: "-0.02em" }}>{row.v}</span>
                </div>
              ))}
            </div>

            <a href={SOLUTION_HREFS[s.key] || "#"} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "var(--pascal-accent)", fontSize: 15, fontWeight: 600,
              textDecoration: "none", paddingBottom: 6,
              borderBottom: "1px solid var(--pascal-accent)",
              alignSelf: "flex-start",
            }}>
              Learn more about {s.label}
            </a>
          </div>

          {/* Right visual */}
          <SolutionVisual kind={s.visual} />
        </div>
      </div>
    </section>
  );
};

const SolutionVisual = ({ kind }) => {
  const baseStyle = { padding: 36, background: "var(--pascal-paper-soft)", display: "flex", flexDirection: "column", justifyContent: "center", gap: 18 };

  if (kind === "hedge") {
    const ticks = [3,8,5,12,9,15,11,18,14,22,17,26,21,30];
    const max = Math.max(...ticks);
    return (
      <div style={baseStyle}>
        <div style={{ background: "var(--pascal-paper-card)", border: "1px solid var(--pascal-line)", borderRadius: 14, padding: 22 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 12, color: "var(--pascal-fg-muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Signal · NVDA</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "var(--pascal-ink)", letterSpacing: "-0.02em" }}>Conviction +14 bps</div>
            </div>
            <span style={{ padding: "6px 12px", borderRadius: 999, background: "var(--pascal-paper-soft)", color: "var(--pascal-ink)", fontSize: 12, fontWeight: 600 }}>LONG · High conf</span>
          </div>
          <svg viewBox="0 0 280 80" width="100%" height="80">
            <polyline fill="none" stroke="var(--pascal-ink)" strokeWidth="2" points={ticks.map((v,i) => `${(i/(ticks.length-1))*280},${80-(v/max)*70}`).join(" ")} />
            <polygon fill="rgba(0,0,0,0.06)" points={`0,80 ${ticks.map((v,i) => `${(i/(ticks.length-1))*280},${80-(v/max)*70}`).join(" ")} 280,80`} />
          </svg>
        </div>
        <div style={{ background: "var(--pascal-paper-card)", border: "1px solid var(--pascal-line)", borderRadius: 14, padding: 18, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 12, color: "var(--pascal-fg-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Drivers</div>
          {[{ l: "Earnings revisions", v: "+ ↑ 4 analysts" },{ l: "Insider transactions", v: "Net buy · $14M" },{ l: "Supply chain tone", v: "Improving" }].map(d => (
            <div key={d.l} style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
              <span style={{ color: "var(--pascal-ink)" }}>{d.l}</span>
              <span style={{ color: "var(--pascal-ink)", fontWeight: 600 }}>{d.v}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (kind === "pe") {
    return (
      <div style={baseStyle}>
        <div style={{ background: "var(--pascal-paper-card)", border: "1px solid var(--pascal-line)", borderRadius: 14, padding: 22 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "var(--pascal-ink)", marginBottom: 14 }}>CIM Diligence · Project Atlas</div>
          {[
            { l: "Revenue quality",        s: "Reviewed",    c: "var(--pascal-ink)", k: "check-circle-2" },
            { l: "Customer concentration", s: "1 flag",      c: "#D08A37",               k: "alert-triangle" },
            { l: "Contract terms",         s: "Reviewed",    c: "var(--pascal-ink)", k: "check-circle-2" },
            { l: "Working capital",        s: "Reviewed",    c: "var(--pascal-ink)", k: "check-circle-2" },
            { l: "Litigation",             s: "In progress", c: "var(--pascal-fg-muted)", k: "loader" },
          ].map(row => (
            <div key={row.l} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderTop: "1px solid var(--pascal-line)" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14 }}>
                <i data-lucide={row.k} style={{ width: 16, height: 16, color: row.c }}/>{row.l}
              </span>
              <span style={{ fontSize: 13, color: row.c, fontWeight: 600 }}>{row.s}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "var(--pascal-ink)", color: "#fff", borderRadius: 14, padding: 18, display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 36, fontWeight: 700, color: "var(--pascal-ink)", letterSpacing: "-0.02em" }}>4.2 hrs</span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>saved on this CIM · vs 18.5 hrs manual baseline</span>
        </div>
      </div>
    );
  }
  if (kind === "am") {
    return (
      <div style={baseStyle}>
        <div style={{ background: "var(--pascal-paper-card)", border: "1px solid var(--pascal-line)", borderRadius: 14, padding: 22 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <i data-lucide="file-text" style={{ width: 18, height: 18, color: "var(--pascal-ink)" }}/>
            <span style={{ fontWeight: 700 }}>Q3 IC Memo — Global Equity</span>
            <span style={{ marginLeft: "auto", fontSize: 11, padding: "3px 8px", background: "var(--pascal-paper-soft)", color: "var(--pascal-ink)", borderRadius: 999, fontWeight: 600 }}>Auto-draft</span>
          </div>
          <div style={{ fontSize: 13, color: "var(--pascal-fg-muted)", lineHeight: 1.7 }}>
            <p>The portfolio outperformed its benchmark by 240 bps in Q3, with positioning in semiconductors and select industrials driving the largest contribution<sup style={{ color: "var(--pascal-ink)" }}>[1]</sup>...</p>
          </div>
          <div style={{ marginTop: 12, display: "flex", gap: 6 }}>
            {["Performance","Attribution","Positioning","Outlook"].map((c,i) => (
              <span key={c} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 999, background: i === 0 ? "var(--pascal-ink)" : "var(--pascal-paper-soft)", color: i === 0 ? "#fff" : "var(--pascal-fg-muted)", fontWeight: 600 }}>{c}</span>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {[{ l: "Excess return", v: "+240 bps" },{ l: "Information ratio", v: "1.4" },{ l: "Active positions", v: "62" }].map(d => (
            <div key={d.l} style={{ background: "var(--pascal-paper-card)", border: "1px solid var(--pascal-line)", borderRadius: 12, padding: 12 }}>
              <div style={{ fontSize: 11, color: "var(--pascal-fg-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{d.l}</div>
              <div style={{ fontWeight: 700, fontSize: 18, marginTop: 4, color: "var(--pascal-ink)" }}>{d.v}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  // IB
  return (
    <div style={baseStyle}>
      <div style={{ background: "var(--pascal-paper-card)", border: "1px solid var(--pascal-line)", borderRadius: 14, padding: 22 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "var(--pascal-ink)", marginBottom: 14 }}>Comps · Software Infrastructure</div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
          <thead>
            <tr style={{ color: "var(--pascal-fg-muted)", textAlign: "left", letterSpacing: "0.04em" }}>
              <th style={{ padding: "6px 0", fontWeight: 500 }}>Ticker</th>
              <th style={{ padding: "6px 0", fontWeight: 500 }}>EV/Rev</th>
              <th style={{ padding: "6px 0", fontWeight: 500 }}>YoY</th>
              <th style={{ padding: "6px 0", fontWeight: 500 }}>Rule of 40</th>
            </tr>
          </thead>
          <tbody>
            {[["SNOW","13.4x","+29%","58"],["DDOG","12.0x","+25%","65"],["MDB","8.9x","+22%","51"],["NET","12.5x","+28%","48"],["CRWD","17.1x","+33%","72"]].map(row => (
              <tr key={row[0]} style={{ borderTop: "1px solid var(--pascal-line)" }}>
                <td style={{ padding: "8px 0", fontWeight: 700, color: "var(--pascal-ink)" }}>{row[0]}</td>
                <td style={{ padding: "8px 0", color: "var(--pascal-ink)" }}>{row[1]}</td>
                <td style={{ padding: "8px 0", color: "var(--pascal-ink)", fontWeight: 600 }}>{row[2]}</td>
                <td style={{ padding: "8px 0", color: "var(--pascal-ink)" }}>{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ background: "var(--pascal-paper-card)", border: "1px solid var(--pascal-line)", borderRadius: 14, padding: 18, display: "flex", alignItems: "center", gap: 12 }}>
        <i data-lucide="presentation" style={{ width: 22, height: 22, color: "var(--pascal-ink)" }}/>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Pitchbook · 42 slides · Project Atlas</div>
          <div style={{ fontSize: 12, color: "var(--pascal-fg-muted)" }}>Draft generated in 11 minutes · brand-approved template</div>
        </div>
        <span style={{ padding: "6px 12px", borderRadius: 999, background: "var(--pascal-paper-soft)", color: "var(--pascal-ink)", fontSize: 12, fontWeight: 600 }}>Ready</span>
      </div>
    </div>
  );
};

Object.assign(window, { Solutions });
