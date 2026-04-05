window.__docsifyExtConfig = {
  "theme_name": "parchment",
  "dark_mode_toggle": true,
  "dark_mode_default": false,
  "document_inline_sidebar_selector": true,
  "document_header_depth": 3,
  "top_level_folders_as_top_control": true,
  "hamburger_menu": false,
  "github_corner": false,
  "content_folder": "src",
  "folder_chevron": true,
  "page_section_collapsible": true,
  "sidebar_indent": "1em",
  "site_icon": "assets/bruha-icon.svg",
  "search_style": "magnify-glass",
  "social_links": {
    "github": "https://github.com/cart0113/bruha"
  }
};
(function(c) {
  if (c.theme_name) document.documentElement.classList.add('theme-' + c.theme_name);
  if (!c.hamburger_menu) document.documentElement.classList.add('ext-no-hamburger');
  if (!c.github_corner) document.documentElement.classList.add('ext-no-github-corner');
  if (c.top_level_folders_as_top_control) document.documentElement.classList.add('ext-has-top-nav');
  if (c.folder_chevron) document.documentElement.classList.add('ext-folder-chevron');
  if (c.document_inline_sidebar_selector) document.documentElement.classList.add('ext-inline-sidebar');
  if (c.sidebar_indent) document.documentElement.style.setProperty('--t-sidebar-indent', c.sidebar_indent);
})(window.__docsifyExtConfig);
