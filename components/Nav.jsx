// Nav.jsx — Scroll-aware: dark over hero, white frosted on scroll

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

  const linkColor = scrolled ? "var(--pascal-ink)" : "#E4EDD8";
  const activeLinkColor = "var(--pascal-emerald)";

  return (
    <nav id="top" style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: scrolled
        ? "rgba(255,255,255,0.93)"
        : "rgba(12, 16, 8, 0.55)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: scrolled
        ? "1px solid var(--pascal-line)"
        : "1px solid rgba(228,237,216,0.08)",
      transition: "background 200ms ease, border-color 200ms ease",
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 76,
      }}>
        <Logo size={30} color={scrolled ? "var(--pascal-ink)" : "#E4EDD8"}/>

        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
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
                  padding: "10px 14px",
                  fontSize: 14.5,
                  fontWeight: 500,
                  color: open === it.label ? activeLinkColor : linkColor,
                  textDecoration: "none",
                  borderRadius: 8,
                  transition: "color 160ms ease",
                  cursor: "pointer",
                }}
              >
                {it.label}
                {!it.solo && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{
                    transition: "transform 160ms ease",
                    transform: open === it.label ? "rotate(180deg)" : "none",
                    opacity: 0.7,
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
                    boxShadow: "0 18px 50px -12px rgba(26,36,20,0.18)",
                    padding: 10,
                    minWidth: 320,
                    display: "grid",
                    gap: 2,
                  }}>
                  {it.items.map(sub => (
                    <a key={sub.label} href={sub.href || "#"} style={{
                      display: "flex",
                      gap: 12,
                      padding: "12px 12px",
                      borderRadius: 10,
                      textDecoration: "none",
                      color: "var(--pascal-ink)",
                      transition: "background 160ms ease",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "var(--pascal-paper-soft)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                    >
                      <span style={{
                        flex: "none",
                        width: 36, height: 36, borderRadius: 8,
                        background: "var(--pascal-mint)",
                        color: "var(--pascal-emerald)",
                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <i data-lucide={sub.icon} style={{ width: 18, height: 18 }}/>
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <span style={{ fontWeight: 600, fontSize: 14.5, color: "var(--pascal-ink)" }}>{sub.label}</span>
                        <span style={{ fontSize: 13, color: "var(--pascal-fg-muted)", lineHeight: 1.4 }}>{sub.desc}</span>
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
          border: scrolled ? "1px solid var(--pascal-emerald)" : "1px solid rgba(228,237,216,0.35)",
          background: "transparent",
          color: scrolled ? "var(--pascal-ink)" : "#E4EDD8",
          fontSize: 14, fontWeight: 500,
          textDecoration: "none",
          transition: "all 200ms ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "var(--pascal-emerald)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--pascal-emerald)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = scrolled ? "var(--pascal-ink)" : "#E4EDD8"; e.currentTarget.style.borderColor = scrolled ? "var(--pascal-emerald)" : "rgba(228,237,216,0.35)"; }}
        >
          Contact Us
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M3 11 L11 3 M5 3 L11 3 L11 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </nav>
  );
};

Object.assign(window, { Nav });
