document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuBtn = document.querySelector('.menu-btn');

  // Ajuste inicial do padding
  const main = document.querySelector('main');
  if (main) {
    main.style.paddingTop = navbar.offsetHeight + 'px';
  }

  // Menu mobile
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      menuBtn.classList.toggle('open');
      document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
    });
  }

  // Comportamento no scroll
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 100) {
      navbar.classList.remove('scrolled-up', 'scrolled-down');
      return;
    }

    if (currentScroll > lastScroll && currentScroll > navbar.offsetHeight) {
      navbar.classList.add('scrolled-down');
      navbar.classList.remove('scrolled-up');
    } else if (currentScroll < lastScroll) {
      navbar.classList.add('scrolled-up');
      navbar.classList.remove('scrolled-down');
    }
    
    lastScroll = currentScroll;
  });
});
