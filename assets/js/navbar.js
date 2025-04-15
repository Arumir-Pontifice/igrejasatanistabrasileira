

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menuToggle');
  const navbarMenu = document.getElementById('navbarMenu');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('activate');
    navbarMenu.classList.toggle('show');
  });
});





