// Hero.jsx — Dark cinematic hero with animated city-lights background

const HERO_KEYFRAMES = `
@keyframes heroDrift1 {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  33%       { transform: translate(-40px, 30px) scale(1.08); }
  66%       { transform: translate(20px, -20px) scale(0.95); }
}
@keyframes heroDrift2 {
  0%, 100% { transform: translate(0px, 0px) scale(1.1); }
  40%       { transform: translate(50px, -35px) scale(1); }
  70%       { transform: translate(-20px, 25px) scale(1.15); }
}
@keyframes heroDrift3 {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  50%       { transform: translate(30px, 40px) scale(1.05); }
}
@keyframes heroDrift4 {
  0%, 100% { transform: translate(0px, 0px) scale(0.9); }
  45%       { transform: translate(-60px, -20px) scale(1.1); }
}
@keyframes heroDrift5 {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  55%       { transform: translate(35px, 15px) scale(0.85); }
}
`;

const CITY_LIGHTS = [
  { top: "15%",  left: "10%",  size: 480, color: "rgba(255,180,60,0.18)",  anim: "heroDrift1 18s ease-in-out infinite" },
  { top: "60%",  left: "70%",  size: 560, color: "rgba(255,150,40,0.14)",  anim: "heroDrift2 22s ease-in-out infinite" },
  { top: "30%",  left: "80%",  size: 360, color: "rgba(200,160,80,0.12)",  anim: "heroDrift3 16s ease-in-out infinite" },
  { top: "70%",  left: "20%",  size: 420, color: "rgba(100,140,255,0.10)", anim: "heroDrift4 20s ease-in-out infinite" },
  { top: "-10%", left: "50%",  size: 600, color: "rgba(255,200,100,0.08)", anim: "heroDrift5 25s ease-in-out infinite" },
];

const Hero = () => (
  <section style={{
    position: "relative",
    overflow: "hidden",
    paddingTop: 140,
    paddingBottom: 160,
    background: "#080b12",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  }}>

    {/* Inject keyframe animations */}
    <style>{HERO_KEYFRAMES}</style>

    {/* Animated city-lights background */}
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      {CITY_LIGHTS.map((l, i) => (
        <div key={i} style={{
          position: "absolute",
          top: l.top, left: l.left,
          width: l.size, height: l.size,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${l.color} 0%, transparent 70%)`,
          animation: l.anim,
          willChange: "transform",
          pointerEvents: "none",
        }} />
      ))}
    </div>

    {/* Subtle grid overlay */}
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0, zIndex: 1,
      backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    }} />

    {/* Bottom vignette */}
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0, zIndex: 2,
      background: "linear-gradient(to bottom, rgba(8,11,18,0.2) 0%, transparent 40%, rgba(8,11,18,0.5) 100%)",
    }} />

    <div className="container" style={{ position: "relative", zIndex: 3 }}>
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
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 999,
          background: "rgba(255,255,255,0.06)",
          fontSize: 12.5,
          fontWeight: 500,
          letterSpacing: "0.04em",
          color: "rgba(255,255,255,0.70)",
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--pascal-accent)", flex: "none" }} />
          Enterprise AI Platform · Built for Finance
        </span>

        {/* Headline */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(44px, 6vw, 76px)",
          lineHeight: 1.0,
          letterSpacing: "-0.05em",
          fontWeight: 600,
          color: "#fff",
          margin: 0,
        }}>
          Context driven AI for{" "}
          <span style={{ color: "#fff" }}>Institutional Finance</span>
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: 19,
          lineHeight: 1.55,
          color: "rgba(255,255,255,0.65)",
          margin: 0,
          maxWidth: 520,
        }}>
          AI agents to turn your enterprise data into investment alpha.
        </p>

        {/* CTA row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a href="demo.html" className="pbtn pbtn-primary">
            Schedule a Demo
          </a>
          <a href="product.html" className="pbtn pbtn-ghost" style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, borderColor: "rgba(255,255,255,0.25)" }}>
            See the platform
          </a>
        </div>

      </div>
    </div>
  </section>
);

Object.assign(window, { Hero });
