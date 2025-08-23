import Swiper from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import cardsMarkup from './reviews-card-markup';
import reviewsArr from './reviews-array';
import { displayBreakpoint } from '../constants';

const itemsList = document.querySelector('[data-id="reviews__cards-list"]');
const prevBtn = document.querySelector('[data-id="reviews__prev-btn"]');
const nextBtn = document.querySelector('[data-id="reviews__next-btn"]');
const container = document.querySelector('[data-id="reviews__swiper"]');
const paginationContainer = document.querySelector(
  '[data-id="reviews__sw-pagin-container"]'
);

itemsList.insertAdjacentHTML('beforeend', cardsMarkup(reviewsArr));
initSwiper();

function initSwiper() {
  const swiper = new Swiper(container, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    speed: 500,
    navigation: {
      prevEl: prevBtn,
      nextEl: nextBtn,
    },
    pagination: {
      el: paginationContainer,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      [displayBreakpoint]: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
    },
    on: {
      reachBeginning() {
        prevBtn.disabled = true;
      },
      fromEdge() {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
      },
      reachEnd() {
        nextBtn.disabled = true;
      },
    },
  });
}
