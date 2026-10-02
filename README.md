# RateCraft ⚡️
### Freelance Pricing & Commercial Rate Intelligence Suite

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/Framework-Zero%20Dependencies-blue.svg)](https://ratecraft.app)
[![Bilingual](https://img.shields.io/badge/Languages-EN%20%7C%20ES-indigo.svg)](https://ratecraft.app/es/)
[![Pages](https://img.shields.io/badge/Total%20Pages-26-purple.svg)](https://ratecraft.app/sitemap.xml)

> **RateCraft** (https://ratecraft.app) is a high-performance, client-side financial calculator suite and editorial publication built for freelancers, independent contractors, and solo consultants worldwide. It eliminates guesswork by reverse-engineering sustainable minimum hourly rates, day rates, weekly sprint retainers, and fixed project quotes with built-in scope buffers, operational overhead coverage, and self-employment tax accounting.

---

## 🚀 Key Features

- **4 Specialized Role-Based Calculators:**
  - **General Freelance:** Bottom-up formula accounting for taxes, expenses, PTO, and billable ratios.
  - **Software Developer:** Tailored for engineers, tech leads, agile sprint retainers, and bug-hunting buffers.
  - **UI/UX Designer:** Calibrated for product designers, design systems leads, and revision risk multipliers.
  - **Copywriter & Content Strategist:** Built for B2B writers, conversion copywriters, and content retainers.
- **4 In-Depth Strategic Editorial Guides (1,000+ words each):**
  - *How to Calculate Your True Freelance Hourly Rate (2026 Formula)*
  - *Value-Based Pricing vs. Hourly Billing (10:1 ROI Rule)*
  - *The Complete Freelance Retainer Agreements Guide*
  - *Freelance Taxes & Overhead Deductions Blueprint*
- **100% Bilingual Mirror (English 🇺🇸 & Spanish 🇪🇸):**
  - Full native translations for every calculator, editorial guide, and legal page.
  - Bidirectional `hreflang` alternate tags for global international search indexing.
- **Client-Side Privacy by Design:**
  - Zero financial data or rate inputs are ever sent to or stored on servers.
  - All mathematical models run purely inside the user's browser memory.
- **Branded Rate Card Generator:**
  - Instant client-side PNG and Print/PDF export for commercial proposals and client onboarding.
- **On-Demand Shareable Links:**
  - Share specific calculator configurations with a single click without polluting the browser address bar during live sliding.
- **Google AdSense & SEO Ready:**
  - Comprehensive Trust & Legal pages (`/privacy/`, `/terms/`, `/about/`, `/contact/`) with explicit DoubleClick DART, CCPA, and GDPR disclosures.
  - Fully synchronized `sitemap.xml`, `robots.txt`, and `llms.txt`.

---

## 📁 Repository Directory Structure

```text
Project-1/
├── README.md                                   # Project documentation & deployment guide
├── index.html                                  # Root General Freelance Calculator (EN)
├── developer-rate-calculator/index.html        # Software Developer Rate Calculator (EN)
├── designer-rate-calculator/index.html         # Graphic & UI/UX Designer Calculator (EN)
├── copywriter-rate-calculator/index.html       # Copywriter & Content Calculator (EN)
├── guides/                                     # Editorial Guides Hub & Long-form Articles (EN)
│   ├── index.html                              # Editorial Guides Hub
│   ├── how-to-calculate-freelance-hourly-rate/ # Hourly rate formula guide
│   ├── value-based-pricing-vs-hourly/          # Value-based pricing guide
│   ├── freelance-retainer-agreements-guide/    # Retainer contracts guide
│   └── freelance-taxes-and-overhead-deductions/# Tax & overhead deduction guide
├── about/index.html                            # About Us & Research Standards (EN)
├── contact/index.html                          # Contact Us & Support Form (EN)
├── privacy/index.html                          # Privacy Policy & AdSense Disclosures (EN)
├── terms/index.html                            # Terms of Service & Financial Disclaimer (EN)
├── es/                                         # Spanish Localization (13 mirrored pages)
│   ├── index.html                              # Calculadora General Autónomos (ES)
│   ├── calculadora-precio-hora-programador/    # Programadores de Software (ES)
│   ├── calculadora-tarifa-disenador/           # Diseñadores Gráficos y UI/UX (ES)
│   ├── calculadora-tarifa-redactor/            # Redactores y Copywriters (ES)
│   ├── guias/                                  # Hub de Guías Editoriales (ES)
│   ├── sobre-nosotros/                         # Sobre Nosotros (ES)
│   ├── contacto/                               # Contacto (ES)
│   ├── privacidad/                             # Política de Privacidad (ES)
│   └── terminos/                               # Términos de Servicio (ES)
├── css/
│   └── style.css                               # Unified CSS Design System & Responsive Tokens
├── js/
│   └── calculator.js                           # Core Mathematical Engine & Rate Card Canvas Logic
├── favicon.svg                                 # Vector Brand Favicon
├── robots.txt                                  # Search Engine & AI Crawler Directives
├── sitemap.xml                                 # 26-Page XML Sitemap with hreflang Links
└── llms.txt                                    # Structured LLM/GEO Answer Engine Manifest
```

---

## 🛠 Local Development

Because RateCraft uses standard, zero-dependency web technologies (HTML5, Vanilla CSS, Vanilla JavaScript), there are **no build steps or npm installations required**.

To serve locally:

```bash
# Python 3
python3 -m http.server 8089

# or Node.js npx
npx serve .
```

Open `http://localhost:8089` in your web browser.

---

## ☁️ Deployment

### Cloudflare Pages / Workers
1. Connect your Git repository (GitHub / GitLab) in the Cloudflare Dashboard.
2. Select **Pages** or **Workers Static Assets**.
3. Settings:
   - **Framework preset:** `None`
   - **Build command:** *(Leave empty)*
   - **Build output directory:** `/` (or root `.`)
4. Save and deploy. Every git push to `main` will automatically trigger a global edge deployment.

### Vercel / Netlify
- Connect repository or drag & drop folder.
- Root directory: `./`
- Zero build configuration needed.

---

## 📄 License

RateCraft is open-source software licensed under the [MIT License](LICENSE).
