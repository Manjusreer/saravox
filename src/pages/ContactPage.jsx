import { useState } from "react";
import emailjs from "@emailjs/browser";
import { COLORS } from "../data/theme";
import { SERVICES } from "../data/content";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../config/email";

const Field = ({ label, error, children }) => (
  <div style={{ marginBottom: 20 }}>
    <label style={{ display: "block", fontSize: 13, color: COLORS.slateLight, marginBottom: 6 }}>{label}</label>
    {children}
    {error && <div style={{ fontSize: 12, color: "#E06B54", marginTop: 4 }}>{error}</div>}
  </div>
);

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", service: "", message: "", contactMethod: "Email" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = "Valid 10-digit Indian mobile number required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setLoading(true);
    setSendError(false);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          subject: form.subject || "New website inquiry",
          service: form.service || "Not specified",
          contact_method: form.contactMethod,
          message: form.message,
          to_email: "saravox.financialservices@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      setSendError(true);
    }
    setLoading(false);
  };

  if (submitted) return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "140px 5% 80px", textAlign: "center" }}>
      <div style={{ fontSize: 72, marginBottom: 24 }}>✅</div>
      <h1 className="serif" style={{ fontSize: 36, color: COLORS.white, marginBottom: 16 }}>Inquiry Received!</h1>
      <p style={{ color: COLORS.slate, lineHeight: 1.7, marginBottom: 8 }}>Thank you, <strong style={{ color: COLORS.gold }}>{form.name}</strong>. We've received your inquiry.</p>
      <p style={{ color: COLORS.slate, lineHeight: 1.7, marginBottom: 32 }}>A confirmation has been sent to <strong style={{ color: COLORS.gold }}>{form.email}</strong>. Our team will reach out within 24 hours via your preferred method ({form.contactMethod}).</p>
      <button className="gold-btn" onClick={() => setSubmitted(false)}>Submit Another Inquiry</button>
    </div>
  );

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 5% 80px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div className="section-label">Get Started</div>
        <h1 className="section-title serif">Ready to Take Control of Your Financial Future?</h1>
        <p className="section-sub" style={{ margin: "16px auto 0", textAlign: "center" }}>
          Saravox is a NISM Certified, AMFI Registered MFD firm committed to honest, goal-based financial planning. Your consultation is completely free.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 48, alignItems: "start" }} className="grid-2">
        <div className="glass-card" style={{ padding: 40 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="grid-2">
            <Field label="Full Name *" error={errors.name}>
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Arjun Mehta" />
            </Field>
            <Field label="Email Address *" error={errors.email}>
              <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="arjun@email.com" />
            </Field>
            <Field label="Phone Number *" error={errors.phone}>
              <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="9876543210" />
            </Field>
            <Field label="Subject">
              <input value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="Investment Planning Query" />
            </Field>
          </div>
          <Field label="Service Interested In">
            <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
              <option value="">Select a service...</option>
              {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
            </select>
          </Field>
          <Field label="Preferred Contact Method">
            <div style={{ display: "flex", gap: 12 }}>
              {["Email", "Phone", "WhatsApp"].map(m => (
                <label key={m} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                  <input type="radio" name="method" value={m} checked={form.contactMethod === m}
                    onChange={() => setForm({ ...form, contactMethod: m })} style={{ width: "auto", accentColor: COLORS.gold }} />
                  <span style={{ fontSize: 14, color: COLORS.slateLight }}>{m}</span>
                </label>
              ))}
            </div>
          </Field>
          <Field label="Message *" error={errors.message}>
            <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us about your financial goals, concerns, or questions..." />
          </Field>
          <button className="gold-btn" onClick={handleSubmit} style={{ width: "100%", padding: 16, fontSize: 15 }} disabled={loading}>
            {loading ? "Submitting..." : "Submit Inquiry →"}
          </button>
          {sendError && (
            <div style={{ marginTop: 16, padding: 16, borderRadius: 10, background: "rgba(224,107,84,0.1)", border: "1px solid rgba(224,107,84,0.3)" }}>
              <p style={{ fontSize: 13, color: "#E06B54", lineHeight: 1.6 }}>
                We couldn't send your inquiry right now. Please try again, or reach us directly at{" "}
                <strong>saravox.financialservices@gmail.com</strong> or <strong>+91 78128 27930</strong>.
              </p>
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {[
            { icon: "📧", label: "Email", value: "saravox.financialservices@gmail.com", href: "mailto:saravox.financialservices@gmail.com" },
            { icon: "📞", label: "Phone", value: "+91 78128 27930", href: "tel:+917812827930" },
            { icon: "🕐", label: "Hours", value: "Mon–Sat, 9 AM – 7 PM", href: null },
          ].map(({ icon, label, value, href }) => {
            const content = (
              <div className="glass-card" style={{ padding: 20, display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ fontSize: 28, width: 44, textAlign: "center" }}>{icon}</div>
                <div>
                  <div style={{ fontSize: 12, color: COLORS.slate, marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: 14, color: COLORS.white, fontWeight: 500 }}>{value}</div>
                </div>
              </div>
            );
            return href
              ? <a key={label} href={href} style={{ textDecoration: "none" }}>{content}</a>
              : <div key={label}>{content}</div>;
          })}
          {[
            { label: "Main Branch — Gudalur, The Nilgiris", value: "12/298 B5A, Krishnalayam, V.V.N.N Nagar, T.K Pet, Gudalur Bazaar, Gudalur, The Nilgiris, Tamil Nadu 643212" },
            { label: "Sub Branch — Kalapatti, Coimbatore", value: "24, Saiillam, Sivasubramaniam, Nehru Nagar West, Kalapatti Road, Kalapatti, Coimbatore, Tamil Nadu 641014" },
          ].map(({ label, value }) => (
            <div key={label} className="glass-card" style={{ padding: 20, display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div style={{ fontSize: 28, width: 44, textAlign: "center" }}>📍</div>
              <div>
                <div style={{ fontSize: 12, color: COLORS.slate, marginBottom: 2 }}>{label}</div>
                <div style={{ fontSize: 14, color: COLORS.white, fontWeight: 500, lineHeight: 1.5 }}>{value}</div>
              </div>
            </div>
          ))}
          <div className="glass-card" style={{ padding: 24, textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>💬</div>
            <h3 style={{ fontSize: 16, color: COLORS.white, marginBottom: 8 }}>WhatsApp Us</h3>
            <p style={{ fontSize: 13, color: COLORS.slate, marginBottom: 16 }}>Quick queries? Message us on WhatsApp for faster response.</p>
            <a href="https://wa.me/917812827930" target="_blank" rel="noopener noreferrer">
              <button className="gold-btn" style={{ width: "100%" }}>Open WhatsApp</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
