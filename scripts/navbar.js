document.addEventListener('DOMContentLoaded', function () {
  // Carrega navbar e footer
  fetch('/partials/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;

      // Reativa o botão depois de carregar
      const toggle = document.getElementById('navbarToggle');
      const menu = document.getElementById('navbarMenu');

      if (toggle && menu) {
        toggle.addEventListener('click', () => {
          menu.classList.toggle('active');
        });
      }
    });

  // Carrega footer
  fetch('/partials/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
});
