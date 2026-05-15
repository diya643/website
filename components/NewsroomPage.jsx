// NewsroomPage.jsx — Newsroom layout: Blogs + Announcements
// To add content: populate the BLOG_POSTS and ANNOUNCEMENT_POSTS arrays below.

const BLOG_POSTS = [
  // Example shape:
  // { id: 1, title: "", date: "", author: "", readMin: 5, excerpt: "", category: "Blog" }
];

const ANNOUNCEMENT_POSTS = [
  // Example shape:
  // { id: 1, title: "", date: "", excerpt: "", category: "Announcement" }
];

/* ── Shared card ────────────────────────────────────────────────────────── */

const PostCard = ({ post, accent }) => (
  <div style={{
    background: "var(--pascal-paper)",
    border: "1px solid var(--pascal-line)",
    borderRadius: 16,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "transform 180ms ease, box-shadow 180ms ease",
    cursor: "default",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow = "0 16px 40px -12px rgba(0,0,0,0.10)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.boxShadow = "none";
  }}
  >
    <div style={{ height: 4, background: accent }} />
    <div style={{ padding: "24px 24px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{
          padding: "2px 10px", borderRadius: 999,
          fontSize: "var(--fs-xs)", fontWeight: 600,
          background: accent + "18", color: accent,
        }}>{post.category}</span>
        <span style={{ fontSize: "var(--fs-xs)", color: "var(--pascal-fg-muted)" }}>{post.date}</span>
        {post.readMin && (
          <span style={{ fontSize: "var(--fs-xs)", color: "var(--pascal-fg-muted)", marginLeft: "auto" }}>
            {post.readMin} min read
          </span>
        )}
      </div>
      <h3 style={{
        fontSize: "var(--fs-h4)", fontFamily: "var(--font-display)",
        fontWeight: 700, color: "var(--pascal-ink)",
        letterSpacing: "-0.01em", lineHeight: 1.3, flex: 1,
      }}>{post.title}</h3>
      {post.excerpt && (
        <p style={{ fontSize: "var(--fs-small)", lineHeight: 1.65, color: "var(--pascal-fg-muted)", margin: 0 }}>
          {post.excerpt}
        </p>
      )}
    </div>
    <div style={{
      padding: "12px 24px 16px",
      borderTop: "1px solid var(--pascal-line)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      {post.author && (
        <span style={{ fontSize: "var(--fs-xs)", color: "var(--pascal-fg-muted)" }}>{post.author}</span>
      )}
      <span style={{
        fontSize: "var(--fs-small)", fontWeight: 600, color: accent,
        display: "inline-flex", alignItems: "center", gap: 4, marginLeft: "auto",
      }}>
        Read more
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
          <path d="M3 7 L11 7 M7 3 L11 7 L7 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </div>
  </div>
);

/* ── Empty state ─────────────────────────────────────────────────────────── */

const EmptyState = ({ label, icon }) => (
  <div style={{
    border: "1.5px dashed var(--pascal-line-strong)",
    borderRadius: 16,
    padding: "64px 40px",
    textAlign: "center",
    gridColumn: "1 / -1",
    background: "var(--pascal-paper-soft)",
  }}>
    <div style={{
      width: 52, height: 52, borderRadius: 12,
      background: "var(--pascal-mint)",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      marginBottom: 18,
    }}>
      <i data-lucide={icon} style={{ width: 24, height: 24, color: "var(--pascal-emerald)" }} />
    </div>
    <p style={{
      fontSize: "var(--fs-h4)", fontFamily: "var(--font-display)",
      fontWeight: 600, color: "var(--pascal-ink)", marginBottom: 8,
    }}>No {label} yet</p>
    <p style={{ fontSize: "var(--fs-small)", color: "var(--pascal-fg-muted)" }}>
      Check back soon — content is on its way.
    </p>
  </div>
);

/* ── Section block ───────────────────────────────────────────────────────── */

const NewsSection = ({ title, desc, posts, accent, icon, emptyIcon }) => (
  <section style={{ padding: "72px 0" }}>
    <div className="container">
      <div style={{
        display: "flex", alignItems: "flex-end",
        justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 16,
      }}>
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: "var(--fs-xs)", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: accent, marginBottom: 10,
          }}>
            <i data-lucide={icon} style={{ width: 14, height: 14 }} />
            {title}
          </div>
          <h2 style={{
            fontSize: "var(--fs-h2)", fontFamily: "var(--font-display)",
            fontWeight: 700, color: "var(--pascal-ink)",
            letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 8,
          }}>{title}</h2>
          <p style={{ fontSize: "var(--fs-body)", color: "var(--pascal-fg-muted)", maxWidth: 460 }}>{desc}</p>
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: posts.length ? "repeat(3, 1fr)" : "1fr",
        gap: 24,
      }}>
        {posts.length > 0
          ? posts.map(p => <PostCard key={p.id} post={p} accent={accent} />)
          : <EmptyState label={title.toLowerCase()} icon={emptyIcon} />
        }
      </div>
    </div>
  </section>
);

/* ── Page ────────────────────────────────────────────────────────────────── */

const NewsroomPage = () => {
  React.useEffect(() => {
    const tick = () => window.lucide && window.lucide.createIcons();
    tick();
    const id = setInterval(tick, 400);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ background: "var(--pascal-paper)", minHeight: "100vh" }}>
      <Nav />

      {/* Hero */}
      <section style={{
        background: "var(--pascal-dark)",
        padding: "100px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          backgroundImage: [
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "64px 64px",
        }} />
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(600px 360px at 55% 0%, rgba(0,0,0,0.07), transparent 65%)",
        }} />

        <div className="container" style={{ position: "relative", maxWidth: 760, textAlign: "center" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: "var(--fs-xs)", fontWeight: 600,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--pascal-emerald)", marginBottom: 24,
          }}>
            <span style={{ width: 20, height: 1, background: "var(--pascal-emerald)" }} />
            Newsroom
            <span style={{ width: 20, height: 1, background: "var(--pascal-emerald)" }} />
          </span>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--fs-display)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--pascal-dark-text)",
            lineHeight: 1.05,
            marginBottom: 20,
          }}>
            The Pascal Brief
          </h1>

          <p style={{
            fontSize: "var(--fs-body-l)",
            color: "var(--pascal-dark-muted)",
            lineHeight: 1.65,
            maxWidth: 520,
            margin: "0 auto",
          }}>
            Deep-dives on AI in institutional finance. Product launches. Customer announcements.
          </p>
        </div>
      </section>

      {/* Divider nav */}
      <div style={{
        background: "var(--pascal-paper)",
        borderBottom: "1px solid var(--pascal-line)",
        padding: "0 32px",
      }}>
        <div style={{
          maxWidth: 1240, margin: "0 auto",
          display: "flex", gap: 0,
        }}>
          {[
            { label: "Blogs", icon: "pen-line", href: "#blogs" },
            { label: "Announcements", icon: "megaphone", href: "#announcements" },
          ].map((tab) => (
            <a key={tab.label} href={tab.href} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "16px 24px",
              fontSize: "var(--fs-small)", fontWeight: 600,
              color: "var(--pascal-fg-muted)",
              textDecoration: "none",
              borderBottom: "2px solid transparent",
              transition: "color 160ms, border-color 160ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--pascal-emerald)";
              e.currentTarget.style.borderBottomColor = "var(--pascal-emerald)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--pascal-fg-muted)";
              e.currentTarget.style.borderBottomColor = "transparent";
            }}
            >
              <i data-lucide={tab.icon} style={{ width: 15, height: 15 }} />
              {tab.label}
            </a>
          ))}
        </div>
      </div>

      {/* Blogs */}
      <div id="blogs" style={{ background: "var(--pascal-paper-soft)" }}>
        <NewsSection
          title="Blogs"
          desc="Long-form on AI architecture, buy-side research, and the work that compounds."
          posts={BLOG_POSTS}
          accent="var(--pascal-emerald)"
          icon="pen-line"
          emptyIcon="file-text"
        />
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "var(--pascal-line)" }} />

      {/* Announcements */}
      <div id="announcements" style={{ background: "var(--pascal-paper)" }}>
        <NewsSection
          title="Announcements"
          desc="Product launches, customer deployments, funding, and official press releases."
          posts={ANNOUNCEMENT_POSTS}
          accent="#3B82F6"
          icon="megaphone"
          emptyIcon="bell"
        />
      </div>

      {/* Newsletter strip */}
      <section style={{
        background: "var(--pascal-dark)",
        padding: "72px 0",
        borderTop: "1px solid rgba(0,0,0,0.07)",
      }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 560 }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--fs-h2)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "var(--pascal-dark-text)",
            marginBottom: 12,
          }}>
            Subscribe to the Pascal Brief.
          </h2>
          <p style={{
            fontSize: "var(--fs-body)",
            color: "var(--pascal-dark-muted)",
            marginBottom: 32,
          }}>
            Field notes from the world's top investment teams. Every two weeks.
          </p>
          <form onSubmit={(e) => e.preventDefault()} style={{
            display: "flex", gap: 10, justifyContent: "center", maxWidth: 420, margin: "0 auto",
          }}>
            <input
              type="email"
              placeholder="Work email"
              style={{
                flex: 1, padding: "12px 16px", borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.07)",
                color: "var(--pascal-dark-text)",
                fontSize: "var(--fs-small)",
                fontFamily: "inherit", outline: "none",
              }}
            />
            <button type="submit" style={{
              padding: "12px 24px", borderRadius: 999, border: "none",
              background: "var(--pascal-emerald)", color: "#fff",
              fontSize: "var(--fs-small)", fontWeight: 600,
              fontFamily: "inherit", cursor: "pointer",
              whiteSpace: "nowrap",
            }}>Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

Object.assign(window, { NewsroomPage });
