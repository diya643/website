// InvestmentBankingPage.jsx — Solutions: Investment Banking

/* ─── Light browser shell ─── */
const IBShell = ({ children, minH = 320 }) => (
  <div style={{
    borderRadius: 14, overflow: "hidden",
    border: "1px solid rgba(26,36,20,0.10)", background: "#fff",
    boxShadow: "0 24px 64px -16px rgba(26,36,20,0.15), 0 4px 12px -4px rgba(26,36,20,0.07)",
    minHeight: minH,
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "10px 16px", background: "#f5f4f2", borderBottom: "1px solid rgba(26,36,20,0.08)" }}>
      {["#FF5F57","#FFBD2E","#28C840"].map(c => <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, flex: "none" }} />)}
      <div style={{ flex: 1, height: 18, borderRadius: 4, background: "rgba(26,36,20,0.07)", marginLeft: 8 }} />
    </div>
    <div style={{ padding: 20 }}>{children}</div>
  </div>
);

/* ─── Hero visual: Trading Comps Table ─── */
const CompsHeroVisual = () => {
  const rows = [
    { tick: "SNOW", name: "Snowflake",    evRev: "13.4x", evEbitda: "45.2x", ntm: "+29%", margin: "31%", hi: true },
    { tick: "DDOG", name: "Datadog",      evRev: "12.0x", evEbitda: "38.7x", ntm: "+25%", margin: "28%", hi: false },
    { tick: "MDB",  name: "MongoDB",      evRev: "8.9x",  evEbitda: "29.1x", ntm: "+22%", margin: "26%", hi: false },
    { tick: "NET",  name: "Cloudflare",   evRev: "12.5x", evEbitda: "42.0x", ntm: "+28%", margin: "22%", hi: false },
    { tick: "CRWD", name: "CrowdStrike",  evRev: "17.1x", evEbitda: "52.3x", ntm: "+33%", margin: "35%", hi: true },
  ];
  const cols = ["Ticker", "Company", "EV / Rev", "EV / EBITDA", "NTM Rev", "Margin"];
  return (
    <IBShell minH={420}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--pascal-ink)" }}>Trading Comps · Software Infrastructure</div>
          <div style={{ fontSize: 11, color: "var(--pascal-fg-muted)", marginTop: 2 }}>Sources: Bloomberg · FactSet · Last updated 2 min ago</div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ padding: "3px 10px", borderRadius: 999, fontSize: 10.5, fontWeight: 600, background: "rgba(81,152,114,0.10)", color: "var(--pascal-emerald)", border: "1px solid rgba(81,152,114,0.25)", cursor: "pointer" }}>↻ Refresh</span>
          <span style={{ padding: "3px 10px", borderRadius: 999, fontSize: 10.5, fontWeight: 600, background: "var(--pascal-paper-soft)", color: "var(--pascal-fg-muted)", border: "1px solid var(--pascal-line)", cursor: "pointer" }}>Export ↑</span>
        </div>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
        <thead>
          <tr style={{ background: "var(--pascal-paper-soft)" }}>
            {cols.map(c => (
              <th key={c} style={{ padding: "7px 8px", fontWeight: 600, color: "var(--pascal-fg-muted)", textAlign: c === "Company" ? "left" : "right", fontSize: 10.5, letterSpacing: "0.04em", borderBottom: "1px solid var(--pascal-line)" }}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.tick} style={{ background: r.hi ? "rgba(81,152,114,0.04)" : "transparent" }}>
              <td style={{ padding: "8px 8px", fontWeight: 700, color: "var(--pascal-emerald)", borderBottom: "1px solid var(--pascal-line)", textAlign: "right" }}>{r.tick}</td>
              <td style={{ padding: "8px 8px", color: "var(--pascal-ink)", borderBottom: "1px solid var(--pascal-line)", textAlign: "left" }}>{r.name}</td>
              <td style={{ padding: "8px 8px", color: "var(--pascal-ink)", borderBottom: "1px solid var(--pascal-line)", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{r.evRev}</td>
              <td style={{ padding: "8px 8px", color: "var(--pascal-ink)", borderBottom: "1px solid var(--pascal-line)", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{r.evEbitda}</td>
              <td style={{ padding: "8px 8px", color: "#16a34a", fontWeight: 600, borderBottom: "1px solid var(--pascal-line)", textAlign: "right" }}>{r.ntm}</td>
              <td style={{ padding: "8px 8px", color: "var(--pascal-ink)", borderBottom: "1px solid var(--pascal-line)", textAlign: "right" }}>{r.margin}</td>
            </tr>
          ))}
          <tr style={{ background: "var(--pascal-paper-soft)" }}>
            <td colSpan={2} style={{ padding: "7px 8px", fontWeight: 700, fontSize: 11, color: "var(--pascal-fg-muted)", letterSpacing: "0.06em" }}>MEAN</td>
            <td style={{ padding: "7px 8px", fontWeight: 700, color: "var(--pascal-emerald)", textAlign: "right" }}>12.8x</td>
            <td style={{ padding: "7px 8px", fontWeight: 700, color: "var(--pascal-emerald)", textAlign: "right" }}>41.5x</td>
            <td style={{ padding: "7px 8px", fontWeight: 700, color: "var(--pascal-emerald)", textAlign: "right" }}>+27%</td>
            <td style={{ padding: "7px 8px", fontWeight: 700, color: "var(--pascal-emerald)", textAlign: "right" }}>28%</td>
          </tr>
        </tbody>
      </table>
      <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 10, color: "var(--pascal-fg-muted)" }}>Auto-cited ·</span>
        <span style={{ fontSize: 10, fontWeight: 600, color: "var(--pascal-emerald)" }}>14 sources</span>
        <span style={{ fontSize: 10, color: "var(--pascal-fg-muted)" }}>· Every cell linked to filing</span>
      </div>
    </IBShell>
  );
};

/* ═══════════════ SECTION 1: HERO ═══════════════ */
const IBHero = () => (
  <section style={{ position: "relative", overflow: "hidden", background: "var(--pascal-dark)", padding: "100px 0 0" }}>
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0,
      backgroundImage: ["linear-gradient(rgba(81,152,114,0.04) 1px, transparent 1px)", "linear-gradient(90deg, rgba(81,152,114,0.04) 1px, transparent 1px)"].join(", "),
      backgroundSize: "72px 72px",
    }} />
    <div className="container" style={{ position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div style={{ paddingBottom: 80 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 11.5, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--pascal-emerald)", marginBottom: 24 }}>
            <span style={{ width: 20, height: 1, background: "var(--pascal-emerald)" }} />
            Solutions · Investment Banking
          </span>
          <h1 style={{ fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--pascal-dark-text)", lineHeight: 1.08, marginBottom: 24 }}>
            Pascal AI for<br /><span style={{ color: "var(--pascal-emerald)" }}>Investment Banking</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.72, color: "var(--pascal-dark-muted)", maxWidth: 520, width: "100%", marginBottom: 36 }}>
            Accelerate pitch creation, compress comparable analysis, and embed source-cited intelligence inside every coverage workflow — with agentic AI built for the realities of M&A advisory, ECM, DCM, and equity research.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="demo.html" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 28px", borderRadius: 999,
              background: "var(--pascal-emerald)", color: "#fff",
              fontSize: 15, fontWeight: 600, textDecoration: "none",
              transition: "all 180ms ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}>
              Watch a Demo
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M3 7 L11 7 M7 3 L11 7 L7 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="product.html" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 28px", borderRadius: 999,
              border: "1px solid rgba(228,237,216,0.25)", color: "var(--pascal-dark-text)",
              fontSize: 15, fontWeight: 500, textDecoration: "none",
              transition: "all 180ms ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(81,152,114,0.5)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(228,237,216,0.25)"; }}>
              Explore the Platform
            </a>
          </div>
        </div>
        <div style={{ paddingBottom: 40 }}>
          <CompsHeroVisual />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════ SECTION 2: AGENT CAROUSEL ═══════════════ */

const PitchBuilderVis = () => (
  <IBShell>
    <div style={{ display: "flex", gap: 12, height: 280 }}>
      {/* Slide list sidebar */}
      <div style={{ width: 80, display: "flex", flexDirection: "column", gap: 5, flex: "none" }}>
        {[
          { label: "Exec Summary", active: true },
          { label: "Transaction Rationale", active: false },
          { label: "Valuation", active: false },
          { label: "Comps", active: false },
          { label: "Credentials", active: false },
        ].map((s, i) => (
          <div key={s.label} style={{
            padding: "6px 7px", borderRadius: 5, cursor: "pointer",
            background: s.active ? "var(--pascal-mint)" : "var(--pascal-paper-soft)",
            border: `1px solid ${s.active ? "rgba(81,152,114,0.3)" : "var(--pascal-line)"}`,
          }}>
            <div style={{ width: "100%", height: 28, borderRadius: 3, background: s.active ? "rgba(81,152,114,0.15)" : "var(--pascal-line)", marginBottom: 4 }} />
            <div style={{ fontSize: 8.5, color: s.active ? "var(--pascal-emerald)" : "var(--pascal-fg-muted)", fontWeight: s.active ? 600 : 400, lineHeight: 1.2 }}>{s.label}</div>
          </div>
        ))}
      </div>
      {/* Main slide preview */}
      <div style={{ flex: 1, borderRadius: 8, border: "1px solid var(--pascal-line)", padding: "14px 16px", background: "#fafaf9", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 3 }}>Project Thunder · Confidential</div>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: "var(--pascal-ink)", lineHeight: 1.2 }}>Executive Summary</div>
          </div>
          <span style={{ padding: "2px 7px", borderRadius: 999, fontSize: 9.5, fontWeight: 600, background: "rgba(81,152,114,0.10)", color: "var(--pascal-emerald)", border: "1px solid rgba(81,152,114,0.2)" }}>Auto-draft</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {[["Transaction Value", "$2.4B"], ["EV / EBITDA", "14.2x"], ["Premium to 30D VWAP", "38%"]].map(([k, v]) => (
            <div key={k} style={{ flex: 1, padding: "8px 10px", borderRadius: 6, background: "#fff", border: "1px solid var(--pascal-line)" }}>
              <div style={{ fontSize: 8.5, color: "var(--pascal-fg-muted)", letterSpacing: "0.04em" }}>{k}</div>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--pascal-emerald)", marginTop: 2 }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
          {[
            { label: "Transaction Rationale", body: "Compelling strategic fit with target's leading healthcare IT distribution..." },
            { label: "Key Catalysts", body: "Synergy realization of $120M+ by Year 3 · Accelerated international expansion" },
          ].map(s => (
            <div key={s.label} style={{ padding: "7px 9px", borderRadius: 6, background: "#fff", border: "1px solid var(--pascal-line)" }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: "var(--pascal-fg-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 3 }}>{s.label}</div>
              <div style={{ fontSize: 10.5, color: "var(--pascal-ink)", lineHeight: 1.5 }}>{s.body}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ fontSize: 9.5, color: "var(--pascal-fg-muted)" }}>Built on house template ·</span>
          <span style={{ fontSize: 9.5, fontWeight: 600, color: "var(--pascal-emerald)" }}>22 sources</span>
        </div>
      </div>
    </div>
  </IBShell>
);

const IBCompsVis = () => {
  const rows = [
    { tick: "SNOW", name: "Snowflake",   evRev: "13.4x", evEb: "45.2x", ntm: "+29%", margin: "31%", premium: "38%" },
    { tick: "DDOG", name: "Datadog",     evRev: "12.0x", evEb: "38.7x", ntm: "+25%", margin: "28%", premium: "31%" },
    { tick: "MDB",  name: "MongoDB",     evRev: "8.9x",  evEb: "29.1x", ntm: "+22%", margin: "26%", premium: "24%" },
    { tick: "CRWD", name: "CrowdStrike", evRev: "17.1x", evEb: "52.3x", ntm: "+33%", margin: "35%", premium: "44%" },
  ];
  return (
    <IBShell>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div style={{ fontSize: 11.5, fontWeight: 700, color: "var(--pascal-ink)" }}>Agentic Table · Precedent Transactions</div>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ padding: "2px 8px", borderRadius: 999, fontSize: 10, fontWeight: 600, background: "rgba(81,152,114,0.10)", color: "var(--pascal-emerald)", border: "1px solid rgba(81,152,114,0.2)" }}>+ Add Column</span>
          <span style={{ padding: "2px 8px", borderRadius: 999, fontSize: 10, fontWeight: 600, background: "var(--pascal-paper-soft)", color: "var(--pascal-fg-muted)", border: "1px solid var(--pascal-line)" }}>Export ↑</span>
        </div>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5 }}>
        <thead>
          <tr style={{ background: "var(--pascal-paper-soft)" }}>
            {["Ticker", "Company", "EV/Rev", "EV/EBITDA", "NTM Rev", "Margin", "Premium"].map(c => (
              <th key={c} style={{ padding: "6px 7px", fontWeight: 600, color: "var(--pascal-fg-muted)", textAlign: c === "Company" ? "left" : "right", fontSize: 10, letterSpacing: "0.04em", borderBottom: "1px solid var(--pascal-line)" }}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.tick}>
              <td style={{ padding: "7px 7px", fontWeight: 700, color: "var(--pascal-emerald)", borderBottom: "1px solid var(--pascal-line)", textAlign: "right" }}>{r.tick}</td>
              <td style={{ padding: "7px 7px", color: "var(--pascal-ink)", borderBottom: "1px solid var(--pascal-line)" }}>{r.name}</td>
              <td style={{ padding: "7px 7px", color: "var(--pascal-ink)", borderBottom: "1px solid var(--pascal-line)", textAlign: "right" }}>{r.evRev}</td>
              <td style={{ padding: "7px 7px", color: "var(--pascal-ink)", borderBottom: "1px solid var(--pascal-line)", textAlign: "right" }}>{r.evEb}</td>
              <td style={{ padding: "7px 7px", color: "#16a34a", fontWeight: 600, borderBottom: "1px solid var(--pascal-line)", textAlign: "right" }}>{r.ntm}</td>
              <td style={{ padding: "7px 7px", color: "var(--pascal-ink)", borderBottom: "1px solid var(--pascal-line)", textAlign: "right" }}>{r.margin}</td>
              <td style={{ padding: "7px 7px", color: "var(--pascal-ink)", fontWeight: 600, borderBottom: "1px solid var(--pascal-line)", textAlign: "right" }}>{r.premium}</td>
            </tr>
          ))}
          <tr style={{ background: "var(--pascal-paper-soft)" }}>
            <td colSpan={2} style={{ padding: "6px 7px", fontWeight: 700, fontSize: 10, color: "var(--pascal-fg-muted)", letterSpacing: "0.06em" }}>MEAN</td>
            <td style={{ padding: "6px 7px", fontWeight: 700, color: "var(--pascal-emerald)", textAlign: "right" }}>12.9x</td>
            <td style={{ padding: "6px 7px", fontWeight: 700, color: "var(--pascal-emerald)", textAlign: "right" }}>41.3x</td>
            <td style={{ padding: "6px 7px", fontWeight: 700, color: "var(--pascal-emerald)", textAlign: "right" }}>+27%</td>
            <td style={{ padding: "6px 7px", fontWeight: 700, color: "var(--pascal-emerald)", textAlign: "right" }}>30%</td>
            <td style={{ padding: "6px 7px", fontWeight: 700, color: "var(--pascal-emerald)", textAlign: "right" }}>34%</td>
          </tr>
        </tbody>
      </table>
      <div style={{ marginTop: 8, display: "flex", gap: 5 }}>
        <span style={{ fontSize: 9.5, color: "var(--pascal-fg-muted)" }}>Every cell cited ·</span>
        <span style={{ fontSize: 9.5, fontWeight: 600, color: "var(--pascal-emerald)" }}>18 sources</span>
        <span style={{ fontSize: 9.5, color: "var(--pascal-fg-muted)" }}>· Auto-refreshes on earnings</span>
      </div>
    </IBShell>
  );
};

const EquityResearchVis = () => (
  <IBShell>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "var(--pascal-ink)" }}>Equity Research Memo — Cloudflare (NET)</div>
      <span style={{ padding: "3px 10px", borderRadius: 999, fontSize: 10.5, fontWeight: 600, background: "rgba(81,152,114,0.10)", color: "var(--pascal-emerald)", border: "1px solid rgba(81,152,114,0.25)" }}>Export ↑</span>
    </div>
    <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
      {["10-K FY24", "Earnings Call Q4", "Sector Report"].map(s => (
        <span key={s} style={{ padding: "2px 8px", borderRadius: 999, fontSize: 10.5, background: "var(--pascal-mint)", color: "var(--pascal-emerald)", border: "1px solid rgba(81,152,114,0.2)" }}>{s}</span>
      ))}
    </div>
    {[
      { label: "Investment Thesis", body: "Platform expansion into SASE and Zero Trust continues to drive high NRR of 126%. Land-and-expand motion across Fortune 500 customers supports durable 25%+ revenue growth..." },
      { label: "Key Financials (FY24)", body: null },
      { label: "Risks", body: "SASE market intensifying (Zscaler, Palo Alto) · Macro-driven SMB churn · FX headwinds on international expansion" },
    ].map(({ label, body }) => (
      <div key={label} style={{ padding: "9px 0", borderBottom: "1px solid var(--pascal-line)" }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: "var(--pascal-fg-muted)", marginBottom: 5, letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}</div>
        {body ? (
          <div style={{ fontSize: 12, color: "var(--pascal-ink)", lineHeight: 1.6 }}>{body}</div>
        ) : (
          <div style={{ display: "flex", gap: 8 }}>
            {[["Revenue", "$1.62B"], ["NTM Rev", "+28%"], ["NRR", "126%"]].map(([k, v]) => (
              <div key={k} style={{ flex: 1, padding: "7px 9px", borderRadius: 6, background: "var(--pascal-paper-soft)", border: "1px solid var(--pascal-line)" }}>
                <div style={{ fontSize: 9.5, color: "var(--pascal-fg-muted)" }}>{k}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--pascal-emerald)" }}>{v}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
    <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 8 }}>
      <span style={{ fontSize: 10, color: "var(--pascal-fg-muted)" }}>Every claim cited ·</span>
      <span style={{ fontSize: 10, color: "var(--pascal-emerald)", fontWeight: 600 }}>17 sources</span>
    </div>
  </IBShell>
);

const IBCustomWFVis = () => (
  <IBShell>
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 12 }}>Workflow Builder</div>
    <div style={{ position: "relative", padding: "10px 0" }}>
      {[
        { icon: "📡", label: "Data Fetch",         sub: "Bloomberg + FactSet + CIQ", color: "#3B82F6" },
        { icon: "📊", label: "Comps Builder",       sub: "Multiples + deal premiums", color: "var(--pascal-emerald)" },
        { icon: "📑", label: "Pitch Deck Draft",    sub: "On house template",          color: "#8B5CF6" },
        { icon: "✅", label: "Compliance Review",   sub: "Chinese-wall + auto-cite",   color: "#F59E0B" },
      ].map((step, i) => (
        <div key={step.label}>
          <div style={{
            display: "flex", alignItems: "center", gap: 12, padding: "10px 14px",
            borderRadius: 10, background: "var(--pascal-paper-soft)",
            border: "1px solid var(--pascal-line)",
          }}>
            <span style={{ width: 34, height: 34, borderRadius: 8, background: step.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flex: "none" }}>{step.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--pascal-ink)" }}>{step.label}</div>
              <div style={{ fontSize: 11, color: "var(--pascal-fg-muted)" }}>{step.sub}</div>
            </div>
            <span style={{ fontSize: 10.5, color: "var(--pascal-fg-muted)", fontWeight: 600 }}>Step {i + 1}</span>
          </div>
          {i < 3 && (
            <div style={{ display: "flex", justifyContent: "center", padding: "4px 0" }}>
              <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
                <path d="M6 2 L6 12" stroke="rgba(81,152,114,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3 10 L6 14 L9 10" stroke="rgba(81,152,114,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  </IBShell>
);

const IB_CAROUSEL_TABS = [
  {
    id: "pitch", label: "Pitch Builder",
    headline: "Pitch Builder",
    body: "Cut pitch turnaround by up to 70%. Ingests prior decks, sector positioning, and live market data to draft tailored pitchbooks — company overviews, transaction rationale, comparable transactions, valuation footballs, and credentials slides. Every page built on your house template.",
    Visual: PitchBuilderVis,
  },
  {
    id: "comps", label: "Comparable Analysis",
    headline: "Comparable Analysis",
    body: "Build trading comps and precedent transactions in minutes. Pascal extracts financials, multiples, and deal terms from filings, S-1s, and merger proxies — populating your house template with citations on every cell.",
    Visual: IBCompsVis,
  },
  {
    id: "research", label: "Equity Research Memo",
    headline: "Equity Research Memo",
    body: "Compress research note production from days to hours. Pulls filings, management commentary, and sector data into structured initiation reports and thematic notes on your firm's template. Every claim cited to source.",
    Visual: EquityResearchVis,
  },
  {
    id: "custom", label: "Build Custom Workflows",
    headline: "Build Custom Workflows",
    body: "Design and automate workflows tailored to your coverage team. Connect to Bloomberg, FactSet, S&P Capital IQ, Refinitiv, and your CRM. Run end-to-end coverage workflows with sovereign deployment and full auditability.",
    Visual: IBCustomWFVis,
  },
];

const IBAgentCarousel = () => {
  const [active, setActive] = React.useState(0);
  const tab = IB_CAROUSEL_TABS[active];
  const Visual = tab.Visual;
  return (
    <section style={{ padding: "100px 0 120px", background: "#fff", borderTop: "1px solid var(--pascal-line)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 14 }}>Recommended Agents</span>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-ink)", lineHeight: 1.1 }}>
            The agents your coverage team needs, ready on day one.
          </h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 52, flexWrap: "wrap" }}>
          {IB_CAROUSEL_TABS.map((t, i) => (
            <button key={t.id} onClick={() => setActive(i)} style={{
              padding: "8px 20px", borderRadius: 999, border: "none", fontFamily: "inherit",
              background: active === i ? "var(--pascal-emerald)" : "var(--pascal-paper-soft)",
              color: active === i ? "#fff" : "var(--pascal-fg-muted)",
              fontSize: 13.5, fontWeight: active === i ? 600 : 500,
              cursor: "pointer", transition: "all 180ms ease",
              boxShadow: active === i ? "0 4px 14px -4px rgba(81,152,114,0.4)" : "none",
            }}>{t.label}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "center" }}>
          <div>
            <h3 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.025em", color: "var(--pascal-ink)", lineHeight: 1.1, marginBottom: 20 }}>{tab.headline}</h3>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--pascal-fg-muted)", maxWidth: 480, width: "100%", marginBottom: 28 }}>{tab.body}</p>
            <a href="demo.html" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "var(--pascal-emerald)", textDecoration: "none" }}>
              Learn More →
            </a>
          </div>
          <Visual />
        </div>
      </div>
    </section>
  );
};

/* ═══════════════ SECTION 3: SDK ═══════════════ */
const IBSDKSection = () => (
  <section style={{ padding: "100px 0 120px", background: "var(--pascal-dark)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 64, alignItems: "center" }}>
        <div>
          <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 18 }}>Developer Toolkit</span>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-dark-text)", lineHeight: 1.1, marginBottom: 18 }}>
            Build Your Own Agents with the Pascal SDK
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.72, color: "var(--pascal-dark-muted)", marginBottom: 32, width: "100%" }}>
            Use the Pascal SDK to co-develop agents tailored to your bank's exact coverage and deal workflows.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
            {[
              { label: "Full Customization", body: "Access Python and TypeScript SDKs to build on the Cognitive Engine." },
              { label: "Enterprise Integration", body: "Plug into CRM, deal management systems, and pitch repositories." },
              { label: "Production-Grade Document Handling", body: "Reason over S-1s, merger proxies, and complex financial models." },
              { label: "Developer-Friendly, Sovereign-Ready", body: "Chinese-wall enforcement and zero data retention by default." },
            ].map(({ label, body }) => (
              <div key={label} style={{ display: "flex", gap: 12 }}>
                <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(81,152,114,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none", marginTop: 2 }}>
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M1.5 4.5 L3.5 6.5 L7.5 2.5" stroke="var(--pascal-emerald)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "var(--pascal-dark-text)" }}>{label}</span>
                  <span style={{ fontSize: 14, color: "var(--pascal-dark-muted)" }}> — {body}</span>
                </div>
              </div>
            ))}
          </div>
          <a href="demo.html" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "11px 24px", borderRadius: 999,
            background: "var(--pascal-emerald)", color: "#fff",
            fontSize: 14, fontWeight: 600, textDecoration: "none",
            transition: "all 180ms ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}>
            Watch a Demo
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M3 7 L11 7 M7 3 L11 7 L7 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#1e1e2e", boxShadow: "0 28px 72px -18px rgba(0,0,0,0.5)", fontFamily: "Menlo, Monaco, 'Courier New', monospace" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "10px 16px", background: "#181825", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            {["#FF5F57","#FFBD2E","#28C840"].map(c => <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, flex: "none" }} />)}
            <span style={{ marginLeft: 10, padding: "3px 14px", borderRadius: 5, background: "#1e1e2e", fontSize: 11.5, color: "rgba(255,255,255,0.45)" }}>pascal_sdk.py</span>
          </div>
          <div style={{ padding: "20px 24px", fontSize: 13, lineHeight: 1.75 }}>
            {[
              { t: [["from ", "#C792EA"], ["pascal ", "#EEFFFF"], ["import ", "#C792EA"], ["Pascal", "#FFCB6B"]] },
              { t: [["import ", "#C792EA"], ["os", "#EEFFFF"]] },
              { t: [] },
              { t: [["# Initialize Pascal client", "#546E7A"]] },
              { t: [["pascal", "#EEFFFF"], [" = ", "#89DDFF"], ["Pascal", "#FFCB6B"], ["(", "#89DDFF"]] },
              { t: [["    org_id", "#EEFFFF"], ["=", "#89DDFF"], ['"org_5f2b1c9a_demo"', "#C3E88D"], [",", "#EEFFFF"]] },
              { t: [["    api_token", "#EEFFFF"], ["=", "#89DDFF"], ['"tok_demo_pk_abc123DEF456ghi789"', "#C3E88D"]] },
              { t: [[")", "#89DDFF"]] },
              { t: [] },
              { t: [["# Run Comparable Analysis Agent", "#546E7A"]] },
              { t: [["response", "#EEFFFF"], [" = ", "#89DDFF"], ["pascal", "#EEFFFF"], [".", "#89DDFF"], ["agents", "#EEFFFF"], [".", "#89DDFF"], ["run", "#82AAFF"], ["({", "#89DDFF"]] },
              { t: [['    "agentId"', "#C3E88D"], [": ", "#89DDFF"], ['"comparable-analysis"', "#C3E88D"], [",", "#EEFFFF"]] },
              { t: [['    "sector"', "#C3E88D"], [": ", "#89DDFF"], ['"software-infrastructure"', "#C3E88D"], [",", "#EEFFFF"]] },
              { t: [['    "template"', "#C3E88D"], [": ", "#89DDFF"], ['"house-comps-v3"', "#C3E88D"]] },
              { t: [["})", "#89DDFF"]] },
              { t: [["print", "#82AAFF"], ["(", "#89DDFF"], ["response", "#EEFFFF"], [")", "#89DDFF"]] },
            ].map((line, i) => (
              <div key={i} style={{ display: "flex" }}>
                <span style={{ minWidth: 32, color: "rgba(255,255,255,0.18)", textAlign: "right", paddingRight: 16, userSelect: "none" }}>{i + 1}</span>
                <span style={{ whiteSpace: "pre" }}>{line.t.map(([text, color], j) => <span key={j} style={{ color }}>{text}</span>)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════ SECTION 5: TESTIMONIAL ═══════════════ */
const IBTestimonial = () => (
  <section style={{ position: "relative", overflow: "hidden", padding: "100px 0", background: "var(--pascal-dark)" }}>
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0,
      background: "radial-gradient(900px 600px at 50% 50%, rgba(81,152,114,0.07), transparent 65%)",
    }} />
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0,
      backgroundImage: ["linear-gradient(rgba(81,152,114,0.03) 1px, transparent 1px)", "linear-gradient(90deg, rgba(81,152,114,0.03) 1px, transparent 1px)"].join(", "),
      backgroundSize: "72px 72px",
    }} />
    <div className="container" style={{ position: "relative", maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
      <div style={{ fontSize: 48, color: "var(--pascal-emerald)", opacity: 0.5, lineHeight: 1, marginBottom: 28, fontFamily: "Georgia, serif" }}>"</div>
      <h3 style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--pascal-dark-text)", marginBottom: 28, lineHeight: 1.2 }}>
        Redefining Coverage and Execution in Investment Banking
      </h3>
      <blockquote style={{
        fontSize: "clamp(16px, 1.8vw, 20px)", lineHeight: 1.75,
        color: "var(--pascal-dark-text)", fontStyle: "italic",
        letterSpacing: "-0.01em", marginBottom: 40, fontWeight: 400,
      }}>
        "Pascal gave us a platform we could shape to our coverage process — sitting inside our perimeter, citing every output to source, and integrating with the systems our bankers already run on. It meets our security and chinese-wall requirements."
      </blockquote>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div style={{ width: 48, height: 1, background: "rgba(81,152,114,0.4)" }} />
        <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--pascal-dark-text)" }}>Head of Equity Research &amp; Technology</div>
        <div style={{ fontSize: 12.5, color: "var(--pascal-dark-muted)" }}>Leading Global Investment Bank</div>
      </div>
    </div>
  </section>
);

/* ═══════════════ SECTION 6: INTEGRATIONS ═══════════════ */
const IB_INTEGRATIONS = [
  { name: "Bloomberg",      abbr: "BB",  color: "#FF6600" },
  { name: "FactSet",        abbr: "FS",  color: "#FF0015" },
  { name: "S&P Capital IQ", abbr: "CIQ", color: "#003087" },
  { name: "Refinitiv",      abbr: "REF", color: "#ED1C24" },
  { name: "SharePoint",     img: "https://cdn.simpleicons.org/microsoftsharepoint/0078D4" },
  { name: "Salesforce",     img: "https://cdn.simpleicons.org/salesforce/00A1E0" },
  { name: "DealCloud",      abbr: "DC",  color: "#1A4F8A" },
  { name: "Teams",          img: "https://cdn.simpleicons.org/microsoftteams/6264D0" },
  { name: "Outlook",        img: "https://cdn.simpleicons.org/microsoftoutlook/0078D4" },
  { name: "PowerPoint",     img: "https://cdn.simpleicons.org/microsoftpowerpoint/D24726" },
  { name: "Excel",          img: "https://cdn.simpleicons.org/microsoftexcel/217346" },
];

const IBIntegrations = () => (
  <section style={{ padding: "80px 0 100px", background: "#fff", borderTop: "1px solid var(--pascal-line)" }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 52 }}>
        <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 14 }}>Integrations</span>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-ink)", lineHeight: 1.1, marginBottom: 14 }}>Connect to the Stack You Already Run On</h2>
        <p style={{ fontSize: 15.5, color: "var(--pascal-fg-muted)", maxWidth: 520, width: "100%", margin: "0 auto" }}>
          Pascal connects to the data subscriptions, systems, and productivity tools your coverage teams run every day.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, maxWidth: 760, margin: "0 auto 36px" }}>
        {IB_INTEGRATIONS.map(item => (
          <div key={item.name} style={{
            display: "flex", alignItems: "center", gap: 10, padding: "14px 16px",
            borderRadius: 12, border: "1px solid var(--pascal-line)",
            background: "var(--pascal-paper-soft)",
          }}>
            {item.img ? (
              <img src={item.img} alt={item.name} style={{ width: 20, height: 20, objectFit: "contain", flex: "none" }} onError={(e) => { e.target.style.display = "none"; }} />
            ) : (
              <span style={{ width: 22, height: 22, borderRadius: 4, background: item.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7.5, fontWeight: 700, color: "#fff", flex: "none", letterSpacing: "0.02em" }}>{item.abbr}</span>
            )}
            <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--pascal-ink)", lineHeight: 1.2 }}>{item.name}</span>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="product.html#mcp-connectors" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "var(--pascal-emerald)", textDecoration: "none" }}>
          See All Integrations →
        </a>
      </div>
    </div>
  </section>
);

/* ═══════════════ SECTION 7: WHY PASCAL ═══════════════ */
const IBWhyPascal = () => (
  <section style={{ padding: "100px 0 120px", background: "var(--pascal-dark)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 14 }}>Why Pascal</span>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-dark-text)", lineHeight: 1.1 }}>
          Why Top Investment Banks Choose Pascal
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 56 }}>
        {[
          { icon: "🛡️", title: "Sovereignty", body: "Deal data and pitch IP never leave your perimeter. Chinese-wall enforcement built into the permission layer — deal teams only see what they're cleared for." },
          { icon: "📋", title: "Accuracy", body: "Every output cites its source — filing page, transcript line, or prior pitch slide. Built for compliance review and internal audit from day one." },
          { icon: "🤝", title: "Partnership", body: "We co-develop agents for your specific strategy and deal execution reality — integrating with your coverage workflows, house templates, and systems." },
        ].map(pillar => (
          <div key={pillar.title} style={{
            padding: "36px 32px", borderRadius: 16,
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
          }}>
            <div style={{ fontSize: 32, marginBottom: 18 }}>{pillar.icon}</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--pascal-dark-text)", letterSpacing: "-0.02em", marginBottom: 12 }}>{pillar.title}</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.72, color: "var(--pascal-dark-muted)", margin: 0, width: "100%" }}>{pillar.body}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="demo.html" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "13px 32px", borderRadius: 999,
          border: "1px solid rgba(81,152,114,0.45)", color: "var(--pascal-emerald)",
          fontSize: 14.5, fontWeight: 600, textDecoration: "none",
          transition: "all 180ms ease",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "var(--pascal-emerald)"; e.currentTarget.style.color = "#fff"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--pascal-emerald)"; }}>
          Contact Us
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M3 11 L11 3 M5 3 L11 3 L11 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
);

/* ═══════════════ SECTION 8: FINAL CTA ═══════════════ */
const IBFinalCTA = () => (
  <section style={{
    padding: "72px 0",
    background: "linear-gradient(135deg, var(--pascal-dark) 0%, #0d1e0d 50%, var(--pascal-dark) 100%)",
    borderTop: "1px solid rgba(81,152,114,0.15)",
    position: "relative", overflow: "hidden",
  }}>
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(700px 400px at 50% 50%, rgba(81,152,114,0.10), transparent 65%)" }} />
    <div className="container" style={{ position: "relative", textAlign: "center" }}>
      <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-dark-text)", lineHeight: 1.15, marginBottom: 28 }}>
        Talk to a Pascal expert about your bank's<br />coverage and execution workflows.
      </h2>
      <a href="demo.html" style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "14px 36px", borderRadius: 999,
        background: "var(--pascal-emerald)", color: "#fff",
        fontSize: 15, fontWeight: 600, textDecoration: "none",
        boxShadow: "0 8px 32px -8px rgba(81,152,114,0.5)",
        transition: "all 180ms ease",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 36px -8px rgba(81,152,114,0.5)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px -8px rgba(81,152,114,0.5)"; }}>
        Watch a Demo
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <path d="M3 7 L11 7 M7 3 L11 7 L7 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  </section>
);

/* ─── Full page ─── */
const InvestmentBankingPage = () => {
  React.useEffect(() => {
    const tick = () => window.lucide && window.lucide.createIcons();
    tick();
    const id = setInterval(tick, 400);
    return () => clearInterval(id);
  }, []);
  return (
    <React.Fragment>
      <Nav />
      <IBHero />
      <IBAgentCarousel />
      <IBSDKSection />
      <IBTestimonial />
      <IBIntegrations />
      <IBWhyPascal />
      <IBFinalCTA />
      <Footer />
    </React.Fragment>
  );
};

Object.assign(window, { InvestmentBankingPage });
