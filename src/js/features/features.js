import { getIsMobile, IsMobileChange } from '../functions/isMobile';
import createDeckMarkup from './features-deck-markup';
import createCardMarkup from './features-card-markup';
import cards from './features-images-array';
import selectImage from '../functions/select-image';
import getImage from '../functions/getImage';
import createDeckMobileMarkup from './features-deck-mobile-markup';
// import selectImage from '../functions/select-image';

export const sectionName = 'features';
const cardDeckContainer = document.querySelector(
  '[data-id="features__cards-deck"]'
);
const openCardContainer = document.querySelector(
  '[data-id="features__open-cards"]'
);

let isAnimating = false;
let handleCardRef = null;

renderCards();

IsMobileChange(() => renderCards());

function renderCards() {
  if (handleCardRef) {
    cardDeckContainer.removeEventListener('click', handleCardRef);
    handleCardRef = null;
  }
  if (!getIsMobile()) {
    let deckCards = [...cards];
    const openCard = [];
    openCard.push(deckCards[deckCards.length - 1]);
    deckCards.pop();

    openCardContainer.innerHTML = `${createCardMarkup(openCard)}`;

    triggerCardAnimation();

    cardDeckContainer.innerHTML = createDeckMarkup(deckCards);

    handleCardRef = function handleCard() {
      if (isAnimating) return;
      isAnimating = true;
      cardDeckContainer.style.cursor = 'default';

      const lastDeckCard = cardDeckContainer.lastElementChild;

      lastDeckCard.classList.add('transition-anim');
      setTimeout(() => {
        lastDeckCard.style.right = '-603px';
      }, 1000);

      setTimeout(() => {
        openCard.push(deckCards[deckCards.length - 1]);
        deckCards.pop();
        deckCards.unshift(openCard[0]);
        openCard.shift();

        const newCardTitle = document.querySelector(
          '[data-id="features__card-title"]'
        );
        const newCardText = document.querySelector(
          '[data-id="features__card-text"]'
        );
        const newCardImg = document.querySelector(
          '[data-id="features__open-card-image"]'
        );

        closeCardText(newCardTitle, newCardText);

        openCardReplace(openCard[0], newCardTitle, newCardText, newCardImg);

        cardDeckImageReplace(deckCards[0], lastDeckCard);

        triggerCardAnimation();

        setTimeout(() => {
          openCardText(newCardTitle, newCardText);
        }, 100);

        cardDeckContainer.style.cursor = 'pointer';
        isAnimating = false;
      }, 2000);
    };

    cardDeckContainer.addEventListener('click', handleCardRef);
  } else {
    // cardDeckContainer.removeEventListener('click', handleCard);
    cardDeckContainer.style.cursor = 'default';
    cardDeckContainer.innerHTML = createDeckMobileMarkup(cards);
  }
}

function triggerCardAnimation() {
  const clipAnim = document.querySelector('[data-anim="clip"]');
  const borderAnim = document.querySelector('[data-anim="border"]');

  if (clipAnim && borderAnim) {
    clipAnim.beginElement();
    borderAnim.beginElement();
  }
}

function openCardReplace(
  { title, description, images },
  newCardTitle,
  newCardText,
  newCardImg
) {
  newCardTitle.textContent = title;
  newCardText.textContent = description;
  newCardImg.setAttribute('href', getImage(images));
}

function openCardText(title, text) {
  title.classList.add('open');
  text.classList.add('open');
  title.classList.remove('close');
  text.classList.remove('close');
}

function closeCardText(title, text) {
  title.classList.add('close');
  text.classList.add('close');
  title.classList.remove('open');
  text.classList.remove('open');
}

function cardDeckImageReplace({ images, alt }, lastDeckCard) {
  setTimeout(() => {
    lastDeckCard.remove();
  }, 50);
  cardDeckContainer.insertAdjacentHTML(
    'afterbegin',
    `<li class="features__deck-item">
      ${selectImage(images, alt, sectionName)}
    </li>`
  );
}
