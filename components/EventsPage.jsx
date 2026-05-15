// EventsPage.jsx — Events: emulates pascalailabs.com/news card layout

const EVENTS = [
  {
    id: 1,
    type: "Webinar",
    title: "How GenAI Is Used By Top Investment Firms",
    speaker: "Vibhav Viswanathan",
    date: "July 14, 2025",
    desc: "How leading hedge funds and AMCs deploy generative AI for alpha research, IC memos, and portfolio monitoring.",
    hasAccess: true,
    gradient: "linear-gradient(135deg, #0C595A 0%, #137068 50%, #279C7B 100%)",
  },
  {
    id: 2,
    type: "Webinar",
    title: "Deploying Agentic AI Inside the Investment Perimeter",
    speaker: "Pascal AI Team",
    date: "March 12, 2025",
    desc: "The architecture decisions behind sovereign AI deployment. Live Q&A with CIOs from leading fund houses.",
    hasAccess: true,
    gradient: "linear-gradient(135deg, #07434A 0%, #0C595A 50%, #1C8672 100%)",
  },
  {
    id: 3,
    type: "Conference",
    title: "CFA Institute Annual Conference 2025",
    speaker: "Pascal AI Labs",
    date: "May 19–21, 2025",
    desc: "Pascal presented on AI governance in asset management and ran live demos for CFA charterholders in Chicago.",
    hasAccess: false,
    gradient: "linear-gradient(135deg, #171A1D 0%, #1D2025 50%, #33373D 100%)",
  },
  {
    id: 4,
    type: "Roundtable",
    title: "AI & the Future of Investment Research",
    speaker: "Invite-only",
    date: "January 28, 2025",
    desc: "Invite-only session with CIOs and heads of research from leading hedge funds. AI adoption, data governance.",
    hasAccess: false,
    gradient: "linear-gradient(135deg, #052A2E 0%, #07434A 50%, #0C595A 100%)",
  },
];

const TYPE_COLORS = {
  Webinar:    { text: "#279C7B", bg: "rgba(0,0,0,0.06)" },
  Conference: { text: "#3B82F6", bg: "rgba(59,130,246,0.12)" },
  Roundtable: { text: "#F59E0B", bg: "rgba(245,158,11,0.12)" },
};

/* ── Diamond watermark SVG ────────────────────────────────────────────── */
const DiamondMark = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" opacity="0.18">
    <path d="M36 4 L68 36 L36 68 L4 36 Z" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M36 16 L56 36 L36 56 L16 36 Z" stroke="white" strokeWidth="1.5" fill="none"/>
    <circle cx="36" cy="36" r="6" fill="white" opacity="0.5"/>
  </svg>
);

/* ── Event card ────────────────────────────────────────────────────────── */
const EventCard = ({ event }) => {
  const tc = TYPE_COLORS[event.type] || TYPE_COLORS.Webinar;

  return (
    <div style={{
      background: "var(--pascal-paper)",
      border: "1px solid var(--pascal-line)",
      borderRadius: 18,
      overflow: "hidden",
      transition: "transform 200ms ease, box-shadow 200ms ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 20px 50px -15px rgba(0,0,0,0.15)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = "none";
    }}
    >
      {/* Thumbnail */}
      <div style={{
        background: event.gradient,
        padding: "28px 28px 24px",
        position: "relative",
        minHeight: 180,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
        {/* Top row: badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            padding: "4px 12px", borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.30)",
            background: "rgba(255,255,255,0.12)",
            fontSize: "var(--fs-xs)", fontWeight: 600,
            color: "#fff", letterSpacing: "0.04em",
          }}>
            {event.type}
          </span>
          <div style={{ opacity: 0.9 }}>
            <DiamondMark />
          </div>
        </div>

        {/* Title + speaker */}
        <div>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--fs-h3)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            marginBottom: 8,
          }}>{event.title}</h3>
          {event.speaker !== "Invite-only" && (
            <span style={{
              fontSize: "var(--fs-small)", fontWeight: 600,
              color: "rgba(188,240,213,0.90)",
            }}>
              by {event.speaker}
            </span>
          )}
        </div>
      </div>

      {/* Content below thumbnail */}
      <div style={{ padding: "20px 24px 22px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <span style={{
            fontSize: "var(--fs-xs)", fontWeight: 600,
            padding: "2px 8px", borderRadius: 999,
            background: tc.bg, color: tc.text,
          }}>{event.type}</span>
          <span style={{ fontSize: "var(--fs-xs)", color: "var(--pascal-fg-muted)" }}>{event.date}</span>
        </div>

        <h4 style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--fs-h4)",
          fontWeight: 700,
          color: "var(--pascal-ink)",
          letterSpacing: "-0.01em",
          lineHeight: 1.3,
          marginBottom: 10,
        }}>{event.title}</h4>

        <p style={{
          fontSize: "var(--fs-small)",
          color: "var(--pascal-fg-muted)",
          lineHeight: 1.6,
          marginBottom: 18,
        }}>{event.desc}</p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "var(--fs-xs)", color: "var(--pascal-fg-muted)" }}>
            {event.type} by {event.speaker}
          </span>
          {event.hasAccess ? (
            <a href="newsroom.html" style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              fontSize: "var(--fs-small)", fontWeight: 700,
              color: "var(--pascal-emerald)", textDecoration: "none",
            }}>
              Get Access
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M3 7 L11 7 M7 3 L11 7 L7 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ) : (
            <span style={{
              fontSize: "var(--fs-xs)", color: "var(--pascal-fg-muted)",
              background: "var(--pascal-paper-card)", padding: "3px 10px",
              borderRadius: 999, border: "1px solid var(--pascal-line)",
            }}>Past event</span>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Filter tabs ─────────────────────────────────────────────────────────── */
const FILTERS = ["All", "Webinar", "Conference", "Roundtable"];

/* ── Page ────────────────────────────────────────────────────────────────── */
const EventsPage = () => {
  const [activeFilter, setActiveFilter] = React.useState("All");

  React.useEffect(() => {
    const tick = () => window.lucide && window.lucide.createIcons();
    tick();
    const id = setInterval(tick, 400);
    return () => clearInterval(id);
  }, []);

  const filtered = activeFilter === "All"
    ? EVENTS
    : EVENTS.filter(e => e.type === activeFilter);

  return (
    <div style={{ background: "var(--pascal-paper)", minHeight: "100vh" }}>
      <Nav />

      {/* Header */}
      <section style={{
        background: "var(--pascal-paper)",
        borderBottom: "1px solid var(--pascal-line)",
        padding: "72px 0 48px",
      }}>
        <div className="container" style={{ maxWidth: 860, margin: "0 auto" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            fontSize: "var(--fs-xs)", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--pascal-emerald)", marginBottom: 20,
          }}>
            <i data-lucide="calendar-days" style={{ width: 13, height: 13 }} />
            Events
          </span>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--fs-display)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--pascal-ink)",
            lineHeight: 1.05,
            marginBottom: 16,
          }}>
            Pascal events and field appearances.
          </h1>

          <p style={{
            fontSize: "var(--fs-body-l)",
            color: "var(--pascal-fg-muted)",
            lineHeight: 1.6,
            maxWidth: 540,
          }}>
            Webinars, CIO roundtables, and industry conferences where Pascal shows up.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section style={{ padding: "48px 0 80px", background: "var(--pascal-paper-soft)" }}>
        <div className="container" style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Filter tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
            {FILTERS.map(f => {
              const active = f === activeFilter;
              return (
                <button key={f} onClick={() => setActiveFilter(f)} style={{
                  padding: "8px 20px", borderRadius: 999,
                  border: `1px solid ${active ? "var(--pascal-emerald)" : "var(--pascal-line-strong)"}`,
                  background: active ? "var(--pascal-emerald)" : "var(--pascal-paper)",
                  color: active ? "#fff" : "var(--pascal-fg-muted)",
                  fontSize: "var(--fs-small)", fontWeight: active ? 600 : 500,
                  fontFamily: "inherit", cursor: "pointer",
                  transition: "all 160ms ease",
                  boxShadow: active ? "0 4px 14px -4px rgba(0,0,0,0.14)" : "none",
                }}>{f}</button>
              );
            })}
          </div>

          {/* No upcoming events banner */}
          <div style={{
            background: "var(--pascal-mint)",
            border: "1px solid rgba(0,0,0,0.10)",
            borderRadius: 12,
            padding: "14px 20px",
            display: "flex", alignItems: "center", gap: 10,
            marginBottom: 36,
          }}>
            <i data-lucide="info" style={{ width: 16, height: 16, color: "var(--pascal-emerald)", flexShrink: 0 }} />
            <span style={{ fontSize: "var(--fs-small)", color: "var(--pascal-emerald)", fontWeight: 500 }}>
              No upcoming events right now.
            </span>
            <a href="demo.html" style={{
              marginLeft: "auto", fontSize: "var(--fs-small)", fontWeight: 600,
              color: "var(--pascal-emerald)", textDecoration: "none",
              whiteSpace: "nowrap",
              display: "inline-flex", alignItems: "center", gap: 4,
            }}>
              Book a private session →
            </a>
          </div>

          {/* Past events grid */}
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--fs-h3)",
            fontWeight: 700,
            color: "var(--pascal-ink)",
            letterSpacing: "-0.01em",
            marginBottom: 24,
          }}>Past Events</h2>

          {filtered.length === 0 ? (
            <div style={{
              border: "1.5px dashed var(--pascal-line-strong)",
              borderRadius: 16, padding: "60px",
              textAlign: "center", background: "var(--pascal-paper)",
            }}>
              <p style={{ fontSize: "var(--fs-body)", color: "var(--pascal-fg-muted)" }}>
                No events in this category yet.
              </p>
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}>
              {filtered.map(ev => <EventCard key={ev.id} event={ev} />)}
            </div>
          )}
        </div>
      </section>

      {/* Notify strip */}
      <section style={{
        background: "var(--pascal-dark)",
        padding: "72px 0",
        textAlign: "center",
      }}>
        <div className="container" style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--fs-h2)",
            fontWeight: 700,
            color: "var(--pascal-dark-text)",
            letterSpacing: "-0.025em",
            marginBottom: 14,
          }}>
            Get notified about future events
          </h2>
          <p style={{
            fontSize: "var(--fs-body)",
            color: "var(--pascal-dark-muted)",
            marginBottom: 32,
          }}>
            Webinars, roundtables, and conference appearances — straight to your inbox.
          </p>
          <form onSubmit={(e) => e.preventDefault()} style={{
            display: "flex", gap: 10, justifyContent: "center",
            maxWidth: 420, margin: "0 auto",
          }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1, padding: "12px 18px", borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.07)",
                color: "var(--pascal-dark-text)",
                fontSize: "var(--fs-small)", fontFamily: "inherit", outline: "none",
              }}
            />
            <button type="submit" style={{
              padding: "12px 22px", borderRadius: 999, border: "none",
              background: "var(--pascal-emerald)", color: "#fff",
              fontSize: "var(--fs-small)", fontWeight: 600,
              fontFamily: "inherit", cursor: "pointer",
              whiteSpace: "nowrap",
            }}>Notify me</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

Object.assign(window, { EventsPage });
