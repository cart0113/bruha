#!/usr/bin/env bash
#
# serve.sh — Build and serve a bruha docsify site locally.
#
# Default: `python3 -m http.server` (stdlib only, no extra dependencies).
# With `--live-reload`: `docsify serve` for auto-refresh on file changes.
# `--live-reload` requires docsify-cli (`npm install -g docsify-cli`).
#
# Note: the bruha repo's own docs are developed with `--live-reload`; the
# default python path is the recommended workflow for downstream projects.
#
# Usage:
#   docs/bin/serve.sh                  # python static server, port 3000
#   docs/bin/serve.sh --port 4000      # custom port
#   docs/bin/serve.sh --live-reload    # docsify-cli with auto-refresh
#
set -euo pipefail

PORT=3000
LIVE_RELOAD=0
while [ $# -gt 0 ]; do
    case "$1" in
        --port) PORT="$2"; shift 2 ;;
        --live-reload) LIVE_RELOAD=1; shift ;;
        *) echo "Unknown option: $1" >&2; exit 1 ;;
    esac
done

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DOCS_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

bash "$SCRIPT_DIR/build.sh"

if [ "$LIVE_RELOAD" -eq 1 ]; then
    if ! command -v docsify >/dev/null 2>&1; then
        echo "Error: --live-reload requires docsify-cli." >&2
        echo "Install with: npm install -g docsify-cli" >&2
        exit 1
    fi
    echo "Serving (live-reload) at http://localhost:$PORT"
    docsify serve "$DOCS_DIR" --port "$PORT"
else
    echo "Serving at http://localhost:$PORT"
    python3 -m http.server "$PORT" --directory "$DOCS_DIR"
fi
