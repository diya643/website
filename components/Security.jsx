// Security.jsx — dark institutional band with certifications row

const CERTS = [
  {
    id: "tuv",
    label: "TÜV SÜD",
    sub: "Certified",
    accent: "#003087",
    logo: () => (
      <div style={{
        width: 48, height: 48, borderRadius: "50%",
        background: "#003087",
        border: "2px solid #1A4DB5",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 1, flex: "none",
      }}>
        <span style={{ fontSize: 9, fontWeight: 900, color: "#fff", letterSpacing: "0.05em", lineHeight: 1 }}>TÜV</span>
        <div style={{ width: 28, height: 1, background: "rgba(255,255,255,0.4)" }} />
        <span style={{ fontSize: 8, fontWeight: 700, color: "#FFD700", letterSpacing: "0.1em", lineHeight: 1 }}>SÜD</span>
      </div>
    ),
  },
  {
    id: "soc2",
    label: "SOC 2",
    sub: "Type II",
    accent: "#1A5276",
    logo: () => (
      <div style={{
        width: 48, height: 48, flex: "none",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 4 L40 11 L40 24 C40 33 33 40 24 43 C15 40 8 33 8 24 L8 11 Z" fill="#1A5276" stroke="#2980B9" strokeWidth="1.5"/>
          <path d="M24 8 L37 14 L37 24 C37 31 31 37 24 40 C17 37 11 31 11 24 L11 14 Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
          <text x="24" y="23" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="800" fontFamily="system-ui,sans-serif">SOC</text>
          <text x="24" y="33" textAnchor="middle" fill="#7EC8E3" fontSize="7" fontWeight="600" fontFamily="system-ui,sans-serif">AICPA</text>
        </svg>
      </div>
    ),
  },
  {
    id: "iso9001",
    label: "ISO 9001",
    sub: "Quality",
    accent: "#C0392B",
    logo: () => (
      <div style={{
        width: 48, height: 48, flex: "none",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="3" y="8" width="42" height="32" rx="5" fill="#C0392B" stroke="#922B21" strokeWidth="1"/>
          <rect x="3" y="8" width="42" height="14" rx="5" fill="#922B21"/>
          <rect x="3" y="17" width="42" height="5" fill="#922B21"/>
          <text x="24" y="20" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="900" fontFamily="system-ui,sans-serif">ISO</text>
          <text x="24" y="31" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="800" fontFamily="system-ui,sans-serif">9001</text>
        </svg>
      </div>
    ),
  },
  {
    id: "iso27001",
    label: "ISO 27001",
    sub: "Security",
    accent: "#1B4F72",
    logo: () => (
      <div style={{
        width: 48, height: 48, flex: "none",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="3" y="8" width="42" height="32" rx="5" fill="#1B4F72" stroke="#154360" strokeWidth="1"/>
          <rect x="3" y="8" width="42" height="14" rx="5" fill="#154360"/>
          <rect x="3" y="17" width="42" height="5" fill="#154360"/>
          <text x="24" y="20" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="900" fontFamily="system-ui,sans-serif">ISO</text>
          <text x="24" y="31" textAnchor="middle" fill="#fff" fontSize="7.5" fontWeight="800" fontFamily="system-ui,sans-serif">27001</text>
        </svg>
      </div>
    ),
  },
  {
    id: "gdpr",
    label: "GDPR",
    sub: "Compliant",
    accent: "#003399",
    logo: () => (
      <div style={{
        width: 48, height: 48, flex: "none",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="21" fill="#003399" stroke="#1E40AF" strokeWidth="1.5"/>
          {/* EU stars ring — 12 stars */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 - 90) * Math.PI / 180;
            const r = 14;
            const cx = 24 + r * Math.cos(angle);
            const cy = 24 + r * Math.sin(angle);
            return <circle key={i} cx={cx} cy={cy} r="1.5" fill="#FFD700" />;
          })}
          <text x="24" y="27" textAnchor="middle" fill="#fff" fontSize="7.5" fontWeight="800" fontFamily="system-ui,sans-serif">GDPR</text>
        </svg>
      </div>
    ),
  },
];

const Security = () => (
  <section style={{
    position: "relative",
    background: "var(--pascal-dark)",
    color: "#fff",
    padding: "140px 0 100px",
    overflow: "hidden",
    isolation: "isolate",
  }}>
    {/* Subtle grid backdrop */}
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0, zIndex: -1,
      backgroundImage: [
        "linear-gradient(rgba(81,152,114,0.04) 1px, transparent 1px)",
        "linear-gradient(90deg, rgba(81,152,114,0.04) 1px, transparent 1px)",
      ].join(", "),
      backgroundSize: "60px 60px",
    }} />

    {/* Green glow top-right, blue glow bottom-left */}
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0, zIndex: -1,
      background: [
        "radial-gradient(700px 500px at 100% 0%, rgba(81,152,114,0.12), transparent 60%)",
        "radial-gradient(500px 400px at 0% 100%, rgba(40,80,200,0.08), transparent 60%)",
      ].join(", "),
    }} />

    <div className="container" style={{ position: "relative" }}>
      <div style={{ maxWidth: 760 }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          fontSize: 12, fontWeight: 500,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: "var(--pascal-emerald)",
          marginBottom: 22,
        }}>
          <span style={{ width: 24, height: 1, background: "var(--pascal-emerald)" }}/>
          Trust &amp; Compliance
        </span>
        <h2 style={{
          fontSize: 60, fontWeight: 700,
          color: "var(--pascal-dark-text)",
          letterSpacing: "-0.03em", lineHeight: 1.02,
          marginBottom: 24,
        }}>
          Security Without{" "}
          <span style={{ color: "var(--pascal-emerald)" }}>Compromise.</span>
        </h2>
        <p style={{
          fontSize: 19, lineHeight: 1.55,
          color: "var(--pascal-dark-muted)",
          marginBottom: 36,
          maxWidth: 620,
        }}>
          Modern data practices, encryption standards, AI governance, and independent audits keep your financial operations compliant and protected.
        </p>
        <a href="#" className="pbtn pbtn-primary" style={{ background: "var(--pascal-emerald)" }}>
          Trust Center
          <i data-lucide="arrow-up-right" style={{ width: 16, height: 16 }}/>
        </a>
      </div>

      {/* Certifications row */}
      <div style={{
        marginTop: 80,
        padding: "28px 32px",
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 18,
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 24,
      }}>
        {CERTS.map(cert => (
          <div key={cert.id} style={{
            display: "flex", alignItems: "center", gap: 14,
            borderLeft: `1px solid rgba(255,255,255,0.10)`,
            paddingLeft: 20,
          }}>
            <cert.logo />
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.2 }}>{cert.label}</div>
              <div style={{ fontSize: 12, color: "var(--pascal-dark-muted)", marginTop: 3 }}>{cert.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { Security });
