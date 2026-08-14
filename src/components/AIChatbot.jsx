import { useState, useEffect, useRef, useCallback } from "react";
import { COLORS } from "../data/theme";

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! I'm the SARAVOX AI Assistant. How can I help you today? I can help with services, investment queries, and booking consultations." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = useCallback(async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.text }));
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: `You are the SARAVOX Financial Services AI assistant. SARAVOX is an AMFI-registered mutual fund distributor with its main branch in Gudalur, The Nilgiris, Tamil Nadu and a sub branch in Kalapatti, Coimbatore, Tamil Nadu.
Services: Mutual Fund Investment, Financial Consulting, Investment Planning, Wealth Management, Insurance Advisory, Tax Planning, Retirement Planning, Business Finance, Loan Advisory, Risk Assessment. Upcoming: Insurance, GST, Income Tax, Investment & Wealth Management, Corporate Finance & Advisory, Specialized Financial Sectors.
Contact: saravox.financialservices@gmail.com | +91 78128 27930.
Keep answers concise (2-4 sentences), helpful, and professional. Guide users toward booking a consultation when relevant. Don't provide specific financial advice — recommend consulting our advisors.`,
          messages: [...history, { role: "user", content: userMsg }]
        })
      });
      const data = await res.json();
      const reply = data.content?.find(b => b.type === "text")?.text || "I'm having trouble connecting right now. Please call us at +91 78128 27930 or email saravox.financialservices@gmail.com.";
      setMessages(prev => [...prev, { role: "assistant", text: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", text: "I'm currently unavailable. Please reach us at +91 78128 27930 or saravox.financialservices@gmail.com." }]);
    }
    setLoading(false);
  }, [input, messages]);

  return (
    <>
      <button onClick={() => setOpen(!open)} style={{
        position: "fixed", bottom: 28, right: 96, zIndex: 999, width: 56, height: 56,
        background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`, borderRadius: "50%",
        border: "none", fontSize: 24, cursor: "pointer", boxShadow: "0 4px 20px rgba(201,168,76,0.4)",
        display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.3s",
      }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
        {open ? "✕" : "🤖"}
      </button>

      {open && (
        <div style={{
          position: "fixed", bottom: 96, right: 28, zIndex: 998, width: 340,
          background: COLORS.navyMid, border: `1px solid ${COLORS.border}`, borderRadius: 16,
          boxShadow: "0 16px 48px rgba(0,0,0,0.5)", display: "flex", flexDirection: "column", overflow: "hidden",
        }}>
          <div style={{ padding: "16px 20px", borderBottom: `1px solid ${COLORS.border}`, background: COLORS.navyLight, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🤖</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.white }}>SARAVOX Assistant</div>
              <div style={{ fontSize: 12, color: "#4CAF8C" }}>● Online</div>
            </div>
          </div>

          <div style={{ height: 260, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "80%", padding: "10px 14px", borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  background: m.role === "user" ? `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})` : "rgba(255,255,255,0.06)",
                  color: m.role === "user" ? COLORS.navy : COLORS.slateLight,
                  fontSize: 13, lineHeight: 1.5,
                }}>{m.text}</div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", gap: 4, padding: "10px 14px", background: "rgba(255,255,255,0.06)", borderRadius: "16px 16px 16px 4px", width: 60 }}>
                {[0, 1, 2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.gold, animation: "pulse 1s infinite", animationDelay: `${i * 0.2}s` }} />)}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div style={{ padding: "12px 16px", borderTop: `1px solid ${COLORS.border}`, display: "flex", gap: 8 }}>
            <input value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything..." style={{ flex: 1, fontSize: 13, padding: "10px 14px" }} />
            <button className="gold-btn" onClick={sendMessage} style={{ padding: "10px 14px", fontSize: 13 }}>→</button>
          </div>
        </div>
      )}
    </>
  );
}

// ─── COOKIE BANNER ───
