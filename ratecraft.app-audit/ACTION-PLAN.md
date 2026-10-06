# RateCraft SEO Prioritized Action Plan

This action plan translates the full SEO audit findings into an execution roadmap categorized by impact and difficulty.

---

## Priority Summary Matrix

| Priority Level | Total Items | Primary Focus Area | Est. Time to Complete |
| :--- | :---: | :--- | :---: |
| **Critical (P0)** | **0** | *No blocking indexing issues or penalties found* | 0 hrs |
| **High (P1)** | **1** | Schema Breadcrumb completeness on company/legal pages | 30 mins |
| **Medium (P2)** | **2** | HTML `llms.txt` discovery tag & E-E-A-T reviewer bylines | 45 mins |
| **Low (P3)** | **2** | Web App Manifest (PWA touch icons) & Edge Security Headers | 30 mins |

---

## Phase 1: High-Impact Polish (Immediate / Days 1–2)

### Item 1.1: Add `BreadcrumbList` Schema to 8 Company & Legal Pages
- **Impact:** High (Completes 100% structured data rich snippet coverage across all 33 URLs).
- **Target Pages:**
  - `about/index.html`
  - `contact/index.html`
  - `privacy/index.html`
  - `terms/index.html`
  - `es/sobre-nosotros/index.html`
  - `es/contacto/index.html`
  - `es/privacidad/index.html`
  - `es/terminos/index.html`
- **Implementation:**
  ```html
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ratecraft.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://ratecraft.app/about/"
      }
    ]
  }
  </script>
  ```

---

## Phase 2: AI Search & Discovery Optimization (Week 1)

### Item 2.1: Inject `<link>` Alternate Discovery for `llms.txt` in HTML Head
- **Impact:** Medium (Improves instant pickup by AI agents inspecting raw HTML without parsing `robots.txt`).
- **Target Pages:** All 33 HTML files.
- **Implementation:**
  ```html
  <link rel="alternate" type="text/plain" href="https://ratecraft.app/llms.txt" title="LLM Agent Manifest">
  ```

### Item 2.2: Add Verified Financial Editorial Note to Guides
- **Impact:** Medium (Reinforces Google's YMYL Quality Rater E-E-A-T signals for financial tools).
- **Target Pages:** 8 Editorial Guides (`guides/how-to-calculate-freelance-hourly-rate/`, etc.).
- **Implementation:** Include a visible metadata callout under article bylines:
  > *"Methodology verified against HMRC 2026 contractor schedules, IRS self-employment guidelines, and CRA reporting standards."*

---

## Phase 3: PWA & Edge Headers (Weeks 2–3)

### Item 3.1: Add `site.webmanifest` and PNG Touch Icons
- **Impact:** Low (Enhances mobile browser bookmarking and PWA installation).
- **Implementation:** Add standard `site.webmanifest` referencing 192x192 and 512x512 app icons derived from `logo.svg`.

### Item 3.2: Configure Edge Security & AI Policy Headers in Cloudflare Worker
- **Impact:** Low (Reinforces security hygiene and declares AI crawler preferences).
- **Implementation:** Add response headers in the worker script:
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Content-Signal: ai-train=yes, search=yes`

---

## Phase 4: Ongoing Monitoring

1. **Bing IndexNow:** Resubmit updated URLs via the active IndexNow API key after each deployment.
2. **Google Search Console:** Monitor URL Inspection status and verify that Core Web Vitals remain at 100% "Good" thresholds.
3. **AI Answer Engine Benchmarking:** Track citations in Perplexity and ChatGPT search queries for "freelance hourly rate formula" and "Rule of 220".
