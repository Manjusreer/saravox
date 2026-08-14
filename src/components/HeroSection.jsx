import { COLORS } from "../data/theme";
import { STATS } from "../data/content";
import Counter from "./Counter";

export default function HeroSection({ setPage }) {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      background: `radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.08) 0%, transparent 60%), linear-gradient(180deg, ${COLORS.navy} 0%, ${COLORS.navyMid} 100%)`,
      padding: "120px 5% 80px", position: "relative", overflow: "hidden",
    }}>
      {/* Background decorative elements */}
      <div style={{ position: "absolute", top: "20%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.08)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "25%", right: "10%", width: 280, height: 280, borderRadius: "50%", background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.05)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-2">
          <div className="fade-in">
            <div className="badge" style={{ marginBottom: 16 }}>🏅 NISM Certified · AMFI Registered MFD</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 13, letterSpacing: 2.5, textTransform: "uppercase", color: COLORS.slateLight, marginBottom: 20 }}>
              THE <span style={{ color: COLORS.gold, fontStyle: "italic", fontSize: 15, letterSpacing: 0.5, textTransform: "none" }}>Voice</span> OF SMART INVESTING
            </div>
            <h1 className="serif" style={{ fontSize: "clamp(36px,5.5vw,64px)", fontWeight: 700, lineHeight: 1.15, color: COLORS.white, marginBottom: 24 }}>
              Your Wealth.<br />
              <span style={{ color: COLORS.gold }}>Our Mission.</span><br />
              Built Together.
            </h1>
            <p style={{ fontSize: 18, color: COLORS.slate, lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
              SARAVOX Financial Services delivers professional financial planning, mutual fund investment, and investment advisory — personalized for every life stage and goal.
            </p>
            <div className="hero-btns" style={{ display: "flex", gap: 16 }}>
              <button className="gold-btn" style={{ fontSize: 15, padding: "14px 32px" }} onClick={() => setPage("Contact")}>
                Book Free Consultation →
              </button>
              <button className="outline-btn" style={{ fontSize: 15, padding: "14px 32px" }} onClick={() => setPage("Services")}>
                Explore Services
              </button>
            </div>
            <div style={{ display: "flex", gap: 32, marginTop: 48, flexWrap: "wrap" }}>
              {[["NISM Certified", "✓"], ["AMFI Registered MFD", "✓"], ["Conflict-Free Advice", "★"]].map(([label, icon]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: COLORS.gold, fontSize: 14 }}>{icon}</span>
                  <span style={{ fontSize: 13, color: COLORS.slateLight }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials & Services card */}
          <div style={{ position: "relative" }}>
            <div className="glass-card" style={{ padding: 32 }}>
              <div style={{ fontSize: 13, color: COLORS.slate, marginBottom: 20, textTransform: "uppercase", letterSpacing: 2 }}>Our Credentials</div>
              {[
                { icon: "🏅", label: "NISM Series V-A Certified", sub: "Mutual Fund Distributors" },
                { icon: "📋", label: "AMFI Registered MFD", sub: "ARN Holder — All Major AMCs" },
                { icon: "🔍", label: "Conflict-Free Advisory", sub: "Goal-first, product-second" },
                { icon: "🛡️", label: "Compliant & Regulated", sub: "Adhering to SEBI & AMFI norms" },
              ].map(({ icon, label, sub }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18, padding: "12px 14px", background: "rgba(255,255,255,0.03)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: 24, width: 36, textAlign: "center", flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.white }}>{label}</div>
                    <div style={{ fontSize: 12, color: COLORS.slate, marginTop: 2 }}>{sub}</div>
                  </div>
                  <span style={{ marginLeft: "auto", color: "#4CAF8C", fontSize: 16 }}>✓</span>
                </div>
              ))}
              <div style={{ marginTop: 8, padding: "12px 16px", background: "rgba(201,168,76,0.08)", borderRadius: 10, border: "1px solid rgba(201,168,76,0.15)", fontSize: 12, color: COLORS.slate, lineHeight: 1.6 }}>
                Mutual fund investments are subject to market risk. Please read all scheme documents carefully before investing.
              </div>
            </div>

            {/* Floating tag */}
            <div style={{
              position: "absolute", bottom: -20, left: -24,
              background: COLORS.navyLight, border: `1px solid ${COLORS.border}`,
              borderRadius: 12, padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}>
              <div style={{ width: 36, height: 36, background: "rgba(201,168,76,0.2)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🪙</div>
              <div>
                <div style={{ fontSize: 12, color: COLORS.slate }}>Start investing from</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.white }}>₹500 / month via SIP</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="divider" style={{ margin: "64px 0 48px" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }} className="grid-4">
          {STATS.map(({ value, suffix, label, prefix }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div className="stat-number">
                <Counter target={value} prefix={prefix} suffix={suffix} />
              </div>
              <div style={{ fontSize: 13, color: COLORS.slate, marginTop: 6, letterSpacing: 0.5 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ───
