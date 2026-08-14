import { useState, useEffect } from "react";
import { COLORS } from "../data/theme";

export default function NavBar({ activePage, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pages = ["Home", "About", "Services", "Tools", "Blog", "FAQ", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(10,22,40,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${COLORS.border}` : "none",
      transition: "all 0.4s", padding: "0 5%",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => setPage("Home")}>
          <img src="/logo.png" alt="SARAVOX logo" style={{ width: 40, height: 40, objectFit: "contain" }} />
          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700, color: COLORS.white, letterSpacing: 0.5 }}>SARAVOX</div>
            <div style={{ fontSize: 9, color: COLORS.slate, letterSpacing: 2, textTransform: "uppercase" }}>Financial Services</div>
          </div>
        </div>

        <div className="hide-mobile" style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {pages.map(p => (
            <span key={p} className={`nav-link ${activePage === p ? "active" : ""}`}
              style={{ padding: "8px 14px", borderRadius: 6 }} onClick={() => setPage(p)}>{p}</span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button className="gold-btn" onClick={() => setPage("Contact")} style={{ padding: "8px 18px", fontSize: 13 }}>Get Started</button>
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{ background: "none", border: "none", color: COLORS.white, fontSize: 24, cursor: "pointer", display: "none" }} className="show-mobile">☰</button>
        </div>
      </div>
      {mobileOpen && (
        <div style={{ background: COLORS.navyMid, padding: "12px 0", borderTop: `1px solid ${COLORS.border}` }}>
          {pages.map(p => (
            <div key={p} style={{ padding: "12px 20px", cursor: "pointer", color: activePage === p ? COLORS.gold : COLORS.slateLight, fontSize: 14 }}
              onClick={() => { setPage(p); setMobileOpen(false); }}>{p}</div>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── ANIMATED COUNTER ───
