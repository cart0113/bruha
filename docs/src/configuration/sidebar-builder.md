# Sidebar Builder

The sidebar builder generates `_sidebar.md` from the filesystem structure under
`docs/src/`.

## Content Rules

**No mixing files and folders.** A directory must contain EITHER markdown files
OR sub-directories, never both. Mixing raises an error.

## Ordering with \_order.md

Each directory can contain an `_order.md` file listing entries one per line:

```markdown
- overview
- configuration
- examples
```

- Items appear in listed order; unlisted items are appended alphabetically
- Missing items are silently ignored; lines starting with `#` are comments

**Default ordering** (no `_order.md`): a file whose stem matches the folder name
sorts first, then alphabetical.

## Display Names

- **Files**: first `# heading` in the file, or the filename cleaned up
  (dashes/underscores to spaces, title-cased)
- **Folders**: directory name with the same cleanup

## Skipped Items

Files starting with `_` or `.`, non-`.md` files, and empty directories.

## Pre-Commit Hook

Auto-rebuild sidebar and config on commits touching `docs/`:

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
