import { useState } from "react";
import { COLORS } from "../data/theme";
import { SERVICES, UPCOMING_SERVICES, MFI_OFFERINGS } from "../data/content";

export default function ServicesPage({ setPage }) {
  const [selected, setSelected] = useState(null);
  const service = selected != null ? SERVICES[selected] : null;

  const ProcessStep = ({ n, label }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{
        width: 32, height: 32, borderRadius: "50%",
        background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 13, fontWeight: 700, color: COLORS.navy, flexShrink: 0,
      }}>{n}</div>
      <span style={{ fontSize: 14, color: COLORS.slateLight }}>{label}</span>
    </div>
  );

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 5% 80px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div className="section-label">Our Services</div>
        <h1 className="section-title serif">Comprehensive Financial Solutions</h1>
        <p className="section-sub" style={{ margin: "16px auto 0", textAlign: "center" }}>
          From first-time investors to seasoned wealth builders — we have the expertise and the tools to serve every financial need.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 48 }} className="grid-3">
        {SERVICES.map((s, i) => (
          <div key={s.title} className="service-card"
            style={{ borderColor: selected === i ? "rgba(201,168,76,0.5)" : undefined, background: selected === i ? "rgba(201,168,76,0.06)" : undefined }}
            onClick={() => setSelected(selected === i ? null : i)}>
            <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
            <h3 style={{ fontSize: 17, fontWeight: 600, color: COLORS.white, marginBottom: 10 }}>{s.title}</h3>
            <p style={{ fontSize: 14, color: COLORS.slate, lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</p>
            <span style={{ fontSize: 13, color: COLORS.gold, fontWeight: 500 }}>Learn more →</span>
          </div>
        ))}
      </div>

      {service && (
        <div className="glass-card" style={{ padding: 40, marginBottom: 40 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 }} className="grid-3">
            <div>
              <div style={{ fontSize: 40, marginBottom: 12 }}>{service.icon}</div>
              <h2 className="serif" style={{ fontSize: 28, color: COLORS.white, marginBottom: 12 }}>{service.title}</h2>
              <p style={{ color: COLORS.slate, lineHeight: 1.7, fontSize: 15 }}>{service.desc}</p>
              <button className="gold-btn" style={{ marginTop: 20 }} onClick={() => setPage("Contact")}>Book Consultation →</button>
            </div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: COLORS.gold, marginBottom: 16 }}>Key Benefits</h3>
              {["Personalized strategy", "Regular portfolio reviews", "Tax-efficient structuring", "Expert research access", "24/7 client support"].map(b => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ color: COLORS.gold }}>✓</span>
                  <span style={{ fontSize: 14, color: COLORS.slateLight }}>{b}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: COLORS.gold, marginBottom: 16 }}>Our Process</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Discovery Call", "Financial Assessment", "Strategy Design", "Implementation", "Ongoing Reviews"].map((s, i) => (
                  <ProcessStep key={s} n={i + 1} label={s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div className="section-label">Currently Offering</div>
        <h2 className="section-title serif" style={{ fontSize: 32 }}>Mutual Fund Investment (MFI)</h2>
        <p className="section-sub" style={{ margin: "16px auto 0", textAlign: "center" }}>
          Every route into disciplined mutual fund investing, under one roof.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16, marginBottom: 48 }} className="grid-3">
        {MFI_OFFERINGS.map(s => (
          <div key={s.title} className="glass-card" style={{ padding: 24, textAlign: "center" }}>
            <div style={{ fontSize: 30, marginBottom: 12 }}>{s.icon}</div>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: COLORS.white, marginBottom: 8 }}>{s.title}</h3>
            <p style={{ fontSize: 13, color: COLORS.slate, lineHeight: 1.5 }}>{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="divider" />
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div className="section-label">Coming Soon</div>
        <h2 className="section-title serif" style={{ fontSize: 32 }}>Upcoming Services</h2>
        <p className="section-sub" style={{ margin: "16px auto 0", textAlign: "center" }}>
          We're expanding our offering — here's what's on the way.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 48 }} className="grid-3">
        {UPCOMING_SERVICES.map(s => (
          <div key={s.title} className="service-card" style={{ cursor: "default", position: "relative" }}>
            <span className="badge" style={{ position: "absolute", top: 20, right: 20 }}>Upcoming</span>
            <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
            <h3 style={{ fontSize: 17, fontWeight: 600, color: COLORS.white, marginBottom: 10 }}>{s.title}</h3>
            <p style={{ fontSize: 14, color: COLORS.slate, lineHeight: 1.6 }}>{s.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", padding: 48, background: "rgba(201,168,76,0.06)", borderRadius: 20, border: `1px solid ${COLORS.border}` }}>
        <h2 className="serif" style={{ fontSize: 32, color: COLORS.white, marginBottom: 12 }}>Not sure where to start?</h2>
        <p style={{ color: COLORS.slate, marginBottom: 24 }}>Book a free 30-minute discovery call. We will map your goals to the right solution — no obligation.</p>
        <button className="gold-btn" style={{ fontSize: 15, padding: "14px 36px" }} onClick={() => setPage("Contact")}>Schedule Free Call</button>
      </div>
    </div>
  );
}

// ─── FINANCIAL TOOLS ───
