let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

function isMobile() {
  return window.innerWidth <= 768;
}

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (isMobile()) {
    // MOBILE BEHAVIOR
    if (scrollTop > lastScrollTop) {
      // Rolando para baixo
      navbar.classList.add('navbar-hidden');
    } else {
      // Rolando para cima
      navbar.classList.remove('navbar-hidden');
    }
  } else {
    // DESKTOP BEHAVIOR
    if (scrollTop === 0) {
      // No topo da página
      navbar.classList.remove('navbar-shrink');
    } else {
      // Rolando
      navbar.classList.add('navbar-shrink');
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
