// Testimonials.jsx — toggle between Kotak AMC and ICICI Prudential

const QUOTES = [
{
  key: "kotak",
  label: "Kotak AMC",
  fullname: "Kotak Mahindra Asset Management",
  person: "Nilesh Shah",
  title: "MD, Kotak Mahindra Asset Management Company",
  stat: { v: "AUM ₹4.8L Cr", l: "managed under one of India's largest AMCs" },
  quote: "Investment research today is shaped by both the quality of insights and the speed at which they are generated. We are continuously looking for tools that help our investment teams strengthen conviction without compromising on governance or our philosophy. Pascal AI's platform integrates with our research context while ensuring data sovereignty and security, enabling us to responsibly adopt advanced AI capabilities."
},
{
  key: "icici",
  label: "ICICI Prudential AMC",
  fullname: "ICICI Prudential Asset Management",
  person: "Abhijit Shah",
  title: "Chief Marketing & Digital Business Officer, ICICI Prudential AMC",
  stat: { v: "10+ yrs", l: "investing in frontier technology firm-wide" },
  quote: "Investment research today depends on both the quality of analysis and the ability to evaluate large volumes of information efficiently. We have been investing in frontier technology across the Company for over a decade, and through our engagement with Pascal AI, we are meaningfully moving forward into enterprise-grade AI workflows."
}];


const TestimonialLogo = ({ which }) => {
  if (which === "kotak") {
    // Kotak Mahindra — red flag mark with stylized "ka" + "Kotak" wordmark
    return (
      <svg viewBox="0 0 260 80" width="100%" height="100%" aria-label="Kotak Mahindra">
        {/* Red flag/swoosh mark */}
        <g transform="translate(6,10)">
          <path
            d="M2 0 C 18 0, 32 6, 40 22 C 48 36, 46 50, 38 60 L 26 60 C 32 50, 34 38, 26 28 C 18 18, 8 16, 2 18 Z"
            fill="#ED1C24"
          />
          <path
            d="M14 6 C 26 8, 34 18, 32 28 C 30 36, 22 38, 18 32"
            fill="#FFFFFF"
            opacity="0.0"
          />
          {/* white inner curve to suggest "ka" form */}
          <path
            d="M16 16 C 26 18, 32 26, 30 34 C 28 40, 22 42, 18 38"
            stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round"
          />
        </g>
        {/* Wordmark */}
        <text x="62" y="48"
              fontFamily="Onest, sans-serif"
              fontWeight="700" fontSize="30"
              fill="#34252F" letterSpacing="-0.02em">Kotak</text>
        <text x="62" y="66"
              fontFamily="Onest, sans-serif"
              fontWeight="500" fontSize="11"
              fill="#3B5249" letterSpacing="0.22em">MAHINDRA · AMC</text>
      </svg>
    );
  }
  // ICICI Prudential — orange "i" square + plum wordmark + prudent-man arrow
  return (
    <svg viewBox="0 0 280 80" width="100%" height="100%" aria-label="ICICI Prudential">
      {/* Orange square with "i" */}
      <g transform="translate(2,12)">
        <rect x="0" y="0" width="56" height="56" rx="3" fill="#F37021"/>
        <circle cx="28" cy="14" r="5" fill="#FFFFFF"/>
        <rect x="23" y="22" width="10" height="28" rx="1.5" fill="#FFFFFF"/>
      </g>
      {/* Prudent-man / arrow mark next to wordmark */}
      <g transform="translate(66,18)">
        {/* simple figure: head + body holding an arrow */}
        <circle cx="6" cy="4" r="3" fill="#7B1A4A"/>
        <path d="M6 7 L6 18 M2 11 L14 11 M6 18 L2 24 M6 18 L10 24"
              stroke="#7B1A4A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        {/* arrow */}
        <path d="M14 11 L22 5 M18 5 L22 5 L22 9"
              stroke="#7B1A4A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </g>
      {/* Wordmark */}
      <text x="96" y="36"
            fontFamily="Onest, sans-serif"
            fontWeight="700" fontSize="22"
            fill="#7B1A4A" letterSpacing="-0.01em">ICICI Prudential</text>
      <text x="96" y="56"
            fontFamily="Onest, sans-serif"
            fontWeight="500" fontSize="10"
            fill="#7B1A4A" letterSpacing="0.28em">MUTUAL FUND</text>
    </svg>
  );
};

const Testimonials = () => {
  const [active, setActive] = React.useState(0);
  const [k, setK] = React.useState(0);
  const q = QUOTES[active];
  const switchTo = (i) => {if (i !== active) {setActive(i);setK((x) => x + 1);}};

  return (
    <section className="section" style={{
      background: "linear-gradient(180deg, var(--pascal-paper) 0%, var(--pascal-mint) 100%)",
      position: "relative"
    }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="eyebrow">Trusted by Finance</span>
          <h2 style={{
            marginTop: 18, fontSize: 44, fontWeight: 700,
            letterSpacing: "-0.025em", color: "var(--pascal-ink)", lineHeight: 1.1
          }}>
            What India's leading AMCs are saying.
          </h2>
        </div>

        {/* Toggle */}
        <div style={{
          display: "inline-flex",
          margin: "0 auto 36px",
          padding: 4,
          background: "rgba(255,255,255,0.7)",
          border: "1px solid var(--pascal-line)",
          borderRadius: 999,
          alignItems: "center",
          backdropFilter: "blur(6px)"
        }}>
          {QUOTES.map((it, i) =>
          <button key={it.key} onClick={() => switchTo(i)} style={{
            padding: "10px 22px",
            borderRadius: 999,
            border: "none",
            background: i === active ? "var(--pascal-emerald)" : "transparent",
            color: i === active ? "#fff" : "var(--pascal-ink)",
            fontSize: 14, fontWeight: 600, cursor: "pointer",
            transition: "all 200ms ease",
            fontFamily: "inherit"
          }}>{it.label}</button>
          )}
        </div>

        {/* Quote card */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div key={k} className="fade-in" style={{
            background: "var(--pascal-paper-card)",
            border: "1px solid var(--pascal-line)",
            borderRadius: 22,
            boxShadow: "0 30px 70px -30px rgba(42,74,71,0.25)",
            padding: 0,
            maxWidth: 1080,
            width: "100%",
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            overflow: "hidden"
          }}>
            {/* Left logo + stat */}
            <div style={{
              background: "var(--pascal-paper-soft)",
              padding: 36,
              borderRight: "1px solid var(--pascal-line)",
              display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24
            }}>
              <div style={{ height: 72 }}>
                <TestimonialLogo which={q.key} />
              </div>
              <div style={{ fontSize: 12, color: "var(--pascal-fg-muted)" }}>
                {q.fullname}
              </div>
            </div>

            {/* Quote body */}
            <div style={{ padding: 48, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <svg width="38" height="28" viewBox="0 0 38 28" fill="none" style={{ marginBottom: 18, color: "var(--pascal-emerald)" }}>
                <path d="M0 28 L0 14 C0 6 6 0 14 0 L14 6 C10 6 6 10 6 14 L14 14 L14 28 Z" fill="currentColor" />
                <path d="M22 28 L22 14 C22 6 28 0 36 0 L36 6 C32 6 28 10 28 14 L36 14 L36 28 Z" fill="currentColor" />
              </svg>
              <p style={{
                fontSize: 21, lineHeight: 1.55,
                color: "var(--pascal-ink)", letterSpacing: "-0.005em",
                fontWeight: 400, marginBottom: 28
              }}>{q.quote}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 22, borderTop: "1px solid var(--pascal-line)" }}>
                <span style={{
                  width: 50, height: 50, borderRadius: "50%",
                  background: "var(--pascal-mint)", color: "var(--pascal-emerald)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: 18
                }}>{q.person.split(" ").map((n) => n[0]).join("")}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: "var(--pascal-ink)" }}>{q.person}</div>
                  <div style={{ fontSize: 13, color: "var(--pascal-fg-muted)" }}>{q.title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

Object.assign(window, { Testimonials });