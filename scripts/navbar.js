/* document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navbarMenu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}); */



/* document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menuToggle');
  const navbarMenu = document.getElementById('navbarMenu');

  toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
  });
});
*/

/*document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menuToggle');
  const navbarMenu = document.getElementById('navbarMenu');

  toggleBtn.addEventListener('click', () => {
    if (navbarMenu.classList.contains('show')) {
      navbarMenu.style.maxHeight = null;
      navbarMenu.classList.remove('show');
    } else {
      navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
      navbarMenu.classList.add('show');
    }
  });
});*/

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menuToggle');
  const navbarMenu = document.getElementById('navbarMenu');

  toggleBtn.addEventListener('click', () => {
    if (navbarMenu.classList.contains('show')) {
      navbarMenu.style.maxHeight = null;
      navbarMenu.classList.remove('show');
    } else {
      navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
      navbarMenu.classList.add('show');
    }
  });
});