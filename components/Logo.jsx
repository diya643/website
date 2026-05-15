// Logo.jsx — Pascal AI wordmark (inline SVG so it inherits color)

const LogoMark = ({ size = 28 }) => (
  <svg viewBox="0 0 56 72" width={size * 56/72} height={size} fill="none" aria-hidden="true">
    <path d="M14 8 L48 8 L48 60 L14 60 Z" stroke="currentColor" strokeWidth="3.2" fill="none" strokeLinejoin="round"/>
    <path d="M14 8 L8 14 L8 66 L14 60" stroke="currentColor" strokeWidth="3.2" fill="none" strokeLinejoin="round"/>
    <path d="M8 66 L42 66 L48 60" stroke="currentColor" strokeWidth="3.2" fill="none" strokeLinejoin="round"/>
    <path d="M20 14 L43 14 L43 53 L20 53 Z" fill="var(--pascal-emerald)"/>
  </svg>
);

const Logo = ({ size = 28, color = "var(--pascal-ink)" }) => (
  <a href="index.html" style={{
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    color,
    textDecoration: "none",
  }}>
    <LogoMark size={size}/>
    <span style={{
      fontFamily: "var(--font-sans)",
      fontSize: size * 0.85,
      fontWeight: 700,
      letterSpacing: "-0.025em",
      lineHeight: 1,
      color: "inherit",
      display: "inline-flex",
      alignItems: "baseline",
      gap: 2,
    }}>
      Pascal A<span style={{ position: "relative" }}>
        i
        <span style={{
          position: "absolute",
          right: -8,
          top: -2,
          fontSize: size * 0.35,
          color: "var(--pascal-emerald)",
          fontWeight: 700,
        }}>+</span>
      </span>
    </span>
  </a>
);

Object.assign(window, { Logo, LogoMark });
