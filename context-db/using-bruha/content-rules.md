---
description: Content structure rules — no mixing, _order files, display names, skipped items
---

# Content Rules

These are the rules for writing and organizing markdown content inside a bruha
docs site. Content lives under `docs/src/` (the exact subfolder name is set by
the `content_folder` key in `bruha.yaml`, default `src`).

## No Mixing Files and Folders

A directory must contain EITHER markdown files OR sub-directories, never both.
The sidebar builder will raise an error if you mix them.

Good:

```
src/
  guides/            ← folders only
    getting-started/ ← files only
      install.md
      first-steps.md
    advanced/        ← files only
      caching.md
```

Bad:

```
src/
  guides/
    overview.md      ← file mixed with folders — ERROR
    getting-started/
      install.md
```

If a folder needs an introductory page, put it in a child folder or name the
file so it sorts first inside a files-only directory.

## Ordering with _order Files

Any directory can contain a plain-text file named `_order` that controls the
display order in the sidebar. List entry names one per line (folder names or
file stems without `.md`).

```
# _order — comments start with #
getting-started
advanced
reference
```

Rules:
- Listed items appear in the specified order.
- Items on disk but not listed are appended alphabetically after the listed ones.
- Items listed but not on disk are silently ignored (no error).

When no `_order` file exists:
1. A file whose stem matches its parent folder name sorts first
   (e.g. `overview.md` inside `overview/`).
2. Everything else sorts alphabetically.

## Display Names

- **Files**: the first `# heading` in the file. If none, the filename with
  dashes/underscores replaced by spaces, title-cased.
- **Folders**: the directory name with dashes/underscores replaced by spaces,
  title-cased.

## Skipped Items

The sidebar builder ignores:
- Files or directories starting with `_` or `.`
- `_sidebar.md`, `_navbar.md`, `_coverpage.md`, `_order`
- Directories with no `.md` files anywhere inside them
