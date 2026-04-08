---
description: Building, serving, formatting, sidebar ordering, and dependencies
---

# Development Workflow

## Building

```bash
docs/bin/build.sh
```

This rebuilds `_sidebar.md` + `bruha-config.js` from the JSON config and
filesystem, then runs prettier on all JS, CSS, and MD files.

## Serving

```bash
docs/bin/serve.sh
```

Runs build then `docsify serve docs`. Supports `--port` flag (default 3000).

## Formatting

```bash
docs/bin/format.sh              # prettier on JS, CSS, MD
ruff-main src/             # Python formatting
```

## Dependencies

- Python 3 (stdlib only — no external packages)
- Use `python3`
- Use `ruff-main` for Python formatting
- Node: prettier (installed via npm, `node_modules/`)

## Sidebar Ordering

Sidebar order is controlled by `_order.md` files in each directory under
`docs/`. Each `_order.md` lists filenames/dirnames one per line. Items not
listed sort alphabetically at the end. If no `_order.md` exists, everything is
alphabetical.
