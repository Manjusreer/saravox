import { COLORS } from "../data/theme";
import { BLOG_POSTS } from "../data/content";

export default function BlogPage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 5% 80px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div className="section-label">Insights</div>
        <h1 className="section-title serif">Notes on Smart Investing</h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="grid-3">
        {BLOG_POSTS.map((p, i) => (
          <div key={i} className="service-card">
            <div style={{ fontSize: 40, marginBottom: 16 }}>{p.icon}</div>
            <div className="badge" style={{ marginBottom: 12, fontSize: 10 }}>{p.cat}</div>
            <h3 style={{ fontSize: 17, fontWeight: 600, color: COLORS.white, lineHeight: 1.4, marginBottom: 12 }}>{p.title}</h3>
            <p style={{ fontSize: 14, color: COLORS.slate, lineHeight: 1.7, marginBottom: 16 }}>{p.sub}</p>
            <div style={{ fontSize: 12, color: COLORS.gold, fontStyle: "italic" }}>{p.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
