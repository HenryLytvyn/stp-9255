import cardsMarkup from './reviews-card-markup';
import getReviews from './reviews-get-reviews';
import './reviews-swiper';
import { itemsList } from './reviews-swiper';

const feedbackBtn = document.querySelector('[data-id="reviews__feedback-btn"]');
const submitBtn = document.querySelector('[data-id="review-form__submit-btn"]');
const formBackdrop = document.querySelector('[data-id="review-form"]');
const closeFormBtn = document.querySelector(
  '[data-id="review-form__close-btn"]'
);
const form = document.querySelector('[data-id="review-form__form"]');
const comments = document.querySelector(
  '[data-id="review-form__textarea-comm"]'
);

feedbackBtn.addEventListener('click', openForm);
closeFormBtn.addEventListener('click', closeForm);
form.addEventListener('submit', handleForm);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeForm();
  }
});

formBackdrop.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    closeForm();
  }
});

comments.addEventListener(
  'keydown',
  e => {
    if (e.key === ' ') {
      e.stopPropagation();
    }
  },
  true
);

function openForm() {
  formBackdrop.classList.add('is-open');
  lockScroll();
}

function closeForm() {
  formBackdrop.classList.remove('is-open');
  unlockScroll();
}

function handleForm(event) {
  event.preventDefault();

  const userFeedback = getFormData(event);
  reviewsUpdate(userFeedback);

  closeForm();
}

function getFormData(event) {
  event.preventDefault();

  const formData = new FormData(form);
  console.log(Object.fromEntries(formData.entries()));
  return Object.fromEntries(formData.entries());
}

function reviewsUpdate(newReview) {
  const reviewsArr = getReviews();
  reviewsArr.unshift(newReview);

  localStorage.setItem('reviews', JSON.stringify(reviewsArr));

  // itemsList.insertAdjacentHTML('afterbegin', cardsMarkup([newReview]));
  itemsList.innerHTML = cardsMarkup(getReviews());
}
