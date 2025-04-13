document.addEventListener('DOMContentLoaded', function() {
  // Controle do Menu Mobile
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuBtn = document.querySelector('.menu-btn');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      menuBtn.classList.toggle('open');
      document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
    });
  }

  // Comportamento de Scroll
  let lastScroll = 0;
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 100) {
      navbar.classList.remove('scrolled-up', 'scrolled-down');
      return;
    }

    if (currentScroll > lastScroll) {
      navbar.classList.add('scrolled-down');
      navbar.classList.remove('scrolled-up');
    } else {
      navbar.classList.add('scrolled-up');
      navbar.classList.remove('scrolled-down');
    }
    
    lastScroll = currentScroll;
  });

  // Fechar Menu ao Clicar em Links
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuBtn.classList.remove('open');
      document.body.style.overflow = 'auto';
    });
  });
});