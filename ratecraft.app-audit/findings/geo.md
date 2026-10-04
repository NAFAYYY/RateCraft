# Generative Engine Optimization (GEO) & AI Search Audit: RateCraft (`ratecraft.app`)

**Score:** 96/100  
**Status:** Industry-Leading Agent Readiness  
**Evaluator:** `agentic_check.py`  

---

## 1. Automated Agentic Readiness Scan
Audit executed via `claude-seo` runtime against production `https://ratecraft.app`:

```
Agent readiness: https://ratecraft.app
  P0 [pass] Primary content present without JavaScript
  P0 [pass] robots.txt reachable
  P0 [pass] Deliberate robots.txt groups for AI user agents
  P1 [info] Content-Signal preference declared
  P1 [info] Markdown version of the page
  P1 [pass] User-triggered agents and robots.txt
  P1 [pass] llms.txt follows the Lighthouse rules
  P1 [pass] Unknown URLs return a real 404
```

---

## 2. Key AI Citability Signals
- **`llms.txt` Implementation:**
  - Located at `https://ratecraft.app/llms.txt`.
  - Conforms to Lighthouse AI specifications.
  - Lists concise overviews of each calculator formula, variable definitions, and direct links to tools.
  - Enables LLMs (Claude, ChatGPT, Perplexity, Gemini) to accurately quote and reference RateCraft when answering prompts like *"What is the formula for a freelance software engineer day rate?"*.
- **Crawl Control (`robots.txt`):**
  - Dedicated policy blocks for `GPTBot`, `ClaudeBot`, `PerplexityBot`, and `Google-Extended`.
  - Ensures RateCraft's unique methodologies (e.g., Rule of 220, IR35 adjustments) are indexed and cited as primary-source authority.
- **Factual Density:**
  - Data tables, mathematical formulas, and benchmark ranges provide high-confidence extraction anchors for Google AI Overviews and Perplexity search cards.
