// EmailJS configuration
//
// This site is a static frontend with no backend, so it can't send email on
// its own. EmailJS lets a static site deliver form submissions straight to
// an inbox (here, saravox.financialservices@gmail.com) without a server.
//
// Setup (free, ~5 minutes):
// 1. Go to https://www.emailjs.com and sign up.
// 2. Email Services -> Add New Service -> connect the Gmail account
//    saravox.financialservices@gmail.com. This gives you a SERVICE ID.
// 3. Email Templates -> Create New Template. Use these variable names in the
//    template body so they match the fields sent from ContactPage.jsx:
//    {{from_name}}, {{from_email}}, {{phone}}, {{subject}}, {{service}},
//    {{contact_method}}, {{message}}, {{to_email}}
//    Save it — this gives you a TEMPLATE ID.
// 4. Account -> General -> copy your PUBLIC KEY.
// 5. Paste all three values below.
//
// Free tier covers 200 emails/month, which is enough for a contact form.

export const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
export const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
export const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
