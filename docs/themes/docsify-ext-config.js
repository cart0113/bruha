window.__docsifyExtConfig = {
  "theme_name": "code-one",
  "theme_picker": true,
  "document_inline_sidebar_selector": true,
  "document_header_depth": 3,
  "top_level_folders_as_top_control": true,
  "hamburger_menu": false,
  "github_corner": false,
  "content_folder": "src",
  "folder_chevron": true,
  "page_section_collapsible": true,
  "site_icon": "assets/bruha-icon.svg",
  "search_style": "magnify-glass",
  "social_links": {
    "github": "https://github.com/cart0113/bruha"
  }
};
(function(c) {
  if (!c.hamburger_menu) document.documentElement.classList.add('ext-no-hamburger');
  if (!c.github_corner) document.documentElement.classList.add('ext-no-github-corner');
  if (c.top_level_folders_as_top_control) document.documentElement.classList.add('ext-has-top-nav');
  if (c.folder_chevron) document.documentElement.classList.add('ext-folder-chevron');
  if (c.document_inline_sidebar_selector) document.documentElement.classList.add('ext-inline-sidebar');
})(window.__docsifyExtConfig);
