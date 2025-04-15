document.addEventListener("DOMContentLoaded", function () {
  fetch("./navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Agora que a navbar foi carregada, ative o menu
      const toggle = document.getElementById("menuToggle");
      const menu = document.getElementById("navbarMenu");

      if (toggle && menu) {
        toggle.addEventListener("click", () => {
          menu.classList.toggle("active");
        });
      }
    });
});