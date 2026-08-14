export default function WhatsAppButton() {
  return (
    <a href="https://wa.me/917812827930" target="_blank" rel="noopener noreferrer"
      style={{ position: "fixed", bottom: 28, right: 28, zIndex: 999, width: 56, height: 56, background: "#25D366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, boxShadow: "0 4px 20px rgba(37,211,102,0.4)", textDecoration: "none", transition: "transform 0.3s" }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
      💬
    </a>
  );
}

// ─── AI CHATBOT ───
