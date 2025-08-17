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
      // lastDeckCard.style.transform = 'translateX(-603px)';
    }, 1000);

    setTimeout(() => {
      resetAnimation();
      openCards.push(deckCards[deckCards.length - 1]);
      deckCards.pop();
      deckCards.unshift(openCards[0]);
      openCards.shift();

      openCardReplace(openCards[0]);

      cardDeckImageReplace(deckCards[0], lastDeckCard);
      triggerCardAnimation();
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

function openCardReplace({ title, description, src }) {
  const img = document.querySelector('[data-id="features__card-image"]');
  const cardTitle = document.querySelector('.features__card-title');
  const cardText = document.querySelector('.features__card-text');

  cardTitle.textContent = title;
  cardText.textContent = description;
  img.setAttribute('href', src);
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

function resetAnimation() {
  const svg = document.querySelector('[data-id="card-frame-animation"]');
  if (!svg) return;

  // Ищем оба аниматора по data-атрибутам
  const anims = svg.querySelectorAll(
    '[data-anim="clip"], [data-anim="border"]'
  );
  anims.forEach(anim => {
    const poly = anim.parentElement; // <polygon>, в котором висит этот <animate>
    if (!poly) return;

    // Базовые (стартовые) точки лежат в самом атрибуте 'points' полигона —
    // SMIL его не меняет, он меняет только «анимированное» значение.
    const startPoints = poly.getAttribute('points');

    const clone = poly.cloneNode(true); // копируем полигон вместе с <animate>
    clone.setAttribute('points', startPoints); // явно проставим базу (на всякий)
    poly.replaceWith(clone); // замена = мгновенный сброс
  });

  // Сброс локального времени SMIL, чтобы точно начать «с нуля»
  svg.setCurrentTime?.(0);
}
