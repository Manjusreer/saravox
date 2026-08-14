import { COLORS } from "../data/theme";
import { SERVICES } from "../data/content";

export default function AboutPage() {
  const values = [
    { icon: "🏛️", title: "Integrity", desc: "We act in our clients' best interests, always — with full transparency and zero conflicts of interest." },
    { icon: "🎯", title: "Clarity", desc: "We simplify the complex. Every recommendation comes with a plain-language rationale you can understand and question." },
    { icon: "🤝", title: "Partnership", desc: "We measure our success by yours. Long-term relationships, not one-time transactions." },
    { icon: "📚", title: "Expertise", desc: "NISM-certified and AMFI-registered — our advisors meet the regulatory standards that matter." },
  ];

  const whyUs = [
    { icon: "🪙", title: "AMFI Registered MFD", desc: "We are a registered Mutual Fund Distributor, authorised to distribute schemes from all major AMCs in India." },
    { icon: "📋", title: "NISM Certified Advisors", desc: "Our team holds NISM certifications — the industry benchmark for financial product knowledge and compliance." },
    { icon: "🔍", title: "Goal-First Approach", desc: "We start with your goals, not with products. Every recommendation is built around your timeline and risk appetite." },
    { icon: "📞", title: "Ongoing Support", desc: "We stay with you through market cycles — proactive reviews, rebalancing alerts, and advisor availability when you need it." },
  ];

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 5% 80px" }}>
      <div style={{ textAlign: "center", marginBottom: 80 }}>
        <div className="section-label">About Us</div>
        <h1 className="section-title serif">Built on Credentials.<br />Driven by Your Goals.</h1>
        <p className="section-sub" style={{ margin: "16px auto 0", textAlign: "center" }}>
          SARAVOX Financial Services is a NISM-certified, AMFI-registered Mutual Fund Distributor committed to making professional financial guidance accessible and honest.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 80, alignItems: "center" }} className="grid-2">
        <div>
          <div className="section-label">Our Mission</div>
          <h2 className="serif" style={{ fontSize: 32, marginBottom: 20, color: COLORS.white }}>Financial freedom is not a luxury — it is a right.</h2>
          <p style={{ color: COLORS.slate, lineHeight: 1.8, marginBottom: 16 }}>We started SARAVOX because too many people make costly financial decisions simply because they never had a trustworthy advisor in their corner. Good financial advice shouldn't require a large corpus or an existing relationship with a bank.</p>
          <p style={{ color: COLORS.slate, lineHeight: 1.8, marginBottom: 16 }}>We serve first-time investors, salaried professionals, and small business owners — with the same rigour and commitment we would want for ourselves.</p>
          <p style={{ color: COLORS.slate, lineHeight: 1.8 }}>Saravox Financial Services helps you turn saving into a plan — goal-based SIPs, mutual fund advisory, and portfolio guidance built around how much risk you're actually comfortable taking.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[["NISM", "Certified Advisors"], ["AMFI", "Registered MFD"], ["10+", "AMC Partnerships"], ["0", "Hidden Charges"]].map(([n, l]) => (
            <div key={l} className="glass-card" style={{ padding: 24, textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 700, fontFamily: "'Playfair Display',serif", color: COLORS.gold }}>{n}</div>
              <div style={{ fontSize: 13, color: COLORS.slate, marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="divider" />
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div className="section-label">Core Values</div>
        <h2 className="section-title serif" style={{ fontSize: 36 }}>What We Stand For</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginBottom: 80 }} className="grid-4">
        {values.map(({ icon, title, desc }) => (
          <div key={title} className="service-card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>{icon}</div>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: COLORS.white, marginBottom: 10 }}>{title}</h3>
            <p style={{ fontSize: 14, color: COLORS.slate, lineHeight: 1.6 }}>{desc}</p>
          </div>
        ))}
      </div>

      {/* Why Us */}
      <div className="divider" />
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div className="section-label">Why SARAVOX</div>
        <h2 className="section-title serif" style={{ fontSize: 36 }}>What Makes Us Different</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20, marginBottom: 80 }} className="grid-2">
        {whyUs.map(({ icon, title, desc }) => (
          <div key={title} className="glass-card" style={{ padding: 28, display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ fontSize: 32, flexShrink: 0 }}>{icon}</div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: COLORS.white, marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 14, color: COLORS.slate, lineHeight: 1.6 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Regulatory disclosures */}
      <div style={{ padding: 32, background: "rgba(201,168,76,0.05)", borderRadius: 16, border: `1px solid ${COLORS.border}` }}>
        <div className="section-label" style={{ marginBottom: 12 }}>Regulatory Information</div>
        <p style={{ fontSize: 14, color: COLORS.slate, lineHeight: 1.8 }}>
          SARAVOX Financial Services is an AMFI-registered Mutual Fund Distributor (ARN holder). Our advisors are NISM Series V-A certified. Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results. We do not guarantee returns on any investment product.
        </p>
        <p style={{ fontSize: 13, color: COLORS.slate, marginTop: 12 }}>Udyam Registration No: UDYAM-TN-15-0039608</p>
      </div>
    </div>
  );
}

// ─── SERVICES ───
