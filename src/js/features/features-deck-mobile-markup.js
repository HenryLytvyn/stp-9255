import mobileFrame from './features-img-frame-mobile-markup';
import desktopFrame from './features-img-frame-desktop-markup';
// import isMobile from '../functions/isMobile';
import selectImage from '../functions/select-image';
import { sectionName } from './features-constants';

export default function createDeckMobileMarkup(cardsArr) {
  return cardsArr
    .map(
      ({ images, alt, title, description }) =>
        `<li class="features__deck-item framed">
        ${selectImage(images, alt, sectionName)}
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${title}</h3>
          <p class="features__card-text" data-id="features__card-text">
            ${description}
          </p>
        </div>
      </li>`
    )
    .join('');
}
