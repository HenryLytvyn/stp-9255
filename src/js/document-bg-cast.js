const hero = document.querySelector('#hero');
const about = document.querySelector('#about');
const howToPlay = document.querySelector('#how-to-play');
const features = document.querySelector('#features');
const heroes = document.querySelector('#heroes');
const atmosphere = document.querySelector('#atmosphere');
const reviews = document.querySelector('#reviews');
const faq = document.querySelector('#faq');
const join = document.querySelector('#join');
const footer = document.querySelector('#footer');

const sectionsListArray = [
  hero,
  about,
  howToPlay,
  features,
  heroes,
  atmosphere,
  reviews,
  faq,
  join,
  footer,
];

const castMarkup = sectionsListArray
  .map(
    sectionName =>
      `<div id="${sectionName.id}-cast" class="${sectionName.id}-cast" style="height: ${sectionName.offsetHeight}px;"></div>`
  )
  .join('');

console.log(castMarkup);
