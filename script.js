const archiveButton = document.getElementById('archiveButton');
const archiveMenu = document.getElementById('archiveMenu');

archiveButton.addEventListener('click', () => {
  archiveMenu.classList.toggle('open');
});
