# Sidebar Builder

The sidebar builder generates `_sidebar.md` from the filesystem structure of the
`docs/src/` folder (or whichever `content_folder` is configured).

## Filesystem Structure

Content lives under `docs/src/`, separate from themes and config:

```
docs/
├── src/                    ← markdown content
│   ├── _order.md           ← top-level folder ordering
│   ├── overview/
│   │   └── overview.md
│   ├── configuration/
│   │   ├── config-reference.md
│   │   └── sidebar-builder.md
│   └── examples/
│       ├── _order.md
│       ├── general/
│       │   ├── docsify-features.md
│       │   └── tables-and-lists.md
│       └── theme-demos/
│           ├── code-blocks.md
│           └── typography.md
├── themes/                 ← CSS + JS plugins
├── bruha.yaml              ← config
└── index.html
```

## Content Rules

### No mixing files and folders

A directory must contain EITHER markdown files OR sub-directories, never both.
Mixing raises an error.

### Ordering with \_order.md files

Each directory can contain an `_order.md` file that lists entries as a markdown
list:

```markdown
- overview
- configuration
- examples
```

Rules:

- Items appear in listed order; unlisted items are appended alphabetically
- Missing items are silently ignored; lines starting with `#` are comments
- Plain text (one entry per line, no `-` prefix) is also accepted

### Default ordering (no \_order.md file)

When no `_order.md` file exists:

1. A file whose stem matches the folder name sorts first (e.g. `overview.md`
   inside `overview/`)
2. Remaining items sort alphabetically

## Display Names

For `.md` files, the sidebar link text comes from:

1. The first `# heading` in the file (if present)
2. Otherwise, the filename with dashes/underscores replaced by spaces and
   title-cased

Folders use their directory name with the same cleanup logic.

## Generated Output

The builder produces standard docsify sidebar markdown:

```markdown
- **Overview**
  - [Overview](overview/overview.md)
- **Configuration**
  - [Configuration Reference](configuration/config-reference.md)
  - [Sidebar Builder](configuration/sidebar-builder.md)
```

## Skipped Items

- `_sidebar.md`, `_navbar.md`, `_coverpage.md`
- Files starting with `_` or `.`
- Non-`.md` files
- Directories with no `.md` files inside them (e.g., `themes/`)

## API

```python
import bruha.sidebar_builder as sb

content = sb.build_sidebar("docs", True, "src")

sb.write_sidebar("docs", True, "src")
```

- `docs_folder` — path to the docs root
- `top_level_folders_only` — when `True`, enforces that all top-level items are
  directories
- `content_folder` — subdirectory containing markdown content (e.g. `"src"`)

## Pre-Commit Hook

A pre-commit hook auto-rebuilds the sidebar and config on any commit touching
`docs/`:

```bash
#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
DOCS_DIR="${REPO_ROOT}/docs"
SIDEBAR="${DOCS_DIR}/src/_sidebar.md"

if ! git diff --cached --name-only | grep -q '^docs/'; then
    exit 0
fi

PYTHONPATH="${REPO_ROOT}/src" python-main -c "
import bruha.docsify_ext_config as ext_config
import bruha.sidebar_builder as sb

config = ext_config.load_config('${DOCS_DIR}')
sb.write_sidebar('${DOCS_DIR}', config['top_level_folders_as_top_control'], config['content_folder'])
ext_config.generate_config_js('${DOCS_DIR}')
"

git add "${SIDEBAR}"
git add "${DOCS_DIR}/themes/bruha-config.js"
```
