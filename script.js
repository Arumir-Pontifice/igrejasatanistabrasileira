// Alternar menu mobile
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  // Mudança do nome da marca ao rolar a página
  const brand = document.getElementById("brand");
  if (brand) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        brand.textContent = "ISB";
      } else {
        brand.textContent = "Igreja Satanista Brasileira";
      }
    });
  }
});
