import mobileFrame from './features-img-frame-mobile-markup';
import desktopFrame from './features-img-frame-desktop-markup';
// import isMobile from '../functions/isMobile';
import selectImage from '../functions/select-image';
import { sectionName } from './features-constants';

export default function createDeckMarkup(cardsArr) {
  return cardsArr
    .map(
      ({ images, alt }) => `
        <li class="features__deck-item">
            ${selectImage(images, alt, sectionName)}
        </li>`
    )
    .join('');
}
