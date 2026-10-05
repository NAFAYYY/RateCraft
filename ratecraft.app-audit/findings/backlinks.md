# Backlink Profile Analysis: RateCraft (`ratecraft.app`)

**Skill Invocation:** `/seo backlinks <ratecraft.app>`  
**Analyzers:** `claude-seo` v2.4.1 (Bing Webmaster API + IndexNow Engine + Common Crawl Graph)  
**Date of Analysis:** October 5, 2026  
**Data Sufficiency Status:** **Tier 2 Configured (Bing API Active, IndexNow 33/33 URLs Submitted)**  
**Validator Status:** **PASS** (`validate_backlink_report.py`: 0 Errors, 0 Warnings)

---

## 1. Profile Overview

| Metric | Measured Value | Data Source | Confidence | Health Benchmark |
| :--- | :---: | :---: | :---: | :--- |
| **Bing API Integration** | **Active & Verified** | `bing_webmaster` | High (0.85) | Connected to Bing Webmaster Tools |
| **IndexNow Key Status** | **Published (HTTP 200)** | `indexnow` | High (1.0) | Host verified for instant Copilot/Bing crawl |
| **IndexNow URLs Ingested** | **33 / 33 URLs (HTTP 202)** | `indexnow` | High (1.0) | Bing, Copilot, Amazon, Yandex, Yep |
| **Bing Sampled Inbound Links** | **0** | `bing_webmaster` | High (0.85) | New domain; awaiting initial index pass |
| **Common Crawl Presence** | **Not in CC Q1 2026** | `commoncrawl` | High | Normal for newly deployed domains |
| **Moz API Status** | **Configured (Quota Pending)** | `moz` | N/A | Requires quota refresh on Moz account |
| **Follow / Nofollow Ratio** | *Not Assessed* | not-assessed | N/A | Target: > 60% Follow |
| **Spam Score** | *Not Assessed* | not-assessed | N/A | Target: < 5% |

> [!NOTE]
> **Data Sufficiency Rule:** Per the `seo-backlinks` methodology, when a domain is recently launched, link counts in crawl indexes (Bing/Common Crawl) begin at zero. With IndexNow active and all 33 URLs accepted, search spiders are actively pinged to crawl and index RateCraft.

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

## 6. Live API Data Integration Status

RateCraft has been upgraded to **Tier 2 (Full Free)**:

### 1. Bing Webmaster Tools API: Active & Connected
- **API Status:** Connected via key `78fe14e5...` in `~/.config/claude-seo/backlinks-api.json`.
- **Verified Site:** `https://ratecraft.app/`
- **Capabilities:** Real-time inbound link monitoring, URL indexing verification, and competitor comparisons across verified properties.

### 2. IndexNow Protocol: Active & Verified
- **Host Key:** Published at `https://ratecraft.app/cf8be9291cf0442db17ed17bcfb9c768.txt` (HTTP 200).
- **Ingestion:** 33 / 33 URLs submitted and accepted (HTTP 202) across Bing, Microsoft Copilot, Amazon Alexa, Naver, Seznam.cz, Yandex, and Yep.

### 3. Moz API: Configured (Quota Activation Pending)
- **Status:** Saved in `~/.config/claude-seo/backlinks-api.json`.
- **Note:** Free tier requires active billing card verification on [moz.com/products/api/keys](https://moz.com/products/api/keys) to allocate the monthly 2,500 rows. Once refreshed, DA/PA and Spam Score metrics will populate automatically.
