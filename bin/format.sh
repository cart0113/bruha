#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

npx prettier --write "docs/**/*.md" "docs/themes/*.js" "docs/themes/*.css"
