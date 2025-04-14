function initNavbar() {
  const navbar = document.getElementById("navbar");
  const logoText = document.getElementById("logo-text");
  const menu = document.getElementById("menu");
  const menuIcon = document.getElementById("menu-icon");
  const content = document.querySelector("main") || document.body;

  let lastScroll = 0;

  // Alternar o menu mobile
  if (menuIcon && menu) {
    menuIcon.addEventListener("click", () => {
      const isActive = menu.classList.toggle("active");
      menu.classList.toggle("hidden", !isActive);
      menuIcon.innerHTML = isActive ? "&#10005;" : "&#9776;";
      content.classList.toggle("blur-content", isActive);
    });
  }

  // Comportamento ao rolar
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    if (window.innerWidth > 768) {
      // Desktop: encolher e mudar nome
      if (scrollTop > 50) {
        navbar.classList.add("shrink");
        logoText.textContent = "ISB";
      } else {
        navbar.classList.remove("shrink");
        logoText.textContent = "Igreja Satanista Brasileira";
      }
    } else {
      // Mobile: esconder ao rolar para baixo, mostrar ao rolar para cima
      if (scrollTop > lastScroll && scrollTop > 60) {
        navbar.classList.add("shrink", "hide");
      } else {
        navbar.classList.remove("hide");
      }

      // Fecha o menu ao rolar
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        menu.classList.add("hidden");
        menuIcon.innerHTML = "&#9776;";
        content.classList.remove("blur-content");
      }
    }

    lastScroll = scrollTop;
  });
}

// Inicializar
document.addEventListener("DOMContentLoaded", initNavbar);