---
description: Building, serving, sidebar ordering, and dependencies
---

# Development Workflow

## Building

```bash
docs/bin/build.sh
```

This rebuilds `_sidebar.md` + `bruha-config.js` + `index.html` from the JSON
config and filesystem.

## Serving

```bash
docs/bin/serve.sh
```

Runs build then `docsify serve docs`. Supports `--port` flag (default 3000).

## Formatting

Formatting is handled by the project's pre-commit hook (from GIT_STANDARDS), not
by bruha. The hook runs prettier on staged MD/JS/CSS/HTML files and ruff on
staged Python files before every commit.

```bash
ruff-main src/             # Python formatting (manual)
```

## Dependencies

- Python 3 (stdlib only — no external packages)
- Use `python3`
- Use `ruff-main` for Python formatting

## Sidebar Ordering

Sidebar order is controlled by `_order.md` files in each directory under
`docs/`. Each `_order.md` lists filenames/dirnames one per line. Items not
listed sort alphabetically at the end. If no `_order.md` exists, everything is
alphabetical.
