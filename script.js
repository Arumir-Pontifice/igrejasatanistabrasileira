function initNavbar() {
  const navbar = document.getElementById("navbar");
  const title = document.getElementById("navbar-title");
  const mobileMenu = document.getElementById("mobile-menu");
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const hamburger = document.getElementById("hamburger");
  const closeIcon = document.getElementById("close");

  // 1) Mobile menu toggle
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      hamburger.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
    });

    // Fecha menu ao clicar em link
    document.querySelectorAll("#mobile-menu a").forEach(a => {
      a.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        hamburger.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      });
    });
  }

  // 2) Scroll effect (desktop only)
  function onScroll() {
    if (window.innerWidth >= 768) {
      if (window.scrollY > 50) {
        navbar.classList.replace("h-20", "h-14");
        title.textContent = "ISB";
      } else {
        navbar.classList.replace("h-14", "h-20");
        title.textContent = "Igreja Satanista Brasileira";
      }
    }
  }
  window.addEventListener("scroll", onScroll);
  onScroll();
}

// Se quiser executar algo ao carregar a página sem usar o fetch:
// document.addEventListener('DOMContentLoaded', initNavbar);
