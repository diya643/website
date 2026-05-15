// AssetManagementPage.jsx — Solutions: Asset Management

/* ─── Light browser shell ─── */
const AMShell = ({ children, minH = 320 }) => (
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

/* ─── Hero visual: Agentic Table comparing companies ─── */
const AgenticTableHeroVisual = () => {
  const rows = [
    { tick: "TCS",  name: "Tata Consultancy", rev: "₹2.41L Cr", growth: "+8.4%", pe: "28x", roe: "45%", hi: false },
    { tick: "INFY", name: "Infosys Ltd.",      rev: "₹1.54L Cr", growth: "+4.2%", pe: "22x", roe: "32%", hi: true  },
    { tick: "WIPRO",name: "Wipro Ltd.",        rev: "₹90,088 Cr",growth: "+2.1%", pe: "20x", roe: "18%", hi: false },
    { tick: "HCLT", name: "HCL Technologies",  rev: "₹1.09L Cr", growth: "+6.5%", pe: "25x", roe: "25%", hi: false },
  ];
  return (
    <AMShell minH={400}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--pascal-ink)" }}>Agentic Table · India IT Coverage</div>
          <div style={{ fontSize: 11, color: "var(--pascal-fg-muted)", marginTop: 2 }}>Bloomberg · FactSet · Auto-cited</div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ padding: "2px 8px", borderRadius: 999, fontSize: 10, fontWeight: 600, background: "rgba(81,152,114,0.10)", color: "var(--pascal-emerald)", border: "1px solid rgba(81,152,114,0.2)", cursor: "pointer" }}>+ Add Column</span>
          <span style={{ padding: "2px 8px", borderRadius: 999, fontSize: 10, fontWeight: 600, background: "var(--pascal-paper-soft)", color: "var(--pascal-fg-muted)", border: "1px solid var(--pascal-line)", cursor: "pointer" }}>Export ↑</span>
        </div>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
        <thead>
          <tr style={{ background: "var(--pascal-paper-soft)" }}>
            {["Ticker", "Company", "Revenue", "Rev Growth", "P/E", "ROE"].map(c => (
              <th key={c} style={{ padding: "6px 8px", fontWeight: 600, color: "var(--pascal-fg-muted)", textAlign: c === "Company" ? "left" : "right", fontSize: 10.5, letterSpacing: "0.04em", borderBottom: "1px solid var(--pascal-line)" }}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.tick} style={{ background: r.hi ? "rgba(81,152,114,0.04)" : "transparent" }}>
              <td style={{ padding: "9px 8px", fontWeight: 700, color: "var(--pascal-emerald)", borderBottom: "1px solid var(--pascal-line)", textAlign: "right" }}>{r.tick}</td>
              <td style={{ padding: "9px 8px", color: "var(--pascal-ink)", borderBottom: "1px solid var(--pascal-line)" }}>{r.name}</td>
              <td style={{ padding: "9px 8px", color: "var(--pascal-ink)", borderBottom: "1px solid var(--pascal-line)", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{r.rev}</td>
              <td style={{ padding: "9px 8px", color: "#16a34a", fontWeight: 600, borderBottom: "1px solid var(--pascal-line)", textAlign: "right" }}>{r.growth}</td>
              <td style={{ padding: "9px 8px", color: "var(--pascal-ink)", borderBottom: "1px solid var(--pascal-line)", textAlign: "right" }}>{r.pe}</td>
              <td style={{ padding: "9px 8px", color: "var(--pascal-ink)", borderBottom: "1px solid var(--pascal-line)", textAlign: "right" }}>{r.roe}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 8, background: "rgba(81,152,114,0.07)", border: "1px solid rgba(81,152,114,0.2)" }}>
        <div style={{ fontSize: 11.5, fontWeight: 600, color: "var(--pascal-emerald)", marginBottom: 3 }}>INFY — Variance Alert</div>
        <div style={{ fontSize: 11.5, color: "var(--pascal-fg-muted)" }}>Q2 actuals deviate −1.1% vs consensus on revenue. Variance note auto-drafted · 3 analyst citations.</div>
      </div>
      <div style={{ marginTop: 8, display: "flex", gap: 5 }}>
        <span style={{ fontSize: 10, color: "var(--pascal-fg-muted)" }}>Every cell cited ·</span>
        <span style={{ fontSize: 10, fontWeight: 600, color: "var(--pascal-emerald)" }}>16 sources</span>
      </div>
    </AMShell>
  );
};

/* ═══════════════ SECTION 1: HERO ═══════════════ */
const AMHero = () => (
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
            Solutions · Asset Management
          </span>
          <h1 style={{ fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--pascal-dark-text)", lineHeight: 1.08, marginBottom: 24 }}>
            Pascal AI for<br /><span style={{ color: "var(--pascal-emerald)" }}>Asset Management</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.72, color: "var(--pascal-dark-muted)", maxWidth: 520, width: "100%", marginBottom: 36 }}>
            Accelerate investment research, compress earnings season, and embed source-cited intelligence inside every analyst and PM workflow — with agentic AI built for the realities of regulated asset management.
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
          <AgenticTableHeroVisual />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════ SECTION 2: AGENT CAROUSEL ═══════════════ */

const AMEarningsVis = () => (
  <AMShell>
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 12 }}>Earnings Calendar · Live</div>
    {[
      { tick: "TCS",   name: "Tata Consultancy Services", q: "Q2 FY26", date: "Oct 10", status: "Filed",    var: "+4.2% vs est", up: true  },
      { tick: "INFY",  name: "Infosys Ltd.",              q: "Q2 FY26", date: "Oct 11", status: "Live",     var: "-1.1% vs est", up: false },
      { tick: "WIPRO", name: "Wipro Ltd.",                q: "Q2 FY26", date: "Oct 14", status: "Expected", var: "—",            up: null  },
      { tick: "HCLT",  name: "HCL Technologies",          q: "Q2 FY26", date: "Oct 15", status: "Expected", var: "—",            up: null  },
    ].map(r => (
      <div key={r.tick} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: "1px solid var(--pascal-line)" }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 2 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--pascal-emerald)" }}>{r.tick}</span>
            <span style={{ fontSize: 10.5, color: "var(--pascal-fg-muted)" }}>{r.q}</span>
          </div>
          <div style={{ fontSize: 11.5, color: "var(--pascal-fg-muted)" }}>{r.name}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <span style={{
            fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999,
            background: r.status === "Live" ? "rgba(74,222,128,0.12)" : r.status === "Filed" ? "rgba(81,152,114,0.10)" : "var(--pascal-line)",
            color: r.status === "Live" ? "#16a34a" : r.status === "Filed" ? "var(--pascal-emerald)" : "var(--pascal-fg-muted)",
            display: "block", marginBottom: 3,
          }}>{r.status}</span>
          <span style={{ fontSize: 11, fontWeight: 600, color: r.up === true ? "#16a34a" : r.up === false ? "#dc2626" : "var(--pascal-fg-muted)" }}>{r.var}</span>
        </div>
      </div>
    ))}
    <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 8, background: "rgba(81,152,114,0.07)", border: "1px solid rgba(81,152,114,0.2)" }}>
      <div style={{ fontSize: 11.5, fontWeight: 600, color: "var(--pascal-emerald)", marginBottom: 3 }}>Auto-Draft Ready</div>
      <div style={{ fontSize: 11.5, color: "var(--pascal-fg-muted)" }}>INFY variance note drafted · 3 analyst citations · 2 min ago</div>
    </div>
  </AMShell>
);

const AMICMemoVis = () => (
  <AMShell>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "var(--pascal-ink)" }}>IC Memo — HDFC Bank Ltd.</div>
      <span style={{ padding: "3px 10px", borderRadius: 999, fontSize: 10.5, fontWeight: 600, background: "rgba(81,152,114,0.10)", color: "var(--pascal-emerald)", border: "1px solid rgba(81,152,114,0.25)" }}>Export ↑</span>
    </div>
    <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
      {["Q4 FY25 Annual Report", "Broker Notes ×4", "Internal Thesis"].map(s => (
        <span key={s} style={{ padding: "2px 8px", borderRadius: 999, fontSize: 10.5, background: "var(--pascal-mint)", color: "var(--pascal-emerald)", border: "1px solid rgba(81,152,114,0.2)" }}>{s}</span>
      ))}
    </div>
    {[
      { label: "Investment Thesis", body: "HDFC Bank's merger integration with HDFC Ltd. creates India's largest private bank by assets, with structural advantage in mortgage origination and cross-sell to an 80M+ customer base..." },
      { label: "Key Financials (FY25)", body: null },
      { label: "Key Risks", body: "Integration execution risk · NIM compression post-merger · Slippage in HDFC Ltd. legacy book" },
    ].map(({ label, body }) => (
      <div key={label} style={{ padding: "9px 0", borderBottom: "1px solid var(--pascal-line)" }}>
        <div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--pascal-fg-muted)", marginBottom: 5, letterSpacing: "0.04em" }}>{label}</div>
        {body ? (
          <div style={{ fontSize: 12, color: "var(--pascal-ink)", lineHeight: 1.6 }}>{body}</div>
        ) : (
          <div style={{ display: "flex", gap: 8 }}>
            {[["NII", "₹1.08L Cr"], ["PAT", "₹60,812 Cr"], ["NIM", "3.46%"]].map(([k, v]) => (
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
      <span style={{ fontSize: 10, color: "var(--pascal-emerald)", fontWeight: 600 }}>14 sources</span>
    </div>
  </AMShell>
);

const CompanyPrimerVis = () => (
  <AMShell>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--pascal-ink)" }}>Company Primer — Reliance Industries</div>
        <div style={{ fontSize: 10.5, color: "var(--pascal-fg-muted)", marginTop: 2 }}>Conglomerate · NSE: RELIANCE · ₹20.1L Cr mkt cap</div>
      </div>
      <span style={{ padding: "3px 10px", borderRadius: 999, fontSize: 10.5, fontWeight: 600, background: "rgba(81,152,114,0.10)", color: "var(--pascal-emerald)", border: "1px solid rgba(81,152,114,0.25)" }}>Export ↑</span>
    </div>
    {[
      {
        label: "Business Model",
        body: "Integrated O2C, Retail (Reliance Retail), and Digital (Jio) segments. Consumer businesses now contribute >50% of EBITDA, reducing commodity cyclicality...",
      },
      {
        label: "Segment Economics",
        body: null,
        metrics: [["O2C", "₹1.47L Cr"], ["Retail", "₹89,000 Cr"], ["Jio", "₹58,000 Cr"]],
      },
      {
        label: "Competitive Position",
        body: "Market leader in telecom (Jio, 480M subs) and organized retail. O2C scale yields structural feedstock cost advantage vs. standalone refiners.",
      },
      {
        label: "Management Quality",
        badge: "Strong",
      },
    ].map(({ label, body, metrics, badge }) => (
      <div key={label} style={{ padding: "8px 0", borderBottom: "1px solid var(--pascal-line)" }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: "var(--pascal-fg-muted)", marginBottom: 4, letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}</div>
        {body && <div style={{ fontSize: 11.5, color: "var(--pascal-ink)", lineHeight: 1.6 }}>{body}</div>}
        {metrics && (
          <div style={{ display: "flex", gap: 8 }}>
            {metrics.map(([k, v]) => (
              <div key={k} style={{ flex: 1, padding: "6px 8px", borderRadius: 6, background: "var(--pascal-paper-soft)", border: "1px solid var(--pascal-line)" }}>
                <div style={{ fontSize: 9.5, color: "var(--pascal-fg-muted)" }}>{k}</div>
                <div style={{ fontSize: 11.5, fontWeight: 700, color: "var(--pascal-emerald)" }}>{v}</div>
              </div>
            ))}
          </div>
        )}
        {badge && (
          <span style={{ display: "inline-flex", padding: "2px 8px", borderRadius: 999, fontSize: 10.5, fontWeight: 600, background: "rgba(81,152,114,0.10)", color: "var(--pascal-emerald)", border: "1px solid rgba(81,152,114,0.2)" }}>{badge}</span>
        )}
      </div>
    ))}
    <div style={{ display: "flex", gap: 5, marginTop: 8 }}>
      <span style={{ fontSize: 10, color: "var(--pascal-fg-muted)" }}>Built in under 1 hour ·</span>
      <span style={{ fontSize: 10, fontWeight: 600, color: "var(--pascal-emerald)" }}>18 sources cited</span>
    </div>
  </AMShell>
);

const AMCustomWFVis = () => (
  <AMShell>
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 12 }}>Workflow Builder</div>
    <div style={{ position: "relative", padding: "10px 0" }}>
      {[
        { icon: "📡", label: "Data Fetch",       sub: "Bloomberg + FactSet + filings",  color: "#3B82F6" },
        { icon: "🔍", label: "KPI Extractor",    sub: "From filings & transcripts",     color: "var(--pascal-emerald)" },
        { icon: "📄", label: "IC Memo Draft",    sub: "On firm's house template",        color: "#8B5CF6" },
        { icon: "✅", label: "Compliance Check", sub: "Auto-flag & cite sources",        color: "#F59E0B" },
      ].map((step, i) => (
        <div key={step.label}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 10, background: "var(--pascal-paper-soft)", border: "1px solid var(--pascal-line)" }}>
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
  </AMShell>
);

const AM_CAROUSEL_TABS = [
  {
    id: "earnings", label: "Earnings Synthesis",
    headline: "Earnings Synthesis",
    body: "Cut earnings-season analyst load by up to 60%. Pascal auto-fetches transcripts, presentations, and filings the moment they drop, flags actuals diverging from consensus, and drafts variance notes. Save two to three days per analyst per quarter.",
    Visual: AMEarningsVis,
  },
  {
    id: "memo", label: "IC Memo Builder",
    headline: "IC Memo Builder",
    body: "Compress IC prep from days to hours. Pascal pulls together filings, broker research, internal theses, and recent management calls into a structured memo on your firm's house template. Every claim cited to source.",
    Visual: AMICMemoVis,
  },
  {
    id: "primer", label: "Company Primer",
    headline: "Company Primer",
    body: "Build a research-grade primer on any company in under an hour. Includes business model, segment economics, competitive position, and management quality — all cited to the underlying filing or broker note.",
    Visual: CompanyPrimerVis,
  },
  {
    id: "custom", label: "Build Custom Workflows",
    headline: "Build Custom Workflows",
    body: "Design and automate workflows tailored to your firm. Connect to Bloomberg, FactSet, S&P Capital IQ, and your RMS. Run end-to-end processes from research to reporting with full auditability.",
    Visual: AMCustomWFVis,
  },
];

const AMAgentCarousel = () => {
  const [active, setActive] = React.useState(0);
  const tab = AM_CAROUSEL_TABS[active];
  const Visual = tab.Visual;
  return (
    <section style={{ padding: "100px 0 120px", background: "#fff", borderTop: "1px solid var(--pascal-line)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 14 }}>Recommended Agents</span>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-ink)", lineHeight: 1.1 }}>
            The agents your investment team needs, ready on day one.
          </h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 52, flexWrap: "wrap" }}>
          {AM_CAROUSEL_TABS.map((t, i) => (
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
const AMSDKSection = () => (
  <section style={{ padding: "100px 0 120px", background: "var(--pascal-dark)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 64, alignItems: "center" }}>
        <div>
          <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 18 }}>Developer Toolkit</span>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-dark-text)", lineHeight: 1.1, marginBottom: 18 }}>
            Build Your Own Agents with the Pascal SDK
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.72, color: "var(--pascal-dark-muted)", marginBottom: 32, width: "100%" }}>
            Use the Pascal SDK to co-develop agents tailored to your firm's exact research and portfolio workflows.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
            {[
              { label: "Full Customization", body: "Access Python and TypeScript SDKs to build on the Cognitive Engine." },
              { label: "Enterprise Integration", body: "Plug directly into your RMS, OMS, and internal portals." },
              { label: "Production-Grade Document Handling", body: "Reason over PDFs, scanned filings, and broker research at scale." },
              { label: "Developer-Friendly, Sovereign-Ready", body: "Audit logging and zero data retention enforced by default." },
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
              { t: [["# Run Earnings Summary Agent", "#546E7A"]] },
              { t: [["response", "#EEFFFF"], [" = ", "#89DDFF"], ["pascal", "#EEFFFF"], [".", "#89DDFF"], ["agents", "#EEFFFF"], [".", "#89DDFF"], ["run", "#82AAFF"], ["({", "#89DDFF"]] },
              { t: [['    "agentId"', "#C3E88D"], [": ", "#89DDFF"], ['"earnings-summary"', "#C3E88D"], [",", "#EEFFFF"]] },
              { t: [['    "tickers"', "#C3E88D"], [": ", "#89DDFF"], ['["TCS"', "#C3E88D"], [", ", "#EEFFFF"], ['"INFY"', "#C3E88D"], [", ", "#EEFFFF"], ['"WIPRO"]', "#C3E88D"]] },
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
const AMDemoFeatures = () => (
  <section style={{ padding: "100px 0 120px", background: "var(--pascal-paper-soft)", borderTop: "1px solid var(--pascal-line)" }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 14 }}>Live Demo</span>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-ink)", lineHeight: 1.1, marginBottom: 14 }}>Watch a Product Demo</h2>
        <p style={{ fontSize: 16, color: "var(--pascal-fg-muted)", maxWidth: 500, width: "100%", margin: "0 auto" }}>
          See Pascal's workflows live — and cut research effort by up to 80%.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 48 }}>
        {[
          { icon: "📊", title: "Turn Filings Into Structured Research", body: "Ingest filings and transcripts to produce cited earnings summaries and KPI tables across any company set, in minutes." },
          { icon: "🤝", title: "Collaborate Across the Investment Team", body: "PMs review and annotate while IC members vote in a secure workspace with full attribution and auditability." },
          { icon: "✍️", title: "Own the Final Output", body: "Edit and verify inline. Locked outputs are reusable as compounding institutional memory across the team." },
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
          Watch a Demo
        </a>
      </div>
    </div>
  </section>
);

/* ═══════════════ SECTION 5: TESTIMONIAL ═══════════════ */
const AMTestimonial = () => (
  <section style={{ position: "relative", overflow: "hidden", padding: "100px 0", background: "var(--pascal-dark)" }}>
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(900px 600px at 50% 50%, rgba(81,152,114,0.07), transparent 65%)" }} />
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0,
      backgroundImage: ["linear-gradient(rgba(81,152,114,0.03) 1px, transparent 1px)", "linear-gradient(90deg, rgba(81,152,114,0.03) 1px, transparent 1px)"].join(", "),
      backgroundSize: "72px 72px",
    }} />
    <div className="container" style={{ position: "relative", maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
      <div style={{ fontSize: 48, color: "var(--pascal-emerald)", opacity: 0.5, lineHeight: 1, marginBottom: 28, fontFamily: "Georgia, serif" }}>"</div>
      <h3 style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--pascal-dark-text)", marginBottom: 28, lineHeight: 1.2 }}>
        Redefining Investment Research for Asset Managers
      </h3>
      <blockquote style={{
        fontSize: "clamp(16px, 1.8vw, 20px)", lineHeight: 1.75,
        color: "var(--pascal-dark-text)", fontStyle: "italic",
        letterSpacing: "-0.01em", marginBottom: 40, fontWeight: 400,
      }}>
        "Pascal gave us a platform we could shape to our process — sitting inside our perimeter, citing every output to source, and integrating with the systems our team already runs on. It meets our security, governance, and infrastructure requirements."
      </blockquote>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div style={{ width: 48, height: 1, background: "rgba(81,152,114,0.4)" }} />
        <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--pascal-dark-text)" }}>Head of Research &amp; Technology</div>
        <div style={{ fontSize: 12.5, color: "var(--pascal-dark-muted)" }}>Leading Asset Manager</div>
        <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 28, height: 28, borderRadius: 6, background: "#F47920", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: "#fff" }}>IP</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: "var(--pascal-dark-muted)" }}>ICICI Prudential AMC</span>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════ SECTION 6: INTEGRATIONS ═══════════════ */
const AM_INTEGRATIONS = [
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

const AMIntegrations = () => (
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
        {AM_INTEGRATIONS.map(item => (
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
const AMWhyPascal = () => (
  <section style={{ padding: "100px 0 120px", background: "var(--pascal-dark)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 14 }}>Why Pascal</span>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-dark-text)", lineHeight: 1.1 }}>
          Why Top Asset Managers Choose Pascal
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 56 }}>
        {[
          { icon: "🛡️", title: "Sovereignty", body: "Research and portfolio data never leave your perimeter. On-prem or private cloud options with zero data retention enforced at the infrastructure layer." },
          { icon: "📋", title: "Accuracy", body: "Every output cites its source — page, line, filing, or transcript. Built for SEBI tech risk reviews and internal audit from day one." },
          { icon: "🤝", title: "Partnership", body: "Our team works as an extension of yours to co-develop workflows, templates, and integrations tailored to your exact investment process." },
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
          Watch a Demo
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M3 11 L11 3 M5 3 L11 3 L11 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
);

/* ═══════════════ SECTION 8: FINAL CTA ═══════════════ */
const AMFinalCTA = () => (
  <section style={{
    padding: "72px 0",
    background: "linear-gradient(135deg, var(--pascal-dark) 0%, #0d1e0d 50%, var(--pascal-dark) 100%)",
    borderTop: "1px solid rgba(81,152,114,0.15)",
    position: "relative", overflow: "hidden",
  }}>
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(700px 400px at 50% 50%, rgba(81,152,114,0.10), transparent 65%)" }} />
    <div className="container" style={{ position: "relative", textAlign: "center" }}>
      <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-dark-text)", lineHeight: 1.15, marginBottom: 28 }}>
        Talk to a Pascal expert about your<br />firm's research workflows.
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
const AssetManagementPage = () => {
  React.useEffect(() => {
    const tick = () => window.lucide && window.lucide.createIcons();
    tick();
    const id = setInterval(tick, 400);
    return () => clearInterval(id);
  }, []);
  return (
    <React.Fragment>
      <Nav />
      <AMHero />
      <AMAgentCarousel />
      <AMSDKSection />
      <AMDemoFeatures />
      <AMTestimonial />
      <AMIntegrations />
      <AMWhyPascal />
      <AMFinalCTA />
      <Footer />
    </React.Fragment>
  );
};

Object.assign(window, { AssetManagementPage });
