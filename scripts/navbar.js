function initNavbar() {
  // Menu Mobile
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const menuBtn = document.querySelector('.menu-btn');
  
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      menu.classList.toggle('hidden');
      menuBtn.classList.toggle('open');
      
      // Bloquear scroll quando menu mobile está aberto
      document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        menuBtn.classList.remove('open');
        document.body.style.overflow = 'auto';
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Ajuste de scroll para navbar fixa
  let lastScroll = 0;
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      navbar.classList.remove('scroll-up');
      return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
      navbar.classList.remove('scroll-up');
      navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
      navbar.classList.remove('scroll-down');
      navbar.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
  });

  // Definir altura da navbar como variável CSS
  const navbarHeight = navbar?.offsetHeight;
  if (navbarHeight) {
    document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
  }
}

// Inicializa assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initNavbar);