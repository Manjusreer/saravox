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

