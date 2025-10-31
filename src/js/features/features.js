import { getIsMobile, IsMobileChange } from '../functions/isMobile';
import createDeckMarkup from './features-deck-markup';
import createCardMarkup from './features-card-markup';
import cards from './features-images-array';
import selectImage from '../functions/select-image';
import createDeckMobileMarkup from './features-deck-mobile-markup';

export const sectionName = 'features';
const firstAnimDuration = 1000;
const secondAnimDuration = 1000;
const thirdAnimDuration = 1000;

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

  // DESKTOP
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
      // const pictureImg = lastDeckCard.querySelector('.features__card-img');

      lastDeckCard.classList.add('transition-anim');
      setTimeout(() => {
        lastDeckCard.style.right = '-603px';
      }, 1000);

      setTimeout(() => {
        openCard.push(deckCards[deckCards.length - 1]);
        deckCards.pop();
        deckCards.unshift(openCard[0]);
        openCard.shift();

        openCardContainer.innerHTML = `${createCardMarkup([openCard[0]])}`;

        const cardImg = document.querySelector(
          '[data-id="features__open-card-image"]'
        );

        // cardImg = pictureImg;
        const cardTitle = document.querySelector(
          '[data-id="features__card-title"]'
        );
        const cardText = document.querySelector(
          '[data-id="features__card-text"]'
        );

        closeCardText(cardTitle, cardText);

        cardTitle.textContent = openCard[0].title;
        cardText.textContent = openCard[0].description;

        cardImg.onload = function handleImageLoad() {
          lastDeckCard.remove();

          cardDeckImageReplace(deckCards[0]);

          triggerCardAnimation();

          openCardText(cardTitle, cardText);

          cardDeckContainer.style.cursor = 'pointer';
          isAnimating = false;
        };

        // lastDeckCard.remove();

        // cardDeckImageReplace(deckCards[0]);

        // triggerCardAnimation();

        // openCardText(cardTitle, cardText);

        // cardDeckContainer.style.cursor = 'pointer';
        // isAnimating = false;
      }, 2000);
    };

    cardDeckContainer.addEventListener('click', handleCardRef);
  } else {
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

function cardDeckImageReplace({ images, alt }) {
  cardDeckContainer.insertAdjacentHTML(
    'afterbegin',
    `<li class="features__deck-item">
      ${selectImage(images, alt, sectionName)}
    </li>`
  );
}
