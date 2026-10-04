# Strategic SEO Action Plan: RateCraft (`ratecraft.app`)

**Objective:** Maintain A+ search health, maximize organic CTR, capture AI search engine citations, and scale organic traffic.

---

## Phase 1: High-Impact Quick Wins (Week 1)

| Task | Category | Impact | Effort | Files Affected |
| :--- | :---: | :---: | :---: | :--- |
| **1. Expand Hub Content** | Content | High | Low | [`guides/index.html`](file:///Users/mohsinraja/Documents/Project-1/guides/index.html), [`es/guias/index.html`](file:///Users/mohsinraja/Documents/Project-1/es/guias/index.html) |
| Add a 150-word editorial syllabus section to both guide hubs explaining how to structure freelance rates, moving both pages beyond 380 words. | | Eliminates thin content warnings on hub roots. | | |
| **2. Add Speculation Rules API** | Performance | Medium | Low | [`index.html`](file:///Users/mohsinraja/Documents/Project-1/index.html) + Calculator Pages |
| Add `<script type="speculationrules">` in `<head>` to prefetch top calculator routes on user hover or navigation intent. | | 0ms perceived navigation latency. | | |
| **3. Polish Snippet Lengths** | On-Page | Medium | Low | Core Calculator HTML files |
| Trim 10 title tags from 70+ to 55-60 characters and 6 meta descriptions to 145-155 characters to eliminate SERP snippet cutoff. | | Higher click-through rate (CTR). | | |

---

## Phase 2: Authority & E-E-A-T Expansion (Weeks 2–3)

| Task | Category | Impact | Effort | Details |
| :--- | :---: | :---: | :---: | :--- |
| **1. Enrich Author Entity Schema** | Schema | High | Medium | Add detailed `Person` markup (`jobTitle`, `sameAs`, professional bio) to all 8 guide articles. |
| **2. Add In-Article Formula Callouts** | GEO / AI | High | Medium | Add distinct `<blockquote>` or `<dl>` markdown summary cards for AI snippet ingestion. |
| **3. Cross-Link UK Calculator** | Internal Links | Medium | Low | Ensure the new `/uk-freelance-day-rate-calculator/` is referenced within relevant financial guides. |

---

## Phase 3: Scaling & Programmatic Growth (Month 2)

| Task | Category | Impact | Effort | Details |
| :--- | :---: | :---: | :---: | :--- |
| **1. Add High-Demand Regional Calculators** | Product / pSEO | Very High | Medium | Launch Canada (`/ca-freelance-rate-calculator/`) and Australia (`/au-freelance-rate-calculator/`). |
| **2. Launch Niche Tool Editions** | Content | High | Medium | Target high-CPC searches: *"Video Editor Rate Calculator"*, *"Consultant Day Rate Calculator"*. |
| **3. Client-Side Ratings & Stars** | Schema | High | Medium | Implement an interactive 5-star rating widget on calculators to unlock `aggregateRating` snippet badges. |

---

## Phase 4: Ongoing Monitoring & Drift Prevention (Continuous)

- Run `claude-seo` drift baseline:
  ```bash
  ~/.claude/skills/seo/scripts/claude-seo run drift_baseline.py https://ratecraft.app/
  ```
- Monitor Google Search Console for Core Algorithm updates using `seo_updates.py`.
- Re-run `content_quality.py` on any newly drafted guides before deployment.
