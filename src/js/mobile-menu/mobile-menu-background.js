import { IsMobileChange } from '../functions/isMobile';

const hero = document.querySelector('[data-id="hero"]');
const about = document.querySelector('[data-id="about"]');
const howToPlay = document.querySelector('[data-id="how-to-play"]');
const features = document.querySelector('[data-id="features"]');
const heroes = document.querySelector('[data-id="heroes"]');
const atmosphere = document.querySelector('[data-id="atmosphere"]');
const reviews = document.querySelector('[data-id="reviews"]');
const faq = document.querySelector('[data-id="faq"]');
const join = document.querySelector('[data-id="join"]');
const footer = document.querySelector('[data-id="footer"]');

const falseBG = document.querySelector('[data-id="false-bg"]');
const falseBGHero = document.querySelector('[data-id="false-bg__hero"]');
const falseBGAbout = document.querySelector('[data-id="false-bg__about"]');
const falseBGHowToPlay = document.querySelector(
  '[data-id="false-bg__how-to-play"]'
);
const falseBGFeatures = document.querySelector(
  '[data-id="false-bg__features"]'
);
const falseBGHeroes = document.querySelector('[data-id="false-bg__heroes"]');
const falseBGAtmosphere = document.querySelector(
  '[data-id="false-bg__atmosphere"]'
);
const falseBGReviews = document.querySelector('[data-id="false-bg__reviews"]');
const falseBGFAQ = document.querySelector('[data-id="false-bg__faq"]');
const falseBGJoin = document.querySelector('[data-id="false-bg__join"]');
const falseBGFooter = document.querySelector('[data-id="false-bg__footer"]');

function setHeight(originalSection, falseSection) {
  if (!originalSection || !falseSection) return;
  const section = getComputedStyle(originalSection);
  console.log(`${section}: `, section.height);
  return (falseSection.style.height = section.height);
}

// setAllHight();

export default function setAllHight() {
  setHeight(hero, falseBGHero);
  setHeight(about, falseBGAbout);
  setHeight(howToPlay, falseBGHowToPlay);
  setHeight(features, falseBGFeatures);
  setHeight(heroes, falseBGHeroes);
  setHeight(atmosphere, falseBGAtmosphere);
  setHeight(reviews, falseBGReviews);
  setHeight(faq, falseBGFAQ);
  setHeight(join, falseBGJoin);
  setHeight(footer, falseBGFooter);
}

IsMobileChange(setAllHight);
