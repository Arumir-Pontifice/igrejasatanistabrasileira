

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menuToggle');
  const navbarMenu = document.getElementById('navbarMenu');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('open');
    navbarMenu.classList.toggle('show');
  });
});





