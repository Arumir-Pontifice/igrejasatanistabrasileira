const header = document.getElementById('main-header');
const siteName = document.getElementById('site-name');
const menuToggle = document.getElementById('navbar-toggle');
const menu = document.getElementById('navbar-menu');

let lastScrollY = window.scrollY;

// Toggle menu mobile
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Efeitos ao rolar
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header-scrolled');
    siteName.textContent = 'ISB';
  } else {
    header.classList.remove('header-scrolled');
    siteName.textContent = 'Igreja Satanista Brasileira';
  }

  // Mobile: esconder ao descer, mostrar ao subir
  if (window.innerWidth <= 768) {
    if (window.scrollY < lastScrollY) {
      header.style.top = "0";
    } else {
      header.style.top = "-100px";
    }
  }

  lastScrollY = window.scrollY;
});