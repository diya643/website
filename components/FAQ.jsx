// FAQ.jsx — accordion-style FAQ

const FAQS = [
  {
    q: "How does Pascal manage my data?",
    a: "Your data is protected by enterprise-grade security measures including AES-256 encryption in transit and at rest. Our infrastructure is hosted in SOC 2 Type 2 certified data centers with regular third-party security audits. We maintain strict access controls and comprehensive audit logs.",
  },
  {
    q: "Can I upload my own data to Pascal?",
    a: "Yes. You can connect your own data — including PDFs, Excel sheets, presentations, Word documents, and images. Our AI system automatically extracts and analyzes information while preserving original structure.",
  },
  {
    q: "How does Pascal integrate with existing investment workflows?",
    a: "Pascal connects with the tools you already use (Excel, PowerPoint, etc.), enabling you to 10x your productivity without changing your core habits.",
  },
  {
    q: "How does Pascal use my data?",
    a: "Pascal does NOT use your prompts or data for model training. Your data is exclusively used to provide services to your team.",
  },
  {
    q: "How quickly can my team get started with Pascal?",
    a: "Most teams are up and running within 24–48 hours. Enterprise deployments with custom integrations typically take 1–2 weeks.",
  },
  {
    q: "What kind of accuracy can I expect from Pascal's insights?",
    a: "High accuracy through verified data sources, multiple validation layers, and mandatory source citations for every output. You can audit any insight back to its original source.",
  },
];

const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section" style={{ background: "var(--pascal-paper)" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 80, alignItems: "start" }}>
        <div style={{ position: "sticky", top: 110 }}>
          <span className="eyebrow">FAQ</span>
          <h2 style={{
            marginTop: 18, fontSize: 44, fontWeight: 700,
            letterSpacing: "-0.025em", color: "var(--pascal-ink)", lineHeight: 1.1,
          }}>
            Frequently<br/>asked questions.
          </h2>
          <p style={{ marginTop: 22, fontSize: 16, lineHeight: 1.6, color: "var(--pascal-fg-muted)", marginBottom: 28 }}>
            The most common questions from CIOs, compliance teams, and investment heads as they evaluate Pascal.
          </p>
          <a href="demo.html" className="pbtn pbtn-outline">
            Talk to our team
            <i data-lucide="arrow-up-right" style={{ width: 14, height: 14 }}/>
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                borderBottom: "1px solid var(--pascal-line)",
              }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "26px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "inherit",
                    color: "var(--pascal-ink)",
                  }}>
                  <span style={{
                    fontSize: 19, fontWeight: 600, letterSpacing: "-0.01em",
                    color: isOpen ? "var(--pascal-emerald)" : "var(--pascal-ink)",
                    transition: "color 200ms ease",
                  }}>
                    {f.q}
                  </span>
                  <span style={{
                    flex: "none",
                    width: 36, height: 36, borderRadius: "50%",
                    border: "1px solid var(--pascal-line)",
                    background: isOpen ? "var(--pascal-emerald)" : "transparent",
                    color: isOpen ? "#fff" : "var(--pascal-ink)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    transition: "all 200ms ease",
                  }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7 L12 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                      {!isOpen && <path d="M7 2 L7 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>}
                    </svg>
                  </span>
                </button>
                <div style={{
                  maxHeight: isOpen ? 400 : 0,
                  opacity: isOpen ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 320ms ease, opacity 200ms ease, padding 200ms ease",
                  paddingBottom: isOpen ? 26 : 0,
                  paddingRight: 60,
                }}>
                  <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--pascal-fg-muted)" }}>
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { FAQ });
