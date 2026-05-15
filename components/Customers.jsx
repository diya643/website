// Customers.jsx — social proof / live customer grid

const CUSTOMERS = [
  {
    name: "ICICI Prudential AMC",
    abbr: "IP",
    color: "#F47920",
    position: "India's largest agentic-research deployment at an AMC.",
    public: true,
  },
  {
    name: "Kotak Mahindra AMC",
    abbr: "KO",
    color: "#D2232A",
    position: "Pascal's earliest enterprise rollout in Indian asset management.",
    public: true,
  },
  {
    name: "Leading NYC AMC",
    abbr: "NY",
    color: "#1D3461",
    position: "Global equity research run on Pascal's sovereign deployment.",
    public: false,
  },
  {
    name: "Leading Singapore AMC",
    abbr: "SG",
    color: "#2D5016",
    position: "APAC long/short and multi-asset research at scale.",
    public: false,
  },
];

const CustomerCard = ({ name, abbr, color, position, public: isPublic }) => (
  <div style={{
    background: "var(--pascal-paper)",
    border: "1px solid var(--pascal-line)",
    borderRadius: 16,
    padding: "28px 28px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <span style={{
        width: 44, height: 44,
        borderRadius: 10,
        background: isPublic ? color : "var(--pascal-line)",
        color: isPublic ? "#fff" : "var(--pascal-fg-muted)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "0.04em",
        flex: "none",
      }}>
        {abbr}
      </span>
      <div>
        <div style={{
          fontSize: 16,
          fontWeight: 700,
          color: "var(--pascal-ink)",
          lineHeight: 1.2,
        }}>{name}</div>
        {!isPublic && (
          <div style={{
            marginTop: 3,
            fontSize: 11,
            fontWeight: 500,
            color: "var(--pascal-fg-muted)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}>Name withheld</div>
        )}
      </div>
    </div>
    <p style={{
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--pascal-fg-muted)",
      margin: 0,
    }}>{position}</p>
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      fontWeight: 600,
      color: "var(--pascal-emerald)",
    }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--pascal-emerald)", boxShadow: "0 0 0 3px rgba(39,156,123,0.18)" }} />
      Live in production
    </div>
  </div>
);

const Customers = () => (
  <section id="customers" className="section" style={{ background: "var(--pascal-paper-soft)" }}>
    <div className="container">
      <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 56px" }}>
        <span className="eyebrow">Customers</span>
        <h2 style={{
          marginTop: 18,
          fontSize: 40,
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.025em",
          color: "var(--pascal-ink)",
          fontFamily: "var(--font-display)",
        }}>
          Live inside the firms that move global capital.
        </h2>
        <p style={{
          marginTop: 18,
          fontSize: 18,
          lineHeight: 1.55,
          color: "var(--pascal-fg-muted)",
        }}>
          Pascal runs in production at AMCs and hedge funds across India, the US, and APAC.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 20,
        maxWidth: 860,
        margin: "0 auto",
      }}>
        {CUSTOMERS.map((c, i) => (
          <CustomerCard key={i} {...c} />
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 48 }}>
        <a href="demo.html" className="pbtn pbtn-primary">
          Book a demo
          <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
            <path d="M3 7 L11 7 M7 3 L11 7 L7 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
);

Object.assign(window, { Customers });
