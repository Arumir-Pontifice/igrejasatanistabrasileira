<script>
  // Abrir/fechar menu mobile
  function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  }

  // Abrir/fechar submenus no desktop
  function toggleSubMenu(id) {
    const menu = document.getElementById(id);
    // Fecha outros abertos (opcional)
    document.querySelectorAll('nav ul[id$="-menu"]').forEach(ul => {
      if (ul.id !== id) ul.classList.add('hidden');
    });
    menu.classList.toggle('hidden');
  }

  // Fecha os submenus se clicar fora
  document.addEventListener('click', function (e) {
    const isMenu = e.target.closest('nav');
    if (!isMenu) {
      document.querySelectorAll('nav ul[id$="-menu"]').forEach(ul => ul.classList.add('hidden'));
    }
  });
</script>
