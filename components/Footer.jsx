// Footer.jsx — newsletter + nav columns + addresses + socials

const Footer = () => {
  const [email, setEmail] = React.useState("");
  const [subbed, setSubbed] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubbed(true);
    setTimeout(() => { setEmail(""); setSubbed(false); }, 3000);
  };

  return (
    <footer style={{ background: "var(--pascal-paper)", borderTop: "1px solid var(--pascal-line)" }}>
      {/* Newsletter band */}
      <div className="container" style={{ paddingTop: 90, paddingBottom: 60 }}>
        <div style={{
          background: "var(--pascal-ink)",
          color: "#fff",
          borderRadius: 22,
          padding: "56px 56px",
          position: "relative",
          overflow: "hidden",
        }}>
          <div aria-hidden="true" style={{
            position: "absolute",
            right: -120, top: -120,
            width: 380, height: 380, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)",
          }}/>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "center",
            position: "relative",
          }}>
            <div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: 12, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--pascal-ink)",
                marginBottom: 14,
              }}>
                <i data-lucide="mail" style={{ width: 14, height: 14 }}/>
                Pascal Brief · Newsletter
              </span>
              <h3 style={{
                fontSize: 36, fontWeight: 700, color: "#fff",
                letterSpacing: "-0.025em", lineHeight: 1.1,
              }}>
                Inside enterprise AI for finance. Every two weeks.
              </h3>
              <p style={{
                marginTop: 12, fontSize: 15, color: "rgba(255,255,255,0.65)",
                maxWidth: 460,
              }}>
                Field notes from the world's top investment teams. No fluff, no spam.
              </p>
            </div>

            <form onSubmit={submit} style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 999,
              padding: 6,
              display: "flex", alignItems: "center",
              backdropFilter: "blur(8px)",
            }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@firm.com"
                disabled={subbed}
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none", outline: "none",
                  padding: "14px 20px",
                  fontSize: 15, fontFamily: "inherit",
                  color: "#fff",
                  minWidth: 0,
                }}
              />
              <button type="submit" style={{
                background: subbed ? "rgba(255,255,255,0.15)" : "var(--pascal-accent)",
                color: "#fff",
                border: "none",
                borderRadius: 999,
                padding: "12px 22px",
                fontSize: 14, fontWeight: 600,
                cursor: "pointer", fontFamily: "inherit",
                display: "inline-flex", alignItems: "center", gap: 6,
                transition: "background 200ms ease",
              }}>
                {subbed ? (
                  <React.Fragment>
                    <i data-lucide="check" style={{ width: 16, height: 16 }}/>
                    Subscribed
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    Subscribe
                    <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}/>
                  </React.Fragment>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1.6fr",
          gap: 40,
          alignItems: "start",
        }}>
          <FooterColumn title="Overview" items={["Product", "Security", "MCP", "API Docs"]}/>
          <FooterColumn title="Company"  items={["About", "Careers", "Email", "LinkedIn"]}/>
          <FooterColumn title="Legal"    items={["Terms of Use", "Privacy Policy"]}/>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 18 }}>
            <Logo size={36}/>
            <a href="demo.html" className="pbtn pbtn-primary">
              Schedule Demo
              <i data-lucide="arrow-up-right" style={{ width: 16, height: 16 }}/>
            </a>
          </div>
        </div>

        {/* Offices */}
        <div style={{
          marginTop: 80,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 40,
          paddingTop: 36,
          borderTop: "1px solid var(--pascal-line)",
        }}>
          {[
            { l: "USA",   a: "228 Park Ave S PMB 55152, New York" },
            { l: "UK",    a: "86-90 Paul Street, EC2A 4NE, London" },
            { l: "India", a: "Indiqube Edge, ORR, Bangalore" },
          ].map(o => (
            <div key={o.l}>
              <div style={{ fontSize: 18, fontWeight: 700, color: "var(--pascal-ink)", letterSpacing: "-0.01em" }}>{o.l}</div>
              <div style={{ fontSize: 14, color: "var(--pascal-fg-muted)", marginTop: 6 }}>{o.a}</div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: 56, paddingTop: 26,
          borderTop: "1px solid var(--pascal-line)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ fontSize: 13, color: "var(--pascal-fg-muted)" }}>
            Copyright © {new Date().getFullYear()} Pascal AI Labs · All Rights Reserved
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <SocialIcon href="#" label="LinkedIn">
              <path d="M5 8 L5 19 M5 5 L5 5.01 M9 19 L9 13 C9 11.5 10 10 12 10 C14 10 15 11.5 15 13 L15 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </SocialIcon>
            <SocialIcon href="mailto:hello@pascalailabs.com" label="Email">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
              <path d="M3 7 L12 13 L21 7" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </SocialIcon>
            <SocialIcon href="#" label="X / Twitter">
              <path d="M4 4 L20 20 M20 4 L4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, items }) => (
  <div>
    <div style={{
      fontSize: 13, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase",
      color: "var(--pascal-fg-muted)", marginBottom: 18,
    }}>{title}</div>
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
      {items.map(it => (
        <li key={it}>
          <a href="#" style={{
            fontSize: 16, color: "var(--pascal-ink)", textDecoration: "none",
            transition: "color 160ms ease",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "var(--pascal-ink)"}
          onMouseLeave={(e) => e.currentTarget.style.color = "var(--pascal-ink)"}
          >{it}</a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ href, label, children }) => (
  <a href={href} aria-label={label} style={{
    width: 40, height: 40, borderRadius: "50%",
    border: "1px solid var(--pascal-line)",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    color: "var(--pascal-ink)",
    textDecoration: "none",
    transition: "all 200ms ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "var(--pascal-ink)";
    e.currentTarget.style.color = "#fff";
    e.currentTarget.style.borderColor = "var(--pascal-ink)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.color = "var(--pascal-ink)";
    e.currentTarget.style.borderColor = "var(--pascal-line)";
  }}
  >
    <svg width="20" height="20" viewBox="0 0 24 24">{children}</svg>
  </a>
);

Object.assign(window, { Footer });
