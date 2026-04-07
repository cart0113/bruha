# Lists

## Unordered Lists

```markdown
- First item in the list
- Second item with some explanation text
- Third item
  - Nested item under third
  - Another nested item
    - Deeply nested for demonstration
```

- First item in the list
- Second item with some explanation text
- Third item
  - Nested item under third
  - Another nested item
    - Deeply nested for demonstration

## Ordered Lists

```markdown
1. Read the configuration file
2. Validate all required keys are present
3. Generate the JavaScript config
4. Write the sidebar markdown
5. Stage the generated files
```

1. Read the configuration file
2. Validate all required keys are present
3. Generate the JavaScript config
4. Write the sidebar markdown
5. Stage the generated files

## Mixed Content Lists

```markdown
- **Configuration**: edit `bruha.json` to control features
- **Sidebar builder**: auto-generates `_sidebar.md` from filesystem
- **Theme controls**: 4 color themes saved to localStorage
  1. Parchment (warm, traditional)
  2. Pylab (bold, scientific)
  3. Blossom (soft, lavender)
  4. Near-Midnight (cool, dark)
```

- **Configuration**: edit `bruha.json` to control features
- **Sidebar builder**: auto-generates `_sidebar.md` from filesystem
- **Theme controls**: 4 color themes saved to localStorage
  1. Parchment (warm, traditional)
  2. Pylab (bold, scientific)
  3. Blossom (soft, lavender)
  4. Near-Midnight (cool, dark)

## Definition-Style Lists

```markdown
- **`build_sidebar(docs_folder, ...)`** — Generates sidebar markdown from the
  filesystem. Returns the content as a string.
- **`write_sidebar(docs_folder, ...)`** — Writes `_sidebar.md` to the content
  folder. Returns the file path.
- **`load_config(docs_folder)`** — Reads `bruha.json` and returns the config
  dict with defaults applied.
- **`generate_config_js(docs_folder)`** — Writes the generated JS config file.
  Returns the output path.
```

- **`build_sidebar(docs_folder, ...)`** — Generates sidebar markdown from the
  filesystem. Returns the content as a string.
- **`write_sidebar(docs_folder, ...)`** — Writes `_sidebar.md` to the content
  folder. Returns the file path.
- **`load_config(docs_folder)`** — Reads `bruha.json` and returns the config
  dict with defaults applied.
- **`generate_config_js(docs_folder)`** — Writes the generated JS config file.
  Returns the output path.

## Task Lists

```markdown
- [x] Create JSON config schema
- [x] Build Python config generator
- [ ] Add KaTeX support
- [ ] Write migration guide
  - [x] Document breaking changes
  - [ ] Add upgrade script
```

- [x] Create JSON config schema
- [x] Build Python config generator
- [ ] Add KaTeX support
- [ ] Write migration guide
  - [x] Document breaking changes
  - [ ] Add upgrade script

## Definition Lists

Use HTML `<dl>`, `<dt>`, `<dd>` for term/definition pairs.

```markdown
<dl>
<dt>bruha.json</dt>
<dd>Single source of truth for all configuration. Edited by hand.</dd>
<dt>_sidebar.md</dt>
<dd>Auto-generated from the filesystem. Do not edit directly.</dd>
<dt>index.html</dt>
<dd>Auto-generated from bruha.json. Do not edit directly.</dd>
</dl>
```

<dl>
<dt>bruha.json</dt>
<dd>Single source of truth for all configuration. Edited by hand.</dd>
<dt>_sidebar.md</dt>
<dd>Auto-generated from the filesystem. Do not edit directly.</dd>
<dt>index.html</dt>
<dd>Auto-generated from bruha.json. Do not edit directly.</dd>
</dl>
