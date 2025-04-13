function initNavbar() {
  const navbar = document.getElementById("navbar");
  const title = document.getElementById("navbar-title");
  const mobileMenu = document.getElementById("mobile-menu");
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const hamburger = document.getElementById("hamburger");
  const closeIcon = document.getElementById("close");

  if (toggleBtn && mobileMenu && hamburger && closeIcon) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.toggle("hidden");
      hamburger.classList.toggle("hidden", !isHidden);
      closeIcon.classList.toggle("hidden", isHidden);
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        hamburger.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      });
    });
  }

  function handleScroll() {
    if (window.innerWidth >= 768) {
      if (window.scrollY > 50) {
        navbar.classList.replace("h-20", "h-14");
        if (title) title.textContent = "ISB";
      } else {
        navbar.classList.replace("h-14", "h-20");
        if (title) title.textContent = "Igreja Satanista Brasileira";
      }
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Executa ao carregar
}

document.addEventListener("DOMContentLoaded", initNavbar);
