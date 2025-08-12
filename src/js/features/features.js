import cardsArr from './features-images-array';
import mobileFrame from './features-img-frame-mobile-markup';
import desktopFrame from './features-img-frame-desktop-markup';
import isMobile from '../functions/isMobile';

const container = document.querySelector('[data-id="features__cards-list"]');

console.log(cardsArr);

function createMarkup(cardsArr) {
  return cardsArr
    .map(
      card => `
    <li class="features__card">
        <div
          class="features__card-img-wrapper"
          data-id="features__card-img-wrapper"
        >
        ${
          isMobile()
            ? mobileFrame.replace('${cardSrc}', card.src)
            : desktopFrame.replace('${cardSrc}', card.src)
        }
        
        </div>
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title">${card.title}</h3>
          <p class="features__card-text">
            ${card.description}
          </p>
        </div>
      </li>`
    )
    .join('');
}

container.insertAdjacentHTML('beforeend', createMarkup(cardsArr));

const animations = document.querySelectorAll(
  '[data-id="card-frame-animation"]'
);

animations.forEach(svg => {
  const clipAnim = svg.querySelector('#clipAnim');
  const borderAnim = svg.querySelector('#borderAnim');

  if (clipAnim && borderAnim) {
    svg.addEventListener('click', () => {
      clipAnim.beginElement();
      borderAnim.beginElement();
    });
  }
});
