document.addEventListener("DOMContentLoaded", function () {
  // Toggle menu mobile
  const toggleBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Submenus desktop
  document.querySelectorAll(".submenu").forEach((menu) => {
    const trigger = menu.querySelector("span");
    const submenu = menu.querySelector("ul");

    if (trigger && submenu) {
      // Para desktop: mostra ao passar o mouse
      menu.addEventListener("mouseenter", () => submenu.classList.remove("hidden"));
      menu.addEventListener("mouseleave", () => submenu.classList.add("hidden"));

      // Para mobile: clique no título do submenu expande
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        submenu.classList.toggle("hidden");
      });
    }
  });
});
