const archiveToggle = document.querySelector('.archive-toggle');
const archiveMenu = document.getElementById('archiveMenu');

if (archiveToggle && archiveMenu) {
  archiveToggle.addEventListener('click', () => {
    const isOpen = archiveMenu.classList.toggle('show');
    archiveToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!archiveToggle.contains(event.target) && !archiveMenu.contains(event.target)) {
      archiveMenu.classList.remove('show');
      archiveToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
