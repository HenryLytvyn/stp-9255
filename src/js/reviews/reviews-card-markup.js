import sprite from './img/sprite.svg';

export default function cardsMarkup(arr) {
  return arr
    .map(
      ({ name, comments, grade }) =>
        `
        <li class="reviews__card swiper-slide">
          <div class="reviews__card-content-wrapper">
            <div class="reviews__card-title-wrapper">
              <h3 class="reviews__card-title">${name}</h3>
              <svg class="reviews__card-title-frame" aria-hidden="true">
                <use href="${sprite}#name-frame"></use>
              </svg>
            </div>
            <div class="reviews__card-text-wrapper">
              <p class="reviews__card-text">${comments}</p>
            </div>
          </div>
          <div class="reviews__rating">${gradeMarkup(Number(grade))}</div>
        </li>
      `
    )
    .join('');
}

function gradeMarkup(grade) {
  if (grade < 1 || grade > 5) return;
  let markup = '';
  for (let i = grade; i > 0; i -= 1) {
    markup += `<svg
              stroke-linejoin="round"
              stroke-linecap="round"
              viewBox="0 0 24 24"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use
                href="#rating__star-icon"
                fill="gold"
                stroke-linejoin="round"
                stroke-linecap="round"
                mask="url(#rating__star-icon-mask)"
              />
            </svg>`;
  }

  for (let i = 5 - grade; i > 0; i -= 1) {
    markup += `<svg
              stroke-linejoin="round"
              stroke-linecap="round"
              viewBox="0 0 24 24"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use
                href="#rating__star-icon"
                fill="none"
                stroke="gold"
                stroke-width="4"
                stroke-linejoin="round"
                stroke-linecap="round"
                mask="url(#rating__star-icon-mask)"
              />
            </svg>`;
  }

  return markup;
}
