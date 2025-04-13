function initNavbar() {
  const navbar = document.getElementById("navbar");
  const title = document.getElementById("navbar-title");
  const mobileMenu = document.getElementById("mobile-menu");
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const hamburger = document.getElementById("hamburger");
  const closeIcon = document.getElementById("close");

  // Mobile: abre e fecha menu
  if (toggleBtn && mobileMenu && hamburger && closeIcon) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.toggle("hidden");
      hamburger.classList.toggle("hidden", !isHidden);
      closeIcon.classList.toggle("hidden", isHidden);
    });

    document.querySelectorAll("#mobile-menu a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        hamburger.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      });
    });
  }

  // Efeito scroll no desktop
  function handleScroll() {
    if (window.innerWidth >= 768) {
      if (window.scrollY > 50) {
        navbar.classList.remove("h-20");
        navbar.classList.add("h-14");
        title.textContent = "ISB";
      } else {
        navbar.classList.remove("h-14");
        navbar.classList.add("h-20");
        title.textContent = "Igreja Satanista Brasileira";
      }
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Inicializa ao carregar
}
