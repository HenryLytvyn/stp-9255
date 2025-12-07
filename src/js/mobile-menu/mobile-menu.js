const mobileMenu = document.querySelector('[data-id="mobile-menu"]');
const mobileBtn = document.querySelector('[data-id="mobile-btn"]');
const navIcon = document.querySelector('[data-id="nav-icon"]');
const navLinks = document.querySelectorAll('[data-id="nav__item-link"]');

const logo = document.querySelector('[data-id="header__logo"]');

let isScrollLocked = false;

mobileBtn.addEventListener('click', () => {
  navIcon.classList.toggle('open');
  mobileMenu.classList.toggle('open');

  if (isScrollLocked) {
    unlockScroll();
    isScrollLocked = false;
  } else {
    lockScroll();
    isScrollLocked = true;
  }
});

navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
logo.addEventListener('click', closeMobileMenu);

function closeMobileMenu() {
  navIcon.classList.remove('open');
  mobileMenu.classList.remove('open');
  unlockScroll();
  isScrollLocked = false;
}
