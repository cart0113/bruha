# Sidebar Builder

`docs/bin/build.sh` generates `_sidebar.md`, `bruha-config.js`, and `index.html`
from the filesystem structure under `docs/src/`. Run it after any content
change, or add it as a pre-commit hook so the sidebar stays in sync
automatically.

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
