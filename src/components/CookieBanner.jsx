import { useState } from "react";
import { COLORS } from "../data/theme";

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 997,
      background: COLORS.navyLight, borderTop: `1px solid ${COLORS.border}`,
      padding: "16px 5%", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap",
    }}>
      <p style={{ fontSize: 13, color: COLORS.slateLight, flex: 1 }}>
        🍪 We use cookies to enhance your experience, analyse site traffic, and personalise content. See our <span style={{ color: COLORS.gold, cursor: "pointer" }}>Privacy Policy</span>.
      </p>
      <div style={{ display: "flex", gap: 12 }}>
        <button className="outline-btn" onClick={() => setVisible(false)} style={{ padding: "8px 20px", fontSize: 13 }}>Decline</button>
        <button className="gold-btn" onClick={() => setVisible(false)} style={{ padding: "8px 20px", fontSize: 13 }}>Accept All</button>
      </div>
    </div>
  );
}

