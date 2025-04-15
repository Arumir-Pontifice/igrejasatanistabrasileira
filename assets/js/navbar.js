function initNavbar() {
  const toggleBtn = document.getElementById("menuToggle");
  const navbarMenu = document.getElementById("navbarMenu");
  
  if (!toggleBtn || !navbarMenu) return;
  
  toggleBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    navbarMenu.classList.toggle("show");
    toggleBtn.classList.toggle("open");
  });
  
  // Fecha ao clicar fora
  document.addEventListener("click", function(event) {
    if (
      navbarMenu.classList.contains("show") &&
      !event.target.closest(".navbar") &&
      !event.target.closest("#menuToggle")
    ) {
      navbarMenu.classList.remove("show");
      toggleBtn.classList.remove("open");
    }
  });
  
  // Fecha ao rolar a página
  window.addEventListener("scroll", function() {
    navbarMenu.classList.remove("show");
    toggleBtn.classList.remove("open");
  });
}

// Executa ao carregar
document.addEventListener("DOMContentLoaded", () => {
  fetch("/navbar.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("navbar-container").innerHTML = html;
      initNavbar();
    });
});