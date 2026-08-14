import { useState } from "react";
import { COLORS } from "../data/theme";
import { FAQS } from "../data/content";

export default function FAQPage() {
  const [activeCat, setActiveCat] = useState("Investments");
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "100px 5% 80px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div className="section-label">FAQ</div>
        <h1 className="section-title serif">Frequently Asked Questions</h1>
        <p className="section-sub" style={{ margin: "16px auto 0", textAlign: "center" }}>
          Clear answers to the questions we hear most — straight from our advisors.
        </p>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 40, flexWrap: "wrap", justifyContent: "center" }}>
        {Object.keys(FAQS).map(cat => (
          <button key={cat} className={`tab-btn ${activeCat === cat ? "active" : ""}`} onClick={() => { setActiveCat(cat); setOpenIdx(null); }}>{cat}</button>
        ))}
      </div>

      <div>
        {FAQS[activeCat].map(({ q, a }, i) => (
          <div key={i} className="faq-item">
            <div onClick={() => setOpenIdx(openIdx === i ? null : i)}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", cursor: "pointer" }}>
              <h3 style={{ fontSize: 16, fontWeight: 500, color: openIdx === i ? COLORS.gold : COLORS.white, flex: 1, paddingRight: 16 }}>{q}</h3>
              <span style={{ color: COLORS.gold, fontSize: 20, fontWeight: 300, flexShrink: 0 }}>{openIdx === i ? "−" : "+"}</span>
            </div>
            {openIdx === i && (
              <div style={{ paddingBottom: 20, paddingRight: 32 }}>
                <p style={{ color: COLORS.slate, lineHeight: 1.7, fontSize: 15 }}>{a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 64, textAlign: "center", padding: 40, background: "rgba(201,168,76,0.06)", borderRadius: 16, border: `1px solid ${COLORS.border}` }}>
        <div style={{ fontSize: 32, marginBottom: 16 }}>💬</div>
        <h3 style={{ fontSize: 22, fontWeight: 600, color: COLORS.white, marginBottom: 12 }}>Still have questions?</h3>
        <p style={{ color: COLORS.slate, marginBottom: 20 }}>Our advisors are available Monday–Saturday, 9 AM–7 PM.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="mailto:saravox.financialservices@gmail.com" style={{ color: COLORS.gold, fontSize: 14, textDecoration: "none" }}>✉ saravox.financialservices@gmail.com</a>
          <a href="tel:+917812827930" style={{ color: COLORS.gold, fontSize: 14, textDecoration: "none" }}>📞 +91 78128 27930</a>
        </div>
      </div>
    </div>
  );
}

// ─── CONTACT ───
