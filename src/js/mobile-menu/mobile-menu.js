import './mobile-menu-background';
import setAllHight from './mobile-menu-background';

const mobileMenu = document.querySelector('[data-id="mobile-menu"]');
const mobileBtn = document.querySelector('[data-id="mobile-btn"]');
const navIcon = document.querySelector('[data-id="nav-icon"]');
const navLinks = document.querySelectorAll('[data-id="nav__item-link"]');
// const body = document.querySelector('body');
const mobileMenuBG = document.querySelector('[data-id="bg-mobile-menu"]');
const mobileMenuBGOverlay = document.querySelector(
  '[data-id="bg-mobile-menu__overlay"]'
);
const logo = document.querySelector('[data-id="header__logo"]');

let scrollYOpen;
let scrollYClose;
// let heroImgHight;
let isScrollLocked = false;
let isMobileMenuOpen = false;

mobileBtn.addEventListener('click', () => {
  isMobileMenuOpen = !isMobileMenuOpen;
  if (isMobileMenuOpen) {
  }
  mobileMenu.style.backgroundPosition = `center top`;

  navIcon.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  mobileMenuBG.classList.toggle('open');
  mobileMenuBGOverlay.classList.toggle('open');

  // if (isScrollLocked) {
  //   unlockScroll();
  //   isScrollLocked = false;
  // } else {
  //   lockScroll();
  //   isScrollLocked = true;
  // }

  if (isMobileMenuOpen) {
    console.log('tototo');
    setAllHight();
    scrollYOpen = document.documentElement.scrollTop;
    mobileMenuBG.style.transition = 'transform 0s ease';
    mobileMenuBG.style.transform = `translateY(-${scrollYOpen}px)`;
  } else {
    scrollYClose = document.documentElement.scrollTop;
  }
});

navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
logo.addEventListener('click', closeMobileMenu);

function closeMobileMenu(e) {
  // === 1. ЛОВИМ ССЫЛКУ-ЯКОРЬ ===
  const link = e?.currentTarget;
  const href = link?.getAttribute('href');
  let targetY;

  if (href && href.startsWith('#')) {
    const target = document.querySelector(href);

    if (target) {
      targetY = target.getBoundingClientRect().top + window.scrollY;

      console.log('Целевой scrollY:', targetY);
    }
  }

  // === 2. ТВОЙ СУЩЕСТВУЮЩИЙ КОД ===
  isMobileMenuOpen = false;
  navIcon.classList.remove('open');
  mobileMenu.classList.remove('open');
  mobileMenuBG.classList.remove('open');
  mobileMenuBGOverlay.classList.remove('open');
  unlockScroll();
  isScrollLocked = false;

  mobileMenuBG.style.transition =
    'transform var(--anim-time-mobile-menu, 1s) ease';
  mobileMenuBG.style.transform = `translateY(${targetY})`;
}
