# AGENTS.md

This file provides guidance to AI assistants when working with code in this repository.

## CRITICAL: Read Global User Context First

**BEFORE PROCEEDING, read `~/.context.md` and follow all advice there.** That file contains my general coding preferences, style guidelines, and critical instructions that apply to ALL projects. The instructions in ~/.context.md override any conflicting defaults.

If ~/.context.md doesn't exist, notify the user.

## Project Overview

bruha is a personal set of docsify extensions. Not a framework, not a library — just one person's config-driven setup for making docsify pages look and behave a specific way.

## Code Structure

```
src/bruha/                  Python tools
  sidebar_builder.py        Generates _sidebar.md from filesystem + _order files
  docsify_ext_config.py     Reads YAML config, generates JS config bridge
docs/                       Docsify site root (served as static files)
  bruha.yaml                Config (single source of truth)
  src/                      Markdown content (parallel to themes/)
    _order                  Top-level folder ordering
    overview/               Folders contain EITHER files OR sub-folders, never both
    configuration/
    examples/
  themes/                   CSS + JS plugins
  index.html                Docsify entry point
bin/                        Build, format, serve scripts
context-db/                 Project knowledge database (context-db format)
```

## Development Workflow

### Building

```bash
bin/build.sh
```

This rebuilds `_sidebar.md` + `bruha-config.js` from the YAML config and filesystem, then runs prettier on all JS, CSS, and MD files.

### Serving

```bash
bin/serve.sh
```

Runs build then `docsify serve docs` at `http://localhost:3000`.

### Formatting

```bash
bin/format.sh              # prettier on JS, CSS, MD
ruff-main src/             # Python formatting
```

### Dependencies

- Python: PyYAML (`import yaml`)
- Use `python-main` (never `python` or `python3`)
- Use `ruff-main` for Python formatting
- Node: prettier (installed via npm, `node_modules/`)

## Sidebar Ordering

Sidebar order is controlled by `_order` files in each directory under `docs/`.
Each `_order` lists filenames/dirnames one per line. Items not listed sort
alphabetically at the end. If no `_order` exists, everything is alphabetical.

## context-db

Read `context-db/context-db-instructions.md` for the project knowledge database.
