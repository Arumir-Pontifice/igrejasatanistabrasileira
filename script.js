
// Menu Hamburger (Mobile)
function toggleMenu(btn) {
  btn.classList.toggle("open");
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

// Mudança do nome da marca ao rolar a página
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const brand = document.getElementById("brand");
  if (window.scrollY > 50) {
    brand.textContent = "ISB";
  } else {
    brand.textContent = "Igreja Satanista Brasileira";
  }
});
