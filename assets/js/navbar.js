document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menuToggle");
  const navbarMenu = document.getElementById("navbarMenu");

  document.addEventListener("click", function (event) {
    if (
      navbarMenu.classList.contains("show") &&
      !event.target.closest(".navbar") &&
      !event.target.closest("#menuToggle")
    ) {
      navbarMenu.classList.remove("show");
      toggleBtn.classList.remove("active");
    }
  });

  window.addEventListener("scroll", function () {
    navbarMenu.classList.remove("show");
    toggleBtn.classList.remove("active");
  });

  if (toggleBtn && navbarMenu) {
    toggleBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleBtn.classList.toggle("active");
      navbarMenu.classList.toggle("show");
    });
  }
});