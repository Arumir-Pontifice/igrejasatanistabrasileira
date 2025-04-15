document.addEventListener("DOMContentLoaded", () => {
  // Navbar
  fetch("partials/navbar.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("navbar-container").innerHTML = html;
      if (typeof initNavbar === "function") initNavbar();
    });
  
  // Footer
  fetch("partials/footer.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("footer-container").innerHTML = html;
    });
});

// Carrossel
fetch("partials/carousel.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("carousel-container").innerHTML = html;
  });
  
  // Seções Introdutórias
fetch("partials/intro-sections.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("intro-container").innerHTML = html;
  });