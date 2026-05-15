// Hero.jsx — Light editorial hero, centered single CTA

const Hero = () => (
  <section style={{
    position: "relative",
    overflow: "hidden",
    paddingTop: 140,
    paddingBottom: 160,
    background: "var(--pascal-paper)",
    borderBottom: "1px solid var(--pascal-line)",
  }}>

    <div className="container" style={{ position: "relative" }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 32,
        textAlign: "center",
        maxWidth: 860,
        margin: "0 auto",
      }}>

        {/* Eyebrow pill */}
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "7px 16px",
          border: "1px solid var(--pascal-line-strong)",
          borderRadius: 999,
          background: "var(--pascal-paper-card)",
          fontSize: 12.5,
          fontWeight: 500,
          letterSpacing: "0.04em",
          color: "var(--pascal-fg-muted)",
        }}>
          Enterprise AI Platform · Built for Finance
        </span>

        {/* Headline */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(44px, 6vw, 76px)",
          lineHeight: 1.0,
          letterSpacing: "-0.05em",
          fontWeight: 600,
          color: "var(--pascal-ink)",
          margin: 0,
        }}>
          Context driven AI for{" "}
          <span style={{ color: "var(--pascal-emerald)" }}>Institutional Finance</span>
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: 19,
          lineHeight: 1.55,
          color: "var(--pascal-fg-muted)",
          margin: 0,
          maxWidth: 520,
        }}>
          AI agents to turn your enterprise data into investment alpha.
        </p>

        {/* CTA row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a href="demo.html" className="pbtn pbtn-primary">
            Schedule a Demo
            <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
              <path d="M3 7 L11 7 M7 3 L11 7 L7 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="product.html" className="pbtn pbtn-ghost" style={{ color: "var(--pascal-fg-muted)", fontSize: 15 }}>
            See the platform
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7 L11 7 M7 3 L11 7 L7 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </div>
  </section>
);

Object.assign(window, { Hero });
