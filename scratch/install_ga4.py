import glob
import os

GA4_SNIPPET = """<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-N1NX35G61C"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)};
    gtag('js', new Date());

    gtag('config', 'G-N1NX35G61C');
  </script>"""

files = sorted(glob.glob("**/*.html", recursive=True))
updated = 0

for file_path in files:
    if "scratch/" in file_path or "ratecraft.app-audit/" in file_path:
        continue

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    if "G-N1NX35G61C" in content:
        print(f"Skipping (already present): {file_path}")
        continue

    if "<head>" in content:
        new_content = content.replace("<head>", GA4_SNIPPET, 1)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        updated += 1
        print(f"Added GA4 to: {file_path}")
    else:
        print(f"WARNING: No <head> in {file_path}")

print(f"\nSuccessfully injected Google Analytics 4 (G-N1NX35G61C) into {updated} pages.")
