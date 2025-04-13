document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Oculta submenus abertos se clicar fora
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.submenu').forEach(sub => {
      if (!sub.contains(e.target)) {
        sub.querySelector('ul').classList.add('hidden');
      }
    });
  });

  // Alternar submenus em mobile
  document.querySelectorAll('.submenu > span').forEach(el => {
    el.addEventListener('click', function () {
      const ul = this.nextElementSibling;
      if (ul) ul.classList.toggle('hidden');
    });
  });
});
