import { COLORS } from "../data/theme";
import { SOCIAL_LINKS } from "../data/content";

const SOCIAL_ICON_PATHS = {
  in: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z",
  ig: "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.7 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.22-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.71-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.9 3.9 2.34 7.15 2.2 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07c-4.35.2-6.78 2.62-6.98 6.98C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.41a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z",
  yt: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4l6.27 3.6-6.27 3.6z",
  x: "M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.48l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.5 3.24H4.3L17.61 20.65z",
};

const SocialIcons = () => (
  <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
    {SOCIAL_LINKS.map(s => (
      <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}
        style={{
          width: 34, height: 34, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(255,255,255,0.06)", border: `1px solid ${COLORS.border}`, transition: "background 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.25)"}
        onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill={COLORS.goldLight}><path d={SOCIAL_ICON_PATHS[s.icon]} /></svg>
      </a>
    ))}
  </div>
);

export default function Footer({ setPage }) {
  return (
    <footer style={{ background: COLORS.navyMid, padding: "60px 5% 32px", borderTop: `1px solid ${COLORS.border}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="grid-4">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <img src="/logo.png" alt="SARAVOX logo" style={{ width: 36, height: 36, objectFit: "contain" }} />
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: COLORS.white }}>SARAVOX</span>
            </div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: COLORS.slateLight, marginBottom: 16 }}>
              THE <span style={{ color: COLORS.gold, fontStyle: "italic", fontSize: 14, letterSpacing: 0.5, textTransform: "none" }}>Voice</span> OF SMART INVESTING
            </div>
            <p style={{ color: COLORS.slate, fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>NISM-certified and AMFI-registered mutual fund distributor helping individuals, families, and businesses build lasting wealth.</p>
            <SocialIcons />
            <div style={{ fontSize: 13, color: COLORS.slate }}>
              <div style={{ marginBottom: 6 }}>
                <a href="mailto:saravox.financialservices@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>📧 saravox.financialservices@gmail.com</a>
              </div>
              <div><a href="tel:+917812827930" style={{ color: "inherit", textDecoration: "none" }}>📞 +91 78128 27930</a></div>
            </div>
          </div>
          {[
            { title: "Services", links: ["Financial Consulting", "Investment Planning", "Wealth Management", "Tax Planning", "Retirement Planning"] },
            { title: "Company", links: ["About Us", "Our Team", "Careers", "Blog", "Contact"] },
            { title: "Legal", links: ["Privacy Policy", "Terms & Conditions", "Disclaimer", "Cookie Policy", "SEBI Disclosure"] },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 style={{ fontSize: 14, fontWeight: 600, color: COLORS.white, marginBottom: 16, letterSpacing: 0.5 }}>{title}</h4>
              {links.map(l => <div key={l} style={{ fontSize: 13, color: COLORS.slate, marginBottom: 8, cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = COLORS.gold} onMouseLeave={e => e.target.style.color = COLORS.slate}>{l}</div>)}
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid rgba(255,255,255,0.06)`, paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: 13, color: COLORS.slate }}>© 2025 SARAVOX Financial Services. All rights reserved. AMFI Registered MFD · NISM Certified · UDYAM-TN-15-0039608</div>
          <div style={{ fontSize: 12, color: COLORS.slate }}>Investments are subject to market risk. Please read all scheme-related documents carefully.</div>
        </div>
      </div>
    </footer>
  );
}

// ─── WHATSAPP BUTTON ───
