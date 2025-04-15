// Injetar footer
document.addEventListener("DOMContentLoaded", () => {
  fetch("/footer.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("footer-container").innerHTML = html;
    });
});