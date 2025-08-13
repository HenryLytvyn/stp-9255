import cardsArr from './features-images-array';
import mobileFrame from './features-img-frame-mobile-markup';
import desktopFrame from './features-img-frame-desktop-markup';
import isMobile from '../functions/isMobile';

const cardDeck = document.querySelector('[data-id="features__cards-deck"]');

console.log(cardsArr);

// features-card-markup

function createMarkup(cardsArr) {
  return cardsArr
    .map(card => {
      const frameTpl = isMobile() ? mobileFrame : desktopFrame;
      const frame = frameTpl
        .replaceAll('${cardSrc}', card.src)
        .replaceAll('${id}', card.id);
      return `<li class="features__card">
        <div
          class="features__card-img-wrapper"
          data-id="features__card-img-wrapper"
        >
        ${frame}
        </div>
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title">${card.title}</h3>
          <p class="features__card-text">
            ${card.description}
          </p>
        </div>
      </li>`;
    })
    .join('');
}

cardDeck.insertAdjacentHTML('beforeend', createMarkup(cardsArr));

// features-card-animation

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

// Logik-mobile
