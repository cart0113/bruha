/*
 * Dark mode toggle — bottom-right button to switch light/dark.
 *
 * Reads config from window.__docsifyExtConfig:
 *   dark_mode_toggle  — show the toggle button (boolean)
 *   dark_mode_default — start in dark mode (boolean)
 *
 * Persists user choice in localStorage. Applies .dark-mode to <html>
 * immediately (before docsify renders) so there is no flash.
 */

(function () {
  var STORAGE_KEY = 'doc-dark-mode';
  var cfg = window.__docsifyExtConfig || {};

  /* Resolve initial state: localStorage > config default */
  var stored = localStorage.getItem(STORAGE_KEY);
  var isDark;
  if (stored !== null) {
    isDark = stored === '1';
  } else {
    isDark = !!cfg.dark_mode_default;
  }

  /* Apply immediately — before docsify renders */
  if (isDark) {
    document.documentElement.classList.add('dark-mode');
  }

  function setDark(dark) {
    isDark = dark;
    document.documentElement.classList.toggle('dark-mode', dark);
    localStorage.setItem(STORAGE_KEY, dark ? '1' : '0');
    var btn = document.querySelector('.dt-btn');
    if (btn) btn.innerHTML = dark ? SUN_SVG : MOON_SVG;
  }

  var MOON_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  var SUN_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<circle cx="12" cy="12" r="5"/>' +
    '<line x1="12" y1="1" x2="12" y2="3"/>' +
    '<line x1="12" y1="21" x2="12" y2="23"/>' +
    '<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>' +
    '<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>' +
    '<line x1="1" y1="12" x2="3" y2="12"/>' +
    '<line x1="21" y1="12" x2="23" y2="12"/>' +
    '<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>' +
    '<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';

  function darkTogglePlugin(hook) {
    if (!cfg.dark_mode_toggle) return;

    hook.mounted(function () {
      var style = document.createElement('style');
      style.textContent = [
        '.dt-wrap{position:fixed;bottom:24px;right:24px;z-index:10000}',
        '.dt-btn{width:42px;height:42px;border-radius:50%;border:1px solid var(--t-border);background:var(--t-bg-alt);color:var(--t-text);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 10px rgba(0,0,0,.12);transition:transform .15s,box-shadow .15s,background .2s,color .2s,border-color .2s}',
        '.dt-btn:hover{transform:scale(1.08);box-shadow:0 4px 14px rgba(0,0,0,.18)}',
        '.dt-btn svg{width:20px;height:20px}',
      ].join('\n');
      document.head.appendChild(style);

      var wrap = document.createElement('div');
      wrap.className = 'dt-wrap';
      wrap.innerHTML =
        '<button class="dt-btn" title="Toggle dark mode">' +
        (isDark ? SUN_SVG : MOON_SVG) +
        '</button>';
      document.body.appendChild(wrap);

      wrap.querySelector('.dt-btn').addEventListener('click', function () {
        setDark(!isDark);
      });
    });
  }

  window.darkTogglePlugin = darkTogglePlugin;
})();
