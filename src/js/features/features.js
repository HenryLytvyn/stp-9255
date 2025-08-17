import isMobile from '../functions/isMobile';
import createDeckMarkup from './features-deck-markup';
import createCardMarkup from './features-card-markup';
import deckCards from './features-images-array';

const cardDeck = document.querySelector('[data-id="features__cards-deck"]');
const openCardsContainer = document.querySelector(
  '[data-id="features__open-cards"]'
);

if (!isMobile()) {
  const openCards = [];
  openCards.push(deckCards[deckCards.length - 1]);
  deckCards.pop();

  // desktopFrame.replace('${cardSrc}', openCards[0].src);

  // openCardsContainer.insertAdjacentHTML(
  //   'beforeend',
  //   createCardMarkup(openCards)
  // );

  openCardsContainer.innerHTML = `${createCardMarkup(openCards)}`;

  const svgs = document.querySelectorAll('[data-id="card-frame-animation"]');

  //!======================

  // const svg = document.querySelector('[data-id="card-frame-animation"]');
  // const clipAnim = svg.querySelector('[data-anim="clip"]');
  // const borderAnim = svg.querySelector('[data-anim="border"]');

  // setTimeout(() => {
  //   if (clipAnim) clipAnim.beginElement();
  //   if (borderAnim) borderAnim.beginElement();
  // }, 5000);

  // svgs.forEach(svg => {
  //   const clipAnim = svg.querySelector('[data-anim="clip"]');
  //   const borderAnim = svg.querySelector('[data-anim="border"]');

  //   svg.addEventListener('click', e => {
  //     e.preventDefault();
  //     if (clipAnim) clipAnim.beginElement();
  //     if (borderAnim) borderAnim.beginElement();
  //   });
  // });

  //!======================

  triggerCardAnimation();

  cardDeck.insertAdjacentHTML('beforeend', createDeckMarkup(deckCards));

  cardDeck.addEventListener('click', handleCard);
  function handleCard() {
    let card = cardDeck.lastElementChild;
    card.classList.add('transition-anim');
    setTimeout(() => {
      card.style.right = '-603px';
    }, 1000);

    setTimeout(() => {
      openCards.push(deckCards[deckCards.length - 1]);
      deckCards.pop();

      deckCards.unshift(openCards[0]);
      openCards.shift();

      cardDeck.innerHTML = createDeckMarkup(deckCards);
      //! cardDeck.insertAdjacentHTML('afterbegin');
      openCardsContainer.innerHTML = createCardMarkup(openCards);

      triggerCardAnimation();
    }, 2000);
  }
} else {
  cardDeck.insertAdjacentHTML('beforeend', createCardMarkup(deckCards));
}

function triggerCardAnimation() {
  const svg = document.querySelector('[data-id="card-frame-animation"]');
  const clipAnim = svg.querySelector('[data-anim="clip"]');
  const borderAnim = svg.querySelector('[data-anim="border"]');

  if (clipAnim && borderAnim) {
    clipAnim.beginElement();
    borderAnim.beginElement();
  }
}

// cardDeck.insertAdjacentHTML('beforeend', createMarkup(deckCards));
