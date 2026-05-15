// Hero.jsx — Dark editorial hero, centered single CTA

const Hero = () => (
  <section style={{
    position: "relative",
    overflow: "hidden",
    paddingTop: 130,
    paddingBottom: 140,
    background: "var(--pascal-dark)",
  }}>
    {/* Ambient green glow */}
    <div aria-hidden="true" style={{
      position: "absolute",
      inset: 0,
      background: [
        "radial-gradient(900px 600px at 70% -10%, rgba(39,156,123,0.18), transparent 60%)",
        "radial-gradient(600px 400px at 5% 90%, rgba(39,156,123,0.10), transparent 55%)",
        "radial-gradient(400px 300px at 50% 110%, rgba(40,80,180,0.07), transparent 60%)",
      ].join(", "),
      pointerEvents: "none",
    }} />

    <div className="container" style={{ position: "relative" }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 36,
        textAlign: "center",
        maxWidth: 860,
        margin: "0 auto",
      }}>

        {/* Eyebrow pill */}
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "8px 18px",
          border: "1px solid rgba(228,237,216,0.14)",
          borderRadius: 999,
          background: "rgba(228,237,216,0.06)",
          fontSize: 13,
          fontWeight: 500,
          color: "var(--pascal-dark-text)",
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "var(--pascal-emerald)",
            boxShadow: "0 0 0 4px rgba(39,156,123,0.22)",
          }} />
          Enterprise AI Platform · Built for Finance
        </span>

        {/* Headline */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(52px, 7vw, 92px)",
          lineHeight: 1.02,
          letterSpacing: "-0.038em",
          fontWeight: 700,
          color: "var(--pascal-dark-text)",
          margin: 0,
        }}>
          Context driven AI for{" "}
          <span style={{ color: "var(--pascal-emerald)" }}>Institutional Finance</span>
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: 20,
          lineHeight: 1.5,
          color: "var(--pascal-dark-muted)",
          margin: 0,
          maxWidth: 560,
        }}>
          AI agents to turn your enterprise data into investment alpha.
        </p>

        {/* CTA */}
        <a href="demo.html" className="pbtn pbtn-primary">
          Schedule a Demo
          <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
            <path d="M3 7 L11 7 M7 3 L11 7 L7 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

      </div>
    </div>
  </section>
);

Object.assign(window, { Hero });
