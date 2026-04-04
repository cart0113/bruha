#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

bash bin/build.sh
echo "Serving at http://localhost:3000"
docsify serve docs
