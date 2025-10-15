(function () {
  function convertFences() {
    var blocks = document.querySelectorAll('pre > code.language-mermaid, pre code.mermaid, code.language-mermaid');
    if (!blocks.length) return 0;
    var count = 0;
    blocks.forEach(function (code) {
      var pre = code.closest('pre') || code.parentElement;
      var div = document.createElement('div');
      div.className = 'mermaid';
      // Use textContent to avoid HTML being interpreted
      div.textContent = code.textContent.trim();
      pre.parentNode.replaceChild(div, pre);
      count++;
    });
    return count;
  }

  function boot() {
    if (!window.mermaid) return;
    try {
      window.mermaid.initialize({ startOnLoad: false, securityLevel: 'loose' });
      var replaced = convertFences();
      // Render any <div class="mermaid"> present already
      window.mermaid.run();
    } catch (e) {
      console.error('Mermaid init failed:', e);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();