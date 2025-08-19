import selectImage from '../functions/select-image';
import { sectionName } from './heroes';

export default function cardsMarkup(cardsArr) {
  return cardsArr
    .map(
      ({ title, description, images, alt }) =>
        `<li class="heroes__card swiper-slide">
      <h3 class="heroes__card-title">${title}</h3>
      <p class="heroes__card-text">${description}</p>
      ${selectImage(images, alt, sectionName)}
    </li>
    `
    )
    .join('');
}
