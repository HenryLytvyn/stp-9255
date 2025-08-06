const mobileMenu = document.querySelector('[data-id="mobile-menu"]');
const mobileBtn = document.querySelector('[data-id="mobile-btn"]');
const navIcon = document.querySelector('[data-id="nav-icon"]');

mobileBtn.addEventListener('click', () => {
  navIcon.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
