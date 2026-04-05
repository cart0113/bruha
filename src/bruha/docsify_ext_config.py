"""Read bruha.yaml and generate a JS config file for the browser.

The YAML file is the single source of truth for all bruha extension
settings. This module reads it, applies defaults for any missing keys,
and writes a JS file that sets window.__docsifyExtConfig plus applies
immediate CSS classes to <html> before docsify renders.
"""

import json
import pathlib

import yaml

DEFAULTS = {
    "theme_name": "parchment",
    "theme_controls": "dark_toggle",
    "dark_mode_default": False,
    "code_highlighter": "vivid",
    "document_inline_sidebar_selector": True,
    "document_header_depth": 3,
    "top_level_folders_as_top_control": True,
    "hamburger_menu": False,
    "github_corner": False,
    "content_folder": "src",
    "folder_chevron": True,
    "page_section_collapsible": True,
    "search_style": "magnify-glass",
    "sidebar_indent": "1em",
    "site_icon": "",
    "social_links": {},
}

JS_TEMPLATE = """\
window.__docsifyExtConfig = {config_json};
(function(c) {{
  if (c.theme_name) document.documentElement.classList.add('theme-' + c.theme_name);
  if (!c.hamburger_menu) document.documentElement.classList.add('ext-no-hamburger');
  if (!c.github_corner) document.documentElement.classList.add('ext-no-github-corner');
  if (c.top_level_folders_as_top_control) document.documentElement.classList.add('ext-has-top-nav');
  if (c.folder_chevron) document.documentElement.classList.add('ext-folder-chevron');
  if (c.document_inline_sidebar_selector) document.documentElement.classList.add('ext-inline-sidebar');
  if (c.sidebar_indent) document.documentElement.style.setProperty('--t-sidebar-indent', c.sidebar_indent);
}})(window.__docsifyExtConfig);
"""


def load_config(docs_folder):
    """Read bruha.yaml and return the config dict with defaults applied."""
    config_path = pathlib.Path(docs_folder) / "bruha.yaml"
    config = dict(DEFAULTS)
    if config_path.exists():
        raw = yaml.safe_load(config_path.read_text(encoding="utf-8"))
        if raw:
            config.update(raw)
    return config


def generate_config_js(docs_folder):
    """Generate docs/themes/bruha-config.js from the YAML config."""
    config = load_config(docs_folder)
    docs_root = pathlib.Path(docs_folder)
    config_json = json.dumps(config, indent=2)
    js_content = JS_TEMPLATE.format(config_json=config_json)
    output_path = docs_root / "themes" / "bruha-config.js"
    output_path.write_text(js_content, encoding="utf-8")
    return output_path
