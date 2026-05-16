// Product.jsx — two-column product overview

const FEATURES = [
  {
    title: "Deploy inside your governance perimeter",
    desc: "Pascal runs on-prem or inside your VPC. Audit-ready, MCP-native, model risk controls in place.",
    icon: "rocket"
  },
  {
    title: "Compress the research cycle from 60 hours to 20",
    desc: "Agents handle the data, model, and first-draft memo work. Your analysts keep the judgment calls that move alpha.",
    icon: "layers"
  },
  {
    title: "Connect the stack you already pay for",
    desc: "Bloomberg, FactSet, Capital IQ, Snowflake, SharePoint, your CRM. Orchestrated through one MCP Hub, with citations traceable to the line.",
    icon: "database"
  },
];

const MODULES = [
  { name: "Sovereign Data Fabric",    tag: "Your data stays in your VPC",         icon: "server"      },
  { name: "Cognitive Engine",         tag: "Source-cited analyst reasoning",       icon: "brain"       },
  { name: "Agent Library",            tag: "25+ buy-side research agents",         icon: "users"       },
  { name: "MCP Hub & SDK",            tag: "Connect your existing stack",          icon: "plug"        },
];

const PlatformSketch = () => (
  <div style={{
    borderRadius: 16,
    overflow: "hidden",
    border: "1px solid var(--pascal-line)",
    boxShadow: "rgba(0,0,0,0.04) 0px -2px 0px 0px inset, rgba(0,0,0,0.12) 0px 0px 0px 1px, rgba(0,0,0,0.08) 0px 1px 2px 0px",
    background: "var(--pascal-paper)",
  }}>
    <div style={{
      background: "var(--pascal-paper-soft)",
      borderBottom: "1px solid var(--pascal-line)",
      padding: "12px 16px",
      display: "flex",
      alignItems: "center",
      gap: 10,
    }}>
      <span style={{ display: "flex", gap: 6 }}>
        {["#F96057","#F8C543","#8C8C8C"].map(c => (
          <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
        ))}
      </span>
      <div style={{
        flex: 1,
        height: 24,
        borderRadius: 6,
        background: "var(--pascal-line)",
        marginLeft: 8,
      }} />
    </div>

    <div style={{ display: "flex", height: 280 }}>
      <div style={{
        width: 52,
        borderRight: "1px solid var(--pascal-line)",
        background: "var(--pascal-paper-soft)",
        padding: "16px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        alignItems: "center",
      }}>
        {[18, 18, 18, 18].map((_, i) => (
          <div key={i} style={{
            width: 28,
            height: 28,
            borderRadius: 7,
            background: i === 0 ? "var(--pascal-ink)" : "var(--pascal-line)",
          }} />
        ))}
      </div>

      <div style={{ flex: 1, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {[0, 1].map(i => (
            <div key={i} style={{
              borderRadius: 10,
              border: "1px solid var(--pascal-line)",
              padding: "14px 16px",
              background: i === 0 ? "#f5f5f5" : "var(--pascal-paper)",
            }}>
              <div style={{ width: 40, height: 8, borderRadius: 4, background: "var(--pascal-line)", marginBottom: 10 }} />
              <div style={{ width: 72, height: 20, borderRadius: 6, background: i === 0 ? "#e5e5e5" : "var(--pascal-line)" }} />
            </div>
          ))}
        </div>

        {[100, 80, 90, 70].map((w, i) => (
          <div key={i} style={{
            height: 10,
            borderRadius: 5,
            width: `${w}%`,
            background: "var(--pascal-line)",
          }} />
        ))}

        <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
          {["var(--pascal-paper-soft)","var(--pascal-line)","var(--pascal-line)"].map((bg, i) => (
            <div key={i} style={{
              height: 22,
              width: [52, 68, 44][i],
              borderRadius: 99,
              background: bg,
            }} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ModuleCard = ({ name, tag, icon }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? "var(--pascal-ink)" : "#fff",
        color: hover ? "#fff" : "var(--pascal-ink)",
        border: "1px solid var(--pascal-line)",
        borderRadius: 14,
        padding: 18,
        display: "flex",
        alignItems: "center",
        gap: 14,
        cursor: "pointer",
        transition: "all 200ms ease",
        transform: hover ? "translateY(-2px)" : "none",
        boxShadow: hover ? "rgba(39,156,123,0.15) 0px 0px 8px 0px, rgba(0,0,0,0.08) 0px 4px 12px 0px" : "none",
      }}>
      <span style={{
        flex: "none",
        width: 40, height: 40, borderRadius: 10,
        background: hover ? "var(--pascal-ink)" : "var(--pascal-paper-soft)",
        color: hover ? "#fff" : "var(--pascal-ink)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        transition: "background 200ms ease",
      }}>
        <i data-lucide={icon} style={{ width: 20, height: 20 }} />
      </span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.2 }}>{name}</div>
        <div style={{
          fontSize: 12, marginTop: 3,
          color: hover ? "rgba(255,255,255,0.65)" : "var(--pascal-fg-muted)",
        }}>{tag}</div>
      </div>
    </div>
  );
};

const Product = () => (
  <section id="product" className="section" style={{ background: "var(--pascal-paper)" }}>
    <div className="container">
      <div style={{
        display: "grid",
        gridTemplateColumns: "0.95fr 1.05fr",
        gap: 80,
        alignItems: "start",
      }}>
        {/* LEFT */}
        <div>
          <span className="eyebrow">Buy-Side Research Infrastructure</span>
          <h2 style={{
            marginTop: 18,
            fontSize: 32,
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--pascal-ink)",
            textWrap: "balance",
            maxWidth: 560,
          }}>
            Agentic AI infrastructure for institutional investment research.
          </h2>
          <p style={{
            marginTop: 14,
            fontSize: 16,
            lineHeight: 1.55,
            color: "var(--pascal-fg-muted)",
            maxWidth: 480,
          }}>
            25+ research agents inside your VPC. Deployed at leading institutional investors across North America and Asia.
          </p>

          <a href="product.html" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            marginTop: 24,
            color: "var(--pascal-accent)", fontSize: 15, fontWeight: 600,
            textDecoration: "none",
            paddingBottom: 5,
            borderBottom: "1px solid var(--pascal-accent)",
          }}>
            Explore the platform
          </a>

          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 24 }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                display: "flex", gap: 18, alignItems: "flex-start",
                paddingBottom: 24,
                borderBottom: i < FEATURES.length - 1 ? "1px solid var(--pascal-line)" : "none",
              }}>
                <span style={{
                  flex: "none",
                  width: 44, height: 44, borderRadius: 10,
                  background: "var(--pascal-paper-soft)",
                  color: "var(--pascal-ink)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}>
                  <i data-lucide={f.icon} style={{ width: 22, height: 22 }} />
                </span>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: "var(--pascal-ink)", marginBottom: 6 }}>{f.title}</div>
                  <div style={{ fontSize: 15, lineHeight: 1.55, color: "var(--pascal-fg-muted)" }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <PlatformSketch />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 12,
          }}>
            {MODULES.slice(0, 4).map((m, i) => (
              <ModuleCard key={i} {...m} />
            ))}
            <div style={{ gridColumn: "1 / -1" }}>
              <ModuleCard {...MODULES[4]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Product });
