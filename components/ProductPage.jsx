// ProductPage.jsx — Pascal AI Platform page

/* ─── Hero ─── */
const ProductHero = () => (
  <section style={{
    position: "relative", overflow: "hidden",
    paddingTop: 140, paddingBottom: 120,
    background: "var(--pascal-dark)", textAlign: "center",
  }}>
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0,
      backgroundImage: [
        "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)",
        "linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
      ].join(", "),
      backgroundSize: "72px 72px",
    }} />
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0,
      background: "none",
    }} />
    <div className="container" style={{ position: "relative" }}>
      <span style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        fontSize: 11.5, fontWeight: 500, letterSpacing: "0.18em",
        textTransform: "uppercase", color: "var(--pascal-accent)", marginBottom: 28,
      }}>
        <span style={{ width: 24, height: 1, background: "rgba(255,255,255,0.2)" }} />
        THE PASCAL PLATFORM
        <span style={{ width: 24, height: 1, background: "rgba(255,255,255,0.2)" }} />
      </span>
      <h1 style={{
        fontSize: "clamp(38px, 5.5vw, 70px)", fontWeight: 700,
        letterSpacing: "-0.04em", color: "var(--pascal-dark-text)",
        lineHeight: 1.06, maxWidth: 860, margin: "0 auto 28px",
      }}>
        The agentic research platform for<br /><span style={{ color: "var(--pascal-dark-text)" }}>institutional investors.</span>
      </h1>
      <p style={{
        fontSize: 17, lineHeight: 1.7, color: "var(--pascal-dark-muted)",
        maxWidth: 680, width: "100%", margin: "0 auto 44px",
      }}>
        Pascal plugs into Bloomberg, FactSet, your RMS, your data lake, and your LLM of choice. Deploy the full platform or layer in the components you need.
      </p>
      <a href="demo.html" style={{
        display: "inline-flex", alignItems: "center", gap: 9,
        padding: "14px 34px", borderRadius: 999,
        background: "var(--pascal-accent)",
        border: "1px solid var(--pascal-accent)",
        color: "#fff", fontSize: 15, fontWeight: 600,
        textDecoration: "none", transition: "all 200ms ease",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "var(--pascal-accent-hover)"; e.currentTarget.style.borderColor = "var(--pascal-accent-hover)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "var(--pascal-accent)"; e.currentTarget.style.borderColor = "var(--pascal-accent)"; }}>
        Request Demo
      </a>
    </div>
  </section>
);

/* ─── Who This Is For (Personas) ─── */
const PERSONAS = [
  {
    icon: "bar-chart-2",
    role: "Portfolio Manager",
    headline: "Run your morning pack before markets open.",
    body: "Overnight macro, earnings surprises, and portfolio alerts — assembled automatically and cited to the source. Your conviction call, not someone else's summary.",
    tags: ["Morning Packs", "Catalyst Alerts", "Portfolio Monitor"],
    accent: "#76a9fa",
  },
  {
    icon: "search",
    role: "Research Analyst",
    headline: "First-draft IC memo in the time it takes to read a filing.",
    body: "Pascal reads the 10-K, the transcript, four broker notes, and your internal thesis — and returns a structured memo with every claim pinned to a source line.",
    tags: ["Earnings Synthesis", "IC Memos", "Company Primers"],
    accent: "#34d399",
  },
  {
    icon: "cpu",
    role: "CTO / Head of Technology",
    headline: "Deploy enterprise AI without touching your data perimeter.",
    body: "On-prem or VPC-native. SOC 2 certified. Model-agnostic. Pascal plugs into Bloomberg, Snowflake, and your RMS without requiring a single API key to leave your network.",
    tags: ["SOC 2 Type II", "VPC Deployment", "MCP Native"],
    accent: "#f59e0b",
  },
  {
    icon: "shield",
    role: "Chief Compliance Officer",
    headline: "Every output is auditable, attributed, and regulator-ready.",
    body: "Full citation trails on every research output. RBAC enforced at the infrastructure layer. Audit logs exportable for SEC, FINRA, and MRM review — with zero manual effort.",
    tags: ["Audit Trail", "RBAC", "Source Citations"],
    accent: "#c4b5fd",
  },
];

const PersonasSection = () => (
  <section style={{
    background: "var(--pascal-paper-soft)",
    borderTop: "1px solid var(--pascal-line)",
    borderBottom: "1px solid var(--pascal-line)",
    padding: "80px 0",
  }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 52 }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase",
          color: "var(--pascal-accent)", marginBottom: 18,
        }}>
          <span style={{ width: 20, height: 1, background: "var(--pascal-accent)", opacity: 0.5 }} />
          Who This Is For
          <span style={{ width: 20, height: 1, background: "var(--pascal-accent)", opacity: 0.5 }} />
        </span>
        <h2 style={{
          fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700,
          letterSpacing: "-0.03em", color: "var(--pascal-ink)",
          lineHeight: 1.1, margin: "0 auto",
        }}>
          Built for every stakeholder in the investment process.
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
        {PERSONAS.map((p) => (
          <div key={p.role} style={{
            background: "var(--pascal-paper-card)",
            border: "1px solid var(--pascal-line)",
            borderRadius: 16,
            padding: "32px 32px 28px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            display: "flex", flexDirection: "column", gap: 16,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{
                width: 44, height: 44, borderRadius: 10,
                background: p.accent + "18",
                border: "1px solid " + p.accent + "44",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                flex: "none",
              }}>
                <i data-lucide={p.icon} style={{ width: 20, height: 20, color: p.accent }} />
              </span>
              <div style={{
                fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", color: "var(--pascal-fg-muted)",
              }}>{p.role}</div>
            </div>
            <h3 style={{
              fontSize: 20, fontWeight: 700, color: "var(--pascal-ink)",
              letterSpacing: "-0.02em", lineHeight: 1.25, margin: 0,
            }}>{p.headline}</h3>
            <p style={{
              fontSize: 15, lineHeight: 1.65, color: "var(--pascal-fg-muted)", margin: 0,
            }}>{p.body}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {p.tags.map(t => (
                <span key={t} style={{
                  padding: "4px 12px", borderRadius: 999,
                  fontSize: 11.5, fontWeight: 600,
                  background: p.accent + "14",
                  color: p.accent,
                  border: "1px solid " + p.accent + "30",
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Sub-Nav ─── */
const SUBNAV_ITEMS = [
  { id: "agent-control",       label: "Agent Control Center" },
  { id: "mcp-connectors",      label: "Finance Ready MCP Connectors" },
  { id: "financial-agents",    label: "Financial Agents" },
  { id: "context-memory",      label: "Context & Memory Graph" },
  { id: "frontend",            label: "Pascal AI Front End" },
  { id: "api-sdk",             label: "API & SDK" },
];

const ProductSubNav = () => {
  const [active, setActive] = React.useState("agent-control");
  React.useEffect(() => {
    const onScroll = () => {
      for (const item of [...SUBNAV_ITEMS].reverse()) {
        const el = document.getElementById(item.id);
        if (el && window.scrollY >= el.offsetTop - 160) { setActive(item.id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div style={{
      position: "sticky", top: 76, zIndex: 90,
      background: "rgba(15,14,12,0.94)",
      backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(228,237,216,0.07)",
    }}>
      <div className="container">
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 4, padding: "10px 0", overflowX: "auto", scrollbarWidth: "none",
        }}>
          {SUBNAV_ITEMS.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)} style={{
              padding: "7px 18px", borderRadius: 999, border: "none",
              background: active === item.id ? "var(--pascal-emerald)" : "transparent",
              color: active === item.id ? "#fff" : "var(--pascal-dark-muted)",
              fontSize: 13, fontWeight: active === item.id ? 600 : 500,
              fontFamily: "inherit", cursor: "pointer", whiteSpace: "nowrap",
              transition: "all 160ms ease",
            }}>{item.label}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Shared browser shell (light — matches site's product visuals) ─── */
const BrowserShell = ({ children, minHeight = 340 }) => (
  <div style={{
    borderRadius: 14, overflow: "hidden",
    border: "1px solid rgba(26,36,20,0.10)",
    background: "#fff",
    boxShadow: "0 24px 64px -16px rgba(26,36,20,0.16), 0 4px 16px -4px rgba(26,36,20,0.07)",
    minHeight,
  }}>
    <div style={{
      display: "flex", alignItems: "center", gap: 7,
      padding: "11px 16px", background: "#f5f4f2",
      borderBottom: "1px solid rgba(26,36,20,0.08)",
    }}>
      {["#FF5F57","#FFBD2E","#28C840"].map(c => (
        <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, display: "block", flex: "none" }} />
      ))}
      <div style={{ flex: 1, height: 20, borderRadius: 4, background: "rgba(26,36,20,0.07)", marginLeft: 8 }} />
    </div>
    <div style={{ padding: 22 }}>{children}</div>
  </div>
);

/* ─── Reusable interactive two-column section ─── */
const InteractiveTwoCol = ({ id, theme = "light", eyebrow, title, subtitle, blocks, visuals }) => {
  const [active, setActive] = React.useState(0);
  const dark = theme === "dark";
  const Visual = visuals[active];
  return (
    <section id={id} style={{
      padding: "110px 0 130px",
      background: dark ? "var(--pascal-dark)" : "var(--pascal-paper-soft)",
      borderTop: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "var(--pascal-line)"}`,
    }}>
      <div className="container">
        <div style={{ marginBottom: 68 }}>
          <span style={{
            fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em",
            textTransform: "uppercase", color: "var(--pascal-emerald)",
            display: "block", marginBottom: 16,
          }}>{eyebrow}</span>
          <h2 style={{
            fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 700,
            letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16,
            color: dark ? "var(--pascal-dark-text)" : "var(--pascal-ink)",
          }}>{title}</h2>
          {subtitle && <p style={{
            fontSize: 16, lineHeight: 1.7, maxWidth: 560, width: "100%",
            color: dark ? "var(--pascal-dark-muted)" : "var(--pascal-fg-muted)",
          }}>{subtitle}</p>}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 56, alignItems: "start" }}>
          {/* LEFT */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {blocks.map((block, i) => (
              <div key={i} onClick={() => setActive(i)} style={{
                padding: "22px 26px", borderRadius: 12, cursor: "pointer",
                borderLeft: `3px solid ${i === active ? "var(--pascal-emerald)" : (dark ? "rgba(255,255,255,0.08)" : "var(--pascal-line)")}`,
                background: i === active ? (dark ? "rgba(0,0,0,0.04)" : "rgba(0,0,0,0.03)") : "transparent",
                transition: "all 220ms ease",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: i === active ? 11 : 0 }}>
                  <span style={{
                    fontSize: 10.5, fontWeight: 700, letterSpacing: "0.10em",
                    color: i === active ? "var(--pascal-emerald)" : (dark ? "rgba(255,255,255,0.25)" : "var(--pascal-fg-muted)"),
                    transition: "color 220ms ease",
                  }}>{block.num}</span>
                  <h3 style={{
                    fontSize: 15.5, fontWeight: 700, margin: 0, letterSpacing: "-0.015em",
                    color: i === active ? (dark ? "var(--pascal-dark-text)" : "var(--pascal-ink)") : (dark ? "rgba(255,255,255,0.35)" : "var(--pascal-fg-muted)"),
                    transition: "color 220ms ease",
                  }}>{block.title}</h3>
                </div>
                {i === active && (
                  <>
                    <p style={{
                      fontSize: 14, lineHeight: 1.72, margin: 0, width: "100%",
                      color: dark ? "var(--pascal-dark-muted)" : "var(--pascal-fg-muted)",
                    }}>{block.body}</p>
                    {block.cta && (
                      <a href="#" style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        marginTop: 14, fontSize: 13, fontWeight: 600,
                        color: "var(--pascal-emerald)", textDecoration: "none",
                      }}>
                        {block.cta}
                      </a>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          {/* RIGHT */}
          <div style={{ position: "sticky", top: 156 }}><Visual /></div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   SECTION 1: AGENT CONTROL CENTER
═══════════════════════════════════════ */

const SourceSelectorVisual = () => (
  <BrowserShell>
    <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 12 }}>Select Source</div>
    <div style={{
      display: "flex", alignItems: "center", gap: 8, padding: "9px 12px", borderRadius: 8,
      background: "var(--pascal-paper-soft)", border: "1.5px solid var(--pascal-emerald)", marginBottom: 18,
    }}>
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <circle cx="6" cy="6" r="4" stroke="var(--pascal-fg-muted)" strokeWidth="1.4"/>
        <path d="M9 9 L12.5 12.5" stroke="var(--pascal-fg-muted)" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
      <span style={{ fontSize: 13, color: "var(--pascal-ink)", flex: 1 }}>Goldman Sachs</span>
      <span style={{ fontSize: 10, color: "var(--pascal-emerald)", fontWeight: 700, letterSpacing: "0.04em" }}>SELECTED</span>
    </div>
    <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 10 }}>Document Types</div>
    {[
      { label: "Annual Reports", checked: true },
      { label: "Earnings Transcripts", checked: true },
      { label: "Analyst Reports", checked: false },
      { label: "SEC Filings", checked: false },
    ].map(({ label, checked }) => (
      <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid var(--pascal-line)" }}>
        <span style={{
          width: 16, height: 16, borderRadius: 4, flex: "none",
          background: checked ? "var(--pascal-emerald)" : "transparent",
          border: checked ? "none" : "1.5px solid var(--pascal-line-strong)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {checked && <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5 L3.5 6.5 L7.5 2.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
        </span>
        <span style={{ fontSize: 13, color: checked ? "var(--pascal-ink)" : "var(--pascal-fg-muted)" }}>{label}</span>
      </div>
    ))}
    <div style={{ marginTop: 18, padding: "14px 12px", borderRadius: 9, border: "1.5px dashed rgba(0,0,0,0.15)", background: "rgba(0,0,0,0.03)", textAlign: "center" }}>
      <div style={{ fontSize: 18, marginBottom: 5 }}>📁</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--pascal-emerald)", marginBottom: 3 }}>My Vault</div>
      <div style={{ fontSize: 11.5, color: "var(--pascal-fg-muted)" }}>Drop files or browse to upload</div>
    </div>
  </BrowserShell>
);

const ArchitectureVisual = () => {
  const Box = ({ label, sub, accent }) => (
    <div style={{
      padding: "9px 12px", borderRadius: 9, flex: 1, textAlign: "center",
      background: accent ? "rgba(0,0,0,0.05)" : "var(--pascal-paper-soft)",
      border: `1.5px solid ${accent ? "var(--pascal-emerald)" : "var(--pascal-line)"}`,
    }}>
      <div style={{ fontSize: 12.5, fontWeight: 600, color: accent ? "var(--pascal-emerald)" : "var(--pascal-ink)" }}>{label}</div>
      {sub && <div style={{ fontSize: 10.5, color: "var(--pascal-fg-muted)", marginTop: 3 }}>{sub}</div>}
    </div>
  );
  return (
    <BrowserShell>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 8, textAlign: "center" }}>LLM Layer</div>
      <div style={{ display: "flex", gap: 8 }}>
        {["Claude 4.7", "GPT-5.5", "Gemini 3.1"].map(m => <Box key={m} label={m} />)}
      </div>
      <div style={{ height: 8 }} />
      <Box label="Pascal Cognitive Engine" sub="Routing · Audit · Citations · Governance" accent />
      <div style={{ height: 8 }} />
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 8, textAlign: "center" }}>Finance Data Layer</div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {["Bloomberg", "FactSet", "Broker Research", "Internal Docs", "RMS"].map(t => (
          <div key={t} style={{ padding: "6px 10px", borderRadius: 7, background: "var(--pascal-paper-soft)", border: "1px solid var(--pascal-line)", fontSize: 11.5, fontWeight: 600, color: "var(--pascal-fg-muted)" }}>{t}</div>
        ))}
      </div>
    </BrowserShell>
  );
};

const ModelDropdownVisual = () => {
  const [sel, setSel] = React.useState("Auto Mode");
  const MODELS = [
    { label: "Auto Mode",   desc: "Optimal model selected per task" },
    { label: "Claude-4.7",  desc: "Long-form reasoning & analysis" },
    { label: "GPT-5.5",     desc: "Fast synthesis & summarisation" },
    { label: "Gemini-3.1",  desc: "Multimodal & structured inputs" },
  ];
  return (
    <BrowserShell>
      <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 12 }}>Model Selection</div>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 14px", borderRadius: 9, marginBottom: 12,
        background: "var(--pascal-paper-soft)", border: "1.5px solid var(--pascal-emerald)",
      }}>
        <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--pascal-ink)" }}>{sel}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 4.5 L6 7.5 L9 4.5" stroke="var(--pascal-fg-muted)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {MODELS.map(({ label, desc }) => (
          <div key={label} onClick={() => setSel(label)} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "10px 14px", borderRadius: 9, cursor: "pointer",
            background: sel === label ? "rgba(0,0,0,0.04)" : "var(--pascal-paper-soft)",
            border: `1px solid ${sel === label ? "rgba(0,0,0,0.14)" : "var(--pascal-line)"}`,
            transition: "all 140ms ease",
          }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: sel === label ? "var(--pascal-ink)" : "var(--pascal-fg-muted)" }}>{label}</div>
              <div style={{ fontSize: 11.5, color: "var(--pascal-fg-muted)", marginTop: 2 }}>{desc}</div>
            </div>
            <span style={{
              width: 18, height: 18, borderRadius: "50%", flex: "none",
              background: sel === label ? "var(--pascal-emerald)" : "var(--pascal-line)",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 140ms ease",
            }}>
              {sel === label && <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5 L3.5 6.5 L7.5 2.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            </span>
          </div>
        ))}
      </div>
    </BrowserShell>
  );
};

const AgentControlCenter = () => (
  <InteractiveTwoCol
    id="agent-control"
    theme="light"
    eyebrow="Agent Control Center"
    title="One platform. Every researcher."
    subtitle="One orchestration layer for every agent, every query, every data flow — all inside your perimeter."
    blocks={[
      { num: "01", title: "Manage Sources and Permissions", body: "Scope every query by company, document type, integration, or private vault. RBAC and audit logs enforced on every action." },
      { num: "02", title: "Secure Workflow Routing", body: "Queries move between agents, sources, and models without leaving your perimeter. Audit logs and citations are built in." },
      { num: "03", title: "Choose Any Model", body: "Route research to Claude, GPT, or Gemini per task. Auto Mode picks the right model when you don't." },
    ]}
    visuals={[SourceSelectorVisual, ArchitectureVisual, ModelDropdownVisual]}
  />
);

/* ═══════════════════════════════════════
   SECTION 2: FINANCE READY MCP CONNECTORS
═══════════════════════════════════════ */

const CONNECTIONS = [
  { name: "SharePoint",  img: "https://cdn.simpleicons.org/microsoftsharepoint/0078D4" },
  { name: "OneDrive",    img: "https://cdn.simpleicons.org/microsoftonedrive/0078D4" },
  { name: "Google Drive",img: "https://cdn.simpleicons.org/googledrive/4285F4" },
  { name: "Box",         img: "https://cdn.simpleicons.org/box/0061D5" },
  { name: "Snowflake",   img: "https://cdn.simpleicons.org/snowflake/29B5E8" },
  { name: "Databricks",  img: "https://cdn.simpleicons.org/databricks/FF3621" },
  { name: "Notion",      img: "https://cdn.simpleicons.org/notion/000000" },
  { name: "DealCloud",   abbr: "DC", color: "#1A3A5C" },
];

const ConnectionsVisual = () => (
  <BrowserShell minHeight={380}>
    <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 0, minHeight: 300 }}>
      {/* Sidebar */}
      <div style={{ borderRight: "1px solid var(--pascal-line)", paddingRight: 14, marginRight: 18 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 10 }}>My Vault</div>
        {["Uploaded Files", "Generated Results"].map(item => (
          <div key={item} style={{ fontSize: 12, color: "var(--pascal-fg-muted)", padding: "6px 0", borderBottom: "1px solid var(--pascal-line)" }}>{item}</div>
        ))}
        <div style={{
          fontSize: 12, fontWeight: 600, color: "var(--pascal-emerald)",
          padding: "6px 0", marginTop: 2,
          borderBottom: "1px solid var(--pascal-line)",
        }}>Connectors</div>
      </div>
      {/* Grid */}
      <div>
        <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 12 }}>Available Connections</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {CONNECTIONS.map(conn => (
            <div key={conn.name} style={{
              display: "flex", alignItems: "center", gap: 8, padding: "8px 10px",
              borderRadius: 8, border: "1px solid var(--pascal-line)",
              background: "var(--pascal-paper-soft)",
            }}>
              {conn.img ? (
                <img src={conn.img} alt={conn.name} style={{ width: 16, height: 16, objectFit: "contain", flex: "none" }} onError={(e) => { e.target.style.display = "none"; }} />
              ) : (
                <span style={{ width: 16, height: 16, borderRadius: 3, background: conn.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, fontWeight: 700, color: "#fff", flex: "none" }}>{conn.abbr}</span>
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11.5, fontWeight: 600, color: "var(--pascal-ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{conn.name}</div>
                <div style={{ fontSize: 10, color: "var(--pascal-emerald)", fontWeight: 600 }}>Connected ✓</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </BrowserShell>
);

const AuditOutputVisual = () => (
  <BrowserShell>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--pascal-ink)" }}>KYC Dossier — Blackstone Group</div>
        <div style={{ fontSize: 11, color: "var(--pascal-fg-muted)", marginTop: 2 }}>Generated · Nov 14, 2025 · 3 sources</div>
      </div>
      <span style={{
        padding: "4px 10px", borderRadius: 999, fontSize: 10.5, fontWeight: 600,
        background: "rgba(0,0,0,0.05)", color: "var(--pascal-emerald)",
        border: "1px solid rgba(0,0,0,0.12)",
      }}>Export ↑</span>
    </div>
    <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
      {["Bloomberg", "SEC Filing", "Internal Notes"].map(src => (
        <span key={src} style={{ padding: "3px 9px", borderRadius: 999, fontSize: 11, fontWeight: 500, background: "var(--pascal-mint)", color: "var(--pascal-emerald)", border: "1px solid rgba(0,0,0,0.12)" }}>{src}</span>
      ))}
    </div>
    {[
      { label: "Entity Overview", val: "Blackstone Group Inc. is a leading global alternative asset management firm with $1T+ in AUM across PE, RE, credit, and hedge funds.", cite: true },
      { label: "Key Shareholders", val: "22.4% — Blackstone Management Partners LLC", cite: true },
      { label: "Business Segments", val: "Private Equity, Real Estate, Hedge Fund Solutions, Credit & Insurance", cite: false },
    ].map(({ label, val, cite }) => (
      <div key={label} style={{ padding: "10px 0", borderBottom: "1px solid var(--pascal-line)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "var(--pascal-fg-muted)", letterSpacing: "0.04em" }}>{label}</span>
          {cite && <span style={{ fontSize: 10, color: "var(--pascal-emerald)", fontWeight: 600, cursor: "pointer" }}>source ↑</span>}
        </div>
        <div style={{ fontSize: 12.5, color: "var(--pascal-ink)", lineHeight: 1.5 }}>{val}</div>
      </div>
    ))}
    <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
      {["✓ Source Cited", "✓ Audit Trail", "✓ Compliance Ready"].map(tag => (
        <span key={tag} style={{ padding: "4px 10px", borderRadius: 999, fontSize: 10.5, fontWeight: 600, background: "rgba(0,0,0,0.04)", color: "var(--pascal-emerald)", border: "1px solid rgba(0,0,0,0.12)" }}>{tag}</span>
      ))}
    </div>
  </BrowserShell>
);

const MCPConnectors = () => (
  <InteractiveTwoCol
    id="mcp-connectors"
    theme="dark"
    eyebrow="Finance Ready MCP Connectors"
    title="The data stack your investment team already pays for, connected."
    subtitle="Connectors built for institutional finance data — Bloomberg, FactSet, SharePoint, Snowflake, your CRM. Not retrofitted from consumer tools."
    blocks={[
      { num: "01", title: "Ready Integrations Out of the Box", body: "SharePoint, OneDrive, Google Drive, Box, Snowflake, Databricks, DealCloud, Notion — connected out of the box. No bespoke pipelines." },
      { num: "02", title: "Purpose-Built for Financial Workflows", body: "Built for the workflows investment teams actually run: KYC, source-of-wealth, due diligence, portfolio updates, earnings, IC memo prep." },
    ]}
    visuals={[ConnectionsVisual, AuditOutputVisual]}
  />
);

/* ═══════════════════════════════════════
   SECTION 3: FINANCIAL AGENTS
═══════════════════════════════════════ */

const AllAgentsVisual = () => {
  const AGENTS = [
    { icon: "📊", name: "Generative Matrix", desc: "Cross-company KPI extraction", color: "#519872" },
    { icon: "🔍", name: "KPI Extractor", desc: "Filing-level financial metrics", color: "#3B82F6" },
    { icon: "📄", name: "Research Memo Generator", desc: "Analyst-grade memo drafting", color: "#8B5CF6" },
    { icon: "📈", name: "Bull-Bear Analyzer", desc: "Thesis generation & scoring", color: "#F59E0B" },
  ];
  return (
    <BrowserShell>
      <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
        {["All Agents", "My Agents", "Shared"].map((tab, i) => (
          <span key={tab} style={{
            padding: "5px 12px", borderRadius: 999, fontSize: 12, fontWeight: i === 0 ? 600 : 500, cursor: "pointer",
            background: i === 0 ? "var(--pascal-emerald)" : "var(--pascal-paper-soft)",
            color: i === 0 ? "#fff" : "var(--pascal-fg-muted)",
            border: `1px solid ${i === 0 ? "var(--pascal-emerald)" : "var(--pascal-line)"}`,
          }}>{tab}</span>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {AGENTS.map(agent => (
          <div key={agent.name} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "12px 14px",
            borderRadius: 10, border: "1px solid var(--pascal-line)", background: "var(--pascal-paper-soft)",
          }}>
            <span style={{
              width: 36, height: 36, borderRadius: 9, fontSize: 17,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: agent.color + "18", flex: "none",
            }}>{agent.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--pascal-ink)" }}>{agent.name}</div>
              <div style={{ fontSize: 11.5, color: "var(--pascal-fg-muted)" }}>{agent.desc}</div>
            </div>
            <span style={{
              padding: "4px 12px", borderRadius: 999, fontSize: 11.5, fontWeight: 600,
              background: "rgba(0,0,0,0.05)", color: "var(--pascal-emerald)",
              border: "1px solid rgba(0,0,0,0.12)", cursor: "pointer", whiteSpace: "nowrap",
            }}>Run</span>
          </div>
        ))}
      </div>
    </BrowserShell>
  );
};

const WorkflowsVisual = () => {
  const [activeTab, setActiveTab] = React.useState("All");
  const TABS = ["All", "Earnings", "Research", "Due Diligence"];
  const WORKFLOWS = [
    { icon: "📋", name: "Earnings Summary", tag: "Earnings", duration: "~2 min" },
    { icon: "🏦", name: "IPO Prospectus Analysis", tag: "Research", duration: "~4 min" },
    { icon: "⚖️", name: "Bull-Bear Analysis", tag: "Research", duration: "~3 min" },
    { icon: "🔎", name: "Company Research Pack", tag: "Research", duration: "~5 min" },
    { icon: "✅", name: "KYC Dossier", tag: "Due Diligence", duration: "~6 min" },
  ];
  const filtered = activeTab === "All" ? WORKFLOWS : WORKFLOWS.filter(w => w.tag === activeTab);
  return (
    <BrowserShell>
      <div style={{ display: "flex", gap: 4, marginBottom: 14, flexWrap: "wrap" }}>
        {TABS.map(tab => (
          <span key={tab} onClick={() => setActiveTab(tab)} style={{
            padding: "5px 11px", borderRadius: 999, fontSize: 11.5, fontWeight: activeTab === tab ? 600 : 500, cursor: "pointer",
            background: activeTab === tab ? "var(--pascal-emerald)" : "var(--pascal-paper-soft)",
            color: activeTab === tab ? "#fff" : "var(--pascal-fg-muted)",
            border: `1px solid ${activeTab === tab ? "var(--pascal-emerald)" : "var(--pascal-line)"}`,
            transition: "all 140ms ease",
          }}>{tab}</span>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {filtered.map(wf => (
          <div key={wf.name} style={{
            display: "flex", alignItems: "center", gap: 10, padding: "10px 12px",
            borderRadius: 9, border: "1px solid var(--pascal-line)", background: "var(--pascal-paper-soft)",
          }}>
            <span style={{ fontSize: 16, flex: "none" }}>{wf.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--pascal-ink)" }}>{wf.name}</div>
              <div style={{ fontSize: 11, color: "var(--pascal-fg-muted)" }}>{wf.duration}</div>
            </div>
            <span style={{ padding: "3px 10px", borderRadius: 999, fontSize: 11, background: "rgba(0,0,0,0.04)", color: "var(--pascal-emerald)", border: "1px solid rgba(0,0,0,0.12)", cursor: "pointer" }}>Run</span>
          </div>
        ))}
      </div>
    </BrowserShell>
  );
};

const EarningsCalendarVisual = () => {
  const EVENTS = [
    { ticker: "META",    name: "Meta Platforms Inc.",       type: "Q3 Results", date: "Nov 12", exchange: "NASDAQ", status: "upcoming" },
    { ticker: "NVDA",    name: "Nvidia Corporation",        type: "Q3 Results", date: "Nov 13", exchange: "NASDAQ", status: "upcoming" },
    { ticker: "JPM",     name: "JPMorgan Chase & Co.",      type: "Q3 Results", date: "Nov 14", exchange: "NYSE", status: "today" },
    { ticker: "V",       name: "Visa Inc.",                 type: "Q3 Results", date: "Nov 15", exchange: "NYSE", status: "upcoming" },
  ];
  const statusColor = { today: "#519872", upcoming: "#F59E0B" };
  return (
    <BrowserShell>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--pascal-ink)" }}>Earnings Calendar</div>
        <span style={{ fontSize: 11, color: "var(--pascal-fg-muted)" }}>Nov 2025 · 4 events</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {EVENTS.map(ev => (
          <div key={ev.ticker} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "10px 12px",
            borderRadius: 9, border: "1px solid var(--pascal-line)", background: "var(--pascal-paper-soft)",
            borderLeft: `3px solid ${statusColor[ev.status]}`,
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "var(--pascal-emerald)", letterSpacing: "0.04em" }}>{ev.ticker}</span>
                <span style={{ fontSize: 10, color: "var(--pascal-fg-muted)", padding: "1px 6px", borderRadius: 4, background: "var(--pascal-line)", fontWeight: 600 }}>{ev.exchange}</span>
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--pascal-ink)" }}>{ev.name}</div>
              <div style={{ fontSize: 11, color: "var(--pascal-fg-muted)", marginTop: 2 }}>{ev.type}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--pascal-ink)" }}>{ev.date}</div>
              {ev.status === "today" && <div style={{ fontSize: 10, color: statusColor.today, fontWeight: 600 }}>Today</div>}
            </div>
          </div>
        ))}
      </div>
    </BrowserShell>
  );
};

const FinancialAgents = () => (
  <InteractiveTwoCol
    id="financial-agents"
    theme="light"
    eyebrow="Financial Agents"
    title="25+ research agents purpose-built for institutional investors."
    subtitle="Pre-built agents, composable workflows, real-time catalyst tracking. All inside your governance perimeter."
    blocks={[
      { num: "01", title: "Run Pre-Built Investment Agents", body: "KPI extraction, research memos on your house template, generative matrices across company sets. Live on day one.", cta: "Explore Agent Library" },
      { num: "02", title: "Compose Workflows for Every Research Cadence", body: "Earnings Summary, IPO Prospectus Analysis, Bull-Bear, Company Research Pack, KYC Dossier. Run them as-is or compose your own.", cta: "Browse Workflows" },
      { num: "03", title: "Stay Ahead of Every Catalyst", body: "Pascal's calendar auto-fetches filings, transcripts, and investor decks the moment they drop.", cta: "See Earnings Console" },
    ]}
    visuals={[AllAgentsVisual, WorkflowsVisual, EarningsCalendarVisual]}
  />
);

/* ═══════════════════════════════════════
   SECTION 4: CONTEXT & MEMORY GRAPH
═══════════════════════════════════════ */

const MemoryGraphVisual = () => {
  const nodes = [
    { x: 50, y: 50, label: "NVDA Thesis", type: "memo", r: 28 },
    { x: 75, y: 25, label: "Q3 Earnings", type: "filing", r: 20 },
    { x: 75, y: 75, label: "Analyst Note", type: "doc", r: 20 },
    { x: 25, y: 25, label: "Sector View", type: "memo", r: 22 },
    { x: 25, y: 75, label: "Risk Flag", type: "alert", r: 18 },
    { x: 88, y: 50, label: "10-K Filing", type: "filing", r: 16 },
  ];
  const edges = [[0,1],[0,2],[0,3],[0,4],[1,5],[2,5]];
  const typeColor = { memo: "var(--pascal-emerald)", filing: "#3B82F6", doc: "#8B5CF6", alert: "#F59E0B" };
  return (
    <BrowserShell minHeight={360}>
      <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 12 }}>Research Memory Graph</div>
      <div style={{ position: "relative", height: 220 }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }} viewBox="0 0 100 100" preserveAspectRatio="none">
          {edges.map(([a, b], i) => (
            <line key={i}
              x1={`${nodes[a].x}%`} y1={`${nodes[a].y}%`}
              x2={`${nodes[b].x}%`} y2={`${nodes[b].y}%`}
              stroke="var(--pascal-line)" strokeWidth="0.8"
            />
          ))}
        </svg>
        {nodes.map((n, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${n.x}%`, top: `${n.y}%`,
            transform: "translate(-50%, -50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
          }}>
            <div style={{
              width: n.r * 2, height: n.r * 2, borderRadius: "50%",
              background: typeColor[n.type] + "18",
              border: `1.5px solid ${typeColor[n.type]}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 10, fontWeight: 700, color: typeColor[n.type],
              textAlign: "center", padding: 4, lineHeight: 1.2,
            }}>{n.label.split(" ")[0]}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, display: "flex", gap: 6, flexWrap: "wrap" }}>
        {[["Research Memo","var(--pascal-emerald)"],["Filing","#3B82F6"],["Document","#8B5CF6"],["Risk Alert","#F59E0B"]].map(([l, c]) => (
          <span key={l} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10.5 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: c, flex: "none" }} />
            <span style={{ color: "var(--pascal-fg-muted)" }}>{l}</span>
          </span>
        ))}
      </div>
    </BrowserShell>
  );
};

const EntityTimelineVisual = () => (
  <BrowserShell>
    <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 12 }}>Entity Memory — Nvidia Corp.</div>
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {[
        { date: "Nov 14", type: "Memo", title: "Q3 Earnings Analysis", cite: "4 sources", color: "var(--pascal-emerald)" },
        { date: "Oct 28", type: "Alert", title: "Supply chain risk flagged", cite: "Bloomberg", color: "#F59E0B" },
        { date: "Oct 10", type: "Filing", title: "10-Q ingested & parsed", cite: "SEC EDGAR", color: "#3B82F6" },
        { date: "Sep 22", type: "Note", title: "Broker report summarized", cite: "GS Research", color: "#8B5CF6" },
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 12, paddingBottom: 14, paddingTop: i === 0 ? 0 : 14, borderTop: i > 0 ? "1px solid var(--pascal-line)" : "none", alignItems: "flex-start" }}>
          <div style={{ flex: "none", textAlign: "right", minWidth: 42 }}>
            <div style={{ fontSize: 10, color: "var(--pascal-fg-muted)", fontWeight: 600 }}>{item.date}</div>
          </div>
          <div style={{ flex: "none", width: 8, height: 8, borderRadius: "50%", background: item.color, marginTop: 3, flex: "none" }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
              <span style={{ fontSize: 10, fontWeight: 700, padding: "1px 7px", borderRadius: 999, background: item.color + "18", color: item.color }}>{item.type}</span>
            </div>
            <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--pascal-ink)", lineHeight: 1.3 }}>{item.title}</div>
            <div style={{ fontSize: 11, color: "var(--pascal-fg-muted)", marginTop: 2 }}>Source: {item.cite}</div>
          </div>
        </div>
      ))}
    </div>
  </BrowserShell>
);

const ContextMemorySection = () => (
  <InteractiveTwoCol
    id="context-memory"
    theme="dark"
    eyebrow="Context & Memory Graph"
    title="Your research compounds. Every query gets smarter."
    subtitle="Pascal builds a persistent knowledge graph across every document, filing, and output your team has ever touched."
    blocks={[
      { num: "01", title: "Persistent Entity Memory", body: "Every company, sector, and theme gets a living memory layer. Past memos, alerts, filings, and notes are linked and retrievable on demand.", cta: "See the Knowledge Graph" },
      { num: "02", title: "Cross-Session Context", body: "Analysts pick up exactly where they left off. Pascal surfaces prior theses, flagged risks, and related documents automatically — without re-prompting.", cta: "Explore Context Engine" },
      { num: "03", title: "Institutional Knowledge Capture", body: "Every output, annotation, and analyst decision is stored and attributed. The firm's analytical edge compounds with every deal and every quarter.", cta: "Learn About Memory" },
    ]}
    visuals={[EntityTimelineVisual, MemoryGraphVisual, EntityTimelineVisual]}
  />
);

/* ═══════════════════════════════════════
   SECTION 5: PASCAL AI FRONT END
═══════════════════════════════════════ */

const ChatVisual = () => (
  <BrowserShell minHeight={380}>
    <div style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 0, height: 300 }}>
      {/* Sidebar */}
      <div style={{ borderRight: "1px solid var(--pascal-line)", paddingRight: 12, marginRight: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 8 }}>Integrations</div>
        {[
          { icon: "https://cdn.simpleicons.org/microsoftsharepoint/0078D4", name: "SharePoint" },
          { icon: "https://cdn.simpleicons.org/snowflake/29B5E8", name: "Snowflake" },
        ].map(s => (
          <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 0", borderBottom: "1px solid var(--pascal-line)" }}>
            <img src={s.icon} alt={s.name} style={{ width: 12, height: 12 }} onError={(e) => { e.target.style.display = "none"; }} />
            <span style={{ fontSize: 11, color: "var(--pascal-fg-muted)" }}>{s.name}</span>
          </div>
        ))}
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginTop: 12, marginBottom: 8 }}>My Vault</div>
        {["NVDA_Q3.pdf", "IC_Memo_Draft.docx", "Broker_Note.pdf"].map(f => (
          <div key={f} style={{ fontSize: 10.5, color: "var(--pascal-fg-muted)", padding: "4px 0", borderBottom: "1px solid var(--pascal-line)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>📄 {f}</div>
        ))}
      </div>
      {/* Main */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{
          flex: 1, borderRadius: 9, border: "1.5px dashed rgba(0,0,0,0.15)",
          background: "rgba(0,0,0,0.02)", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 6, padding: 16,
        }}>
          <div style={{ fontSize: 22 }}>📂</div>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--pascal-emerald)" }}>Drop files or click to upload</div>
          <div style={{ fontSize: 11, color: "var(--pascal-fg-muted)" }}>PDFs, Excel, Word, CSV — any format</div>
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: 8, padding: "9px 12px",
          borderRadius: 9, border: "1px solid var(--pascal-line)", background: "var(--pascal-paper-soft)",
        }}>
          <span style={{ fontSize: 13, color: "var(--pascal-fg-muted)", flex: 1 }}>Ask anything about your documents...</span>
          <span style={{ width: 28, height: 28, borderRadius: 7, background: "var(--pascal-emerald)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6 L10 6 M6 2 L10 6 L6 10" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </BrowserShell>
);

const DossierVisual = () => (
  <BrowserShell>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: "var(--pascal-ink)" }}>Company Primer — Marriott International</div>
      <div style={{ display: "flex", gap: 6 }}>
        {["Table", "Text"].map((t, i) => (
          <span key={t} style={{
            padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 600, cursor: "pointer",
            background: i === 1 ? "var(--pascal-emerald)" : "var(--pascal-paper-soft)",
            color: i === 1 ? "#fff" : "var(--pascal-fg-muted)",
            border: `1px solid ${i === 1 ? "var(--pascal-emerald)" : "var(--pascal-line)"}`,
          }}>{t}</span>
        ))}
        <span style={{ padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 600, background: "var(--pascal-paper-soft)", color: "var(--pascal-fg-muted)", border: "1px solid var(--pascal-line)", cursor: "pointer" }}>Export ↑</span>
      </div>
    </div>
    {[
      { heading: "Business Overview", body: "Marriott International is the world's largest hotel company, operating 30+ brands and 8,800+ properties globally. Asset-light franchise model generates strong free cash flow with global RevPAR exposure." },
      { heading: "Financial Highlights", body: null },
      { heading: "Key Risks", body: "Macro sensitivity to travel demand · FX exposure on international properties · Capex for new property development pipeline" },
    ].map(({ heading, body }) => (
      <div key={heading} style={{ padding: "10px 0", borderBottom: "1px solid var(--pascal-line)" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "var(--pascal-fg-muted)", marginBottom: 6, letterSpacing: "0.04em" }}>{heading}</div>
        {body ? (
          <div style={{ fontSize: 12.5, color: "var(--pascal-ink)", lineHeight: 1.6 }}>{body}</div>
        ) : (
          <div style={{ display: "flex", gap: 10 }}>
            {[["Revenue", "$23.7B"], ["EBITDA", "$4.1B"], ["FCF", "$3.2B"]].map(([k, v]) => (
              <div key={k} style={{ flex: 1, padding: "8px 10px", borderRadius: 7, background: "var(--pascal-paper-soft)", border: "1px solid var(--pascal-line)" }}>
                <div style={{ fontSize: 10.5, color: "var(--pascal-fg-muted)" }}>{k}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--pascal-emerald)" }}>{v}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12 }}>
      <span style={{ fontSize: 10.5, color: "var(--pascal-fg-muted)" }}>Sources:</span>
      {["SEC Filing", "Annual Report 2024", "Broker Notes"].map(s => (
        <span key={s} style={{ padding: "2px 8px", borderRadius: 999, fontSize: 10.5, background: "var(--pascal-mint)", color: "var(--pascal-emerald)", border: "1px solid rgba(0,0,0,0.12)" }}>{s}</span>
      ))}
    </div>
  </BrowserShell>
);

const AgenticTableVisual = () => {
  const ROWS = [
    { co: "JPMorgan Chase", roe: "17.2%", rev: "+8.4%", cti: "55.2%" },
    { co: "Goldman Sachs",  roe: "13.8%", rev: "+11.2%", cti: "62.1%" },
    { co: "Wells Fargo",    roe: "11.4%", rev: "+5.7%",  cti: "63.8%" },
    { co: "Citigroup",      roe: "8.9%",  rev: "+3.2%",  cti: "67.4%" },
  ];
  const th = { fontSize: 10.5, fontWeight: 700, color: "var(--pascal-fg-muted)", padding: "6px 10px", textAlign: "left", borderBottom: "1.5px solid var(--pascal-line)", whiteSpace: "nowrap" };
  const td = (accent) => ({ fontSize: 12.5, fontWeight: accent ? 700 : 500, color: accent ? "var(--pascal-emerald)" : "var(--pascal-ink)", padding: "8px 10px", borderBottom: "1px solid var(--pascal-line)" });
  return (
    <BrowserShell>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--pascal-ink)" }}>Agentic Table — Banking Sector</div>
        <span style={{ padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 600, background: "rgba(0,0,0,0.05)", color: "var(--pascal-emerald)", border: "1px solid rgba(0,0,0,0.12)", cursor: "pointer" }}>+ Add Column</span>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr>
              <th style={th}>Company</th>
              <th style={{ ...th, textAlign: "right" }}>ROE</th>
              <th style={{ ...th, textAlign: "right" }}>Rev Growth YoY</th>
              <th style={{ ...th, textAlign: "right" }}>Cost-to-Income</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(row => (
              <tr key={row.co}>
                <td style={{ ...td(false), fontWeight: 600 }}>{row.co}</td>
                <td style={{ ...td(true), textAlign: "right" }}>{row.roe}</td>
                <td style={{ ...td(true), textAlign: "right" }}>{row.rev}</td>
                <td style={{ ...td(false), textAlign: "right", color: "var(--pascal-ink)" }}>{row.cti}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 10.5, color: "var(--pascal-fg-muted)" }}>All values sourced from</span>
        {["10-K filings", "Earnings releases"].map(s => (
          <span key={s} style={{ padding: "2px 8px", borderRadius: 999, fontSize: 10.5, background: "var(--pascal-mint)", color: "var(--pascal-emerald)", border: "1px solid rgba(0,0,0,0.12)" }}>{s}</span>
        ))}
      </div>
    </BrowserShell>
  );
};

const PascalFrontEnd = () => (
  <InteractiveTwoCol
    id="frontend"
    theme="dark"
    eyebrow="Pascal AI Front End"
    title="The workspace where analysts run every Pascal agent."
    subtitle="From raw filings to polished IC memos. Every output reshapes to the workflow and traces back to source."
    blocks={[
      { num: "01", title: "Chat With Any File or Data Source", body: "Filings, transcripts, broker reports, internal memos. Indexed alongside live data feeds, every answer cited." },
      { num: "02", title: "Adapt the View to the Workflow", body: "The same query becomes a KYC dossier, an IC memo, or an agentic table. Pascal reshapes the output to the task." },
      { num: "03", title: "Analyze Data with the Agentic Table", body: "Add columns — ROE, revenue growth, CET1, cost-to-income. Pascal extracts each value from filings, with the citation underneath." },
    ]}
    visuals={[ChatVisual, DossierVisual, AgenticTableVisual]}
  />
);

/* ═══════════════════════════════════════
   SECTION 5: API, SDK & TOOLKIT
═══════════════════════════════════════ */

/* Syntax token colors (Dracula palette) */
const _kw  = "#C792EA";
const _fn  = "#82AAFF";
const _str = "#C3E88D";
const _cmt = "#546E7A";
const _cls = "#FFCB6B";
const _op  = "#89DDFF";
const _txt = "#EEFFFF";

/* CL: array of [text, color?] → array of colored spans */
const CL = (segs) => segs.map(([t, c = _txt], i) => (
  <span key={i} style={{ color: c }}>{t}</span>
));

const SDK_CODES = [
  /* Block 1 — initialize & embed in RMS */
  [
    CL([["from ", _kw], ["pascal ", _txt], ["import ", _kw], ["Pascal", _cls]]),
    CL([["import ", _kw], ["os", _txt]]),
    CL([[""]]),
    CL([["# Initialize Pascal client", _cmt]]),
    CL([["pascal", _txt], [" = ", _op], ["Pascal", _cls], ["(", _op]]),
    CL([["    org_id", _txt], ["=", _op], ['"org_5f2b1c9a_demo"', _str], [",", _txt]]),
    CL([["    api_token", _txt], ["=", _op], ["os", _txt], [".", _op], ["getenv", _fn], ["(", _op], ['"PASCAL_TOKEN"', _str], [")", _op], [",", _txt]]),
    CL([["    instance_id", _txt], ["=", _op], ['"instance-usr-001"', _str]]),
    CL([[")", _op]]),
    CL([[""]]),
    CL([["# Query your RMS portfolio", _cmt]]),
    CL([["portfolio", _txt], [" = ", _op], ["pascal", _txt], [".", _op], ["query", _txt], [".", _op], ["run", _fn], ["(", _op]]),
    CL([["    source", _txt], ["=", _op], ['"rms_production"', _str], [",", _txt]]),
    CL([["    company", _txt], ["=", _op], ['"Nvidia Corporation"', _str], [",", _txt]]),
    CL([["    type", _txt], ["=", _op], ['"portfolio_exposure"', _str]]),
    CL([[")", _op]]),
  ],
  /* Block 2 — custom SDK composition */
  [
    CL([["from ", _kw], ["pascal.sdk ", _txt], ["import ", _kw], ["AgentChain", _cls], [", ", _txt], ["Workflow", _cls]]),
    CL([[""]]),
    CL([["# Compose a multi-step workflow", _cmt]]),
    CL([["chain", _txt], [" = ", _op], ["AgentChain", _cls], ["([", _op]]),
    CL([["    AgentChain", _cls], [".", _op], ["step", _fn], ["(", _op], ['"kpi-extractor"', _str], [", {", _op]]),
    CL([['        "tickers"', _str], [": ", _op], ['["NVDA"', _str], [", ", _txt], ['"MSFT"]', _str], [",", _txt]]),
    CL([['        "metrics"', _str], [": ", _op], ['["ROE"', _str], [", ", _txt], ['"EBITDA"]', _str], [",", _txt]]),
    CL([["    }),", _op]]),
    CL([["    AgentChain", _cls], [".", _op], ["step", _fn], ["(", _op], ['"research-memo"', _str], [", {", _op]]),
    CL([['        "template"', _str], [": ", _op], ['"ic_template_v2"', _str], [",", _txt]]),
    CL([['        "audience"', _str], [": ", _op], ['"Investment Committee"', _str], [",", _txt]]),
    CL([["    }),", _op]]),
    CL([["])", _op]]),
    CL([[""]]),
    CL([["result", _txt], [" = ", _op], ["pascal", _txt], [".", _op], ["workflows", _txt], [".", _op], ["run", _fn], ["(chain)", _op]]),
    CL([["print", _fn], ["(", _op], ["result.memo, result.citations", _txt], [")", _op]]),
  ],
  /* Block 3 — headless agent automation (spec code) */
  [
    CL([["from ", _kw], ["pascal ", _txt], ["import ", _kw], ["Pascal", _cls]]),
    CL([["import ", _kw], ["os", _txt]]),
    CL([[""]]),
    CL([["# Initialize Pascal client", _cmt]]),
    CL([["pascal", _txt], [" = ", _op], ["Pascal", _cls], ["(", _op]]),
    CL([["    org_id", _txt], ["=", _op], ['"org_5f2b1c9a_demo"', _str], [",", _txt]]),
    CL([["    api_token", _txt], ["=", _op], ['"tok_demo_pk_abc123DEF456ghi789"', _str], [",", _txt]]),
    CL([["    instance_id", _txt], ["=", _op], ['"instance-usr-001"', _str], [",", _txt]]),
    CL([["    workspace_key", _txt], ["=", _op], ['"ws_sk_test_01a2b3c4"', _str]]),
    CL([[")", _op]]),
    CL([[""]]),
    CL([["# Run Earnings Summary Agent", _cmt]]),
    CL([["response", _txt], [" = ", _op], ["pascal", _txt], [".", _op], ["agents", _txt], [".", _op], ["run", _fn], ["({", _op]]),
    CL([['    "agentId"', _str], [": ", _op], ['"earnings-summary"', _str], [",", _txt]]),
    CL([['    "input"', _str], [": {", _op]]),
    CL([['        "objective"', _str], [": ", _op], ['"Generate Q2 earnings summary for US mega-cap tech"', _str], [",", _txt]]),
    CL([['        "tickers"', _str], [": ", _op], ['["NVDA"', _str], [", ", _txt], ['"MSFT"', _str], [", ", _txt], ['"AAPL"]', _str], [",", _txt]]),
    CL([['        "audience"', _str], [": ", _op], ['"Portfolio Manager"', _str]]),
    CL([["    }", _op]]),
    CL([["})", _op]]),
    CL([["print", _fn], ["(", _op], ["response", _txt], [")", _op]]),
  ],
];

const CodeWindow = ({ lines }) => (
  <div style={{
    borderRadius: 14, overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "#1e1e2e",
    boxShadow: "0 28px 72px -18px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04)",
    fontFamily: "Menlo, Monaco, 'Courier New', monospace",
  }}>
    <div style={{
      display: "flex", alignItems: "center", gap: 7,
      padding: "10px 16px", background: "#181825",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    }}>
      {["#FF5F57","#FFBD2E","#28C840"].map(c => (
        <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, display: "block", flex: "none" }} />
      ))}
      <span style={{ marginLeft: 10, padding: "3px 14px", borderRadius: 5, background: "#1e1e2e", fontSize: 11.5, color: "rgba(255,255,255,0.45)", fontFamily: "inherit" }}>pascal_sdk.py</span>
      <span style={{ marginLeft: "auto", fontSize: 10.5, color: "rgba(255,255,255,0.22)", letterSpacing: "0.04em" }}>Python</span>
    </div>
    <div style={{ padding: "16px 0", overflowX: "auto" }}>
      {lines.map((line, i) => (
        <div key={i} style={{ display: "flex", lineHeight: "1.78" }}>
          <span style={{ minWidth: 40, paddingLeft: 16, paddingRight: 12, color: "rgba(255,255,255,0.18)", fontSize: 12, textAlign: "right", userSelect: "none", flex: "none" }}>{i + 1}</span>
          <span style={{ fontSize: 13, paddingRight: 28, whiteSpace: "pre" }}>{line}</span>
        </div>
      ))}
    </div>
  </div>
);

const CodeVis0 = () => <CodeWindow lines={SDK_CODES[0]} />;
const CodeVis1 = () => <CodeWindow lines={SDK_CODES[1]} />;
const CodeVis2 = () => <CodeWindow lines={SDK_CODES[2]} />;

const ApiSDKSection = () => (
  <InteractiveTwoCol
    id="api-sdk"
    theme="light"
    eyebrow="For Developers & Engineers"
    title="API, SDK, and Toolkit"
    subtitle="Integrate Pascal into your internal systems, compose custom agents, and automate end-to-end research workflows — in Python or TypeScript."
    blocks={[
      { num: "01", title: "Embed AI Into Internal Systems", body: "Plug Pascal directly into the systems your investment team already uses — RMS, OMS, internal portals, research dashboards, and CRMs." },
      { num: "02", title: "Build Custom Logic With the SDK", body: "Pascal's Python and TypeScript SDKs let your engineering team compose custom agents, chain workflows, and build firm-specific logic on top of the Cognitive Engine." },
      { num: "03", title: "Automate End-to-End Processes", body: "Run Pascal agents headlessly through the API to power scheduled and event-triggered workflows — pre-market earnings packs at 6 a.m., portfolio alerts on regulatory filings, IC memo first drafts." },
    ]}
    visuals={[CodeVis0, CodeVis1, CodeVis2]}
  />
);

/* ═══════════════════════════════════════
   SECTION 6: SOVEREIGN BY DEFAULT
═══════════════════════════════════════ */

const DeploymentDiagram = () => {
  const QUADRANTS = [
    { icon: "☁️",  title: "Pascal Cloud",    sub: "Managed service",     pts: ["Auto-scaling", "SOC 2 verified", "Zero-config deploy"],    tint: "rgba(0,0,0,0.05)",  border: "rgba(0,0,0,0.12)" },
    { icon: "🔒", title: "Private Cloud",   sub: "VPC / Private",       pts: ["Your cloud env", "Customer-managed keys", "Single-tenant"], tint: "rgba(59,130,246,0.09)",  border: "rgba(59,130,246,0.24)" },
    { icon: "🏢", title: "On-Premise",      sub: "Full control",        pts: ["Air-gapped option", "On-prem compute", "Custom deploy"],    tint: "rgba(245,158,11,0.09)",  border: "rgba(245,158,11,0.24)" },
    { icon: "🛡️", title: "Single Tenant",   sub: "Maximum isolation",   pts: ["Dedicated infra", "Zero data sharing", "Dedicated SLA"],   tint: "rgba(139,92,246,0.09)",  border: "rgba(139,92,246,0.24)" },
  ];
  return (
    <div style={{ position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {QUADRANTS.map(q => (
          <div key={q.title} style={{ padding: "24px 22px", borderRadius: 14, background: q.tint, border: `1px solid ${q.border}` }}>
            <div style={{ fontSize: 22, marginBottom: 10 }}>{q.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--pascal-dark-text)", marginBottom: 3 }}>{q.title}</div>
            <div style={{ fontSize: 11.5, color: "var(--pascal-dark-muted)", marginBottom: 12 }}>{q.sub}</div>
            {q.pts.map(p => (
              <div key={p} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "var(--pascal-dark-muted)", marginBottom: 5 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--pascal-emerald)", flex: "none" }} />
                {p}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        background: "var(--pascal-emerald)", color: "#fff",
        fontSize: 9, fontWeight: 700, letterSpacing: "0.14em",
        textTransform: "uppercase", padding: "6px 12px",
        borderRadius: 999, whiteSpace: "nowrap",
        boxShadow: "0 0 0 4px var(--pascal-dark)",
      }}>DEPLOYMENT MODELS</div>
    </div>
  );
};

const SovereignSection = () => (
  <section style={{
    padding: "110px 0 130px",
    background: "var(--pascal-dark)",
    borderTop: "1px solid rgba(255,255,255,0.06)",
  }}>
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
        <div>
          <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-emerald)", display: "block", marginBottom: 18 }}>Built for your perimeter</span>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-dark-text)", lineHeight: 1.1, marginBottom: 22 }}>
            Flexible Deployment,<br />Sovereign Control
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--pascal-dark-muted)", maxWidth: 480, width: "100%", marginBottom: 32 }}>
            Pascal runs as a managed service, inside your private cloud, or fully on-premise, with single-tenant isolation available. Your privileged data stays inside your perimeter and never trains a shared model.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "AES-256 encryption at rest and in transit",
              "Zero data retention — outputs never persisted",
              "Role-based access control with full audit trail",
              "SOC 2 Type II · ISO 27001 certified",
            ].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 18, height: 18, borderRadius: "50%", flex: "none", marginTop: 2, background: "rgba(0,0,0,0.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M1.5 4.5 L3.5 6.5 L7.5 2.5" stroke="var(--pascal-emerald)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span style={{ fontSize: 14, color: "var(--pascal-dark-muted)", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <DeploymentDiagram />
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════
   LOGO CLOUD + CERTS
═══════════════════════════════════════ */

const PROD_PARTNERS = [
  { name: "Citadel",           abbr: "CT", color: "#0047AB" },
  { name: "Two Sigma",         abbr: "TS", color: "#1E3A5F" },
  { name: "Kalaari Capital",   abbr: "KC", color: "#1D3461" },
  { name: "Infoedge",          abbr: "IE", color: "#E8431F" },
  { name: "MS Capital",        abbr: "MS", color: "#003087" },
  { name: "Antler",            abbr: "AN", color: "#111111" },
  { name: "SVCA",              abbr: "SV", color: "#2D5016" },
  { name: "Quatr",             abbr: "QT", color: "#519872" },
  { name: "AWS",               img: "https://cdn.simpleicons.org/amazonaws/232F3E" },
  { name: "OpenAI",            img: "https://cdn.simpleicons.org/openai/000000" },
  { name: "Azure",             img: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
  { name: "Google Cloud",      img: "https://cdn.simpleicons.org/googlecloud/4285F4" },
  { name: "Weaviate",          img: "https://cdn.simpleicons.org/weaviate/4AC4AC" },
  { name: "Perplexity",        img: "https://cdn.simpleicons.org/perplexity/20808D" },
];

const ProdPartnerLogo = ({ partner }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "0 28px", whiteSpace: "nowrap", opacity: 0.7 }}>
    {partner.img ? (
      <img src={partner.img} alt={partner.name} style={{ height: 20, width: "auto", objectFit: "contain" }} onError={(e) => { e.target.style.display = "none"; }} />
    ) : (
      <span style={{ width: 22, height: 22, borderRadius: 4, background: partner.color, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 700, color: "#fff", letterSpacing: "0.02em", flex: "none" }}>{partner.abbr}</span>
    )}
    <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--pascal-ink)" }}>{partner.name}</span>
  </div>
);

const ProdDot = () => (
  <span style={{ alignSelf: "center", width: 4, height: 4, borderRadius: "50%", background: "var(--pascal-line-strong)", flex: "none" }} />
);

const ProductLogoCloud = () => {
  const looped = [...PROD_PARTNERS, ...PROD_PARTNERS];
  return (
    <section style={{
      padding: "56px 0 72px",
      background: "var(--pascal-paper-soft)",
      borderTop: "1px solid var(--pascal-line)",
      overflow: "hidden",
    }}>
      <div className="container" style={{ marginBottom: 32 }}>
        <div style={{ textAlign: "center" }}>
          <span className="eyebrow">Trusted partners &amp; infrastructure</span>
          <h3 style={{ marginTop: 12, fontSize: 20, fontWeight: 600, color: "var(--pascal-ink)" }}>
            Backed by leading capital allocators · built on best-in-class AI infrastructure
          </h3>
        </div>
      </div>
      <div style={{
        position: "relative",
        maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}>
        <div className="marquee-track">
          {looped.map((p, i) => (
            <React.Fragment key={i}>
              <ProdPartnerLogo partner={p} />
              {i < looped.length - 1 && <ProdDot />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCerts = () => {
  const CERTS = [
    {
      label: "SOC 2", sub: "Type II",
      badge: () => (
        <svg viewBox="0 0 64 64" width="52" height="52">
          <path d="M32 4 L60 18 L60 46 L32 60 L4 46 L4 18 Z" fill="none" stroke="rgba(228,237,216,0.25)" strokeWidth="1.5"/>
          <path d="M32 12 L52 22 L52 42 L32 52 L12 42 L12 22 Z" fill="rgba(0,0,0,0.07)" stroke="var(--pascal-emerald)" strokeWidth="1.2"/>
          <text x="32" y="34" textAnchor="middle" fill="var(--pascal-emerald)" fontSize="8" fontWeight="700" fontFamily="inherit">AICPA</text>
        </svg>
      ),
    },
    {
      label: "ISO 27001", sub: "Information Security",
      badge: () => (
        <svg viewBox="0 0 64 52" width="60" height="48">
          <rect x="2" y="2" width="60" height="48" rx="5" fill="none" stroke="rgba(228,237,216,0.2)" strokeWidth="1.2"/>
          <rect x="2" y="2" width="60" height="20" rx="5" fill="rgba(0,48,135,0.5)"/>
          <text x="32" y="16" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="inherit">ISO/IEC</text>
          <text x="32" y="36" textAnchor="middle" fill="rgba(228,237,216,0.9)" fontSize="11" fontWeight="700" fontFamily="inherit">27001</text>
        </svg>
      ),
    },
    {
      label: "ISO 9001", sub: "Quality Management",
      badge: () => (
        <svg viewBox="0 0 64 52" width="60" height="48">
          <rect x="2" y="2" width="60" height="48" rx="5" fill="none" stroke="rgba(228,237,216,0.2)" strokeWidth="1.2"/>
          <rect x="2" y="2" width="60" height="20" rx="5" fill="rgba(175,20,20,0.5)"/>
          <text x="32" y="16" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="inherit">ISO</text>
          <text x="32" y="36" textAnchor="middle" fill="rgba(228,237,216,0.9)" fontSize="11" fontWeight="700" fontFamily="inherit">9001</text>
        </svg>
      ),
    },
    {
      label: "GDPR", sub: "Data Protection",
      badge: () => (
        <svg viewBox="0 0 64 64" width="52" height="52">
          <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(228,237,216,0.2)" strokeWidth="1.5"/>
          <circle cx="32" cy="32" r="22" fill="rgba(0,64,150,0.3)" stroke="rgba(0,120,215,0.45)" strokeWidth="1.2"/>
          {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => {
            const a = (i * 30 - 90) * Math.PI / 180;
            return <circle key={i} cx={32 + 19 * Math.cos(a)} cy={32 + 19 * Math.sin(a)} r="2.5" fill="#FFCB00"/>;
          })}
          <text x="32" y="37" textAnchor="middle" fill="rgba(228,237,216,0.9)" fontSize="9" fontWeight="700" fontFamily="inherit">GDPR</text>
        </svg>
      ),
    },
    {
      label: "TÜV SÜD", sub: "Certified",
      badge: () => (
        <svg viewBox="0 0 64 64" width="52" height="52">
          <circle cx="32" cy="32" r="28" fill="rgba(0,90,170,0.3)" stroke="rgba(0,90,170,0.45)" strokeWidth="1.5"/>
          <text x="32" y="28" textAnchor="middle" fill="rgba(228,237,216,0.9)" fontSize="9" fontWeight="700" fontFamily="inherit">TÜV</text>
          <text x="32" y="42" textAnchor="middle" fill="#F0A500" fontSize="10" fontWeight="800" fontFamily="inherit">SÜD</text>
        </svg>
      ),
    },
  ];
  return (
    <section style={{ padding: "52px 0", background: "var(--pascal-dark-2)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--pascal-dark-muted)" }}>Security &amp; Compliance</span>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
          {CERTS.map(cert => (
            <div key={cert.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              {cert.badge()}
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--pascal-dark-text)" }}>{cert.label}</div>
                <div style={{ fontSize: 10.5, color: "var(--pascal-dark-muted)" }}>{cert.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Full page ─── */
const ProductPage = () => {
  React.useEffect(() => {
    const tick = () => window.lucide && window.lucide.createIcons();
    tick();
    const id = setInterval(tick, 400);
    return () => clearInterval(id);
  }, []);
  return (
    <React.Fragment>
      <Nav />
      <ProductHero />
      <PersonasSection />
      <ProductSubNav />
      <AgentControlCenter />
      <MCPConnectors />
      <FinancialAgents />
      <ContextMemorySection />
      <PascalFrontEnd />
      <ApiSDKSection />
      <SovereignSection />
      <ProductLogoCloud />
      <ProductCerts />
      <Footer />
    </React.Fragment>
  );
};

Object.assign(window, { ProductPage });
