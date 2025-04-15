document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navbarMenu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});