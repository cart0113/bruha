---
description: Sidebar builder — content rules, _order files, validation, output format
---

# Sidebar Builder

## Problem

Docsify requires a hand-maintained `_sidebar.md`. This gets out of sync as
pages are added or removed.

## Solution

A Python tool that generates `_sidebar.md` from the filesystem. Content lives
under a configurable subdirectory (default: `src/`) parallel to `themes/`.

## Content Structure Rules

### No mixing files and folders

A directory must contain EITHER markdown files OR sub-directories, never both.
Violation raises `SidebarError`.

```
src/examples/           ← folders only
  theme-demos/          ← files only
    code-blocks.md
    typography.md
  general/              ← files only
    tables-and-lists.md
```

### Content lives in src/

All markdown content lives under `docs/src/`. The `content_folder` config key
controls this (default: `src`). This keeps content separate from themes, config,
and docsify infrastructure.

```
docs/
  src/        ← markdown content
  themes/     ← CSS + JS plugins
  index.html
  bruha.yaml
```

## Ordering

### _order files

Each directory can contain a file named `_order` that lists entries one per
line in the desired display order.

```
# Comments start with #
theme-demos
general
```

Rules:
- Items listed in `_order` appear in that order
- Items on disk but not in `_order` are appended alphabetically
- Items in `_order` that don't exist on disk are silently ignored

### Default ordering (no _order file)

When no `_order` file exists:
1. A file whose stem matches the folder name sorts first
   (e.g. `overview.md` inside `overview/`)
2. Remaining items sort alphabetically

## Display Names

Files: first `# heading` in the file, or filename with dashes/underscores
replaced by spaces and title-cased.
Folders: directory name with dashes/underscores replaced by spaces and
title-cased.

## Skipped Items

- Files starting with `_` or `.`
- `_sidebar.md`, `_navbar.md`, `_coverpage.md`, `_order`
- Directories with no `.md` files anywhere inside

## Output Format

```markdown
- **Overview**
  - [bruha](src/overview/overview.md)
- **Configuration**
  - [Config Reference](src/configuration/config-reference.md)
```

Links are relative to the docs root (include `src/` prefix).
Files become links. Folders become bold labels.

## API

- `build_sidebar(docs_folder, top_level_folders_only, content_folder)`
- `write_sidebar(docs_folder, top_level_folders_only, content_folder)`

## Integration

`bin/build.sh` reads `content_folder` from the YAML config and passes it
to the sidebar builder.
