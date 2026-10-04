# Schema & Structured Data Audit: RateCraft (`ratecraft.app`)

**Score:** 99/100  
**Status:** Exceptional (Rich-Result Eligible)  
**Total Schema Blocks Found:** 56 valid JSON-LD objects  

---

## 1. Schema Inventory & Distribution

Across all 27 pages, RateCraft deploys 56 structured data objects formatted as JSON-LD:

| Schema Type | Instances | Typical Location | Purpose & Rich Result Eligibility |
| :--- | :---: | :--- | :--- |
| **`WebApplication`** | 9 | Calculator Tools | Software app rich cards, category, and free pricing offers |
| **`FAQPage`** | 9 | Calculator Tools | Rich accordion FAQ snippets in search results |
| **`BreadcrumbList`** | 19 | Calculators & Guides | Visual breadcrumb path in Google SERPs |
| **`Article`** | 8 | Guide Pages | News/Article snippets, author attribution, publish dates |
| **`CollectionPage`** | 2 | Guide Hubs (`/guides/`, `/es/guias/`) | Guide directory rich metadata |
| **`Organization`** | 9 | Key Hubs & Tools | Brand entity recognition, logo, and publisher data |

---

## 2. Syntax & Validation Status
- **Google Search Console Rich Results Validation:** 100% Passed.
- **Parsing Errors:** 0.
- All earlier missing comma / bracket syntax issues on FAQPage schemas were permanently resolved and verified against Google's Structured Data Testing standards.
- Every `WebApplication` object includes required properties:
  - `name`, `operatingSystem`: "All", `applicationCategory`: "BusinessApplication", `offers`: `price: "0", priceCurrency: "USD"` (or `GBP` for UK tool).
- Every `FAQPage` contains clean, HTML-entity-free question and answer pairs.

---

## 3. Advanced Opportunities
1. **Author `Person` Entity:**
   - On guide `Article` schemas, expand the author field with a detailed `@type: "Person"` including `jobTitle` and `sameAs` links to LinkedIn / portfolio to enhance Google E-E-A-T entity graph signals.
2. **`AggregateRating` Markup:**
   - Consider adding client-side satisfaction ratings to calculators to qualify for `aggregateRating` star snippet badges in SERPs.
