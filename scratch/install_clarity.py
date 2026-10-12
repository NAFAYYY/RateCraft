import glob
import os

CLARITY_SNIPPET = """  <!-- Microsoft Clarity Tracking Code -->
  <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ywor1s2jig");
  </script>
</head>"""

files = sorted(glob.glob("**/*.html", recursive=True))
updated = 0

for file_path in files:
    if "scratch/" in file_path or "ratecraft.app-audit/" in file_path:
        continue

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    if "ywor1s2jig" in content or "clarity.ms" in content:
        print(f"Skipping (already present): {file_path}")
        continue

    if "</head>" in content:
        # replace the last </head> or standard </head>
        new_content = content.replace("</head>", CLARITY_SNIPPET, 1)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        updated += 1
        print(f"Added Clarity to: {file_path}")
    else:
        print(f"WARNING: No </head> in {file_path}")

print(f"\nSuccessfully injected Microsoft Clarity into {updated} pages.")
