# Callouts

Callouts, badges, keyboard keys, and collapsible sections.

## Callouts

Callouts are styled alert boxes using blockquote syntax.

### Note

```markdown
> [!note] Notes highlight useful background information that readers should be
> aware of.
```

> [!note] Notes highlight useful background information that readers should be
> aware of.

### Tip

```markdown
> [!tip] Tips suggest a better way to do something or a helpful shortcut.
```

> [!tip] Tips suggest a better way to do something or a helpful shortcut.

### Important

```markdown
> [!important] Important callouts flag information that users need to succeed.
```

> [!important] Important callouts flag information that users need to succeed.

### Warning

```markdown
> [!warning] Warnings alert readers to potential problems or dangerous actions.
```

> [!warning] Warnings alert readers to potential problems or dangerous actions.

### Success

```markdown
> [!success] The deployment completed without errors. All health checks passed.
```

> [!success] The deployment completed without errors. All health checks passed.

### Danger

```markdown
> [!danger] This action permanently deletes all data. It cannot be undone.
```

> [!danger] This action permanently deletes all data. It cannot be undone.

### Example

```markdown
> [!example] Set `theme_controls: theme_picker` in `bruha.yaml` to enable the
> palette button.
```

> [!example] Set `theme_controls: theme_picker` in `bruha.yaml` to enable the
> palette button.

### Quote

```markdown
> [!quote] Documentation is a love letter that you write to your future self. —
> Damian Conway
```

> [!quote] Documentation is a love letter that you write to your future self. —
> Damian Conway

---

## Keyboard Keys

Use the HTML `<kbd>` tag for keyboard shortcuts.

```markdown
Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> to open the command
palette.

Save with <kbd>Cmd</kbd> + <kbd>S</kbd> on macOS or <kbd>Ctrl</kbd> +
<kbd>S</kbd> on Windows.
```

Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> to open the command
palette.

Save with <kbd>Cmd</kbd> + <kbd>S</kbd> on macOS or <kbd>Ctrl</kbd> +
<kbd>S</kbd> on Windows.

---

## Collapsible Sections

Use HTML `<details>` and `<summary>` for expandable content.

```markdown
<details>
<summary>Click to expand — configuration example</summary>

Set these keys in `bruha.yaml`:

- `light_theme` — base color theme
- `dark_theme` — override for dark mode
- `theme_controls` — `none`, `dark_toggle`, or `theme_picker`

</details>
```

<details>
<summary>Click to expand — configuration example</summary>

Set these keys in `bruha.yaml`:

- `light_theme` — base color theme
- `dark_theme` — override for dark mode
- `theme_controls` — `none`, `dark_toggle`, or `theme_picker`

</details>

```markdown
<details>
<summary>Click to expand — troubleshooting steps</summary>

1. Run `bin/build.sh` to regenerate all files
2. Check `docs/index.html` was updated
3. Hard-refresh the browser (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>)
4. Verify the YAML syntax with
   `python -c "import yaml; yaml.safe_load(open('docs/bruha.yaml'))"`

</details>
```

<details>
<summary>Click to expand — troubleshooting steps</summary>

1. Run `bin/build.sh` to regenerate all files
2. Check `docs/index.html` was updated
3. Hard-refresh the browser (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>)
4. Verify the YAML syntax with
   `python -c "import yaml; yaml.safe_load(open('docs/bruha.yaml'))"`

</details>

---

## Badges

Use `<span class="badge badge-COLOR">` for inline labels. Colors: green, blue,
amber, red, purple, gray.

```markdown
<span class="badge badge-green">Stable</span>
<span class="badge badge-blue">Beta</span>
<span class="badge badge-amber">Experimental</span>
<span class="badge badge-red">Deprecated</span>
<span class="badge badge-purple">New</span>
<span class="badge badge-gray">Internal</span>
```

<span class="badge badge-green">Stable</span>
<span class="badge badge-blue">Beta</span>
<span class="badge badge-amber">Experimental</span>
<span class="badge badge-red">Deprecated</span>
<span class="badge badge-purple">New</span>
<span class="badge badge-gray">Internal</span>

Badges work inline with text:

```markdown
The sidebar builder <span class="badge badge-green">Stable</span> generates
`_sidebar.md` automatically. The KaTeX plugin
<span class="badge badge-amber">Experimental</span> requires `katex: true` in
your config.
```

The sidebar builder <span class="badge badge-green">Stable</span> generates
`_sidebar.md` automatically. The KaTeX plugin
<span class="badge badge-amber">Experimental</span> requires `katex: true` in
your config.
