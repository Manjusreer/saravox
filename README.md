# SARAVOX Financial Services — Website

A Vite + React single-page site for SARAVOX Financial Services, with a services
overview, financial calculators, blog, FAQ, contact form, an AI chatbot widget,
and an admin/CRM dashboard.

## Project structure

```
saravox-website/
├── index.html              # Vite entry HTML
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx             # React root
│   ├── App.jsx               # Page router / top-level layout
│   ├── data/
│   │   ├── theme.js          # Color tokens
│   │   └── content.js        # Static content (services, FAQs, blog posts, etc.)
│   ├── components/
│   │   ├── GlobalStyle.jsx
│   │   ├── NavBar.jsx
│   │   ├── Counter.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── AIChatbot.jsx
│   │   └── CookieBanner.jsx
│   └── pages/
│       ├── HomePage.jsx
│       ├── AboutPage.jsx
│       ├── ServicesPage.jsx
│       ├── ToolsPage.jsx
│       ├── BlogPage.jsx
│       ├── FAQPage.jsx
│       ├── ContactPage.jsx
│       └── AdminDashboard.jsx
```

## Set up the contact form's email delivery

The Contact page form uses [EmailJS](https://www.emailjs.com) to deliver
submissions to `saravox.financialservices@gmail.com` — this is required
because the site is a static frontend with no backend of its own to send
mail from.

1. Sign up at emailjs.com (free tier: 200 emails/month).
2. **Email Services** → Add New Service → connect the
   `saravox.financialservices@gmail.com` Gmail account → note the **Service ID**.
3. **Email Templates** → Create New Template using these variable names so
   they match what the form sends: `{{from_name}}`, `{{from_email}}`,
   `{{phone}}`, `{{subject}}`, `{{service}}`, `{{contact_method}}`,
   `{{message}}`, `{{to_email}}` → note the **Template ID**.
4. **Account** → General → copy your **Public Key**.
5. Open `src/config/email.js` and paste in the three values.

Until these are filled in, the "Submit Inquiry" button will show the
form's error message rather than actually sending anything.

## Run locally in VS Code

1. Open this folder (`saravox-website`) in VS Code.
2. Open a terminal (`` Ctrl+` `` / `` Cmd+` ``) and install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the printed URL (defaults to `http://localhost:5173`) — it opens
   automatically and hot-reloads as you edit files.

## Build for production

```bash
npm run build
```
This outputs a static, deployable bundle into `dist/`. Preview it locally with:
```bash
npm run preview
```

## Deploying

The `dist/` folder is a plain static site, so it works with any static host.

**Vercel** (recommended, zero-config)
1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com → it auto-detects Vite (build command
   `npm run build`, output directory `dist`).

**Netlify**
1. Push to GitHub, then "New site from Git" on netlify.com.
2. Build command: `npm run build`, publish directory: `dist`.

**GitHub Pages / any static file host**
1. Run `npm run build`.
2. Upload the contents of `dist/` to your host.

## Notes

- Contact form, chatbot, and admin dashboard currently use local/sample data
  and in-memory state — wire them up to a real backend or API before going
  live if you need persistence.
- Fonts (Playfair Display, Inter) load from Google Fonts via `@import` in
  `GlobalStyle.jsx`.
