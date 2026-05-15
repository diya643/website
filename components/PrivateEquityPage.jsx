// PrivateEquityPage.jsx — Solutions: Private Markets

/* ─── Light browser shell ─── */
const PEShell = ({ children, minH = 320 }) => (
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

/* ─── Hero visual: Deal Room Dossier ─── */
const DealRoomVisual = () => (
  <PEShell minH={440}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--pascal-ink)" }}>Project Atlas · Due Diligence</div>
        <div style={{ fontSize: 11, color: "var(--pascal-fg-muted)", marginTop: 2 }}>Target: SaaS Co. — Healthcare IT · Series C</div>
      </div>
      <span style={{ padding: "3px 10px", borderRadius: 999, fontSize: 10.5, fontWeight: 600, background: "rgba(245,158,11,0.10)", color: "#d97706", border: "1px solid rgba(245,158,11,0.25)" }}>In Progress</span>
    </div>

    <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
      {["CIM_v3.pdf", "Financials_FY24", "Contracts ×12"].map(s => (
        <span key={s} style={{ padding: "2px 8px", borderRadius: 999, fontSize: 10.5, background: "var(--pascal-mint)", color: "var(--pascal-emerald)", border: "1px solid rgba(81,152,114,0.2)" }}>{s}</span>
      ))}
    </div>

    {[
      { l: "Revenue quality",        s: "Reviewed",    c: "var(--pascal-emerald)", k: "check-circle-2" },
      { l: "Customer concentration", s: "1 flag",      c: "#d97706",              k: "alert-triangle" },
      { l: "Contract terms",         s: "Reviewed",    c: "var(--pascal-emerald)", k: "check-circle-2" },
      { l: "Working capital",        s: "Reviewed",    c: "var(--pascal-emerald)", k: "check-circle-2" },
      { l: "IP / Patents",           s: "In progress", c: "var(--pascal-fg-muted)", k: "loader" },
      { l: "Litigation",             s: "Reviewed",    c: "var(--pascal-emerald)", k: "check-circle-2" },
    ].map(row => (
      <div key={row.l} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid var(--pascal-line)" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--pascal-ink)" }}>
          <i data-lucide={row.k} style={{ width: 14, height: 14, color: row.c, flex: "none" }}/>
          {row.l}
        </span>
        <span style={{ fontSize: 12, fontWeight: 600, color: row.c }}>{row.s}</span>
      </div>
    ))}

    <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 8, background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.2)" }}>
      <div style={{ fontSize: 11.5, fontWeight: 600, color: "#d97706", marginBottom: 3 }}>⚠ Risk Flag: Customer Concentration</div>
      <div style={{ fontSize: 11.5, color: "var(--pascal-fg-muted)" }}>Top-3 customers = 68% of ARR. Request customer contracts before IC.</div>
    </div>

    <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 8, background: "var(--pascal-ink)" }}>
      <span style={{ fontSize: 20, fontWeight: 700, color: "var(--pascal-emerald)", letterSpacing: "-0.02em" }}>4.2 hrs</span>
      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>saved · vs 18.5 hrs manual baseline</span>
    </div>
  </PEShell>
);

/* ═══════════════ SECTION 1: HERO ═══════════════ */
const PEHero = () => (
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
            Solutions · Private Markets
          </span>
          <h1 style={{ fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--pascal-dark-text)", lineHeight: 1.08, marginBottom: 24 }}>
            Pascal AI for<br /><span style={{ color: "var(--pascal-emerald)" }}>Private Markets</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.72, color: "var(--pascal-dark-muted)", maxWidth: 520, width: "100%", marginBottom: 36 }}>
            Accelerate deal evaluation, compress due diligence, and strengthen LP relations — with agentic AI built for the realities of private equity, venture, private credit, and infrastructure investing.
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
              Book a Demo
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
        <div style={{ paddingBottom: 40, position: "relative" }}>
          <DealRoomVisual />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════ SECTION 2: AGENT CAROUSEL ═══════════════ */

const PEDDVis = () => (
  <PEShell>
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 12 }}>CIM Analysis · Risk Summary</div>
    {[
      { l: "Revenue quality",        s: "Reviewed",    c: "var(--pascal-emerald)", k: "check-circle-2" },
      { l: "Customer concentration", s: "1 flag",      c: "#d97706",              k: "alert-triangle" },
      { l: "Contract terms",         s: "Reviewed",    c: "var(--pascal-emerald)", k: "check-circle-2" },
      { l: "Working capital",        s: "Reviewed",    c: "var(--pascal-emerald)", k: "check-circle-2" },
      { l: "Litigation",             s: "Reviewed",    c: "var(--pascal-emerald)", k: "check-circle-2" },
    ].map(row => (
      <div key={row.l} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid var(--pascal-line)" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--pascal-ink)" }}>
          <i data-lucide={row.k} style={{ width: 14, height: 14, color: row.c, flex: "none" }}/>
          {row.l}
        </span>
        <span style={{ fontSize: 12, fontWeight: 600, color: row.c }}>{row.s}</span>
      </div>
    ))}
    <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 8, background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.2)" }}>
      <div style={{ fontSize: 11.5, fontWeight: 600, color: "#d97706", marginBottom: 3 }}>Predicted IC Question</div>
      <div style={{ fontSize: 11.5, color: "var(--pascal-fg-muted)" }}>"How does management plan to reduce top-3 customer concentration below 50%?"</div>
    </div>
    <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
      <span style={{ fontSize: 10, color: "var(--pascal-fg-muted)" }}>Surfaces from 14 prior deal ICs ·</span>
      <span style={{ fontSize: 10, fontWeight: 600, color: "var(--pascal-emerald)" }}>38 sources cited</span>
    </div>
  </PEShell>
);

const PEICMemoVis = () => (
  <PEShell>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "var(--pascal-ink)" }}>IC Memo — Project Atlas</div>
      <span style={{ padding: "3px 10px", borderRadius: 999, fontSize: 10.5, fontWeight: 600, background: "rgba(81,152,114,0.10)", color: "var(--pascal-emerald)", border: "1px solid rgba(81,152,114,0.25)" }}>Export ↑</span>
    </div>
    <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
      {["CIM_v3.pdf", "Financials_FY24", "Market Research"].map(s => (
        <span key={s} style={{ padding: "2px 8px", borderRadius: 999, fontSize: 10.5, background: "var(--pascal-mint)", color: "var(--pascal-emerald)", border: "1px solid rgba(81,152,114,0.2)" }}>{s}</span>
      ))}
    </div>
    {[
      { label: "Investment Thesis", body: "Healthcare IT SaaS with sticky EMR integration and expanding into insurance claims automation. Market-leading NRR of 118% supports expansion thesis..." },
      { label: "Key Financials (FY24)", body: null },
      { label: "Key Risks", body: "Customer concentration (top-3 = 68% ARR) · Regulatory overhang on claims data · CTO departure risk" },
    ].map(({ label, body }) => (
      <div key={label} style={{ padding: "9px 0", borderBottom: "1px solid var(--pascal-line)" }}>
        <div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--pascal-fg-muted)", marginBottom: 5, letterSpacing: "0.04em" }}>{label}</div>
        {body ? (
          <div style={{ fontSize: 12, color: "var(--pascal-ink)", lineHeight: 1.6 }}>{body}</div>
        ) : (
          <div style={{ display: "flex", gap: 8 }}>
            {[["Revenue", "$125M"], ["EBITDA", "$28M"], ["ARR", "$115M"]].map(([k, v]) => (
              <div key={k} style={{ flex: 1, padding: "7px 9px", borderRadius: 6, background: "var(--pascal-paper-soft)", border: "1px solid var(--pascal-line)" }}>
                <div style={{ fontSize: 9.5, color: "var(--pascal-fg-muted)" }}>{k}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--pascal-emerald)" }}>{v}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
    <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 10 }}>
      <span style={{ fontSize: 10, color: "var(--pascal-fg-muted)" }}>Every claim cited ·</span>
      <span style={{ fontSize: 10, color: "var(--pascal-emerald)", fontWeight: 600 }}>24 sources</span>
    </div>
  </PEShell>
);

const PEPortfolioVis = () => (
  <PEShell>
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 12 }}>Portfolio Monitor · 4 Active Holdings</div>
    {[
      { name: "HealthTech Co.",    ticker: "HTC",  alert: "10-Q Filed",       level: "info",    kpi: "Rev ↑ 18% YoY" },
      { name: "LogiSoft Inc.",     ticker: "LSI",  alert: "M&A Rumor",        level: "warning", kpi: "Covenant: Review" },
      { name: "Meridian Capital",  ticker: "MCA",  alert: "Board Deck Ready", level: "info",    kpi: "EBITDA on track" },
      { name: "ConstructAI Ltd.",  ticker: "CAI",  alert: "Breach Risk",      level: "danger",  kpi: "Liquidity: Flag" },
    ].map(r => (
      <div key={r.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: "1px solid var(--pascal-line)" }}>
        <span style={{ width: 32, height: 32, borderRadius: 7, background: "var(--pascal-mint)", color: "var(--pascal-emerald)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9.5, fontWeight: 700, flex: "none" }}>{r.ticker}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--pascal-ink)" }}>{r.name}</div>
          <div style={{ fontSize: 11, color: "var(--pascal-fg-muted)" }}>{r.kpi}</div>
        </div>
        <span style={{
          fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999,
          background: r.level === "danger" ? "rgba(220,38,38,0.08)" : r.level === "warning" ? "rgba(245,158,11,0.08)" : "rgba(81,152,114,0.08)",
          color: r.level === "danger" ? "#dc2626" : r.level === "warning" ? "#d97706" : "var(--pascal-emerald)",
          border: `1px solid ${r.level === "danger" ? "rgba(220,38,38,0.2)" : r.level === "warning" ? "rgba(245,158,11,0.2)" : "rgba(81,152,114,0.2)"}`,
        }}>{r.alert}</span>
      </div>
    ))}
    <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 8, background: "rgba(81,152,114,0.07)", border: "1px solid rgba(81,152,114,0.2)" }}>
      <div style={{ fontSize: 11.5, fontWeight: 600, color: "var(--pascal-emerald)", marginBottom: 3 }}>Auto-Monitoring Active</div>
      <div style={{ fontSize: 11.5, color: "var(--pascal-fg-muted)" }}>Filings, news, KPI reports — flagged in real time with source citations.</div>
    </div>
  </PEShell>
);

const PECustomWFVis = () => (
  <PEShell>
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 12 }}>Workflow Builder</div>
    <div style={{ position: "relative", padding: "10px 0" }}>
      {[
        { icon: "📥", label: "Data Room Fetch", sub: "Datasite + Intralinks", color: "#3B82F6" },
        { icon: "🔍", label: "CIM Analyzer", sub: "Risk & opportunity flags", color: "var(--pascal-emerald)" },
        { icon: "📄", label: "IC Memo Draft", sub: "On firm template", color: "#8B5CF6" },
        { icon: "✅", label: "Compliance Check", sub: "Auto-flag & cite", color: "#F59E0B" },
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
  </PEShell>
);

const PE_CAROUSEL_TABS = [
  {
    id: "dd", label: "Due Diligence",
    headline: "Due Diligence",
    body: "Compress deal evaluation by up to 70%. Pascal's Due Diligence agent ingests data rooms — CIMs, financials, contracts — and surfaces risks and red flags. Compares opportunities against prior deals and predicts IC questions.",
    Visual: PEDDVis,
  },
  {
    id: "icmemo", label: "IC Memo Builder",
    headline: "IC Memo Builder",
    body: "Take a deal from data room to IC-ready memo in hours. Pulls together financials, market sizing, and comps into a structured template. Every claim cited to source; inherits firm pattern recognition.",
    Visual: PEICMemoVis,
  },
  {
    id: "portfolio", label: "Portfolio Monitoring",
    headline: "Portfolio Monitoring",
    body: "Stay ahead of portfolio companies without drowning in board decks. Monitors filings, news, and KPI reports — flagging material developments and tracking covenant compliance automatically.",
    Visual: PEPortfolioVis,
  },
  {
    id: "custom", label: "Build Custom Workflows",
    headline: "Build Custom Workflows",
    body: "Design workflows tailored to your firm. Connect to CRMs, data room providers (Datasite, Intralinks), and market data (PitchBook, Preqin). Combine with Pascal's agents for end-to-end deal processes.",
    Visual: PECustomWFVis,
  },
];

const PEAgentCarousel = () => {
  const [active, setActive] = React.useState(0);
  const tab = PE_CAROUSEL_TABS[active];
  const Visual = tab.Visual;
  return (
    <section style={{ padding: "100px 0 120px", background: "#fff", borderTop: "1px solid var(--pascal-line)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 14 }}>Recommended Agents</span>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-ink)", lineHeight: 1.1 }}>
            The agents your deal team needs, ready on day one.
          </h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 52, flexWrap: "wrap" }}>
          {PE_CAROUSEL_TABS.map((t, i) => (
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
const PESDKSection = () => (
  <section style={{ padding: "100px 0 120px", background: "var(--pascal-dark)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 64, alignItems: "center" }}>
        <div>
          <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 18 }}>Developer Toolkit</span>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-dark-text)", lineHeight: 1.1, marginBottom: 18 }}>
            Build Your Own Agents with the Pascal SDK
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.72, color: "var(--pascal-dark-muted)", marginBottom: 32, width: "100%" }}>
            Use the Pascal SDK to co-develop agents tailored to your firm's exact deal and portfolio workflows.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
            {[
              { label: "Full Customization", body: "Python and TypeScript SDKs to build on the Cognitive Engine." },
              { label: "Enterprise Integration", body: "Plug into CRMs, data rooms, and portfolio systems." },
              { label: "Production-Grade Document Handling", body: "Parse CIMs, contracts, and board decks at scale." },
              { label: "Developer-Friendly, Sovereign-Ready", body: "Rapid prototyping with zero data retention." },
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
            Book a Demo
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
              { t: [["# Run Due Diligence Agent", "#546E7A"]] },
              { t: [["response", "#EEFFFF"], [" = ", "#89DDFF"], ["pascal", "#EEFFFF"], [".", "#89DDFF"], ["agents", "#EEFFFF"], [".", "#89DDFF"], ["run", "#82AAFF"], ["({", "#89DDFF"]] },
              { t: [['    "agentId"', "#C3E88D"], [": ", "#89DDFF"], ['"due-diligence"', "#C3E88D"], [",", "#EEFFFF"]] },
              { t: [['    "dataRoom"', "#C3E88D"], [": ", "#89DDFF"], ['"datasite://project-atlas"', "#C3E88D"], [",", "#EEFFFF"]] },
              { t: [['    "template"', "#C3E88D"], [": ", "#89DDFF"], ['"standard-cim-v2"', "#C3E88D"]] },
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

/* ═══════════════ SECTION 4: DEMO FEATURES ═══════════════ */
const PEDemoFeatures = () => (
  <section style={{ padding: "100px 0 120px", background: "var(--pascal-paper-soft)", borderTop: "1px solid var(--pascal-line)" }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 14 }}>Live Demo</span>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-ink)", lineHeight: 1.1, marginBottom: 14 }}>Book a Product Demo</h2>
        <p style={{ fontSize: 16, color: "var(--pascal-fg-muted)", maxWidth: 500, width: "100%", margin: "0 auto" }}>
          See Pascal's workflows live — and cut diligence effort by up to 70%.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 48 }}>
        {[
          { icon: "🧠", title: "Extract IC Questions Automatically", body: "Reads prior minutes and partner feedback to surface recurring concerns before every committee session." },
          { icon: "📋", title: "Generate Due Diligence Reports", body: "Produces structured DD reports flagging risks and citing sources — from CIM to closing memo." },
          { icon: "🔮", title: "Predict Future IC Questions", body: "Forecasts committee questions based on historical patterns from your firm's prior deals." },
        ].map(panel => (
          <div key={panel.title} style={{
            padding: "32px 28px", borderRadius: 16,
            background: "#fff", border: "1px solid var(--pascal-line)",
            boxShadow: "0 4px 16px -6px rgba(26,36,20,0.08)",
          }}>
            <div style={{ fontSize: 28, marginBottom: 16 }}>{panel.icon}</div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--pascal-ink)", letterSpacing: "-0.015em", marginBottom: 12, lineHeight: 1.3 }}>{panel.title}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--pascal-fg-muted)", margin: 0, width: "100%" }}>{panel.body}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="demo.html" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "14px 36px", borderRadius: 999,
          background: "var(--pascal-emerald)", color: "#fff",
          fontSize: 15, fontWeight: 600, textDecoration: "none",
          boxShadow: "0 8px 24px -8px rgba(81,152,114,0.4)",
          transition: "all 180ms ease",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 32px -8px rgba(81,152,114,0.45)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 24px -8px rgba(81,152,114,0.4)"; }}>
          Book a Demo
        </a>
      </div>
    </div>
  </section>
);

/* ═══════════════ SECTION 5: TESTIMONIAL ═══════════════ */
const PETestimonial = () => (
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
        Redefining Diligence for Private Markets
      </h3>
      <blockquote style={{
        fontSize: "clamp(16px, 1.8vw, 20px)", lineHeight: 1.75,
        color: "var(--pascal-dark-text)", fontStyle: "italic",
        letterSpacing: "-0.01em", marginBottom: 40, fontWeight: 400,
      }}>
        "Rather than another point solution, Pascal gave us a platform we could shape to our diligence process — sitting inside our perimeter, citing every output to source, and integrating with the data rooms and systems our deal team already runs on..."
      </blockquote>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div style={{ width: 48, height: 1, background: "rgba(81,152,114,0.4)" }} />
        <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--pascal-dark-text)" }}>Partner &amp; Head of Technology</div>
        <div style={{ fontSize: 12.5, color: "var(--pascal-dark-muted)" }}>Leading Private Markets Firm</div>
      </div>
    </div>
  </section>
);

/* ═══════════════ SECTION 6: INTEGRATIONS ═══════════════ */
const PE_INTEGRATIONS = [
  { name: "Bloomberg",       abbr: "BB",  color: "#FF6600" },
  { name: "FactSet",         abbr: "FS",  color: "#FF0015" },
  { name: "S&P Capital IQ",  abbr: "CIQ", color: "#003087" },
  { name: "Refinitiv",       abbr: "REF", color: "#ED1C24" },
  { name: "SharePoint",      img: "https://cdn.simpleicons.org/microsoftsharepoint/0078D4" },
  { name: "Teams",           img: "https://cdn.simpleicons.org/microsoftteams/6264D0" },
  { name: "Outlook",         img: "https://cdn.simpleicons.org/microsoftoutlook/0078D4" },
  { name: "Snowflake",       img: "https://cdn.simpleicons.org/snowflake/29B5E8" },
  { name: "Databricks",      img: "https://cdn.simpleicons.org/databricks/FF3621" },
];

const PEIntegrations = () => (
  <section style={{ padding: "80px 0 100px", background: "#fff", borderTop: "1px solid var(--pascal-line)" }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 52 }}>
        <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 14 }}>Integrations</span>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-ink)", lineHeight: 1.1, marginBottom: 14 }}>Connect to the Stack You Already Run On</h2>
        <p style={{ fontSize: 15.5, color: "var(--pascal-fg-muted)", maxWidth: 520, width: "100%", margin: "0 auto" }}>
          Pascal connects to the data subscriptions, document stores, and internal systems your team uses every day.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, maxWidth: 680, margin: "0 auto 36px" }}>
        {PE_INTEGRATIONS.map(item => (
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

/* ═══════════════ SECTION 7: CASE STUDY ═══════════════ */
const PECaseStudy = () => {
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <section style={{ padding: "80px 0 100px", background: "var(--pascal-paper-soft)", borderTop: "1px solid var(--pascal-line)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 16 }}>Case Study</span>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-ink)", lineHeight: 1.15, marginBottom: 16 }}>
              Download the Private Markets Case Study
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.72, color: "var(--pascal-fg-muted)", marginBottom: 28, width: "100%" }}>
              How a leading private markets firm deployed Pascal across deal evaluation, IC prep, and portfolio monitoring.
            </p>
            <div style={{ padding: "24px", borderRadius: 16, border: "1px solid var(--pascal-line)", background: "#fff" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ width: 40, height: 40, borderRadius: 8, background: "var(--pascal-emerald)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flex: "none" }}>🏛️</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--pascal-ink)" }}>Leading Private Markets Firm</div>
                  <div style={{ fontSize: 11.5, color: "var(--pascal-fg-muted)" }}>Multi-strategy, $8B AUM</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {["70% reduction in CIM review time", "IC memos from data room in under 4 hours", "Full deployment inside private cloud perimeter", "Zero data sent to third-party LLM providers"].map(kpi => (
                  <div key={kpi} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ color: "var(--pascal-emerald)", fontWeight: 700, fontSize: 14, flex: "none", marginTop: 1 }}>✓</span>
                    <span style={{ fontSize: 13, color: "var(--pascal-fg-muted)", lineHeight: 1.5 }}>{kpi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ background: "#fff", borderRadius: 20, border: "1px solid var(--pascal-line)", padding: "36px 32px", boxShadow: "0 8px 32px -8px rgba(26,36,20,0.08)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✅</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "var(--pascal-ink)", marginBottom: 8 }}>Case study on its way.</div>
                <div style={{ fontSize: 14, color: "var(--pascal-fg-muted)" }}>We'll send it to your work email within minutes.</div>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 17, fontWeight: 700, color: "var(--pascal-ink)", marginBottom: 4 }}>Download the Case Study</div>
                  <div style={{ fontSize: 13.5, color: "var(--pascal-fg-muted)" }}>We'll send it to your work email instantly.</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  {[
                    { label: "First Name", placeholder: "Alex", col: 1 },
                    { label: "Last Name", placeholder: "Chen", col: 1 },
                    { label: "Work Email", placeholder: "you@firm.com", col: 2 },
                    { label: "Firm", placeholder: "Your Firm", col: 2 },
                    { label: "Role", placeholder: "Partner / Associate", col: 2 },
                  ].map(f => (
                    <div key={f.label} style={{ gridColumn: `span ${f.col}` }}>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--pascal-ink)", marginBottom: 6, letterSpacing: "0.04em" }}>{f.label}</label>
                      <input placeholder={f.placeholder} style={{
                        width: "100%", padding: "10px 13px", borderRadius: 8,
                        border: "1.5px solid var(--pascal-line)", background: "var(--pascal-paper-soft)",
                        fontSize: 13.5, color: "var(--pascal-ink)", fontFamily: "inherit",
                        outline: "none", boxSizing: "border-box", transition: "border-color 150ms",
                      }}
                      onFocus={(e) => { e.target.style.borderColor = "var(--pascal-emerald)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--pascal-line)"; }} />
                    </div>
                  ))}
                </div>
                <button onClick={() => setSubmitted(true)} style={{
                  marginTop: 20, width: "100%", padding: "14px", borderRadius: 999,
                  border: "none", background: "var(--pascal-emerald)", color: "#fff",
                  fontSize: 15, fontWeight: 600, fontFamily: "inherit", cursor: "pointer",
                  transition: "all 180ms ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}>
                  Download Case Study
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════ SECTION 8: WHY PASCAL ═══════════════ */
const PEWhyPascal = () => (
  <section style={{ padding: "100px 0 120px", background: "var(--pascal-dark)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 14 }}>Why Pascal</span>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-dark-text)", lineHeight: 1.1 }}>
          Why Top Private Markets Firms Choose Pascal
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 56 }}>
        {[
          { icon: "🛡️", title: "Sovereignty", body: "Deal data and LP info never leave your perimeter. On-prem or private cloud with zero data retention enforced at the infrastructure layer." },
          { icon: "📋", title: "Accuracy", body: "Every output cites its source — CIM page, contract clause, or prior IC minute. Built for LP due diligence and internal audit from day one." },
          { icon: "🤝", title: "Partnership", body: "We co-develop workflows for your specific strategy, integrating with your data rooms, CRMs, and portfolio systems." },
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

/* ═══════════════ SECTION 9: FINAL CTA ═══════════════ */
const PEFinalCTA = () => (
  <section style={{
    padding: "72px 0",
    background: "linear-gradient(135deg, var(--pascal-dark) 0%, #0d1e0d 50%, var(--pascal-dark) 100%)",
    borderTop: "1px solid rgba(81,152,114,0.15)",
    position: "relative", overflow: "hidden",
  }}>
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(700px 400px at 50% 50%, rgba(81,152,114,0.10), transparent 65%)" }} />
    <div className="container" style={{ position: "relative", textAlign: "center" }}>
      <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-dark-text)", lineHeight: 1.15, marginBottom: 28 }}>
        Talk to a Pascal expert about your firm's<br />deal and portfolio workflows.
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
        Book a Demo
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <path d="M3 7 L11 7 M7 3 L11 7 L7 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  </section>
);

/* ─── Full page ─── */
const PrivateEquityPage = () => {
  React.useEffect(() => {
    const tick = () => window.lucide && window.lucide.createIcons();
    tick();
    const id = setInterval(tick, 400);
    return () => clearInterval(id);
  }, []);
  return (
    <React.Fragment>
      <Nav />
      <PEHero />
      <PEAgentCarousel />
      <PESDKSection />
      <PEDemoFeatures />
      <PETestimonial />
      <PEIntegrations />
      <PEWhyPascal />
      <PEFinalCTA />
      <Footer />
    </React.Fragment>
  );
};

Object.assign(window, { PrivateEquityPage });
