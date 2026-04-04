---
description: Sidebar builder — numbered filesystem convention, validation rules, output format
---

# Sidebar Builder

## Problem

Docsify requires a hand-maintained `_sidebar.md`. This gets out of sync as
pages are added or removed.

## Solution

A Python tool that generates `_sidebar.md` from the filesystem. Ordering
is controlled by numeric prefixes. Prefixes are stripped in output.

## Filesystem Convention

Pattern: `N_name` where N is an integer (0, 1, 2...) and _ is the separator.

```
docs/
├── 0_overview/
│   └── 0_about.md
├── 1_configuration/
│   ├── 0_config-reference.md
│   └── 1_sidebar-builder.md
├── 2_examples/
│   └── 0_theme-demos/
│       └── 0_code-blocks.md
```

## Validation Rules

- All items must have a numeric prefix (SidebarError if not)
- No duplicate numbers at the same level
- Numbers must be contiguous (no gaps)
- When `top_level_folders_only` is true, all root items must be directories

## Display Names

Files: first `# heading` in the file, or filename with prefix stripped and title-cased.
Folders: directory name with prefix stripped and title-cased.

## Output Format

```markdown
- **Overview**
  - [bruha](0_overview/0_about.md)
- **Configuration**
  - [Config Reference](1_configuration/0_config-reference.md)
```

Files become links. Folders become bold labels.

## API

- `build_sidebar(docs_folder, top_level_folders_only)` — returns markdown string
- `write_sidebar(docs_folder, top_level_folders_only)` — writes `_sidebar.md`, returns path

## Integration

The pre-commit hook runs the builder on every commit that touches `docs/`.
Both `_sidebar.md` and `docsify-ext-config.js` are auto-staged.
