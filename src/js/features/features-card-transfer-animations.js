import createCardMarkup from './features-card-markup';

const firstAnimDuration = 1000;
const secondAnimDuration = 1000;
const thirdAnimDuration = 1000;

export function firstCardTransferAnim(isAnimating, cardDeckContainer) {
  if (isAnimating) return;
  isAnimating = true;
  cardDeckContainer.style.cursor = 'default';

  const lastDeckCard = cardDeckContainer.lastElementChild;
  lastDeckCard.classList.add('transition-anim');

  // setTimeout(secondCardTransferAnim(), 1000);
}

export function secondCardTransferAnim(lastDeckCard) {
  lastDeckCard.style.right = '-603px';
}

export function thirdCardTransferAnim(
  openCard,
  deckCards,
  lastDeckCard,
  openCardContainer
) {
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

  cardImg.onload = function handleImageLoad() {
    lastDeckCard.remove();

    cardDeckImageReplace(deckCards[0]);

    triggerCardAnimation();

    openCardText(cardTitle, cardText);

    cardDeckContainer.style.cursor = 'pointer';
    isAnimating = false;
  };
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

function triggerCardAnimation() {
  const clipAnim = document.querySelector('[data-anim="clip"]');
  const borderAnim = document.querySelector('[data-anim="border"]');

  if (clipAnim && borderAnim) {
    clipAnim.beginElement();
    borderAnim.beginElement();
  }
}
