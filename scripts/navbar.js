function initNavbar() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const menuBtn = document.querySelector('.menu-btn');
  
  if (toggle && menu && menuBtn) {
    // Função para alternar o menu
    const toggleMenu = () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      menu.classList.toggle('hidden');
      menuBtn.classList.toggle('open');
      document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
    };

    // Evento de clique no botão
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
    });

    // Fechar ao clicar fora
    document.addEventListener('click', function(e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        if (!menu.classList.contains('hidden')) {
          toggleMenu();
        }
      }
    });

    // Fechar ao clicar nos links
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', toggleMenu);
    });
  }

  // Efeito de scroll na navbar
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.classList.toggle('nav-scroll', window.scrollY > 20);
    }
  });
}

// Inicializa quando o DOM estiver pronto
if (document.readyState !== 'loading') {
  initNavbar();
} else {
  document.addEventListener('DOMContentLoaded', initNavbar);
}