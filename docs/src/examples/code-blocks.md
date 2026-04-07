# Code Blocks

All code blocks get automatic line numbers and a copy-to-clipboard button.

## Python

````markdown
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
````

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

````markdown
```javascript
(function () {
  var themes = [
    { id: 'parchment', label: 'Parchment', color: '#4a6591' },
    { id: 'pylab', label: 'Pylab', color: '#d35400' },
    { id: 'blossom', label: 'Blossom', color: '#7e57c2' },
    { id: 'near-midnight', label: 'Near Midnight', color: '#7cafc2' },
  ];

  function applyTheme(id) {
    var html = document.documentElement;
    html.className = html.className.replace(/\btheme-\w+/g, '').trim();
    html.classList.add('theme-' + id);
    localStorage.setItem('doc-theme', id);
  }

  themes.forEach(function (t) {
    console.log('Available theme:', t.label);
  });
})();
```
````

```javascript
(function () {
  var themes = [
    { id: 'parchment', label: 'Parchment', color: '#4a6591' },
    { id: 'pylab', label: 'Pylab', color: '#d35400' },
    { id: 'blossom', label: 'Blossom', color: '#7e57c2' },
    { id: 'near-midnight', label: 'Near Midnight', color: '#7cafc2' },
  ];

  function applyTheme(id) {
    var html = document.documentElement;
    html.className = html.className.replace(/\btheme-\w+/g, '').trim();
    html.classList.add('theme-' + id);
    localStorage.setItem('doc-theme', id);
  }

  themes.forEach(function (t) {
    console.log('Available theme:', t.label);
  });
})();
```

## Bash

````markdown
```bash
#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
DOCS_DIR="${REPO_ROOT}/docs"

echo "Building sidebar..."
PYTHONPATH="${REPO_ROOT}/src" python-main -c "
import bruha.docsify_ext_config as cfg
import bruha.sidebar_builder as sb
config = cfg.load_config('${DOCS_DIR}')
sb.write_sidebar('${DOCS_DIR}', config['top_level_folders_as_top_control'], config['content_folder'])
cfg.generate_config_js('${DOCS_DIR}')
"

echo "Done."
```
````

```bash
#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
DOCS_DIR="${REPO_ROOT}/docs"

echo "Building sidebar..."
PYTHONPATH="${REPO_ROOT}/src" python-main -c "
import bruha.docsify_ext_config as cfg
import bruha.sidebar_builder as sb
config = cfg.load_config('${DOCS_DIR}')
sb.write_sidebar('${DOCS_DIR}', config['top_level_folders_as_top_control'], config['content_folder'])
cfg.generate_config_js('${DOCS_DIR}')
"

echo "Done."
```

## YAML

````markdown
```yaml
light_theme: parchment
theme_controls: theme_picker
dark_mode_default: false
code_highlighter: vivid
document_inline_sidebar_selector: true
document_header_depth: 3
top_level_folders_as_top_control: true
hamburger_sidebar_toggle: false
github_corner: false
```
````

```yaml
light_theme: parchment
theme_controls: theme_picker
dark_mode_default: false
code_highlighter: vivid
document_inline_sidebar_selector: true
document_header_depth: 3
top_level_folders_as_top_control: true
hamburger_sidebar_toggle: false
github_corner: false
```

## CSS

````markdown
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
````

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

````markdown
```json
{
  "name": "bruha",
  "version": "1.0.0",
  "description": "Personal docsify extensions",
  "scripts": {
    "build": "bin/build.sh",
    "serve": "bin/serve.sh"
  },
  "keywords": ["docsify", "theme", "documentation"]
}
```
````

```json
{
  "name": "bruha",
  "version": "1.0.0",
  "description": "Personal docsify extensions",
  "scripts": {
    "build": "bin/build.sh",
    "serve": "bin/serve.sh"
  },
  "keywords": ["docsify", "theme", "documentation"]
}
```

## Short Snippet

````markdown
```python
print("hello, bruha")
```
````

```python
print("hello, bruha")
```
