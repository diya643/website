// TrustCenterPage.jsx — Pascal AI Trust Center

/* ─── Hero ─── */
const TrustHero = () => (
  <section style={{
    position: "relative", overflow: "hidden",
    paddingTop: 140, paddingBottom: 120,
    background: "var(--pascal-dark)",
  }}>
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0,
      backgroundImage: [
        "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
        "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
      ].join(", "),
      backgroundSize: "72px 72px",
    }} />
    <div className="container" style={{ position: "relative" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--pascal-accent)", marginBottom: 28,
        }}>
          <span style={{ width: 24, height: 1, background: "var(--pascal-accent)" }} />
          Trust Center
          <span style={{ width: 24, height: 1, background: "var(--pascal-accent)" }} />
        </span>
        <h1 style={{
          fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 700,
          letterSpacing: "-0.04em", color: "var(--pascal-dark-text)",
          lineHeight: 1.06, marginBottom: 24,
        }}>
          Security and compliance<br />built for institutional finance.
        </h1>
        <p style={{
          fontSize: 18, lineHeight: 1.65, color: "var(--pascal-dark-muted)",
          maxWidth: 580, margin: "0 auto 44px",
        }}>
          Pascal is architected for firms where data sovereignty, audit trails, and regulatory compliance are non-negotiable.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="demo.html" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "13px 28px", borderRadius: 999,
            background: "var(--pascal-accent)", color: "#fff",
            fontSize: 15, fontWeight: 600, textDecoration: "none",
          }}>
            Request Security Review
          </a>
          <a href="#certifications" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "13px 28px", borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.18)", color: "var(--pascal-dark-text)",
            fontSize: 15, fontWeight: 500, textDecoration: "none",
          }}>
            View Certifications
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Trust Stats Bar ─── */
const TrustStats = () => (
  <section style={{
    background: "var(--pascal-paper-card)",
    borderBottom: "1px solid var(--pascal-line)",
    padding: "36px 0",
  }}>
    <div className="container">
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 32,
        textAlign: "center",
      }}>
        {[
          { value: "0", label: "Data retained by Pascal servers", unit: "bytes" },
          { value: "100%", label: "Deployments inside client VPC", unit: "" },
          { value: "Every", label: "Output is source-cited", unit: "single" },
          { value: "SOC 2", label: "Type II in progress", unit: "" },
        ].map(({ value, label, unit }) => (
          <div key={label} style={{ padding: "8px 0" }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: "var(--pascal-ink)", letterSpacing: "-0.03em", lineHeight: 1 }}>
              {value}
              {unit && <span style={{ fontSize: 14, fontWeight: 500, color: "var(--pascal-fg-muted)", marginLeft: 6 }}>{unit}</span>}
            </div>
            <div style={{ fontSize: 13.5, color: "var(--pascal-fg-muted)", marginTop: 6, lineHeight: 1.4 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Architecture ─── */
const ArchCard = ({ icon, title, body }) => (
  <div style={{
    background: "var(--pascal-paper-card)",
    border: "1px solid var(--pascal-line)",
    borderRadius: 14,
    padding: "28px 28px 26px",
    display: "flex", flexDirection: "column", gap: 14,
    boxShadow: "var(--shadow-card)",
  }}>
    <span style={{
      width: 44, height: 44, borderRadius: 10,
      background: "var(--pascal-accent-light)",
      color: "var(--pascal-accent)",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      flex: "none",
    }}>
      <i data-lucide={icon} style={{ width: 20, height: 20 }} />
    </span>
    <div>
      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--pascal-ink)", marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 14.5, color: "var(--pascal-fg-muted)", lineHeight: 1.65 }}>{body}</div>
    </div>
  </div>
);

const TrustArchitecture = () => (
  <section className="section" style={{ background: "var(--pascal-paper)" }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span className="eyebrow">Security Architecture</span>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", marginTop: 16, color: "var(--pascal-ink)" }}>
          Sovereign by design. Not by configuration.
        </h2>
        <p style={{ fontSize: 16.5, color: "var(--pascal-fg-muted)", maxWidth: 560, margin: "16px auto 0", lineHeight: 1.65 }}>
          Pascal never touches your data. Every deployment runs inside your governance boundary — on-prem or in your VPC.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        <ArchCard
          icon="shield"
          title="Zero Data Retention"
          body="Pascal's servers never store, log, or cache your data. Queries and responses live exclusively inside your perimeter. The architecture is enforced at the infrastructure layer — not by policy alone."
        />
        <ArchCard
          icon="server"
          title="VPC & On-Prem Deployment"
          body="Deploy the full Pascal platform inside your own AWS, Azure, or GCP VPC — or on bare metal in your private data center. No third-party LLM APIs touch your proprietary data."
        />
        <ArchCard
          icon="key"
          title="Model Isolation"
          body="Fine-tuned or hosted models run inside your perimeter. Bring your own LLM (Claude, GPT, Gemini) via your own API keys, or deploy an isolated model instance that never leaves your environment."
        />
        <ArchCard
          icon="lock"
          title="End-to-End Encryption"
          body="All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Encryption keys are managed exclusively by your team — Pascal has no access to key material."
        />
        <ArchCard
          icon="users"
          title="RBAC & Access Control"
          body="Role-based access control across every agent, workflow, and data source. Permissions are enforced at query time — not just at login. Audit logs capture every access event."
        />
        <ArchCard
          icon="file-text"
          title="Immutable Audit Logs"
          body="Every agent action, query, output, and source citation is written to an immutable audit log. Export-ready for internal compliance review, external audit, and regulatory examination."
        />
      </div>
    </div>
  </section>
);

/* ─── Certifications ─── */
const CertBadge = ({ name, status, body, color, abbr }) => (
  <div style={{
    background: "var(--pascal-paper-card)",
    border: "1px solid var(--pascal-line)",
    borderRadius: 16, padding: "28px 24px",
    display: "flex", flexDirection: "column", gap: 16,
    boxShadow: "var(--shadow-card)",
  }}>
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
      <div style={{
        width: 52, height: 52, borderRadius: 12,
        background: color + "14",
        border: `1.5px solid ${color}30`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 13, fontWeight: 800, color, letterSpacing: "0.01em",
      }}>{abbr}</div>
      <span style={{
        padding: "4px 12px", borderRadius: 999, fontSize: 11.5, fontWeight: 600,
        background: status === "Active" ? "rgba(39,156,123,0.10)" : status === "In Progress" ? "rgba(245,158,11,0.10)" : "rgba(100,100,100,0.10)",
        color: status === "Active" ? "var(--pascal-accent)" : status === "In Progress" ? "#B45309" : "var(--pascal-fg-muted)",
        border: `1px solid ${status === "Active" ? "rgba(39,156,123,0.25)" : status === "In Progress" ? "rgba(245,158,11,0.25)" : "rgba(100,100,100,0.2)"}`,
      }}>{status}</span>
    </div>
    <div>
      <div style={{ fontSize: 17, fontWeight: 700, color: "var(--pascal-ink)", marginBottom: 8 }}>{name}</div>
      <div style={{ fontSize: 14, color: "var(--pascal-fg-muted)", lineHeight: 1.65 }}>{body}</div>
    </div>
  </div>
);

const TrustCertifications = () => (
  <section id="certifications" className="section" style={{ background: "var(--pascal-paper-soft)" }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span className="eyebrow">Certifications & Compliance</span>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", marginTop: 16, color: "var(--pascal-ink)" }}>
          Audit-ready from day one.
        </h2>
        <p style={{ fontSize: 16.5, color: "var(--pascal-fg-muted)", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.65 }}>
          Built to meet the compliance requirements institutional investors face every day.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        <CertBadge
          abbr="SOC 2"
          name="SOC 2 Type II"
          status="In Progress"
          color="#3B82F6"
          body="Independent third-party audit of Pascal's security, availability, and confidentiality controls. Report available to enterprise customers under NDA."
        />
        <CertBadge
          abbr="ISO"
          name="ISO 27001"
          status="In Progress"
          color="#8B5CF6"
          body="Information security management system certification. Validates Pascal's controls across data handling, access management, and incident response."
        />
        <CertBadge
          abbr="GDPR"
          name="GDPR Ready"
          status="Active"
          color="var(--pascal-accent)"
          body="Pascal's zero-retention architecture is compliant with GDPR by design. Data never leaves the client's jurisdiction unless explicitly configured otherwise."
        />
        <CertBadge
          abbr="FINRA"
          name="FINRA Guidance Alignment"
          status="Active"
          color="var(--pascal-accent)"
          body="Pascal's audit trails, source citations, and human-in-the-loop controls align with FINRA guidance on AI use in regulated financial services."
        />
        <CertBadge
          abbr="SEC"
          name="SEC Rule 17a-4"
          status="Active"
          color="var(--pascal-accent)"
          body="Immutable audit logs and WORM-compatible storage options for broker-dealer and investment adviser compliance with SEC recordkeeping rules."
        />
        <CertBadge
          abbr="MRM"
          name="Model Risk Management"
          status="Active"
          color="#F59E0B"
          body="Pascal's Cognitive Engine supports SR 11-7 / OCC 2011-12 model risk management frameworks with full model documentation, validation, and audit capabilities."
        />
      </div>
    </div>
  </section>
);

/* ─── Data Governance ─── */
const GovernancePillar = ({ num, title, body }) => (
  <div style={{
    display: "flex", gap: 20, paddingBottom: 32,
    borderBottom: "1px solid var(--pascal-line)",
  }}>
    <div style={{
      fontSize: 11, fontWeight: 700, letterSpacing: "0.10em",
      color: "var(--pascal-accent)", flex: "none",
      width: 28, paddingTop: 2,
    }}>{num}</div>
    <div>
      <div style={{ fontSize: 17, fontWeight: 700, color: "var(--pascal-ink)", marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 15, color: "var(--pascal-fg-muted)", lineHeight: 1.65 }}>{body}</div>
    </div>
  </div>
);

const TrustGovernance = () => (
  <section className="section" style={{ background: "var(--pascal-paper)" }}>
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 80, alignItems: "start" }}>
        <div>
          <span className="eyebrow">Data Governance</span>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", marginTop: 16, marginBottom: 16, color: "var(--pascal-ink)", lineHeight: 1.15 }}>
            Your data. Your keys. Your perimeter.
          </h2>
          <p style={{ fontSize: 16, color: "var(--pascal-fg-muted)", lineHeight: 1.65, marginBottom: 32 }}>
            Pascal's governance model gives your compliance, legal, and IT teams full visibility and control over every data flow — without slowing down research operations.
          </p>
          <a href="demo.html" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "12px 24px", borderRadius: 999,
            background: "var(--pascal-accent)", color: "#fff",
            fontSize: 14.5, fontWeight: 600, textDecoration: "none",
          }}>
            Talk to Our Security Team
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            { num: "01", title: "No training on your data", body: "Pascal never uses your firm's documents, queries, or outputs to train or fine-tune any model. Your proprietary research stays proprietary — always." },
            { num: "02", title: "Bring your own encryption keys", body: "Customer-managed encryption keys (CMEK) are available for enterprise deployments. Pascal has zero access to your key material at any time." },
            { num: "03", title: "Data residency controls", body: "Configure data residency at the deployment level. Keep all data in your chosen region — US, EU, or APAC — with no cross-border data transfers." },
            { num: "04", title: "Full citation chain on every output", body: "Every research output includes a traceable citation to its source — page, paragraph, and timestamp. Nothing comes from unknown or hallucinated sources." },
            { num: "05", title: "Incident response SLA", body: "Enterprise customers get a dedicated security contact, 24-hour incident notification SLA, and access to Pascal's incident response runbook." },
          ].map(p => <GovernancePillar key={p.num} {...p} />)}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Responsible AI ─── */
const TrustResponsibleAI = () => (
  <section className="section" style={{ background: "var(--pascal-dark)" }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          fontSize: 11, fontWeight: 600, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--pascal-accent)", marginBottom: 16,
        }}>
          <span style={{ width: 20, height: 1, background: "var(--pascal-accent)" }} />
          Responsible AI
          <span style={{ width: 20, height: 1, background: "var(--pascal-accent)" }} />
        </span>
        <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--pascal-dark-text)", lineHeight: 1.1 }}>
          AI that keeps humans in control.
        </h2>
        <p style={{ fontSize: 16.5, color: "var(--pascal-dark-muted)", maxWidth: 560, margin: "16px auto 0", lineHeight: 1.65 }}>
          Pascal agents augment analyst judgment — they don't replace it. Every output is traceable, editable, and human-verified before it reaches an investment decision.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {[
          {
            icon: "user-check",
            title: "Human-in-the-Loop",
            body: "Every agent output is a draft. Analysts review, annotate, and approve before any research reaches the IC or goes on record. Pascal assists — it does not decide.",
          },
          {
            icon: "search",
            title: "Source Transparency",
            body: "Every sentence in a Pascal output links to its source document, page, and paragraph. Analysts can see exactly where every claim comes from and verify it directly.",
          },
          {
            icon: "alert-triangle",
            title: "Hallucination Controls",
            body: "Pascal's Cognitive Engine is designed to refuse rather than speculate. When a source doesn't exist to support a claim, Pascal says so — it doesn't generate unsupported content.",
          },
          {
            icon: "sliders",
            title: "Model Governance",
            body: "Enterprise deployments include model versioning, rollback controls, and change management logs. CIOs and CROs can freeze model versions for regulatory examination periods.",
          },
          {
            icon: "book-open",
            title: "Bias & Fairness Review",
            body: "Pascal's research agents are tested for systematic bias in financial analysis tasks. Evaluation results are available to enterprise customers in the model documentation package.",
          },
          {
            icon: "message-square",
            title: "Feedback Loops",
            body: "Analysts flag, correct, and improve agent outputs inline. Feedback stays inside the firm's perimeter. Pascal uses aggregate correction patterns to improve prompt quality — never raw data.",
          },
        ].map(item => (
          <div key={item.title} style={{
            background: "var(--pascal-dark-card)",
            border: "1px solid var(--pascal-dark-line)",
            borderRadius: 14, padding: "26px 24px",
            display: "flex", flexDirection: "column", gap: 14,
          }}>
            <span style={{
              width: 40, height: 40, borderRadius: 9,
              background: "rgba(39,156,123,0.12)",
              color: "var(--pascal-accent)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              flex: "none",
            }}>
              <i data-lucide={item.icon} style={{ width: 18, height: 18 }} />
            </span>
            <div>
              <div style={{ fontSize: 15.5, fontWeight: 700, color: "var(--pascal-dark-text)", marginBottom: 8 }}>{item.title}</div>
              <div style={{ fontSize: 13.5, color: "var(--pascal-dark-muted)", lineHeight: 1.65 }}>{item.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Pen Test / Infra Details ─── */
const TrustInfra = () => (
  <section className="section-sm" style={{ background: "var(--pascal-paper-soft)", borderTop: "1px solid var(--pascal-line)" }}>
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <span className="eyebrow">Infrastructure Security</span>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.03em", marginTop: 16, marginBottom: 16, color: "var(--pascal-ink)", lineHeight: 1.15 }}>
            Security tested. Continuously monitored.
          </h2>
          <p style={{ fontSize: 15.5, color: "var(--pascal-fg-muted)", lineHeight: 1.65, marginBottom: 28 }}>
            Pascal's infrastructure undergoes regular penetration testing and continuous vulnerability scanning. Security findings are disclosed to enterprise customers within 24 hours.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Annual penetration testing", note: "Independent third-party, results available under NDA" },
              { label: "Continuous CVE monitoring", note: "Automated scanning with 48-hour remediation SLA for critical" },
              { label: "Vendor security reviews", note: "All third-party dependencies assessed quarterly" },
              { label: "Bug bounty program", note: "Responsible disclosure via security@pascalailabs.com" },
            ].map(({ label, note }) => (
              <div key={label} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "var(--pascal-accent)", fontWeight: 700, fontSize: 14, flex: "none", marginTop: 1 }}>✓</span>
                <div>
                  <div style={{ fontSize: 14.5, fontWeight: 600, color: "var(--pascal-ink)" }}>{label}</div>
                  <div style={{ fontSize: 13, color: "var(--pascal-fg-muted)", marginTop: 2 }}>{note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{
          background: "var(--pascal-paper-card)",
          border: "1px solid var(--pascal-line)",
          borderRadius: 16, padding: "32px",
          boxShadow: "var(--shadow-card)",
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pascal-fg-muted)", marginBottom: 20 }}>Security Stack</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { layer: "Network", detail: "Private VPC, no public ingress, WAF, DDoS protection" },
              { layer: "Identity", detail: "SSO / SAML 2.0, MFA enforced, session timeouts" },
              { layer: "Application", detail: "OWASP Top 10 mitigations, input validation, CSP headers" },
              { layer: "Data", detail: "AES-256 at rest, TLS 1.3 in transit, CMEK available" },
              { layer: "Monitoring", detail: "SIEM, anomaly detection, real-time alerting" },
              { layer: "Backups", detail: "Encrypted, air-gapped, tested quarterly" },
            ].map(({ layer, detail }) => (
              <div key={layer} style={{ display: "flex", gap: 14, alignItems: "flex-start", paddingBottom: 14, borderBottom: "1px solid var(--pascal-line)" }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
                  color: "var(--pascal-accent)", flex: "none", width: 76, paddingTop: 1,
                }}>{layer}</div>
                <div style={{ fontSize: 13, color: "var(--pascal-fg-muted)", lineHeight: 1.5 }}>{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Contact CTA ─── */
const TrustCTA = () => (
  <section style={{
    padding: "80px 0",
    background: "var(--pascal-dark)",
    borderTop: "1px solid rgba(255,255,255,0.06)",
  }}>
    <div className="container" style={{ textAlign: "center" }}>
      <h2 style={{
        fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700,
        letterSpacing: "-0.03em", color: "var(--pascal-dark-text)",
        lineHeight: 1.15, marginBottom: 16, maxWidth: 640, margin: "0 auto 16px",
      }}>
        Questions about security or compliance?
      </h2>
      <p style={{ fontSize: 16, color: "var(--pascal-dark-muted)", marginBottom: 36, lineHeight: 1.6 }}>
        Our security team responds to enterprise inquiries within one business day.
      </p>
      <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
        <a href="demo.html" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "14px 32px", borderRadius: 999,
          background: "var(--pascal-accent)", color: "#fff",
          fontSize: 15, fontWeight: 600, textDecoration: "none",
        }}>
          Book a Security Review
        </a>
        <a href="mailto:security@pascalailabs.com" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "14px 32px", borderRadius: 999,
          border: "1px solid rgba(255,255,255,0.18)", color: "var(--pascal-dark-text)",
          fontSize: 15, fontWeight: 500, textDecoration: "none",
        }}>
          security@pascalailabs.com
        </a>
      </div>
    </div>
  </section>
);

/* ─── Page ─── */
const TrustCenterPage = () => (
  <React.Fragment>
    <Nav />
    <TrustHero />
    <TrustStats />
    <TrustArchitecture />
    <TrustCertifications />
    <TrustGovernance />
    <TrustResponsibleAI />
    <TrustInfra />
    <TrustCTA />
    <Footer />
  </React.Fragment>
);

Object.assign(window, { TrustCenterPage });
