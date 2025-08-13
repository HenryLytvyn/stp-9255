import mobileFrame from './features-img-frame-mobile-markup';
import desktopFrame from './features-img-frame-desktop-markup';
import isMobile from '../functions/isMobile';

export default function createMarkup(cardsArr) {
  return cardsArr
    .map(card => {
      const frameTpl = isMobile() ? mobileFrame : desktopFrame;
      const frame = frameTpl
        .replaceAll('${cardSrc}', card.src)
        .replaceAll('${id}', card.id);
      return `<li class="features__card">

        ${frame}
        </div>
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title">${card.title}</h3>
          <div class="wrapper"><p class="features__card-text">
            ${card.description}
          </p><div/>
        </div>
      </li>`;
    })
    .join('');
}
