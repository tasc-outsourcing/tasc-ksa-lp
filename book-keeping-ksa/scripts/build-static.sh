#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cp "$ROOT_DIR/index.source.html" "$ROOT_DIR/index.html"
cd "$ROOT_DIR"
npx vite build --base /book-keeping-ksa/

rm -rf "$ROOT_DIR/assets"
cp -R "$ROOT_DIR/dist/assets" "$ROOT_DIR/assets"
cp "$ROOT_DIR/dist/index.html" "$ROOT_DIR/index.html"

