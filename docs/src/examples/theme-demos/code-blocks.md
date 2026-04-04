# Code Blocks

All code blocks get automatic line numbers and a copy-to-clipboard button.

## Python

```python
import pathlib
import json

class Config:
    def __init__(self, path):
        self.path = pathlib.Path(path)
        self.data = json.loads(self.path.read_text())

    def get(self, key):
        return self.data[key]

    def keys(self):
        return list(self.data.keys())

config = Config("settings.json")
for key in config.keys():
    print(f"{key}: {config.get(key)}")
```

## JavaScript

```javascript
(function () {
  var palettes = [
    { id: 'parchment', label: 'Parchment', color: '#4a6591' },
    { id: 'arctic', label: 'Arctic', color: '#2563eb' },
    { id: 'forest', label: 'Forest', color: '#3d7a4a' },
  ];

  function applyPalette(id) {
    var html = document.documentElement;
    html.className = html.className.replace(/\bpalette-\w+/g, '').trim();
    if (id !== 'parchment') {
      html.classList.add('palette-' + id);
    }
    localStorage.setItem('doc-palette', id);
  }

  palettes.forEach(function (p) {
    console.log('Available palette:', p.label);
  });
})();
```

## Bash

```bash
#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
DOCS_DIR="${REPO_ROOT}/docs"

echo "Building sidebar..."
PYTHONPATH="${REPO_ROOT}/src" python-main -c "
import bruha.sidebar_builder as sb
sb.write_sidebar('${DOCS_DIR}', True)
"

echo "Done. Sidebar written to ${DOCS_DIR}/_sidebar.md"
```

## YAML

```yaml
theme_name: code-one
theme_picker: true
document_inline_sidebar_selector: true
document_header_depth: 3
top_level_folders_as_top_control: true
hamburger_menu: false
github_corner: false
```

## CSS

```css
:root {
  --t-bg: #f7f6f3;
  --t-text: #2a2e38;
  --t-accent: #4a6591;
  --t-sidebar-bg: #edeae3;
}

.sidebar {
  width: 320px !important;
  background: var(--t-sidebar-bg) !important;
  border-right: none !important;
}

.markdown-section h1 {
  font-size: 2.4em;
  font-weight: 700;
  letter-spacing: -0.03em;
}
```

## JSON

```json
{
  "name": "bruha",
  "version": "1.0.0",
  "description": "Personal docsify extensions",
  "scripts": {
    "build": "python-main -m bruha.build",
    "serve": "docsify serve docs"
  },
  "keywords": ["docsify", "theme", "documentation"]
}
```

## Short Snippet

A one-liner to show minimal code block rendering:

```python
print("hello, bruha")
```
