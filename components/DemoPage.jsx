// DemoPage.jsx — Request a Demo page

/* ─── Hero ─── */
const DemoHero = () => (
  <section style={{
    position: "relative",
    overflow: "hidden",
    paddingTop: 100,
    paddingBottom: 80,
    background: "var(--pascal-dark)",
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
    <div className="container" style={{ position: "relative", textAlign: "center" }}>
      <span style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        fontSize: 12, fontWeight: 500, letterSpacing: "0.18em",
        textTransform: "uppercase", color: "var(--pascal-emerald)",
        marginBottom: 24,
      }}>
        <span style={{ width: 24, height: 1, background: "var(--pascal-emerald)" }} />
        Get in Touch
        <span style={{ width: 24, height: 1, background: "var(--pascal-emerald)" }} />
      </span>
      <h1 style={{
        fontSize: "clamp(40px, 5vw, 68px)",
        fontWeight: 700, letterSpacing: "-0.035em",
        color: "var(--pascal-dark-text)", lineHeight: 1.04,
        marginBottom: 20,
      }}>Request a Demo</h1>
      <p style={{
        fontSize: 17, lineHeight: 1.65,
        color: "var(--pascal-dark-muted)",
        maxWidth: 640, width: "100%", margin: "0 auto",
      }}>
        Tell us about your workflows, data environment, and AI roadmap. We respond within one business day.
      </p>
    </div>
  </section>
);

/* ─── Form field helper ─── */
const Field = ({ label, type = "text", placeholder, half, textarea, rows = 3 }) => (
  <div style={{ gridColumn: half ? "span 1" : "span 2" }}>
    <label style={{
      display: "block", fontSize: 12.5, fontWeight: 600,
      color: "var(--pascal-ink)", letterSpacing: "0.04em",
      marginBottom: 7,
    }}>{label}</label>
    {textarea ? (
      <textarea
        placeholder={placeholder}
        rows={rows}
        style={{
          width: "100%", padding: "11px 14px",
          borderRadius: 9, fontSize: 14,
          border: "1.5px solid var(--pascal-line)",
          background: "var(--pascal-paper)",
          color: "var(--pascal-ink)",
          fontFamily: "inherit", resize: "vertical",
          outline: "none", boxSizing: "border-box",
          transition: "border-color 160ms ease",
        }}
        onFocus={(e) => e.target.style.borderColor = "var(--pascal-emerald)"}
        onBlur={(e) => e.target.style.borderColor = "var(--pascal-line)"}
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        style={{
          width: "100%", padding: "11px 14px",
          borderRadius: 9, fontSize: 14,
          border: "1.5px solid var(--pascal-line)",
          background: "var(--pascal-paper)",
          color: "var(--pascal-ink)",
          fontFamily: "inherit", outline: "none",
          boxSizing: "border-box",
          transition: "border-color 160ms ease",
        }}
        onFocus={(e) => e.target.style.borderColor = "var(--pascal-emerald)"}
        onBlur={(e) => e.target.style.borderColor = "var(--pascal-line)"}
      />
    )}
  </div>
);

/* ─── Value prop item ─── */
const ValueProp = ({ icon, headline, body }) => (
  <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
    <span style={{
      flex: "none",
      width: 44, height: 44, borderRadius: 10,
      background: "rgba(0,0,0,0.07)",
      color: "var(--pascal-emerald)",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
    }}>
      <i data-lucide={icon} style={{ width: 20, height: 20 }} />
    </span>
    <div>
      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--pascal-dark-text)", marginBottom: 7, letterSpacing: "-0.01em" }}>{headline}</div>
      <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--pascal-dark-muted)", margin: 0, width: "100%" }}>{body}</p>
    </div>
  </div>
);

/* ─── Client logo ─── */
const DEMO_CLIENTS = [
  { name: "Two Sigma",          abbr: "TS",  color: "#1E3A5F" },
  { name: "Citadel LLC",         abbr: "CT",  color: "#0047AB" },
  { name: "Kalaari Capital",  abbr: "KC",  color: "#1D3461" },
  { name: "Infoedge",         abbr: "IE",  color: "#E8431F" },
  { name: "MS Capital",       abbr: "MS",  color: "#003087" },
  { name: "Antler",           abbr: "AN",  color: "#111111" },
  { name: "SVCA",             abbr: "SV",  color: "#2D5016" },
  { name: "Quatr",            abbr: "QT",  color: "#519872" },
  { name: "AWS",              abbr: null,  img: "https://cdn.simpleicons.org/amazonaws/FF9900" },
  { name: "OpenAI",           abbr: null,  img: "https://cdn.simpleicons.org/openai/ffffff" },
  { name: "Azure",            abbr: null,  img: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
  { name: "Google Cloud",     abbr: null,  img: "https://cdn.simpleicons.org/googlecloud/4285F4" },
  { name: "Weaviate",         abbr: null,  img: "https://cdn.simpleicons.org/weaviate/4AC4AC" },
  { name: "Perplexity",       abbr: null,  img: "https://cdn.simpleicons.org/perplexity/20808D" },
];

const ClientLogo = ({ name, abbr, color, img }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: 10,
    padding: "9px 14px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.03)",
  }}>
    {img ? (
      <span style={{
        width: 26, height: 26, borderRadius: 5,
        background: "rgba(255,255,255,0.10)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flex: "none",
      }}>
        <img src={img} alt={name} style={{ width: 15, height: 15, objectFit: "contain" }} onError={(e) => { e.target.style.display = "none"; }} />
      </span>
    ) : (
      <span style={{
        width: 26, height: 26, borderRadius: 5,
        background: color, color: "#fff",
        fontSize: 8, fontWeight: 700,
        display: "flex", alignItems: "center", justifyContent: "center",
        flex: "none", letterSpacing: "0.03em",
      }}>{abbr}</span>
    )}
    <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--pascal-dark-text)", lineHeight: 1.2 }}>{name}</span>
  </div>
);

/* ─── Main two-column section ─── */
const DemoMain = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <section style={{
      background: "var(--pascal-dark)",
      paddingBottom: 120,
      position: "relative",
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 48,
          alignItems: "start",
        }}>

          {/* LEFT — Form */}
          <div style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 20,
            padding: "40px 40px 44px",
          }}>
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: "var(--pascal-dark-text)", marginBottom: 4 }}>Tell us about your team</div>
              <div style={{ fontSize: 13.5, color: "var(--pascal-dark-muted)" }}>The demo is tailored to your data and workflows before the call.</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 16px" }}>
              <Field label="First Name" placeholder="Vibhav" half />
              <Field label="Last Name" placeholder="Viswanathan" half />
              <Field label="Work Email" type="email" placeholder="you@firm.com" />
              <Field label="Company" placeholder="Your firm name" />
              <Field label="How did you hear about us?" placeholder="Conference, referral, LinkedIn..." textarea rows={2} />
              <Field label="Project Details or Questions" placeholder="Tell us about your current workflows, data stack, or what you're looking to solve..." textarea rows={4} />
            </div>

            {/* Checkbox */}
            <label style={{
              display: "flex", alignItems: "flex-start", gap: 10,
              marginTop: 20, cursor: "pointer",
            }}>
              <span
                onClick={() => setChecked(!checked)}
                style={{
                  width: 18, height: 18, borderRadius: 4, flex: "none", marginTop: 1,
                  border: checked ? "none" : "2px solid rgba(255,255,255,0.25)",
                  background: checked ? "var(--pascal-emerald)" : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", transition: "all 160ms ease",
                }}>
                {checked && (
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M2 5.5 L4.5 8 L9 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </span>
              <span style={{ fontSize: 13, lineHeight: 1.55, color: "var(--pascal-dark-muted)" }}>
                Yes, send me Pascal's research notes on AI in institutional investing.
              </span>
            </label>

            {/* Submit */}
            <button
              style={{
                marginTop: 28, width: "100%",
                padding: "15px 24px",
                borderRadius: 999,
                border: "none",
                background: "var(--pascal-emerald)",
                color: "#fff",
                fontSize: 16, fontWeight: 600,
                fontFamily: "inherit", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                transition: "background 160ms ease, transform 120ms ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--pascal-emerald-2)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--pascal-emerald)"; e.currentTarget.style.transform = "none"; }}>
              Get Started
            </button>

            <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.28)", textAlign: "center", marginTop: 14, width: "100%" }}>
              We respond within one business day. No spam, ever.
            </p>
          </div>

          {/* RIGHT — Value props + logos */}
          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            <ValueProp
              icon="layers"
              headline="Compress the research cycle from 60 hours to 20"
              body="Bloomberg, broker reports, RMS, internal notes — linked through one context graph. Research compounds instead of restarting."
            />
            <div style={{ height: 1, background: "var(--pascal-dark-line)" }} />
            <ValueProp
              icon="shield-check"
              headline="Deploy inside your perimeter"
              body="On-prem or in your VPC. SOC 2 Type II, ISO 27001, AES-256. Zero data retention. Never trains a model."
            />
            <div style={{ height: 1, background: "var(--pascal-dark-line)" }} />
            <ValueProp
              icon="file-check"
              headline="Citations on every output, no exceptions"
              body="Every answer, memo, and agent output traces to the underlying filing or transcript. Regulatory-ready for SEC, FINRA, and internal audit from day one."
            />

            {/* Client logos */}
            <div style={{
              marginTop: 8,
              padding: "24px 24px 28px",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
            }}>
              <div style={{
                fontSize: 10.5, fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "var(--pascal-dark-muted)",
                marginBottom: 16,
              }}>Our Clients</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {DEMO_CLIENTS.map(c => <ClientLogo key={c.name} {...c} />)}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ─── "Looking for something else?" ─── */
const LINKS = [
  {
    icon: "book-open",
    title: "Documentation",
    body: "Developer docs for the Cognitive Engine, agents, and MCP integration.",
    href: "#",
  },
  {
    icon: "headphones",
    title: "Contact Support",
    body: "Existing customers: reach support via your dedicated channel or support@pascalailabs.com.",
    href: "mailto:support@pascalailabs.com",
  },
  {
    icon: "building-2",
    title: "About Us",
    body: "Pascal's mission, founders, and the firms running on us.",
    href: "about.html",
  },
  {
    icon: "user-plus",
    title: "Join Our Team",
    body: "Open engineering, product, and field roles.",
    href: "#",
  },
  {
    icon: "mail",
    title: "General Contact",
    body: "Press, partnerships, anything else: hello@pascalailabs.com.",
    href: "mailto:hello@pascalailabs.com",
  },
];

const LinkCard = ({ icon, title, body, href }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", flexDirection: "column", gap: 14,
        padding: "28px 26px",
        borderRadius: 16,
        border: `1px solid ${hover ? "var(--pascal-emerald)" : "var(--pascal-line)"}`,
        background: hover ? "var(--pascal-paper-soft)" : "#fff",
        textDecoration: "none",
        transition: "all 200ms ease",
        transform: hover ? "translateY(-3px)" : "none",
        boxShadow: hover ? "0 16px 40px -10px rgba(26,36,20,0.12)" : "none",
      }}>
      <span style={{
        width: 42, height: 42, borderRadius: 10,
        background: hover ? "var(--pascal-emerald)" : "var(--pascal-mint)",
        color: hover ? "#fff" : "var(--pascal-emerald)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        transition: "all 200ms ease", flex: "none",
      }}>
        <i data-lucide={icon} style={{ width: 19, height: 19 }} />
      </span>
      <div>
        <div style={{ fontSize: 15, fontWeight: 700, color: "var(--pascal-ink)", marginBottom: 6, letterSpacing: "-0.01em" }}>{title}</div>
        <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--pascal-fg-muted)", margin: 0, width: "100%" }}>{body}</p>
      </div>
      <div style={{
        display: "flex", alignItems: "center", gap: 5,
        fontSize: 12.5, fontWeight: 600,
        color: hover ? "var(--pascal-emerald)" : "var(--pascal-fg-muted)",
        marginTop: "auto", transition: "color 200ms ease",
      }}>
        Learn more
      </div>
    </a>
  );
};

const DemoLinks = () => (
  <section className="section" style={{ background: "var(--pascal-paper-soft)" }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span className="eyebrow">Popular links</span>
        <h2 style={{
          marginTop: 18, fontSize: "clamp(28px, 3vw, 42px)",
          fontWeight: 700, letterSpacing: "-0.025em",
          color: "var(--pascal-ink)", lineHeight: 1.1, marginBottom: 14,
        }}>Looking for something else?</h2>
        <p style={{
          fontSize: 16, color: "var(--pascal-fg-muted)",
          maxWidth: 520, width: "100%", margin: "0 auto",
        }}>Documentation, support, careers, and press contacts.</p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 16,
      }}>
        {LINKS.map(l => <LinkCard key={l.title} {...l} />)}
      </div>
    </div>
  </section>
);

/* ─── Full page ─── */
const DemoPage = () => {
  React.useEffect(() => {
    const tick = () => window.lucide && window.lucide.createIcons();
    tick();
    const id = setInterval(tick, 400);
    return () => clearInterval(id);
  }, []);

  return (
    <React.Fragment>
      <Nav />
      <DemoHero />
      <DemoMain />
      <DemoLinks />
      <Footer />
    </React.Fragment>
  );
};

Object.assign(window, { DemoPage });
