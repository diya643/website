// AboutPage.jsx — Full About page content

/* ─── Hero ─── */
const AboutHero = () => (
  <section style={{
    position: "relative",
    overflow: "hidden",
    paddingTop: 140,
    paddingBottom: 140,
    background: "var(--pascal-dark)",
  }}>
    {/* Grid backdrop */}
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0, zIndex: 0,
      backgroundImage: [
        "linear-gradient(rgba(81,152,114,0.05) 1px, transparent 1px)",
        "linear-gradient(90deg, rgba(81,152,114,0.05) 1px, transparent 1px)",
      ].join(", "),
      backgroundSize: "72px 72px",
    }} />

    {/* Ambient glows */}
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0, zIndex: 0,
      background: [
        "radial-gradient(900px 600px at 80% -5%, rgba(81,152,114,0.18), transparent 55%)",
        "radial-gradient(500px 400px at 10% 100%, rgba(81,152,114,0.10), transparent 55%)",
      ].join(", "),
    }} />

    <div className="container" style={{ position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          fontSize: 12, fontWeight: 500, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--pascal-emerald)",
          marginBottom: 28,
        }}>
          <span style={{ width: 24, height: 1, background: "var(--pascal-emerald)" }} />
          About Pascal AI Labs
          <span style={{ width: 24, height: 1, background: "var(--pascal-emerald)" }} />
        </span>

        <h1 style={{
          fontSize: "clamp(44px, 5.5vw, 76px)",
          fontWeight: 700,
          lineHeight: 1.04,
          letterSpacing: "-0.035em",
          color: "var(--pascal-dark-text)",
          marginBottom: 28,
        }}>
          Building the agentic research infrastructure institutional investors run on.
        </h1>

        <p style={{
          fontSize: "clamp(16px, 1.6vw, 19px)",
          lineHeight: 1.65,
          color: "var(--pascal-dark-muted)",
          maxWidth: 700,
          width: "100%",
          margin: "0 auto",
        }}>
          Pascal AI Labs builds sovereign, source-cited AI for AMCs, banks, and hedge funds. Founded 2024. Live at ICICI Prudential AMC and Kotak Mahindra AMC.
        </p>
      </div>
    </div>
  </section>
);

/* ─── Mission & Philosophy ─── */
const AboutMission = () => {
  const cards = [
    {
      eyebrow: "Mission",
      icon: "target",
      headline: "The infrastructure layer for buy-side research.",
      body: "The next decade of investing will be defined by the firms that get AI architecture right, not the ones that get AI tools first. Pascal builds the layer underneath.",
    },
    {
      eyebrow: "Why We Exist",
      icon: "lightbulb",
      headline: "The 60-hour due diligence becomes 20.",
      body: "Most AI tools sit next to the research process. Pascal sits underneath it — handling the prep work so analysts can spend the saved 40 hours on primary research that actually moves alpha.",
    },
  ];

  return (
    <section className="section" style={{ background: "var(--pascal-paper)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="eyebrow">Our Thinking</span>
          <h2 style={{
            marginTop: 18, fontSize: "clamp(30px, 3vw, 44px)",
            fontWeight: 700, letterSpacing: "-0.025em",
            color: "var(--pascal-ink)", lineHeight: 1.1,
          }}>Mission &amp; Philosophy</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
          {cards.map((c, i) => (
            <div key={i} style={{
              padding: "40px 40px 44px",
              border: "1px solid var(--pascal-line)",
              borderRadius: 20,
              background: i === 0 ? "var(--pascal-dark)" : "var(--pascal-paper)",
              position: "relative",
              overflow: "hidden",
            }}>
              {i === 0 && (
                <div aria-hidden="true" style={{
                  position: "absolute", top: 0, right: 0,
                  width: 300, height: 300,
                  background: "radial-gradient(circle, rgba(81,152,114,0.18), transparent 70%)",
                  pointerEvents: "none",
                }} />
              )}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "5px 12px", borderRadius: 999,
                background: i === 0 ? "rgba(81,152,114,0.15)" : "var(--pascal-mint)",
                marginBottom: 24,
              }}>
                <i data-lucide={c.icon} style={{ width: 13, height: 13, color: "var(--pascal-emerald)" }} />
                <span style={{
                  fontSize: 11.5, fontWeight: 600, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "var(--pascal-emerald)",
                }}>{c.eyebrow}</span>
              </div>
              <h3 style={{
                fontSize: 22, fontWeight: 700,
                color: i === 0 ? "var(--pascal-dark-text)" : "var(--pascal-ink)",
                letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16,
              }}>{c.headline}</h3>
              <p style={{
                fontSize: 15.5, lineHeight: 1.7,
                color: i === 0 ? "var(--pascal-dark-muted)" : "var(--pascal-fg-muted)",
              }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Founders ─── */
const FounderCard = ({ photo, initials, name, title, bio, accent }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: "1px solid var(--pascal-line)",
        borderRadius: 20,
        overflow: "hidden",
        background: "#fff",
        transition: "box-shadow 240ms ease, transform 240ms ease",
        boxShadow: hover ? "0 24px 60px -12px rgba(26,36,20,0.14)" : "none",
        transform: hover ? "translateY(-4px)" : "none",
      }}>
      <div style={{
        height: 320,
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(145deg, ${accent}18 0%, var(--pascal-dark) 100%)`,
      }}>
        {photo ? (
          <img
            src={photo}
            alt={name.split("—")[0].trim()}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 20%",
              display: "block",
            }}
          />
        ) : (
          <div style={{
            height: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 32, fontWeight: 700, color: accent }}>{initials}</span>
          </div>
        )}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, transparent 55%, rgba(15,14,12,0.3) 100%)",
          pointerEvents: "none",
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: "28px 32px 36px" }}>
        <div style={{ marginBottom: 4 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: "var(--pascal-ink)", letterSpacing: "-0.02em" }}>{name.split("—")[0].trim()}</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--pascal-emerald)", marginTop: 4 }}>{name.split("—")[1]?.trim()}</div>
        </div>
        <div style={{ width: 32, height: 2, background: "var(--pascal-emerald)", margin: "16px 0", borderRadius: 2 }} />
        <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--pascal-fg-muted)" }}>{bio}</p>
      </div>
    </div>
  );
};

const AboutFounders = () => (
  <section className="section" style={{ background: "var(--pascal-paper-soft)" }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span className="eyebrow">Leadership</span>
        <h2 style={{
          marginTop: 18, fontSize: "clamp(30px, 3vw, 44px)",
          fontWeight: 700, letterSpacing: "-0.025em",
          color: "var(--pascal-ink)", lineHeight: 1.1,
        }}>Meet the Founders</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
        <FounderCard
          photo="assets/founders/vibhav.jpg"
          initials="VV"
          accent="#519872"
          name="Vibhav Viswanathan — Co-founder & CEO"
          bio="Vibhav leads Pascal's vision and partnerships. Before Pascal, he worked across capital markets and technology with India's leading AMCs and banks."
        />
        <FounderCard
          photo="assets/founders/mithun.jpg"
          initials="MM"
          accent="#3F7A5B"
          name="Mithun M S — Co-founder & CTO"
          bio="Mithun leads engineering and product. His background spans data infrastructure, ML systems, and the audit plumbing that makes AI work in regulated environments. He architected Pascal's Cognitive Engine."
        />
      </div>
    </div>
  </section>
);

/* ─── Team Pedigree ─── */
const PEDIGREE = [
  { name: "JPMorgan",            cat: "Finance",    color: "#003087" },
  { name: "Barclays",            cat: "Finance",    color: "#00AEEF" },
  { name: "HSBC",                cat: "Finance",    color: "#DB0011" },
  { name: "Capital Group",       cat: "Finance",    color: "#003366" },
  { name: "American Express",    cat: "Finance",    color: "#006FCF" },
  { name: "Finmechanics",        cat: "Finance",    color: "#519872" },
  { name: "Accenture",          cat: "Consulting", color: "#A100FF" },
  { name: "BCG",                 cat: "Consulting", color: "#007DC5" },
  { name: "Bain & Company",      cat: "Consulting", color: "#CC0000" },
  { name: "AWS",                 cat: "Technology", color: "#FF9900" },
  { name: "Harvard",             cat: "Academia",   color: "#A51C30" },
  { name: "University of Oxford",cat: "Academia",   color: "#002147" },
  { name: "IIT Delhi",           cat: "Academia",   color: "#0D3B8C" },
  { name: "IIT Bombay",          cat: "Academia",   color: "#003087" },
  { name: "IIMB",                cat: "Academia",   color: "#7B1515" },
  { name: "London Business School",cat:"Academia",  color: "#003A70" },
  { name: "BITS Pilani",         cat: "Academia",   color: "#002D62" },
];

const PedigreeCard = ({ name, cat, color }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "18px 16px",
        borderRadius: 12,
        border: `1px solid ${hover ? color + "55" : "rgba(255,255,255,0.08)"}`,
        background: hover ? color + "12" : "rgba(255,255,255,0.03)",
        transition: "all 200ms ease",
        cursor: "default",
        textAlign: "center",
      }}>
      <div style={{
        fontSize: 13.5, fontWeight: 700,
        color: hover ? "#fff" : "rgba(255,255,255,0.72)",
        letterSpacing: "-0.01em",
        lineHeight: 1.3,
        marginBottom: 6,
        transition: "color 200ms ease",
      }}>{name}</div>
      <div style={{
        fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
        color: hover ? color : "rgba(255,255,255,0.28)",
        fontWeight: 600,
        transition: "color 200ms ease",
      }}>{cat}</div>
    </div>
  );
};

const AboutPedigree = () => (
  <section className="section" style={{
    background: "var(--pascal-dark)",
    position: "relative", overflow: "hidden",
  }}>
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0,
      background: "radial-gradient(800px 500px at 50% 0%, rgba(81,152,114,0.08), transparent 60%)",
      pointerEvents: "none",
    }} />

    <div className="container" style={{ position: "relative" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          fontSize: 12, fontWeight: 500, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--pascal-emerald)",
          marginBottom: 18,
        }}>
          <span style={{ width: 24, height: 1, background: "var(--pascal-emerald)" }} />
          Team Pedigree
        </span>
        <h2 style={{
          fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700,
          color: "var(--pascal-dark-text)", letterSpacing: "-0.025em",
          lineHeight: 1.1, marginBottom: 16,
        }}>Built by people who came from the firms we sell to.</h2>
        <p style={{
          fontSize: 16, color: "var(--pascal-dark-muted)",
          maxWidth: 560, width: "100%", margin: "0 auto",
        }}>JPMorgan, HSBC, Capital Group, BCG, AWS, Harvard, Oxford, IIT, IIM. The team has shipped enterprise software inside the firms Pascal sells to.</p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: 10,
      }}>
        {PEDIGREE.map(p => <PedigreeCard key={p.name} {...p} />)}
      </div>
    </div>
  </section>
);

/* ─── CTA ─── */
const AboutCTA = () => (
  <section style={{
    position: "relative",
    overflow: "hidden",
    padding: "120px 0",
    background: "var(--pascal-dark)",
    borderTop: "1px solid var(--pascal-dark-line)",
  }}>
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0,
      background: "radial-gradient(700px 500px at 50% 50%, rgba(81,152,114,0.14), transparent 65%)",
      pointerEvents: "none",
    }} />
    {/* Subtle dot grid */}
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0,
      backgroundImage: "radial-gradient(rgba(81,152,114,0.12) 1px, transparent 1px)",
      backgroundSize: "36px 36px",
      pointerEvents: "none",
    }} />

    <div className="container" style={{ position: "relative", textAlign: "center" }}>
      <span style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        fontSize: 12, fontWeight: 500, letterSpacing: "0.18em",
        textTransform: "uppercase", color: "var(--pascal-emerald)",
        marginBottom: 28,
      }}>
        <span style={{ width: 24, height: 1, background: "var(--pascal-emerald)" }} />
        Get Started
        <span style={{ width: 24, height: 1, background: "var(--pascal-emerald)" }} />
      </span>

      <h2 style={{
        fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 700,
        color: "var(--pascal-dark-text)", letterSpacing: "-0.03em",
        lineHeight: 1.05, marginBottom: 40,
      }}>Run your first Pascal workflow in two weeks.</h2>

      <a href="demo.html" style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        padding: "16px 36px",
        borderRadius: 999,
        background: "var(--pascal-emerald)",
        color: "#fff",
        fontSize: 16, fontWeight: 600,
        textDecoration: "none",
        transition: "background 180ms ease, transform 120ms ease",
        letterSpacing: "-0.01em",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "var(--pascal-emerald-2)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "var(--pascal-emerald)"; e.currentTarget.style.transform = "none"; }}>
        Schedule an Institutional Briefing
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
          <path d="M3 7 L11 7 M7 3 L11 7 L7 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  </section>
);

/* ─── Full page assembly ─── */
const AboutPage = () => {
  React.useEffect(() => {
    const tick = () => window.lucide && window.lucide.createIcons();
    tick();
    const id = setInterval(tick, 400);
    return () => clearInterval(id);
  }, []);

  return (
    <React.Fragment>
      <Nav />
      <AboutHero />
      <AboutMission />
      <AboutFounders />
      <AboutPedigree />
      <AboutCTA />
      <Footer />
    </React.Fragment>
  );
};

Object.assign(window, { AboutPage });
