# Backlink Profile Analysis: RateCraft (`ratecraft.app`)

**Skill Invocation:** `/seo backlinks <ratecraft.app>`  
**Analyzers:** `claude-seo` v2.4.1 (Common Crawl Web Graph + Verification Engine)  
**Date of Analysis:** October 4, 2026  
**Data Sufficiency Status:** **INSUFFICIENT DATA (0/7 commercial factors scored)**  
**Validator Status:** **PASS** (`validate_backlink_report.py`: 0 Errors, 0 Warnings)

---

## 1. Profile Overview

| Metric | Measured Value | Data Source | Confidence | Health Benchmark |
| :--- | :---: | :---: | :---: | :--- |
| **Backlink Health Score** | **INSUFFICIENT DATA** | None | N/A | Requires ≥4 commercial factors |
| **Referring Domains** | *Not Assessed* | not-assessed | N/A | Target: > 100 domains |
| **Total Backlinks** | *Not Assessed* | not-assessed | N/A | Healthy ratio > 3:1 |
| **Common Crawl Presence** | **Not in CC Q1 2026** | `commoncrawl` | High | Normal for 2026 newly deployed domains |
| **Common Crawl PageRank** | *Not Assessed* | `commoncrawl` | N/A | Below crawl threshold or not yet indexed |
| **Follow / Nofollow Ratio** | *Not Assessed* | not-assessed | N/A | Target: > 60% Follow |
| **Spam Score** | *Not Assessed* | not-assessed | N/A | Target: < 5% |

> [!NOTE]
> **Data Sufficiency Rule:** Per the `seo-backlinks` methodology, when only public historical graphs (Common Crawl) are available, generating an estimated or numeric score is strictly prohibited. Common Crawl's quarterly snapshot (`cc-main-2026-jan-feb-mar`) was finalized prior to RateCraft's production launch. This absence reflects domain recency, **not** low authority.

---

## 2. Target Anchor Text Distribution

When building or earning links, maintain this natural distribution profile to prevent Google Penguin / unnatural link penalties:

```
[Branded: 35-50%] ████████████████████░░░░░░░░░░
[Naked URLs: 15-25%] ████████░░░░░░░░░░░░░░░░░░░░
[Generic: 10-20%]    ██████░░░░░░░░░░░░░░░░░░░░░░
[Partial Match: 10%] ████░░░░░░░░░░░░░░░░░░░░░░░░
[Exact Match: 3-8%]  ██░░░░░░░░░░░░░░░░░░░░░░░░░░
```

- **Branded Anchors (35–50%):** `"RateCraft"`, `"RateCraft App"`, `"Rate Craft"`.
- **Naked URL Anchors (15–25%):** `https://ratecraft.app`, `ratecraft.app/developer-rate-calculator/`.
- **Generic Anchors (10–20%):** `"calculate your rate"`, `"visit website"`, `"source"`, `"free tool"`.
- **Topic / Partial-Match (10–15%):** `"freelance rate calculator by RateCraft"`, `"RateCraft day rate tool"`.
- **Exact-Match Ceiling (< 8%):** Do **not** allow exact-match keywords (e.g. `"freelance hourly rate calculator"`) to exceed 10–15% across your profile to prevent algorithmic over-optimization flags.

---

## 3. High-Value Linkable Assets (Link Magnets)

RateCraft has four distinct high-authority link magnets ready for outreach:

1. **UK Contractor Day Rate Calculator (`/uk-freelance-day-rate-calculator/`):**
   - *Target Linkers:* ContractorUK forums, IPSE (Association of Independent Professionals and the Self-Employed), UK tech recruiter blogs, IR35 legal consultants.
2. **Developer Rate Calculator (`/developer-rate-calculator/`):**
   - *Target Linkers:* GitHub `awesome-freelance` repositories, freeCodeCamp resources, Dev.to community guides, bootcamp career transition portals.
3. **Rule of 220 Mathematical Formula Guide (`/guides/how-to-calculate-freelance-hourly-rate/`):**
   - *Target Linkers:* University career service pages, creative entrepreneur blogs, accounting/invoicing software knowledge bases.
4. **Freelance Tax & Deductions Blueprint (`/guides/freelance-taxes-and-overhead-deductions/`):**
   - *Target Linkers:* Solopreneur finance podcasts, small business accounting resource lists.

---

## 4. Competitor Link Gap & Acquisition Opportunities

In the freelance rate calculator space (competitors: Clockify, Bonsai, Freelancers Union, Contra), backlinks cluster into four primary categories:

| Opportunity Category | Target Publications & Platforms | Pitch Angle | Authority Potential |
| :--- | :--- | :--- | :---: |
| **Tool Directories & Catalogs** | AlternativeTo, ProductHunt, SaaSHub, Futurepedia, Toolify | "100% Free, privacy-friendly freelance rate calculator with zero signup required" | DA 70–90 |
| **Curated GitHub Repositories** | `awesome-freelance`, `awesome-indie`, `developer-roadmap` | Add RateCraft as a recommended financial planning utility | DA 95 |
| **Bootcamps & Career Centers** | General Assembly, Springboard, Le Wagon, Flatiron alumni portals | Provide students with realistic day-rate benchmarks for post-graduation freelancing | DA 60–85 (.edu) |
| **Freelance Community Roundups** | Indie Hackers, Hacker News Show HN, Reddit (`r/freelance`, `r/webdev`) | Launch post with transparent math breakdown (Rule of 220 + unbillable time) | DA 85–95 |

---

## 5. Strategic Link-Building Roadmap

### Sprint 1: Foundational Free Authority (Days 1–14)
- [ ] Submit RateCraft to verified software tool directories:
  - AlternativeTo (`alternativeto.net/software/ratecraft/`)
  - SaaSHub
  - Toolify.ai
- [ ] Create a "Show HN" submission on Hacker News explaining the engineering decisions behind client-side financial calculations without tracking or signups.
- [ ] Submit PRs to 5 top GitHub repositories curated for freelance developers and designers.

### Sprint 2: Digital PR & Statistical Data Outreach (Days 15–30)
- [ ] Publish a quarterly *"State of Freelance Rates 2026"* statistical infographic based on RateCraft's benchmark tables.
- [ ] Pitch quotes to freelance journalists on topics such as *"How inflation and AI are shifting contractor hourly billing in 2026"*.

---

## 6. How to Enable Live API Data

To upgrade this backlink profile from **Tier 0** (Public Graphs) to **Tier 1 & 2** (Live Domain Authority, spam scores, and anchor distributions):

### Option A: Free Moz API (2,500 free rows/month)
1. Register for a free account at [moz.com/products/api](https://moz.com/products/api).
2. Copy your API token from [moz.com/products/api/keys](https://moz.com/products/api/keys).
3. Set the environment variable or create `/Users/mohsinraja/.config/claude-seo/backlinks-api.json`:
   ```json
   {
     "moz_api_key": "YOUR_MOZ_API_KEY"
   }
   ```

### Option B: Free Bing Webmaster Tools API
1. Sign in to [bing.com/webmasters](https://www.bing.com/webmasters) and verify `ratecraft.app`.
2. Navigate to **Settings > API Access > API Key**.
3. Add the key to `/Users/mohsinraja/.config/claude-seo/backlinks-api.json`:
   ```json
   {
     "bing_api_key": "YOUR_BING_API_KEY",
     "bing_verified_sites": ["ratecraft.app"]
   }
   ```
