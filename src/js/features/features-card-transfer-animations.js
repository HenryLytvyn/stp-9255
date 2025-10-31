import selectImage from '../functions/select-image';
import createCardMarkup from './features-card-markup';
import {
  cardDeckContainer,
  openCardContainer,
  sectionName,
} from './features-constants';

let isAnimating = false;

export function firstCardTransferAnim() {
  if (isAnimating) return;
  isAnimating = true;
  cardDeckContainer.style.cursor = 'default';

  const lastDeckCard = cardDeckContainer.lastElementChild;
  lastDeckCard.classList.add('transition-anim');

  return lastDeckCard;
}

export function secondCardTransferAnim(lastDeckCard) {
  lastDeckCard.style.right = '-603px';
}

export function thirdCardTransferAnim(openCard, deckCards, lastDeckCard) {
  // Добавляю эту карточку в колоду открытых
  openCard.push(deckCards[deckCards.length - 1]);

  // Удаляю последнюю карточку в массиве колоды
  deckCards.pop();

  // Добавляю карточку в начале колоды
  deckCards.unshift(openCard[0]);

  // Убираю первую карточку в массиве открытых карточек
  openCard.shift();

  openCardContainer.innerHTML = `${createCardMarkup([openCard[0]])}`;

  const cardImg = document.querySelector(
    '[data-id="features__open-card-image"]'
  );
  const cardTitle = document.querySelector('[data-id="features__card-title"]');
  const cardText = document.querySelector('[data-id="features__card-text"]');

  closeCardText(cardTitle, cardText);

  cardTitle.textContent = openCard[0].title;
  cardText.textContent = openCard[0].description;

  cardImg.onload = handleImageLoad;

  // in case if the image will loaded before listener
  if (cardImg.complete) {
    handleImageLoad();
  }

  function handleImageLoad() {
    lastDeckCard.remove();

    cardDeckImageReplace(deckCards[0]);

    requestAnimationFrame(() => {
      triggerCardAnimation();

      openCardText(cardTitle, cardText);

      cardDeckContainer.style.cursor = 'pointer';
    });

    isAnimating = false;
  }
}

function closeCardText(title, text) {
  title.classList.add('close');
  text.classList.add('close');
  title.classList.remove('open');
  text.classList.remove('open');
}

function openCardText(title, text) {
  title.classList.add('open');
  text.classList.add('open');
  title.classList.remove('close');
  text.classList.remove('close');
}

function cardDeckImageReplace({ images, alt }) {
  cardDeckContainer.insertAdjacentHTML(
    'afterbegin',
    `<li class="features__deck-item">
      ${selectImage(images, alt, sectionName)}
    </li>`
  );
}

export function triggerCardAnimation() {
  const clipAnim = document.querySelector('[data-anim="clip"]');
  const borderAnim = document.querySelector('[data-anim="border"]');

  if (clipAnim && borderAnim) {
    clipAnim.beginElement();
    borderAnim.beginElement();
  }
}
