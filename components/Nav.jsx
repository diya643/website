// Nav.jsx — Always-white frosted glass nav

const NAV_ITEMS = [
  { label: "Product", href: "product.html", solo: true },
  {
    label: "Solutions",
    items: [
      { label: "Hedge Funds", desc: "Alpha generation and signal research", icon: "trending-up", href: "hedge-funds.html" },
      { label: "Asset Management", desc: "IC memos and portfolio monitoring", icon: "line-chart", href: "asset-management.html" },
      { label: "Investment Banking", desc: "Pitch books and sector coverage", icon: "building-2", href: "investment-banking.html" },
      { label: "Private Markets", desc: "Deal sourcing and diligence", icon: "briefcase", href: "private-equity.html" },
    ],
  },
  { label: "About", href: "about.html", solo: true },
  {
    label: "Resources",
    items: [
      { label: "Newsroom", desc: "Press, announcements, and media", icon: "newspaper", href: "newsroom.html" },
      { label: "Events", desc: "Webinars and industry events", icon: "calendar-days", href: "events.html" },
      { label: "Trust Center", desc: "Security, compliance, certifications", icon: "shield-check" },
    ],
  },
];

const Nav = () => {
  const [open, setOpen] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const closeTimer = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const enter = (label) => { clearTimeout(closeTimer.current); setOpen(label); };
  const leave = () => { closeTimer.current = setTimeout(() => setOpen(null), 120); };

  return (
    <nav id="top" style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "rgba(253,253,253,0.95)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: scrolled
        ? "1px solid var(--pascal-line)"
        : "1px solid var(--pascal-line)",
      transition: "box-shadow 200ms ease",
      boxShadow: scrolled ? "0 1px 0 0 var(--pascal-line)" : "none",
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 72,
      }}>
        <Logo size={28} color="var(--pascal-ink)"/>

        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {NAV_ITEMS.map((it) => (
            <div
              key={it.label}
              onMouseEnter={() => !it.solo && enter(it.label)}
              onMouseLeave={leave}
              style={{ position: "relative" }}
            >
              <a
                href={it.href || "#"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "9px 13px",
                  fontSize: 14,
                  fontWeight: 500,
                  color: open === it.label ? "var(--pascal-ink)" : "var(--pascal-fg-muted)",
                  textDecoration: "none",
                  borderRadius: 8,
                  transition: "color 160ms ease, background 160ms ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => { if (it.solo) e.currentTarget.style.color = "var(--pascal-ink)"; }}
                onMouseLeave={(e) => { if (it.solo) e.currentTarget.style.color = open === it.label ? "var(--pascal-ink)" : "var(--pascal-fg-muted)"; }}
              >
                {it.label}
                {!it.solo && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{
                    transition: "transform 160ms ease",
                    transform: open === it.label ? "rotate(180deg)" : "none",
                    opacity: 0.5,
                  }}>
                    <path d="M3 4.5 L6 7.5 L9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </a>

              {!it.solo && open === it.label && (
                <div
                  className="fade-in"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    marginTop: 6,
                    background: "var(--pascal-paper)",
                    border: "1px solid var(--pascal-line)",
                    borderRadius: 14,
                    boxShadow: "0 12px 32px -8px rgba(0,0,0,0.12)",
                    padding: 8,
                    minWidth: 300,
                    display: "grid",
                    gap: 2,
                  }}>
                  {it.items.map(sub => (
                    <a key={sub.label} href={sub.href || "#"} style={{
                      display: "flex",
                      gap: 12,
                      padding: "11px 12px",
                      borderRadius: 9,
                      textDecoration: "none",
                      color: "var(--pascal-ink)",
                      transition: "background 140ms ease",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "var(--pascal-paper-soft)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                    >
                      <span style={{
                        flex: "none",
                        width: 34, height: 34, borderRadius: 8,
                        background: "var(--pascal-paper-card)",
                        color: "var(--pascal-emerald)",
                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <i data-lucide={sub.icon} style={{ width: 16, height: 16 }}/>
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <span style={{ fontWeight: 600, fontSize: 14, color: "var(--pascal-ink)" }}>{sub.label}</span>
                        <span style={{ fontSize: 12.5, color: "var(--pascal-fg-muted)", lineHeight: 1.4 }}>{sub.desc}</span>
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <a href="demo.html" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "9px 18px",
          borderRadius: 999,
          border: "1px solid var(--pascal-ink)",
          background: "transparent",
          color: "var(--pascal-ink)",
          fontSize: 13.5, fontWeight: 500,
          textDecoration: "none",
          transition: "all 200ms ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "var(--pascal-ink)"; e.currentTarget.style.color = "#fff"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--pascal-ink)"; }}
        >
          Contact Us
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M3 11 L11 3 M5 3 L11 3 L11 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </nav>
  );
};

Object.assign(window, { Nav });
