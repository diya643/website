// Partners.jsx — infinite horizontal scrolling logo cloud

const TECH_LOGOS = {
  "AWS": {
    img: "https://cdn.simpleicons.org/amazonaws/232F3E",
    label: "AWS"
  },
  "Azure": {
    img: "https://cdn.simpleicons.org/microsoftazure/0078D4",
    label: "Azure"
  },
  "Google Cloud": {
    img: "https://cdn.simpleicons.org/googlecloud/4285F4",
    label: "Google Cloud"
  },
  "OpenAI": {
    img: "https://cdn.simpleicons.org/openai/000000",
    label: "OpenAI"
  },
  "Weaviate": {
    img: "https://cdn.simpleicons.org/weaviate/4AC4AC",
    label: "Weaviate"
  },
  "Perplexity": {
    img: "https://cdn.simpleicons.org/perplexity/20808D",
    label: "Perplexity"
  },
};

const PARTNERS = [
  { name: "Kalaari Capital",    color: "#1D3461", abbr: "KC" },
  { name: "Infoedge",          color: "#E8431F", abbr: "IE" },
  { name: "MS Capital",        color: "#003087", abbr: "MS" },
  { name: "SVCA",              color: "#2D5016", abbr: "SV" },
  { name: "AWS",               tech: true },
  { name: "OpenAI",            tech: true },
  { name: "Antler",            color: "#000000", abbr: "AN" },
  { name: "Azure",             tech: true },
  { name: "Perplexity",        tech: true },
  { name: "Google Cloud",      tech: true },
  { name: "Weaviate",          tech: true },
  { name: "Quatr",             color: "#519872", abbr: "QT" },
  { name: "Citadel",           color: "#0047AB", abbr: "CT" },
  { name: "Two Sigma",         color: "#1E3A5F", abbr: "TS" },
];

const PartnerLogo = ({ partner }) => {
  const techEntry = TECH_LOGOS[partner.name];

  if (partner.tech && techEntry) {
    return (
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "0 32px",
        whiteSpace: "nowrap",
        opacity: 0.75,
      }}>
        <img
          src={techEntry.img}
          alt={techEntry.label}
          style={{ height: 28, width: "auto", display: "block", objectFit: "contain" }}
          onError={(e) => { e.target.style.display = "none"; }}
        />
        <span style={{
          fontSize: 18,
          fontWeight: 600,
          letterSpacing: "-0.01em",
          color: "var(--pascal-ink)",
        }}>{techEntry.label}</span>
      </div>
    );
  }

  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "0 32px",
      whiteSpace: "nowrap",
      opacity: 0.72,
    }}>
      <span style={{
        width: 30,
        height: 30,
        borderRadius: 6,
        background: partner.color,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 11,
        fontWeight: 700,
        color: "#fff",
        letterSpacing: "0.02em",
        flex: "none",
      }}>
        {partner.abbr}
      </span>
      <span style={{
        fontSize: 18,
        fontWeight: 600,
        letterSpacing: "-0.01em",
        color: "var(--pascal-ink)",
      }}>{partner.name}</span>
    </div>
  );
};

const Divider = () => (
  <span style={{
    alignSelf: "center",
    width: 4,
    height: 4,
    borderRadius: "50%",
    background: "var(--pascal-line-strong)",
    flex: "none",
  }} />
);

const Partners = () => {
  const looped = [...PARTNERS, ...PARTNERS];
  return (
    <section style={{
      padding: "60px 0 80px",
      overflow: "hidden",
      borderTop: "1px solid #d4d4d4",
      borderBottom: "1px solid #d4d4d4",
      background: "#e8e8e8",
    }}>
      <div className="container" style={{ marginBottom: 36 }}>
        <div style={{ textAlign: "center" }}>
          <span className="eyebrow">Trusted by investment teams at</span>
        </div>
      </div>

      <div style={{
        position: "relative",
        maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}>
        <div className="marquee-track">
          {looped.map((p, i) => (
            <React.Fragment key={i}>
              <PartnerLogo partner={p} />
              {i < looped.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Partners });
