#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEPLOY_DIR="$(cd "$ROOT_DIR/.." && pwd)/ar/book-keeping-ksa"

cp "$ROOT_DIR/index.source.html" "$ROOT_DIR/index.html"
cd "$ROOT_DIR"
npx vite build --base /ar/book-keeping-ksa/

rm -rf "$ROOT_DIR/assets"
cp -R "$ROOT_DIR/dist/assets" "$ROOT_DIR/assets"
cp "$ROOT_DIR/dist/index.html" "$ROOT_DIR/index.html"

mkdir -p "$DEPLOY_DIR"
rm -rf "$DEPLOY_DIR/assets"
cp -R "$ROOT_DIR/dist/assets" "$DEPLOY_DIR/assets"
cp "$ROOT_DIR/dist/index.html" "$DEPLOY_DIR/index.html"
