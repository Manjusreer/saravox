import { COLORS } from "../data/theme";
import { SERVICES } from "../data/content";
import HeroSection from "../components/HeroSection";

export default function HomePage({ setPage }) {
  return (
    <>
      <HeroSection setPage={setPage} />

      {/* Services preview */}
      <section style={{ padding: "80px 5%", background: COLORS.navyMid }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-label">What We Offer</div>
            <h2 className="section-title serif">Financial Services Built for Every Stage of Life</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 40 }} className="grid-3">
            {SERVICES.slice(0, 6).map(s => (
              <div key={s.title} className="service-card">
                <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: COLORS.white, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: COLORS.slate, lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="outline-btn" onClick={() => setPage("Services")}>View All Services →</button>
          </div>
        </div>
      </section>

      {/* Why Choose Us — replaces testimonials until real ones are collected */}
      <section style={{ padding: "80px 5%", background: COLORS.navy }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title serif">The SARAVOX Difference</h2>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: COLORS.gold, letterSpacing: 0.5, margin: "12px 0" }}>Building Wealth Through Trust, Not Pressure.</h3>
            <p className="section-sub" style={{ margin: "16px auto 0", textAlign: "center" }}>
              We simplify mutual fund investing with transparent guidance, personalized financial planning, and solutions tailored to your goals — helping you invest with confidence and stay focused on long-term wealth creation.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="grid-3">
            {[
              { icon: "🏅", title: "NISM Certified", desc: "Our advisors hold NISM Series V-A certification — the regulatory standard for mutual fund investment in India." },
              { icon: "📋", title: "AMFI Registered MFD", desc: "We are an officially registered Mutual Fund Distributor, authorised to distribute schemes from all major AMCs." },
              { icon: "🔍", title: "Goal-First Advice", desc: "Every recommendation starts with your goals, timeline, and risk appetite — not with what earns the highest commission." },
              { icon: "🤝", title: "Transparent Fees", desc: "No hidden charges. We explain exactly how we earn and ensure you understand the cost of every product we recommend." },
              { icon: "🔄", title: "Ongoing Reviews", desc: "We stay with you through market cycles with proactive rebalancing alerts and regular portfolio check-ins." },
              { icon: "📞", title: "Dedicated Support", desc: "Reach your advisor directly — no call centres, no bots. Real people who know your financial situation." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="glass-card" style={{ padding: 28 }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: COLORS.white, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, color: COLORS.slate, lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 5%", background: `linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.03))`, borderTop: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div className="section-label">Get Started</div>
          <h2 className="section-title serif" style={{ marginBottom: 20 }}>Ready to Take Control of Your Financial Future?</h2>
          <p style={{ color: COLORS.slate, fontSize: 16, lineHeight: 1.7, marginBottom: 36 }}>SARAVOX is a NISM-certified, AMFI-registered mutual fund distributor committed to honest, goal-based financial planning. Your first consultation is completely free.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="gold-btn" style={{ fontSize: 15, padding: "14px 36px" }} onClick={() => setPage("Contact")}>Book Free Consultation</button>
            <button className="outline-btn" style={{ fontSize: 15, padding: "14px 36px" }} onClick={() => setPage("Tools")}>Try Our Calculators</button>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── FOOTER ───
