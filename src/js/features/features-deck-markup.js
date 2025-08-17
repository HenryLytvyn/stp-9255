import mobileFrame from './features-img-frame-mobile-markup';
import desktopFrame from './features-img-frame-desktop-markup';
import isMobile from '../functions/isMobile';

export default function createDeckMarkup(cardsArr) {
  return cardsArr
    .map(
      card => `
        <li class="features__deck-item">
            <img class="features__deck-img" src="${card.src}" />
        </li>`
    )
    .join('');
}
