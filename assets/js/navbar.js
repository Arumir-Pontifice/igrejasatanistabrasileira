toggleBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  toggleBtn.classList.toggle("open"); // <- essa classe deve ser 'open'
  navbarMenu.classList.toggle("show");
});












