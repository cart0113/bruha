# Sidebar Builder

The sidebar builder generates `_sidebar.md` from the filesystem structure of the
`docs/` folder.

## Filesystem Convention

Every `.md` file and every directory must have a numeric prefix followed by an
underscore:

```
docs/
├── 0_overview/
│   └── 0_about.md
├── 1_configuration/
│   ├── 0_config-reference.md
│   └── 1_sidebar-builder.md
├── 2_examples/
│   ├── 0_theme-demos/
│   │   ├── 0_code-blocks.md
│   │   └── 1_typography.md
│   └── 1_tables-and-lists.md
```

## Numbering Rules

- Prefixes must be contiguous integers starting from 0 (no gaps)
- No duplicate numbers at the same level
- Files and folders share a single number sequence per directory
- Unnumbered items cause an error

## Display Names

For `.md` files, the sidebar link text comes from:

1. The first `# heading` in the file (if present)
2. Otherwise, the filename with prefix stripped, separators replaced with
   spaces, and title-cased

Folders use their directory name with the same cleanup logic.

## Generated Output

The builder produces standard docsify sidebar markdown:

```markdown
- **Overview**
  - [bruha](0_overview/0_about.md)
- **Configuration**
  - [Configuration Reference](1_configuration/0_config-reference.md)
  - [Sidebar Builder](1_configuration/1_sidebar-builder.md)
```

## Skipped Items

- `_sidebar.md`, `_navbar.md`, `_coverpage.md`
- Files starting with `_` or `.`
- Non-`.md` files
- Directories with no `.md` files inside them (e.g., `themes/`)

## API

```python
import bruha.sidebar_builder as sb

content = sb.build_sidebar("docs", True)

sb.write_sidebar("docs", True)
```

The second argument (`top_level_folders_only`) enforces that all top-level items
are directories when `True`.

## Pre-Commit Hook

A pre-commit hook auto-rebuilds the sidebar and config on any commit touching
`docs/`:

```bash
#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
DOCS_DIR="${REPO_ROOT}/docs"
SIDEBAR="${DOCS_DIR}/_sidebar.md"

if ! git diff --cached --name-only | grep -q '^docs/'; then
    exit 0
fi

PYTHONPATH="${REPO_ROOT}/src" python-main -c "
import bruha.docsify_ext_config as ext_config
import bruha.sidebar_builder as sb

config = ext_config.load_config('${DOCS_DIR}')
sb.write_sidebar('${DOCS_DIR}', config['top_level_folders_as_top_control'])
ext_config.generate_config_js('${DOCS_DIR}')
"

git add "${SIDEBAR}"
git add "${DOCS_DIR}/themes/docsify-ext-config.js"
```
