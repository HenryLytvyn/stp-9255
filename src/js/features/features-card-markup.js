import mobileFrame from './features-img-frame-mobile-markup';
import desktopFrame from './features-img-frame-desktop-markup';
import isMobile from '../functions/isMobile';
import getImage from '../functions/getImage';

export default function createCardMarkup(cardsArr) {
  return cardsArr
    .map(({ title, images, id, description }) => {
      const frameTpl = isMobile ? mobileFrame : desktopFrame;
      const frame = frameTpl
        .replaceAll('${cardSrc}', getImage(images))
        .replaceAll('${id}', id);
      return `<div class="features__card">

        ${frame}
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${title}</h3>
          <p class="features__card-text" data-id="features__card-text">
            ${description}
          </p>
        </div>
      </div>`;
    })
    .join('');
}
