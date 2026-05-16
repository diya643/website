// SolutionShared.jsx — shared copy for HF, AM, IB, PE solution pages

const BOOK_DEMO = "Book a Demo";

const SHARED_SDK_BODY =
  "Python and TypeScript SDKs built on Pascal's Cognitive Engine. For in-house teams shipping proprietary workflows.";

const SHARED_SDK_BULLETS = [
  { label: "Customizable", body: "Python and TypeScript SDKs on the Cognitive Engine." },
  { label: "Stack-native", body: "Plugs into your RMS, OMS, and proprietary databases." },
  { label: "Document-grade", body: "Reasons over PDFs, scanned filings, and analyst decks." },
  { label: "Sovereign by default", body: "Zero data retention, enforced at the infrastructure layer." },
];

const SHARED_WHY_PILLARS = [
  { icon: "🛡️", title: "Sovereignty", body: "Data stays on-prem or in your VPC. Zero retention, enforced at the infrastructure layer." },
  { icon: "📋", title: "Accuracy", body: "Every output cites its source — page, line, filing. Audit-ready for SEBI tech risk and internal review." },
  { icon: "🤝", title: "Partnership", body: "We co-develop with your team. Workflows, templates, integrations — shaped to how your firm actually runs research." },
];

const SHARED_TESTIMONIAL_QUOTE =
  "Pascal sits inside our perimeter. Every output cites its source. Our team runs research on it daily — not as another tool, as the infrastructure underneath.";

const TESTIMONIAL_ATTRIBUTIONS = {
  hf: { role: "Head of Research & Technology", org: "Leading Global Asset Management Firm" },
  am: { role: "Head of Research & Technology", org: "Leading Institutional Asset Manager" },
  ib: { role: "Head of Equity Research & Technology", org: "Leading Global Investment Bank" },
  pe: { role: "Partner & Head of Technology", org: "Leading Private Markets Firm" },
};

const SHARED_INTEGRATIONS_BODY =
  "Bloomberg, FactSet, Capital IQ, SharePoint, Snowflake, your CRM. Connected through one MCP Hub.";

const FINAL_CTA_HEADLINE = "Run your first Pascal workflow inside your firm in two weeks.";

const SHARED_DEMO_FEATURES_SUBHEAD = "See Pascal's workflows live, on your firm's data.";

const SHARED_DEMO_FEATURES = [
  { icon: "📊", title: "Turn Filings Into Structured Research", body: "Filings to cited earnings summaries and KPI tables across any company set, in minutes." },
  { icon: "🤝", title: "Collaborate Across the Investment Team", body: "Share, review, annotate, and vote firm-wide. Full attribution on every action." },
  { icon: "✍️", title: "Own the Final Output", body: "Edit and verify inline. Every cell shows its source. Institutional memory compounds with every deal." },
];

const AM_DEMO_FEATURES = [
  { icon: "📊", title: "Turn Filings Into Structured Research", body: "Filings and transcripts to cited earnings summaries and KPI tables, in minutes." },
  { icon: "🤝", title: "Collaborate Across the Investment Team", body: "PMs review and annotate. IC votes in a secure workspace. Full audit trail." },
  { icon: "✍️", title: "Own the Final Output", body: "Edit and verify inline. Locked outputs compound as institutional memory." },
];

const SolutionTestimonial = ({ pageKey }) => {
  const attr = TESTIMONIAL_ATTRIBUTIONS[pageKey];
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "100px 0", background: "var(--pascal-dark)" }}>
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(900px 600px at 50% 50%, rgba(0,0,0,0.04), transparent 65%)",
      }} />
      <div className="container" style={{ position: "relative", maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 48, color: "var(--pascal-emerald)", opacity: 0.5, lineHeight: 1, marginBottom: 28, fontFamily: "Georgia, serif" }}>"</div>
        <blockquote style={{
          fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.75,
          color: "var(--pascal-dark-text)", fontStyle: "italic",
          letterSpacing: "-0.01em", marginBottom: 40, fontWeight: 400,
        }}>
          {SHARED_TESTIMONIAL_QUOTE}
        </blockquote>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <div style={{ width: 48, height: 1, background: "rgba(0,0,0,0.15)" }} />
          <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--pascal-dark-text)" }}>{attr.role}</div>
          <div style={{ fontSize: 12.5, color: "var(--pascal-dark-muted)" }}>{attr.org}</div>
          {attr.badge && (
            <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 28, height: 28, borderRadius: 6, background: attr.badgeColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: "#fff" }}>{attr.badge}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: "var(--pascal-dark-muted)" }}>{attr.badgeLabel}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const SolutionFinalCTA = () => (
  <section style={{
    padding: "72px 0",
    background: "linear-gradient(135deg, var(--pascal-dark) 0%, #0d1e0d 50%, var(--pascal-dark) 100%)",
    borderTop: "1px solid rgba(0,0,0,0.07)",
    position: "relative", overflow: "hidden",
  }}>
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(700px 400px at 50% 50%, rgba(0,0,0,0.05), transparent 65%)" }} />
    <div className="container" style={{ position: "relative", textAlign: "center" }}>
      <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-dark-text)", lineHeight: 1.15, marginBottom: 28, maxWidth: 720, margin: "0 auto 28px" }}>
        {FINAL_CTA_HEADLINE}
      </h2>
      <a href="demo.html" style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "14px 36px", borderRadius: 999,
        background: "var(--pascal-emerald)", color: "#fff",
        fontSize: 15, fontWeight: 600, textDecoration: "none",
        boxShadow: "0 8px 32px -8px rgba(0,0,0,0.20)",
      }}>
        {BOOK_DEMO}
      </a>
    </div>
  </section>
);

Object.assign(window, {
  BOOK_DEMO,
  SHARED_SDK_BODY,
  SHARED_SDK_BULLETS,
  SHARED_WHY_PILLARS,
  SHARED_TESTIMONIAL_QUOTE,
  TESTIMONIAL_ATTRIBUTIONS,
  SHARED_INTEGRATIONS_BODY,
  FINAL_CTA_HEADLINE,
  SHARED_DEMO_FEATURES_SUBHEAD,
  SHARED_DEMO_FEATURES,
  AM_DEMO_FEATURES,
  SolutionTestimonial,
  SolutionFinalCTA,
});
