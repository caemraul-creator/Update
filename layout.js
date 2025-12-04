// ========= SCRIPT LAYOUT GLOBAL =========
document.addEventListener('DOMContentLoaded', function () {
  const sidebar   = document.querySelector('.sidebar');
  const main      = document.querySelector('.main-content');
  const toggleBtn = document.getElementById('btnToggleSidebar');

  // Toggle sidebar (HP / tablet)
  if (sidebar && toggleBtn) {
    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      sidebar.classList.toggle('sidebar-open');
    });
  }

  // Klik di area konten menutup sidebar (di layar kecil)
  if (sidebar && main) {
    main.addEventListener('click', function () {
      if (window.innerWidth < 768) {
        sidebar.classList.remove('sidebar-open');
      }
    });
  }

  // Tandai menu aktif berdasarkan nama file
  const links   = document.querySelectorAll('.sidebar .nav-link[href]');
  const current = location.pathname.split('/').pop() || 'dashboard.html';

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const file = href.split('/').pop();
    if (file === current) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
