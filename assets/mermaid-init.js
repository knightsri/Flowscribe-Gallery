(function() {
  function convertMermaidCodeBlocks() {
    var blocks = document.querySelectorAll('pre > code.language-mermaid, pre code.mermaid');
    if (!blocks.length) return;
    blocks.forEach(function(code) {
      var pre = code.closest('pre') || code.parentElement;
      var container = document.createElement('div');
      container.className = 'mermaid';
      container.textContent = code.textContent;
      // Replace the entire <pre> with a mermaid container
      pre.parentNode.replaceChild(container, pre);
    });
  }

  function initMermaid() {
    if (window.mermaid) {
      try {
        // safe baseline config; loose allows links in diagrams if present
        window.mermaid.initialize({ startOnLoad: false, securityLevel: 'loose' });
        convertMermaidCodeBlocks();
        window.mermaid.run();
      } catch (e) {
        console.error('Mermaid init failed:', e);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMermaid);
  } else {
    initMermaid();
  }
})();
