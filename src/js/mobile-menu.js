const mobileMenu = document.querySelector('[data-id="mobile-menu"]');
const mobileBtn = document.querySelector('[data-id="mobile-btn"]');
const navIcon = document.querySelector('[data-id="nav-icon"]');
const navLinks = document.querySelectorAll('[data-id="nav__item-link"]');
const body = document.querySelector('body');
const mobileMenuBG = document.querySelector(
  '[data-id="mobile-menu__background"]'
);
const logo = document.querySelector('[data-id="header__logo"]');

let scrollY;
let heroImgHight;
let isScrollLocked = false;

mobileBtn.addEventListener('click', () => {
  heroImgHight = 794;
  mobileMenu.style.backgroundPosition = `center top`;

  navIcon.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  mobileMenuBG.classList.toggle('open');

  if (isScrollLocked) {
    unlockScroll();
    isScrollLocked = false;
  } else {
    lockScroll();
    isScrollLocked = true;
  }

  scrollY = document.documentElement.scrollTop;
  heroImgCheck(Number(scrollY));
});

navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
logo.addEventListener('click', closeMobileMenu);

function closeMobileMenu() {
  navIcon.classList.remove('open');
  mobileMenu.classList.remove('open');
  mobileMenuBG.classList.remove('open');
  unlockScroll();
  isScrollLocked = false;
}

function heroImgCheck(scrollY) {
  mobileMenu.style.backgroundPosition = `center -${scrollY}px`;
}
