// HedgeFundsPage.jsx — Solutions: Hedge Funds & Asset Managers

/* ─── Light browser shell (reused pattern) ─── */
const HFShell = ({ children, minH = 320 }) => (
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

/* ─── Stylized Mumbai skyline ─── */
const MumbaiSkyline = () => {
  const BG = [
    [10,220,14,180],[30,205,18,195],[52,225,12,175],[68,195,16,205],[88,218,14,182],
    [106,200,20,200],[132,215,15,185],[152,225,18,175],[175,210,22,190],[202,230,14,170],
    [220,200,20,200],[245,220,16,180],[266,215,20,185],[292,205,15,195],[312,225,18,175],
    [335,195,22,205],[363,215,14,185],[382,225,20,175],[408,200,16,200],[430,215,20,185],
    [455,225,14,175],[474,200,18,200],[498,220,22,180],[526,205,14,195],[545,220,18,180],
  ];
  const FG = [
    [0,255,28,145],[32,238,22,162],[58,250,26,150],[88,232,38,168],[130,252,24,148],
    [158,242,32,158],[195,255,22,145],[221,238,30,162],[256,252,26,148],[286,232,38,168],
    [328,248,24,152],[357,255,32,145],[394,238,26,162],[425,252,30,148],[460,232,38,168],
    [503,248,24,152],[532,255,28,145],[565,242,26,158],[595,252,24,148],
  ];
  const windows = [
    [15,230],[36,215],[58,235],[75,205],[92,228],[112,208],[136,222],[160,232],[180,218],
    [207,238],[226,208],[250,228],[272,222],[298,212],[318,232],[340,205],[368,222],[388,232],
    [414,208],[436,222],[460,232],[480,208],[504,228],[530,212],[550,228],
    [8,265],[40,248],[68,260],[100,242],[140,262],[170,250],[204,265],[234,248],[264,260],
    [296,242],[340,258],[370,265],[402,248],[434,260],[468,242],[512,258],[542,265],[575,252],
  ];
  return (
    <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", height: "100%", minHeight: 440 }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #060c06 0%, #091508 45%, #0e1e0e 75%, #142614 100%)" }} />
      <div style={{ position: "absolute", bottom: "28%", left: "50%", transform: "translateX(-50%)", width: "130%", height: 200, background: "radial-gradient(ellipse, rgba(0,0,0,0.09) 0%, transparent 65%)" }} />
      <svg viewBox="0 0 620 400" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {BG.map(([x, y, w, h], i) => (
          <rect key={`b${i}`} x={x} y={y} width={w} height={h} fill="#142414" opacity="0.7"/>
        ))}
        {FG.map(([x, y, w, h], i) => (
          <rect key={`f${i}`} x={x} y={y} width={w} height={h} fill="#0a1208"/>
        ))}
        {windows.map(([x, y], i) => (
          <rect key={`w${i}`} x={x} y={y} width={4} height={3} fill={i % 3 === 0 ? "#f5c842" : i % 3 === 1 ? "#e8a830" : "#c8d4b8"} opacity={0.5 + (i % 4) * 0.12} rx="0.5"/>
        ))}
        <rect x="0" y="375" width="620" height="25" fill="#07100a"/>
        <rect x="0" y="375" width="620" height="5" fill="#0f1e0f" opacity="0.6"/>
      </svg>
      <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
        <div style={{
          background: "rgba(15,14,12,0.82)", backdropFilter: "blur(16px)",
          border: "1px solid rgba(0,0,0,0.12)", borderRadius: 14,
          padding: "16px 18px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", flex: "none", boxShadow: "0 0 8px #4ade80" }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: "var(--pascal-emerald)", letterSpacing: "0.08em" }}>LIVE · EARNINGS CONSOLE</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {[
              { tick: "TCS", q: "Q2 FY26", status: "Filed", var: "+4.2% vs est." },
              { tick: "INFY", q: "Q2 FY26", status: "Live",  var: "-1.1% vs est." },
              { tick: "WIPRO", q: "Q2 FY26", status: "Expected 14:30", var: "—" },
            ].map(r => (
              <div key={r.tick} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "var(--pascal-emerald)", width: 52, flex: "none" }}>{r.tick}</span>
                <span style={{ fontSize: 11, color: "rgba(228,237,216,0.5)", flex: 1 }}>{r.q}</span>
                <span style={{
                  fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999,
                  background: r.status === "Live" ? "rgba(74,222,128,0.15)" : r.status === "Filed" ? "rgba(0,0,0,0.07)" : "rgba(255,255,255,0.06)",
                  color: r.status === "Live" ? "#4ade80" : r.status === "Filed" ? "var(--pascal-emerald)" : "rgba(228,237,216,0.4)",
                }}>{r.status}</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: r.var.startsWith("+") ? "#4ade80" : r.var.startsWith("-") ? "#f87171" : "rgba(228,237,216,0.35)", width: 80, textAlign: "right" }}>{r.var}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════ SECTION 1: HERO ═══════════════ */
const HFHero = () => (
  <section style={{ position: "relative", overflow: "hidden", background: "var(--pascal-dark)", padding: "100px 0 0" }}>
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0,
      backgroundImage: ["linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)", "linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)"].join(", "),
      backgroundSize: "72px 72px",
    }} />
    <div className="container" style={{ position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div style={{ paddingBottom: 80 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 11.5, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--pascal-emerald)", marginBottom: 24 }}>
            <span style={{ width: 20, height: 1, background: "var(--pascal-emerald)" }} />
            Solutions · Hedge Funds
          </span>
          <h1 style={{ fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--pascal-dark-text)", lineHeight: 1.08, marginBottom: 24 }}>
            Pascal AI for<br /><span style={{ color: "var(--pascal-emerald)" }}>Hedge Funds</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.72, color: "var(--pascal-dark-muted)", maxWidth: 520, width: "100%", marginBottom: 36 }}>
            Source-cited research agents inside your VPC. Built for long/short, event-driven, and multi-strategy funds.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="demo.html" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 28px", borderRadius: 999,
              background: "var(--pascal-emerald)", color: "#fff",
              fontSize: 15, fontWeight: 600, textDecoration: "none",
              transition: "all 180ms ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--pascal-emerald-2)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--pascal-emerald)"; e.currentTarget.style.transform = "none"; }}>
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
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.20)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(228,237,216,0.25)"; }}>
              Explore the Platform
            </a>
          </div>
        </div>
        <div style={{ height: 480, position: "relative" }}>
          <MumbaiSkyline />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════ SECTION 2: AGENT CAROUSEL ═══════════════ */

const EarningsVis = () => (
  <HFShell>
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 12 }}>Earnings Calendar · Live</div>
    {[
      { tick: "TCS",    name: "Tata Consultancy Services", q: "Q2 FY26", date: "Oct 10", status: "Filed",  var: "+4.2% vs est", up: true },
      { tick: "INFY",   name: "Infosys Ltd.",              q: "Q2 FY26", date: "Oct 11", status: "Live",   var: "-1.1% vs est", up: false },
      { tick: "WIPRO",  name: "Wipro Ltd.",                q: "Q2 FY26", date: "Oct 14", status: "Expected", var: "—", up: null },
      { tick: "HCLT",   name: "HCL Technologies",          q: "Q2 FY26", date: "Oct 15", status: "Expected", var: "—", up: null },
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
            background: r.status === "Live" ? "rgba(74,222,128,0.12)" : r.status === "Filed" ? "rgba(0,0,0,0.05)" : "var(--pascal-line)",
            color: r.status === "Live" ? "#16a34a" : r.status === "Filed" ? "var(--pascal-emerald)" : "var(--pascal-fg-muted)",
            display: "block", marginBottom: 3,
          }}>{r.status}</span>
          <span style={{ fontSize: 11, fontWeight: 600, color: r.up === true ? "#16a34a" : r.up === false ? "#dc2626" : "var(--pascal-fg-muted)" }}>{r.var}</span>
        </div>
      </div>
    ))}
    <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 8, background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.12)" }}>
      <div style={{ fontSize: 11.5, fontWeight: 600, color: "var(--pascal-emerald)", marginBottom: 3 }}>Auto-Draft Ready</div>
      <div style={{ fontSize: 11.5, color: "var(--pascal-fg-muted)" }}>TCS variance note drafted · 2 analyst citations · 3 min ago</div>
    </div>
  </HFShell>
);

const ICMemoVis = () => (
  <HFShell>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "var(--pascal-ink)" }}>IC Memo — Reliance Industries Ltd.</div>
      <span style={{ padding: "3px 10px", borderRadius: 999, fontSize: 10.5, fontWeight: 600, background: "rgba(0,0,0,0.05)", color: "var(--pascal-emerald)", border: "1px solid rgba(0,0,0,0.12)" }}>Export ↑</span>
    </div>
    <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
      {["Q4 FY25 Filing", "Broker Notes ×3", "Internal Thesis"].map(s => (
        <span key={s} style={{ padding: "2px 8px", borderRadius: 999, fontSize: 10.5, background: "var(--pascal-mint)", color: "var(--pascal-emerald)", border: "1px solid rgba(0,0,0,0.12)" }}>{s}</span>
      ))}
    </div>
    {[
      { label: "Investment Thesis", body: "Reliance's O2C integration and JioCinema subscriber base provide durable revenue diversification, offsetting commodity cyclicality..." },
      { label: "Key Financials (FY25)", body: null },
      { label: "Key Risks", body: "Telecom regulatory overhang · Global crude price volatility · New commerce execution lag" },
    ].map(({ label, body }) => (
      <div key={label} style={{ padding: "9px 0", borderBottom: "1px solid var(--pascal-line)" }}>
        <div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--pascal-fg-muted)", marginBottom: 5, letterSpacing: "0.04em" }}>{label}</div>
        {body ? (
          <div style={{ fontSize: 12, color: "var(--pascal-ink)", lineHeight: 1.6 }}>{body}</div>
        ) : (
          <div style={{ display: "flex", gap: 8 }}>
            {[["Revenue", "₹9.01L Cr"], ["EBITDA", "₹1.69L Cr"], ["PAT", "₹79,020 Cr"]].map(([k, v]) => (
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
      <span style={{ fontSize: 10, color: "var(--pascal-emerald)", fontWeight: 600 }}>12 sources</span>
    </div>
  </HFShell>
);

const RFPVis = () => (
  <HFShell>
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 12 }}>RFP Response · Answer Library</div>
    {[
      { q: "Describe your investment decision-making process and governance.", status: "Auto-filled", conf: "98%" },
      { q: "What risk controls are applied to portfolio concentration?", status: "Auto-filled", conf: "94%" },
      { q: "How is ESG integrated into your analysis framework?", status: "Needs review", conf: "76%" },
      { q: "Detail your liquidity management framework for open-ended funds.", status: "Auto-filled", conf: "91%" },
    ].map(qa => (
      <div key={qa.q} style={{ padding: "10px 0", borderBottom: "1px solid var(--pascal-line)" }}>
        <div style={{ fontSize: 12, color: "var(--pascal-ink)", lineHeight: 1.5, marginBottom: 6 }}>{qa.q}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{
            fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999,
            background: qa.status === "Auto-filled" ? "rgba(0,0,0,0.05)" : "rgba(245,158,11,0.10)",
            color: qa.status === "Auto-filled" ? "var(--pascal-emerald)" : "#d97706",
            border: `1px solid ${qa.status === "Auto-filled" ? "rgba(0,0,0,0.12)" : "rgba(245,158,11,0.25)"}`,
          }}>{qa.status}</span>
          <span style={{ fontSize: 10.5, color: "var(--pascal-fg-muted)" }}>Confidence: <strong style={{ color: "var(--pascal-ink)" }}>{qa.conf}</strong></span>
        </div>
      </div>
    ))}
    <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
      <span style={{ padding: "5px 14px", borderRadius: 999, fontSize: 11.5, fontWeight: 600, background: "var(--pascal-emerald)", color: "#fff", cursor: "pointer" }}>Review &amp; Export</span>
      <span style={{ padding: "5px 14px", borderRadius: 999, fontSize: 11.5, fontWeight: 500, background: "var(--pascal-paper-soft)", color: "var(--pascal-fg-muted)", border: "1px solid var(--pascal-line)", cursor: "pointer" }}>Edit Draft</span>
    </div>
  </HFShell>
);

const CustomWFVis = () => (
  <HFShell>
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 12 }}>Workflow Builder</div>
    <div style={{ position: "relative", padding: "10px 0" }}>
      {[
        { icon: "📥", label: "Data Fetch", sub: "Bloomberg + FactSet", color: "#3B82F6" },
        { icon: "🔍", label: "KPI Extractor", sub: "From filings", color: "var(--pascal-emerald)" },
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
                <path d="M6 2 L6 12" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3 10 L6 14 L9 10" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  </HFShell>
);

const CAROUSEL_TABS = [
  {
    id: "earnings", label: "Earnings Synthesis",
    headline: "Earnings Synthesis",
    body: "Transcripts, presentations, and filings auto-fetched on release. Variance vs consensus flagged. Drafts ready for analyst review.",
    cta: "Learn More →",
    Visual: EarningsVis,
  },
  {
    id: "memo", label: "IC Memo Builder",
    headline: "IC Memo Builder",
    body: "Filings, broker research, internal theses, and management calls pulled into your firm's IC template. Every claim cited.",
    cta: "Learn More →",
    Visual: ICMemoVis,
  },
  {
    id: "rfp", label: "RFP / DDQ Response",
    headline: "RFP / DDQ Response",
    body: "Answers retrieved from your approved Answer Library. Drafts ready for review. The same questions stop being answered twice.",
    cta: "Learn More →",
    Visual: RFPVis,
  },
  {
    id: "custom", label: "Build Custom Workflows",
    headline: "Build Custom Workflows",
    body: "Workflows tailored to your firm without engineering. Connects to Bloomberg, FactSet, your RMS. End-to-end audit trail.",
    cta: "Book a Demo →",
    Visual: CustomWFVis,
  },
];

const AgentCarousel = () => {
  const [active, setActive] = React.useState(0);
  const tab = CAROUSEL_TABS[active];
  const Visual = tab.Visual;
  return (
    <section style={{ padding: "100px 0 120px", background: "#fff", borderTop: "1px solid var(--pascal-line)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 14 }}>Recommended Agents</span>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-ink)", lineHeight: 1.1 }}>
            The hedge fund research agents Pascal ships with.
          </h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 52, flexWrap: "wrap" }}>
          {CAROUSEL_TABS.map((t, i) => (
            <button key={t.id} onClick={() => setActive(i)} style={{
              padding: "8px 20px", borderRadius: 999, border: "none", fontFamily: "inherit",
              background: active === i ? "var(--pascal-emerald)" : "var(--pascal-paper-soft)",
              color: active === i ? "#fff" : "var(--pascal-fg-muted)",
              fontSize: 13.5, fontWeight: active === i ? 600 : 500,
              cursor: "pointer", transition: "all 180ms ease",
              boxShadow: active === i ? "0 4px 14px -4px rgba(0,0,0,0.15)" : "none",
            }}>{t.label}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "center" }}>
          <div>
            <h3 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.025em", color: "var(--pascal-ink)", lineHeight: 1.1, marginBottom: 20 }}>{tab.headline}</h3>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--pascal-fg-muted)", maxWidth: 480, width: "100%", marginBottom: 28 }}>{tab.body}</p>
            <a href="demo.html" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "var(--pascal-emerald)", textDecoration: "none" }}>
              {tab.cta}
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M3 7 L11 7 M7 3 L11 7 L7 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <Visual />
        </div>
      </div>
    </section>
  );
};

/* ═══════════════ SECTION 3: SDK ═══════════════ */
const SDKSection = () => (
  <section style={{ padding: "100px 0 120px", background: "var(--pascal-dark)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 64, alignItems: "center" }}>
        <div>
          <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 18 }}>Developer Toolkit</span>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-dark-text)", lineHeight: 1.1, marginBottom: 18 }}>
            Build Your Own Agents with the Pascal SDK
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.72, color: "var(--pascal-dark-muted)", marginBottom: 32, width: "100%" }}>
            Python and TypeScript SDKs built on Pascal's Cognitive Engine. For in-house teams shipping proprietary workflows.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
            {[
              { label: "Customizable", body: "Python and TypeScript SDKs on the Cognitive Engine." },
              { label: "Stack-native", body: "Plugs into your RMS, OMS, and proprietary databases." },
              { label: "Document-grade", body: "Reasons over PDFs, scanned filings, and analyst decks." },
              { label: "Sovereign by default", body: "Zero data retention, enforced at the infrastructure layer." },
            ].map(({ label, body }) => (
              <div key={label} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 12, alignItems: "start" }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "var(--pascal-dark-text)" }}>{label}</span>
                <span style={{ fontSize: 14, color: "var(--pascal-dark-muted)", lineHeight: 1.6 }}>{body}</span>
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
              { t: [["    api_token", "#EEFFFF"], ["=", "#89DDFF"], ['"tok_demo_pk_abc123DEF456ghi789"', "#C3E88D"], [",", "#EEFFFF"]] },
              { t: [["    workspace_key", "#EEFFFF"], ["=", "#89DDFF"], ['"ws_sk_test_01a2b3c4"', "#C3E88D"]] },
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
const DemoFeatures = () => (
  <section style={{ padding: "100px 0 120px", background: "var(--pascal-paper-soft)", borderTop: "1px solid var(--pascal-line)" }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 14 }}>Live Demo</span>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-ink)", lineHeight: 1.1, marginBottom: 14 }}>Book a Product Demo</h2>
        <p style={{ fontSize: 16, color: "var(--pascal-fg-muted)", maxWidth: 500, width: "100%", margin: "0 auto" }}>
          See Pascal's workflows live, on your firm's data.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 48 }}>
        {[
          { icon: "📊", title: "Turn Filings Into Structured Research", body: "Filings to cited earnings summaries and KPI tables across any company set, in minutes." },
          { icon: "🤝", title: "Collaborate Across the Investment Team", body: "Share, review, annotate, and vote firm-wide. Full attribution on every action." },
          { icon: "✍️", title: "Own the Final Output", body: "Edit and verify inline. Every cell shows its source. Institutional memory compounds with every deal." },
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
          boxShadow: "0 8px 24px -8px rgba(0,0,0,0.15)",
          transition: "all 180ms ease",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 32px -8px rgba(0,0,0,0.18)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 24px -8px rgba(0,0,0,0.15)"; }}>
          Book a Demo
        </a>
      </div>
    </div>
  </section>
);

/* ═══════════════ SECTION 5: TESTIMONIAL ═══════════════ */
const Testimonial = () => (
  <section style={{ position: "relative", overflow: "hidden", padding: "100px 0", background: "var(--pascal-dark)" }}>
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0,
      background: "radial-gradient(900px 600px at 50% 50%, rgba(0,0,0,0.04), transparent 65%)",
    }} />
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0,
      backgroundImage: ["linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)", "linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)"].join(", "),
      backgroundSize: "72px 72px",
    }} />
    <div className="container" style={{ position: "relative", maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
      <div style={{ fontSize: 48, color: "var(--pascal-emerald)", opacity: 0.5, lineHeight: 1, marginBottom: 28, fontFamily: "Georgia, serif" }}>"</div>
      <blockquote style={{
        fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.75,
        color: "var(--pascal-dark-text)", fontStyle: "italic",
        letterSpacing: "-0.01em", marginBottom: 40, fontWeight: 400,
      }}>
        Pascal sits inside our perimeter. Every output cites its source. Our team runs research on it daily — not as another tool, as the infrastructure underneath.
      </blockquote>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div style={{ width: 48, height: 1, background: "rgba(0,0,0,0.15)" }} />
        <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--pascal-dark-text)" }}>Head of Research &amp; Technology</div>
        <div style={{ fontSize: 12.5, color: "var(--pascal-dark-muted)" }}>Leading Indian Asset Management Company</div>
        <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 28, height: 28, borderRadius: 6, background: "#F47920", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: "#fff" }}>IP</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: "var(--pascal-dark-muted)" }}>ICICI Prudential AMC</span>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════ SECTION 6: INTEGRATIONS ═══════════════ */
const INTEGRATIONS = [
  { name: "Bloomberg",        abbr: "BB",  color: "#FF6600" },
  { name: "FactSet",          abbr: "FS",  color: "#FF0015" },
  { name: "S&P Capital IQ",   abbr: "CIQ", color: "#003087" },
  { name: "Refinitiv",        abbr: "REF", color: "#ED1C24" },
  { name: "SharePoint",       img: "https://cdn.simpleicons.org/microsoftsharepoint/0078D4" },
  { name: "Microsoft Teams",  img: "https://cdn.simpleicons.org/microsoftteams/6264D0" },
  { name: "Outlook",          img: "https://cdn.simpleicons.org/microsoftoutlook/0078D4" },
  { name: "Confluence",       img: "https://cdn.simpleicons.org/confluence/172B4D" },
  { name: "Snowflake",        img: "https://cdn.simpleicons.org/snowflake/29B5E8" },
  { name: "Databricks",       img: "https://cdn.simpleicons.org/databricks/FF3621" },
];

const Integrations = () => (
  <section style={{ padding: "80px 0 100px", background: "#fff", borderTop: "1px solid var(--pascal-line)" }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 52 }}>
        <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 14 }}>Integrations</span>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-ink)", lineHeight: 1.1, marginBottom: 14 }}>Connect to the Stack You Already Run On</h2>
        <p style={{ fontSize: 15.5, color: "var(--pascal-fg-muted)", maxWidth: 520, width: "100%", margin: "0 auto" }}>
          Bloomberg, FactSet, Capital IQ, SharePoint, Snowflake, your CRM. Connected through one MCP Hub.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginBottom: 36 }}>
        {INTEGRATIONS.map(item => (
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
const CaseStudy = () => {
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <section style={{ padding: "80px 0 100px", background: "var(--pascal-paper-soft)", borderTop: "1px solid var(--pascal-line)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 16 }}>Case Study</span>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-ink)", lineHeight: 1.15, marginBottom: 16 }}>
              ICICI Prudential AMC: how India's largest agentic-research deployment went live.
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.72, color: "var(--pascal-fg-muted)", marginBottom: 28, width: "100%" }}>
              Deployed inside ICICI Prudential's governance perimeter. IC memos from days to hours. Zero data sent to third-party LLMs.
            </p>
            <div style={{ padding: "24px", borderRadius: 16, border: "1px solid var(--pascal-line)", background: "#fff" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ width: 40, height: 40, borderRadius: 8, background: "#F47920", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff", flex: "none" }}>IP</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--pascal-ink)" }}>ICICI Prudential AMC</div>
                  <div style={{ fontSize: 11.5, color: "var(--pascal-fg-muted)" }}>One of India's largest fund houses</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {["60% fewer analyst hours during earnings season", "Deployed inside ICICI's private cloud perimeter", "IC memo cycle time: days → hours", "Zero data sent to third-party LLM providers"].map(kpi => (
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
                    { label: "First Name", placeholder: "Priya", col: 1 },
                    { label: "Last Name", placeholder: "Sharma", col: 1 },
                    { label: "Work Email", placeholder: "you@firm.com", col: 2 },
                    { label: "Firm", placeholder: "Your AMC", col: 2 },
                    { label: "Role", placeholder: "Head of Research", col: 2 },
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
const WhyPascal = () => (
  <section style={{ padding: "100px 0 120px", background: "var(--pascal-dark)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 14 }}>Why Pascal</span>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-dark-text)", lineHeight: 1.1 }}>
          Why Leading Hedge Funds Choose Pascal
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 56 }}>
        {[
          { icon: "🛡️", title: "Sovereignty", body: "Data stays on-prem or in your VPC. Zero retention, enforced at the infrastructure layer." },
          { icon: "📋", title: "Accuracy", body: "Every output cites its source — page, line, filing. Audit-ready for SEBI tech risk and internal review." },
          { icon: "🤝", title: "Partnership", body: "We co-develop with your team. Workflows, templates, integrations — shaped to how your firm actually runs research." },
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
          border: "1px solid rgba(0,0,0,0.18)", color: "var(--pascal-emerald)",
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

/* ═══════════════ SECTION 9: FINAL CTA STRIP ═══════════════ */
const FinalCTA = () => (
  <section style={{
    padding: "72px 0",
    background: "linear-gradient(135deg, var(--pascal-dark) 0%, #0d1e0d 50%, var(--pascal-dark) 100%)",
    borderTop: "1px solid rgba(0,0,0,0.07)",
    position: "relative", overflow: "hidden",
  }}>
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(700px 400px at 50% 50%, rgba(0,0,0,0.05), transparent 65%)" }} />
    <div className="container" style={{ position: "relative", textAlign: "center" }}>
      <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-dark-text)", lineHeight: 1.15, marginBottom: 28 }}>
        Run your first Pascal workflow inside your firm in two weeks.
      </h2>
      <a href="demo.html" style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "14px 36px", borderRadius: 999,
        background: "var(--pascal-emerald)", color: "#fff",
        fontSize: 15, fontWeight: 600, textDecoration: "none",
        boxShadow: "0 8px 32px -8px rgba(0,0,0,0.20)",
        transition: "all 180ms ease",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 36px -8px rgba(0,0,0,0.20)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px -8px rgba(0,0,0,0.20)"; }}>
        Request Demo
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <path d="M3 7 L11 7 M7 3 L11 7 L7 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  </section>
);

/* ─── Full page ─── */
const HedgeFundsPage = () => {
  React.useEffect(() => {
    const tick = () => window.lucide && window.lucide.createIcons();
    tick();
    const id = setInterval(tick, 400);
    return () => clearInterval(id);
  }, []);
  return (
    <React.Fragment>
      <Nav />
      <HFHero />
      <AgentCarousel />
      <SDKSection />
      <DemoFeatures />
      <Testimonial />
      <Integrations />
      <WhyPascal />
      <FinalCTA />
      <Footer />
    </React.Fragment>
  );
};

Object.assign(window, { HedgeFundsPage });
