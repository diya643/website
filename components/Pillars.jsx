// Pillars.jsx — 4-pillar interactive section with smooth fade between tabs

const PILLARS = [
  {
    key: "acc",
    label: "Agent Control Center",
    short: "Agent Control Center",
    icon: "layout-dashboard",
    headline: "The workspace where analysts run every Pascal agent.",
    body: "Sits inside Excel, PowerPoint, Word, email, and the browser. Every output ships with RBAC enforcement and a citation trail to the source line.",
    stats: [
      { v: "50M+", l: "Indexed pages" },
      { v: "RBAC", l: "On every output" },
      { v: "100%", l: "Cited outputs" },
    ],
    visual: "workspace",
    href: "product.html#agent-control-center",
  },
  {
    key: "mcp",
    label: "Finance Ready MCP Connectors",
    short: "MCP Connectors",
    icon: "plug",
    headline: "Connect to every data source your investment team already pays for.",
    body: "Bloomberg, FactSet, S&P Capital IQ, SharePoint, Snowflake, your CRM. One MCP Hub, 50+ finance-ready connectors, zero data leaving your VPC.",
    stats: [
      { v: "50+",        l: "Finance-ready connectors" },
      { v: "Native MCP", l: "Open standard" },
      { v: "Zero",       l: "Data leaves your VPC" },
    ],
    visual: "secure",
    href: "product.html#mcp-connectors",
  },
  {
    key: "agents",
    label: "Financial Agents",
    short: "Financial Agents",
    icon: "users",
    headline: "25+ research agents purpose-built for institutional investors.",
    body: "Morning packs, IC memos, earnings synthesis, macro monitoring, quarterly letters. Run them inside Pascal or your existing systems, with a DIY builder for the rest.",
    stats: [
      { v: "25+", l: "Research agents shipped" },
      { v: "24/7", l: "Autonomous operation" },
      { v: "DIY", l: "Workflow builder" },
    ],
    visual: "agents",
    href: "product.html#financial-agents",
  },
  {
    key: "sdk",
    label: "API & SDK",
    short: "API & SDK",
    icon: "code-2",
    headline: "Build custom research agents on Pascal's Cognitive Engine.",
    body: "Python and TypeScript SDKs built on Lattice, Prism, and Shell. Infrastructure for in-house ML teams shipping proprietary research workflows.",
    stats: [
      { v: "99.9%", l: "Prism accuracy" },
      { v: "Python", l: "& TypeScript" },
      { v: "SOC 2", l: "Certified" },
    ],
    visual: "core",
    href: "product.html#api-sdk",
  },
];

const Pillars = () => {
  const [active, setActive] = React.useState(0);
  const [fadeKey, setFadeKey] = React.useState(0);
  const p = PILLARS[active];

  const switchTo = (i) => {
    if (i === active) return;
    setActive(i);
    setFadeKey((k) => k + 1);
  };

  return (
    <section className="section" style={{
      background: "var(--pascal-dark)",
      color: "#fff",
      position: "relative",
      overflow: "hidden",
    }}>

      <div className="container" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            fontSize: 12, fontWeight: 500,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--pascal-emerald)",
          }}>
            <span style={{ width: 24, height: 1, background: "var(--pascal-emerald)" }} />
            Introducing Pascal AI
          </span>
          <h2 style={{
            marginTop: 18,
            fontSize: 48, fontWeight: 700,
            fontFamily: "var(--font-display)",
            color: "var(--pascal-dark-text)",
            lineHeight: 1.05, letterSpacing: "-0.025em",
            maxWidth: 800, marginInline: "auto",
          }}>
            The Pascal research stack,{" "}
            <span style={{ color: "var(--pascal-emerald)" }}>from data layer to first-draft memo.</span>
          </h2>
        </div>

        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          {PILLARS.map((it, i) => (
            <button key={it.key} onClick={() => switchTo(i)} style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "12px 22px", borderRadius: 999,
              border: "1px solid " + (i === active ? "var(--pascal-emerald)" : "rgba(255,255,255,0.18)"),
              background: i === active ? "var(--pascal-emerald)" : "rgba(255,255,255,0.04)",
              color: i === active ? "#fff" : "rgba(255,255,255,0.78)",
              fontSize: 14, fontWeight: 500,
              cursor: "pointer", transition: "all 200ms ease",
              fontFamily: "inherit",
            }}>
              <span style={{
                width: 22, height: 22, borderRadius: "50%",
                background: i === active ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.06)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 700,
              }}>{i + 1}</span>
              {it.label}
            </button>
          ))}
        </div>

        <div key={fadeKey} className="fade-in" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center",
        }}>
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "6px 12px", borderRadius: 999,
              background: "rgba(39,156,123,0.14)", color: "var(--pascal-emerald)",
              fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase",
              marginBottom: 22,
            }}>
              <i data-lucide={p.icon} style={{ width: 14, height: 14 }} />
              0{active + 1} · {p.label}
            </div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: 38, fontWeight: 700,
              color: "var(--pascal-dark-text)",
              lineHeight: 1.1, letterSpacing: "-0.02em",
              marginBottom: 22,
            }}>{p.headline}</h3>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--pascal-dark-muted)", marginBottom: 32 }}>{p.body}</p>

            <div style={{ display: "flex", gap: 24, marginBottom: 36, flexWrap: "wrap" }}>
              {p.stats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--pascal-emerald)" }}>{s.v}</div>
                  <div style={{ fontSize: 13, color: "var(--pascal-dark-muted)", marginTop: 2 }}>{s.l}</div>
                </div>
              ))}
            </div>

            <a href={p.href} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "var(--pascal-emerald)", fontSize: 15, fontWeight: 600,
              textDecoration: "none", paddingBottom: 6,
              borderBottom: "1px solid var(--pascal-emerald)",
              transition: "gap 160ms ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.gap = "12px"}
            onMouseLeave={(e) => e.currentTarget.style.gap = "8px"}>
              Learn more about {p.short}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7 L11 7 M7 3 L11 7 L7 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <PillarVisual kind={p.visual} />
        </div>
      </div>
    </section>
  );
};

const BrowserWrap = ({ children, title }) => (
  <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 32px 80px -12px rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.08)" }}>
    <div style={{ background: "#1E1E1E", padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ display: "flex", gap: 5 }}>
        {["#FF5F57","#FEBC2E","#28C840"].map(c => (
          <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
        ))}
      </span>
      {title && <span style={{ flex: 1, textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-mono)" }}>{title}</span>}
    </div>
    {children}
  </div>
);

const WorkspaceVisual = () => (
  <BrowserWrap title="pascal.ai · workspace">
    <div style={{ display: "flex", background: "#F9F8F5", height: 420, fontSize: 12 }}>
      <div style={{ width: 240, background: "#fff", borderRight: "1px solid #E5E7EB", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ padding: "14px 14px 10px", borderBottom: "1px solid #E5E7EB" }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: "#111" }}>Select Source</div>
          <div style={{ fontSize: 10.5, color: "#6B7280", marginTop: 2 }}>Advance source selection</div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "10px 14px" }}>
          <div style={{ fontSize: 10.5, fontWeight: 600, color: "#374151", marginBottom: 5 }}>Select Company*</div>
          <div style={{ border: "1px solid #D1D5DB", borderRadius: 6, padding: "6px 8px", fontSize: 11, color: "#9CA3AF", marginBottom: 10, background: "#fff" }}>Search...</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 8px", marginBottom: 10 }}>
            {[[false,"Auto Select"],[true,"Annual Report"],[true,"Earnings Pres."],[true,"Earnings Trans."],[true,"Quarterly Rpt"],[true,"DRHP"],[true,"Ops & Biz Upd."]].map(([checked, label]) => (
              <label key={label} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10.5, color: "#374151", cursor: "pointer" }}>
                <span style={{ width: 12, height: 12, borderRadius: 3, flex: "none", border: checked ? "none" : "1.5px solid #D1D5DB", background: checked ? "#279C7B" : "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {checked && <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1.5 4 L3 5.5 L6.5 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>}
                </span>
                {label}
              </label>
            ))}
          </div>
          <label style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10.5, color: "#374151", marginBottom: 10 }}>
            <span style={{ width: 12, height: 12, borderRadius: 3, background: "#279C7B", flex: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1.5 4 L3 5.5 L6.5 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
            </span>
            Search web for additional info
          </label>
          <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 6, padding: "6px 8px", fontSize: 10, color: "#15803D", marginBottom: 10 }}>Available Documents · 0 company, 5 doc types &rsaquo;</div>
          <div style={{ fontSize: 10.5, fontWeight: 600, color: "#374151", marginBottom: 5 }}>Integrations</div>
          <label style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10.5, color: "#9CA3AF" }}>
            <span style={{ width: 12, height: 12, borderRadius: 3, border: "1.5px solid #D1D5DB", background: "#fff", flex: "none" }} />
            <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
              <svg width="10" height="10" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Google Drive
            </span>
          </label>
        </div>
        <div style={{ padding: "10px 14px", borderTop: "1px solid #E5E7EB", display: "flex", gap: 6 }}>
          <button style={{ flex: 1, padding: "7px 0", borderRadius: 6, border: "1px solid #D1D5DB", background: "#fff", fontSize: 11, fontWeight: 500, color: "#374151", cursor: "pointer" }}>Clear All</button>
          <button style={{ flex: 1, padding: "7px 0", borderRadius: 6, border: "none", background: "#279C7B", fontSize: 11, fontWeight: 600, color: "#fff", cursor: "pointer" }}>Add to Query</button>
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24, gap: 16 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#279C7B", textAlign: "center" }}>Start researching smarter with Pascal.</div>
        <div style={{ width: "100%", border: "1.5px solid #D1D5DB", borderRadius: 10, background: "#fff", overflow: "hidden" }}>
          <div style={{ padding: "10px 12px", fontSize: 11, color: "#9CA3AF", borderBottom: "1px solid #F3F4F6" }}>Press @ to add companies. Pascal chooses the best source to answer your query.</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 10px", flexWrap: "wrap" }}>
            {["@","+"].map(s => (<button key={s} style={{ width: 26, height: 26, borderRadius: 6, border: "1px solid #E5E7EB", background: "#F9FAFB", fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{s}</button>))}
            <div style={{ flex: 1 }} />
            {["Filings","Web"].map(l => (<span key={l} style={{ padding: "4px 9px", borderRadius: 6, border: "1px solid #E5E7EB", fontSize: 10.5, fontWeight: 500, color: "#374151", background: "#fff" }}>{l}</span>))}
            <span style={{ padding: "4px 9px", borderRadius: 6, background: "#279C7B", fontSize: 10.5, fontWeight: 600, color: "#fff", display: "flex", alignItems: "center", gap: 3 }}>Auto Mode<svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 3 L4 5 L6 3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/></svg></span>
          </div>
        </div>
        <div style={{ width: "100%", background: "#fff", border: "1px solid #E5E7EB", borderRadius: 10, overflow: "hidden" }}>
          {[{ label: "Auto Mode", desc: "Research on filings and web.", active: true },{ label: "Claude-4.7", desc: "Strong long-form reasoning and writing." },{ label: "GPT-5.5", desc: "Fast general-purpose chat and coding." },{ label: "Gemini-3.1", desc: "Multimodal-friendly general chat." }].map((m, i) => (
            <div key={m.label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", background: m.active ? "#F0FDF4" : "#fff", borderBottom: i < 3 ? "1px solid #F3F4F6" : "none" }}>
              <span style={{ width: 16, height: 16, borderRadius: "50%", background: m.active ? "#279C7B" : "#E5E7EB", flex: "none" }} />
              <div><div style={{ fontSize: 11, fontWeight: 600, color: "#111" }}>{m.label}</div><div style={{ fontSize: 10, color: "#6B7280" }}>{m.desc}</div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </BrowserWrap>
);

const AgentsVisual = () => {
  const workflows = [
    { title: "Earnings Summary", desc: "Generate a structured, fact-based earnings summary." },
    { title: "Key Debates from Earnings", desc: "Summarises key analyst debates, management sentiment..." },
    { title: "Event Driven Stock Price Analysis", desc: "Analyzes major stock price moves and identifies catalysts." },
    { title: "30-Day Catalyst Calendar", desc: "Identifies all material catalysts for a company..." },
  ];
  const more = ["Executive Narrative Tracker","Sector Pulse","Earnings Preview","IPO Prospectus Analysis","Annual Report Summariser","Company Primer"];
  return (
    <BrowserWrap title="pascal.ai · workflows">
      <div style={{ background: "#F9F8F5", height: 420, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px 10px", background: "#fff", borderBottom: "1px solid #E5E7EB" }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#111" }}>Workflows</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, border: "1px solid #E5E7EB", borderRadius: 7, padding: "5px 9px", background: "#fff" }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <span style={{ fontSize: 11, color: "#9CA3AF" }}>Search Workflows</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6, padding: "10px 18px", background: "#fff", borderBottom: "1px solid #E5E7EB" }}>
          {["View All","Earnings","Company Research","Competition","News & Events"].map((t, i) => (
            <span key={t} style={{ padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 500, background: i === 0 ? "#279C7B" : "transparent", color: i === 0 ? "#fff" : "#374151", border: i === 0 ? "none" : "1px solid #D1D5DB", cursor: "pointer" }}>{t}</span>
          ))}
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "12px 18px" }}>
          <div style={{ fontSize: 10.5, fontWeight: 600, color: "#6B7280", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>Newly Added</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
            {workflows.map((w) => (
              <div key={w.title} style={{ background: "#fff", border: "1.5px solid #E5E7EB", borderRadius: 10, padding: "12px 14px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}><div style={{ fontSize: 11.5, fontWeight: 600, color: "#111", marginBottom: 4, lineHeight: 1.3 }}>{w.title}</div><div style={{ fontSize: 10, color: "#6B7280", lineHeight: 1.4 }}>{w.desc}</div></div>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ flex: "none", marginLeft: 6, marginTop: 2 }}><polygon points="5 3 19 12 5 21 5 3" fill="#279C7B"/></svg>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 10.5, fontWeight: 600, color: "#6B7280", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>Earnings</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {more.map((w) => (<div key={w} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 8, padding: "10px 12px" }}><div style={{ fontSize: 10.5, fontWeight: 600, color: "#111", marginBottom: 3, lineHeight: 1.3 }}>{w}</div></div>))}
          </div>
        </div>
      </div>
    </BrowserWrap>
  );
};

const SecureVisual = () => {
  const connectors = [
    { name: "SharePoint", color: "#0078D4", icon: "S" },{ name: "OneDrive", color: "#0078D4", icon: "O" },
    { name: "Google Drive", color: "#34A853", icon: "G" },{ name: "Dropbox", color: "#0061FF", icon: "D" },
    { name: "Box", color: "#0061D5", icon: "B" },{ name: "Snowflake", color: "#29B5E8", icon: "❄" },
    { name: "Databricks", color: "#FF3621", icon: "◆" },{ name: "Notion", color: "#000", icon: "N" },
  ];
  return (
    <BrowserWrap title="pascal.ai · vault">
      <div style={{ display: "flex", background: "#F9F8F5", height: 420, fontSize: 12 }}>
        <div style={{ width: 160, background: "#fff", borderRight: "1px solid #E5E7EB", display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "14px 14px 10px", borderBottom: "1px solid #E5E7EB", fontWeight: 700, fontSize: 13, color: "#111" }}>My Vault</div>
          <div style={{ padding: "8px 6px", flex: 1 }}>
            {[{ label: "Uploaded Files", icon: "folder" },{ label: "Generated Results", icon: "file" },{ label: "Connectors", icon: "plus", active: true }].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: 7, background: item.active ? "#F0F4F0" : "transparent", color: item.active ? "#279C7B" : "#374151", fontWeight: item.active ? 600 : 400, fontSize: 11.5, cursor: "pointer", marginBottom: 2 }}>
                <i data-lucide={item.icon} style={{ width: 14, height: 14 }} />{item.label}
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, padding: "14px 18px", overflow: "hidden" }}>
          <div style={{ marginBottom: 14 }}><div style={{ fontSize: 14, fontWeight: 700, color: "#111" }}>Connections</div><div style={{ fontSize: 10.5, color: "#6B7280", marginTop: 2 }}>Link external sources to sync content into My Vault.</div></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
            {connectors.map((c) => (
              <div key={c.name} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 10, padding: "11px 12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 5 }}>
                  <span style={{ width: 20, height: 20, borderRadius: 5, background: c.color, color: "#fff", fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{c.icon}</span>
                  <span style={{ fontSize: 11.5, fontWeight: 600, color: "#111" }}>{c.name}</span>
                </div>
                <div style={{ fontSize: 9.5, color: "#9CA3AF", marginBottom: 7 }}>This connector is not enabled for this environment.</div>
                <button style={{ width: "100%", padding: "4px 0", borderRadius: 5, border: "1px solid #E5E7EB", background: "#F9FAFB", fontSize: 10, color: "#6B7280", cursor: "pointer" }}>+ Connect</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserWrap>
  );
};

const CoreVisual = () => (
  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 18, padding: 22, minHeight: 460, backdropFilter: "blur(6px)" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {[
        { k: "Lattice", d: "The firm-specific knowledge graph",        icon: "git-branch", c: "#7ABE9C" },
        { k: "Prism",   d: "Document intelligence at 99.9% accuracy", icon: "scan-text",  c: "#2E9B6A" },
        { k: "Shell",   d: "Permission-aware access control",         icon: "key-round",  c: "#279C7B" },
      ].map((row) => (
        <div key={row.k} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 12, padding: 18, display: "flex", gap: 14, alignItems: "center" }}>
          <span style={{ width: 44, height: 44, borderRadius: 10, background: row.c, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            <i data-lucide={row.icon} style={{ width: 22, height: 22 }} />
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, color: "#fff", fontSize: 18, letterSpacing: "-0.01em" }}>{row.k}</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>{row.d}</div>
          </div>
          <i data-lucide="check-circle-2" style={{ width: 18, height: 18, color: "var(--pascal-emerald)" }} />
        </div>
      ))}
      <div style={{ marginTop: 4, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 12, display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: "rgba(255,255,255,0.78)" }}>
        <i data-lucide="layers-3" style={{ width: 18, height: 18, color: "var(--pascal-emerald)" }} />
        Sovereign Data Fabric · Multi-model orchestration
      </div>
    </div>
  </div>
);

const PillarVisual = ({ kind }) => {
  if (kind === "workspace") return <WorkspaceVisual />;
  if (kind === "agents")    return <AgentsVisual />;
  if (kind === "secure")    return <SecureVisual />;
  return <CoreVisual />;
};

Object.assign(window, { Pillars });
