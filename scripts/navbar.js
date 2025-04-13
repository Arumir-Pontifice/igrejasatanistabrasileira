document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const logoText = document.querySelector(".logo-text");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // Mostrar 'ISB' ao rolar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.classList.add("navbar-scrolled");
      if (logoText) logoText.textContent = "ISB";
    } else {
      navbar.classList.remove("navbar-scrolled");
      if (logoText) logoText.textContent = "Igreja Satanista Brasileira";
    }
  });

  // Menu hambúrguer
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenuBtn.classList.toggle("open");
    });

    // Fecha o menu ao clicar em um item
    mobileMenu.querySelectorAll("a").forEach((item) =>
      item.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenuBtn.classList.remove("open");
      })
    );
  }
});
