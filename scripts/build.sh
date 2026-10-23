#!/usr/bin/env bash
set -e
echo "Building minified assets with esbuild..."
npx -y esbuild css/style.css --minify --outfile=css/style.min.css
npx -y esbuild js/nav.js --minify --outfile=js/nav.min.js
npx -y esbuild js/calculator.js --minify --outfile=js/calculator.min.js
echo "Minification complete!"
