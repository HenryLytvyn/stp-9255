import isMobile from '../functions/isMobile';
import createDeckMarkup from './features-deck-markup';
import createCardMarkup from './features-card-markup';
import cards from './features-images-array';

const cardDeckContainer = document.querySelector(
  '[data-id="features__cards-deck"]'
);
const openCardsContainer = document.querySelector(
  '[data-id="features__open-cards"]'
);

let deckCards = [...cards];
let isAnimating = false;

if (!isMobile()) {
  const openCards = [];
  openCards.push(deckCards[deckCards.length - 1]);
  deckCards.pop();

  openCardsContainer.innerHTML = `${createCardMarkup(openCards)}`;

  triggerCardAnimation();

  cardDeckContainer.insertAdjacentHTML(
    'beforeend',
    createDeckMarkup(deckCards)
  );

  cardDeckContainer.addEventListener('click', handleCard);
  function handleCard() {
    if (isAnimating) return;
    isAnimating = true;

    let lastDeckCard = cardDeckContainer.lastElementChild;
    lastDeckCard.classList.add('transition-anim');
    // lastDeckCard.addEventListener('transitionend', )
    setTimeout(() => {
      lastDeckCard.style.right = '-603px';
    }, 1000);

    setTimeout(() => {
      openCards.push(deckCards[deckCards.length - 1]);
      deckCards.pop();
      deckCards.unshift(openCards[0]);
      openCards.shift();

      openCardReplace(openCards);

      triggerCardAnimation();
      cardDeckImageReplace(deckCards[0], lastDeckCard);

      isAnimating = false;
    }, 2000);
  }
} else {
  cardDeckContainer.insertAdjacentHTML(
    'beforeend',
    createCardMarkup(deckCards)
  );
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

function openCardReplace(openCards) {
  const img = document.querySelector('[data-id="features__card-image"]');
  const cardTitle = document.querySelector('.features__card-title');
  const cardText = document.querySelector('.features__card-text');
  cardTitle.textContent = openCards[0].title;
  cardText.textContent = openCards[0].description;
  img.setAttribute('href', openCards[0].src);
}

function cardDeckImageReplace({ src }, lastDeckCard) {
  lastDeckCard.remove();
  cardDeckContainer.insertAdjacentHTML(
    'afterbegin',
    `<li class="features__deck-item">
            <img class="features__deck-img" src="${src}" />
        </li>`
  );
}
