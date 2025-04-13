document.addEventListener('DOMContentLoaded', function() {
  // Elementos da Navbar
  const navbar = document.getElementById("navbar");
  const title = document.getElementById("navbar-title");
  const mobileMenu = document.getElementById("mobile-menu");
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const hamburger = document.getElementById("hamburger");
  const closeIcon = document.getElementById("close");

  // 1. Menu Mobile (Hamburger/X)
  if (toggleBtn && mobileMenu && hamburger && closeIcon) {
    toggleBtn.addEventListener("click", () => {
      const isMenuHidden = mobileMenu.classList.toggle("hidden");
      hamburger.classList.toggle("hidden", !isMenuHidden);
      closeIcon.classList.toggle("hidden", isMenuHidden);
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll("#mobile-menu a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        hamburger.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      });
    });
  }

  // 2. Efeito de Scroll no Desktop
  function handleScroll() {
    if (window.innerWidth >= 768) {
      if (window.scrollY > 50) {
        navbar.classList.add("h-14");
        navbar.classList.remove("h-20");
        if (title) title.textContent = "ISB";
      } else {
        navbar.classList.remove("h-14");
        navbar.classList.add("h-20");
        if (title) title.textContent = "Igreja Satanista Brasileira";
      }
    }
  }

  window.addEventListener("scroll", handleScroll);
  
  // Verificar estado inicial
  handleScroll();

  // 3. Submenus (se existirem)
  document.querySelectorAll(".submenu").forEach((menu) => {
    const trigger = menu.querySelector("span");
    const submenu = menu.querySelector("ul");

    if (trigger && submenu) {
      // Desktop: mouse hover
      menu.addEventListener("mouseenter", () => submenu.classList.remove("hidden"));
      menu.addEventListener("mouseleave", () => submenu.classList.add("hidden"));

      // Mobile: clique
      trigger.addEventListener("click", (e) => {
        if (window.innerWidth < 768) {
          e.preventDefault();
          submenu.classList.toggle("hidden");
        }
      });
    }
  });
});
