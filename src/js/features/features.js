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
    cardDeckContainer.style.cursor = 'default';

    const lastDeckCard = cardDeckContainer.lastElementChild;

    lastDeckCard.classList.add('transition-anim');
    // lastDeckCard.addEventListener('transitionend', )
    setTimeout(() => {
      lastDeckCard.style.right = '-603px';
      // lastDeckCard.style.transform = 'translateX(-603px)';
    }, 1000);

    setTimeout(() => {
      // resetAnimation();
      openCards.push(deckCards[deckCards.length - 1]);
      deckCards.pop();
      deckCards.unshift(openCards[0]);
      openCards.shift();

      const newCardTitle = document.querySelector(
        '[data-id="features__card-title"]'
      );
      const newCardText = document.querySelector(
        '[data-id="features__card-text"]'
      );
      const newCardImg = document.querySelector(
        '[data-id="features__card-image"]'
      );

      closeCardText(newCardTitle, newCardText);

      openCardReplace(openCards[0], newCardTitle, newCardText, newCardImg);

      cardDeckImageReplace(deckCards[0], lastDeckCard);

      triggerCardAnimation();

      setTimeout(() => {
        openCardText(newCardTitle, newCardText);
      }, 100);

      cardDeckContainer.style.cursor = 'pointer';
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
  const clipAnim = document.querySelector('[data-anim="clip"]');
  const borderAnim = document.querySelector('[data-anim="border"]');

  if (clipAnim && borderAnim) {
    clipAnim.beginElement();
    borderAnim.beginElement();
  }
}

function openCardReplace(
  { title, description, src },
  newCardTitle,
  newCardText,
  newCardImg
) {
  newCardTitle.textContent = title;
  newCardText.textContent = description;
  newCardImg.setAttribute('href', src);
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

function cardDeckImageReplace({ src }, lastDeckCard) {
  setTimeout(() => {
    lastDeckCard.remove();
  }, 50);
  cardDeckContainer.insertAdjacentHTML(
    'afterbegin',
    `<li class="features__deck-item">
            <img class="features__deck-img" src="${src}" />
        </li>`
  );
}
