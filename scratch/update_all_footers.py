import os
import glob
import re

EN_GUIDES = [
    ("guides/", "All Freelance Guides"),
    ("guides/how-to-calculate-freelance-hourly-rate/", "Hourly Rate Formula"),
    ("guides/how-to-raise-freelance-rates/", "How to Raise Freelance Rates"),
    ("guides/rule-of-220-billable-hours-explained/", "The Rule of 220 Formula"),
    ("guides/freelance-contract-pricing-clauses/", "Contract Pricing Clauses"),
    ("guides/fixed-price-vs-hourly-project-quoting/", "Fixed-Price vs. Hourly Quoting"),
    ("guides/freelance-software-developer-rates-guide/", "Software Engineer Rate Benchmarks"),
    ("guides/freelance-designer-pricing-guide/", "Designer Pricing Benchmarks"),
    ("guides/value-based-pricing-vs-hourly/", "Value-Based Pricing"),
    ("guides/freelance-retainer-agreements-guide/", "Retainer Agreements Guide"),
    ("guides/freelance-taxes-and-overhead-deductions/", "Freelance Taxes & Deductions"),
]

ES_GUIDES = [
    ("guias/", "Todas las Guías"),
    ("guias/como-calcular-tarifa-por-hora/", "Cómo Calcular tu Tarifa por Hora"),
    ("guias/como-subir-tarifas-freelance/", "Cómo Subir Tarifas Freelance"),
    ("guias/regla-de-220-horas-facturables/", "La Regla de los 220 Días Facturables"),
    ("guias/clausulas-contratos-freelance/", "Cláusulas de Precios en Contratos"),
    ("guias/precio-fijo-vs-precio-por-hora/", "Precio Fijo vs. Tarifa por Hora"),
    ("guias/tarifas-desarrollador-freelance/", "Tarifas para Desarrolladores de Software"),
    ("guias/tarifas-disenador-freelance/", "Tarifas para Diseñadores UI/UX"),
    ("guias/precios-por-valor-vs-por-hora/", "Precios por Valor vs. Por Hora"),
    ("guias/contratos-retainer-freelance/", "Guía de Contratos Retainer"),
    ("guias/impuestos-gastos-autonomos/", "Impuestos y Gastos Deducibles"),
]

PAIRS = {
    "how-to-raise-freelance-rates": "como-subir-tarifas-freelance",
    "freelance-contract-pricing-clauses": "clausulas-contratos-freelance",
    "rule-of-220-billable-hours-explained": "regla-de-220-horas-facturables",
    "fixed-price-vs-hourly-project-quoting": "precio-fijo-vs-precio-por-hora",
    "freelance-software-developer-rates-guide": "tarifas-desarrollador-freelance",
    "freelance-designer-pricing-guide": "tarifas-disenador-freelance",
}

def get_en_footer(prefix):
    items = []
    for href, label in EN_GUIDES:
        items.append(f'            <li><a href="{prefix}{href}">{label}</a></li>')
    inner = "\n".join(items)
    return f"""<p class="footer-col-title">Editorial Guides</p>
          <ul class="footer-links-list">
{inner}
          </ul>"""

def get_es_footer(prefix):
    items = []
    for href, label in ES_GUIDES:
        items.append(f'            <li><a href="{prefix}{href}">{label}</a></li>')
    inner = "\n".join(items)
    return f"""<p class="footer-col-title">Guías Editoriales</p>
          <ul class="footer-links-list">
{inner}
          </ul>"""

def update_footers():
    html_files = sorted(glob.glob("**/*.html", recursive=True))
    updated_count = 0

    for file_path in html_files:
        if "scratch/" in file_path:
            continue

        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        is_es = file_path.startswith("es/")
        
        if is_es:
            # depth calculation relative to 'es/'
            rel = file_path[3:] # strip 'es/'
            parts = [p for p in rel.split("/") if p]
            # e.g. index.html -> len 1 -> depth 0
            # calculadora-precio-hora-programador/index.html -> len 2 -> depth 1
            # guias/como-calcular-tarifa-por-hora/index.html -> len 3 -> depth 2
            depth = len(parts) - 1
            if depth == 0:
                prefix = ""
            elif depth == 1:
                prefix = "../"
            else:
                prefix = "../../"
            
            new_footer_block = get_es_footer(prefix)
            pattern = re.compile(r'<p class="footer-col-title">Guías Editoriales</p>\s*<ul class="footer-links-list">.*?</ul>', re.DOTALL)
            
            if pattern.search(content):
                new_content = pattern.sub(new_footer_block, content, count=1)
                if new_content != content:
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    print(f"[Updated ES Footer] {file_path} (depth={depth}, prefix={prefix})")
                    updated_count += 1
            else:
                print(f"[WARNING: No ES match] {file_path}")

        else:
            # English file
            parts = [p for p in file_path.split("/") if p]
            depth = len(parts) - 1
            if depth == 0:
                prefix = ""
            elif depth == 1:
                prefix = "../"
            else:
                prefix = "../../"

            new_footer_block = get_en_footer(prefix)
            pattern = re.compile(r'<p class="footer-col-title">Editorial Guides</p>\s*<ul class="footer-links-list">.*?</ul>', re.DOTALL)

            if pattern.search(content):
                new_content = pattern.sub(new_footer_block, content, count=1)
                if new_content != content:
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    print(f"[Updated EN Footer] {file_path} (depth={depth}, prefix={prefix})")
                    updated_count += 1
            else:
                print(f"[WARNING: No EN match] {file_path}")

    print(f"\nTotal files updated with new footer: {updated_count}")

def update_english_guide_interlinks():
    for en_slug, es_slug in PAIRS.items():
        file_path = f"guides/{en_slug}/index.html"
        if not os.path.exists(file_path):
            continue
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Check hreflang es in head
        es_canonical = f"https://ratecraft.app/es/guias/{es_slug}/"
        es_hreflang_tag = f'<link rel="alternate" hreflang="es" href="{es_canonical}">'
        x_default_tag = f'<link rel="alternate" hreflang="x-default" href="https://ratecraft.app/guides/{en_slug}/">'

        if es_hreflang_tag not in content:
            # insert after en alternate tag
            en_tag = f'<link rel="alternate" hreflang="en" href="https://ratecraft.app/guides/{en_slug}/">'
            if en_tag in content:
                content = content.replace(en_tag, f'{en_tag}\n  {es_hreflang_tag}\n  {x_default_tag}')

        # Update language switcher
        old_lang_btn = '<a href="../../es/guias/" class="lang-btn">ES</a>'
        new_lang_btn = f'<a href="../../es/guias/{es_slug}/" class="lang-btn">ES</a>'
        if old_lang_btn in content:
            content = content.replace(old_lang_btn, new_lang_btn)

        # Update footer bottom spanish link if present
        # In guides/<slug>/index.html:
        # Check footer-bottom
        old_footer_bottom = '<p class="footer-copy">&copy; 2026 RateCraft. Free open financial utility for independent professionals.</p>'
        new_footer_bottom = f'''<div class="footer-bottom">
        <div>© 2026 RateCraft. Free open financial utility for independent professionals.</div>
        <ul class="footer-bottom-links">
          <li><a href="../../es/guias/{es_slug}/">Versión en Español (🇪🇸)</a></li>
          <li><a href="../../sitemap.xml">Sitemap</a></li>
        </ul>
      </div>'''
        if '<div class="footer-bottom">' not in content and old_footer_bottom in content:
            content = content.replace(old_footer_bottom, new_footer_bottom)

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"[Updated English guide interlinks] {file_path} -> es/guias/{es_slug}/")

if __name__ == "__main__":
    update_footers()
    update_english_guide_interlinks()
