function toggleMenu(btn) {
  btn.classList.toggle("open");
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

window.addEventListener("scroll", function () {
  const brand = document.getElementById("brand");
  if (window.scrollY > 50) {
    brand.textContent = "ISB";
  } else {
    brand.textContent = "Igreja Satanista Brasileira";
  }
});
