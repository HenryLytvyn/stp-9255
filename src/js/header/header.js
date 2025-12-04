const headerContainer = document.querySelector('[data-id="header__container"]');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    headerContainer.classList.add('header__scrolled');
  } else {
    headerContainer.classList.remove('header__scrolled');
  }
});
