import cardsArr from './features-images-array';
import createMarkup from './features-card-markup';
import isMobile from '../functions/isMobile';

const cardDeck = document.querySelector('[data-id="features__cards-deck"]');
const openCardsContainer = document.querySelector(
  '[data-id="features__open-cards"]'
);

if (!isMobile()) {
  const openCards = [];
  openCards.push(cardsArr[cardsArr.length - 1]);
  cardsArr.pop();

  openCardsContainer.insertAdjacentHTML('beforeend', createMarkup(openCards));

  const svgs = document.querySelectorAll('[data-id="card-frame-animation"]');

  svgs.forEach(svg => {
    const clipAnim = svg.querySelector('[data-anim="clip"]');
    const borderAnim = svg.querySelector('[data-anim="border"]');

    svg.addEventListener('click', e => {
      e.preventDefault();
      if (clipAnim) clipAnim.beginElement();
      if (borderAnim) borderAnim.beginElement();
    });
  });
}

cardDeck.insertAdjacentHTML('beforeend', createMarkup(cardsArr));

// features-card-animation

// Logik-mobile
