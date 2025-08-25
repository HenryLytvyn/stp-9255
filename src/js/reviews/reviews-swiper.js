import Swiper from 'swiper';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';

import cardsMarkup from './reviews-card-markup';
import reviewsArr from './reviews-array';
import { displayBreakpoint } from '../constants';
// import actualReviews from './reviews-storage';
import checkStorage from './reviews-storage';
// import './reviews-storage';

const itemsList = document.querySelector('[data-id="reviews__cards-list"]');
const prevBtn = document.querySelector('[data-id="reviews__prev-btn"]');
const nextBtn = document.querySelector('[data-id="reviews__next-btn"]');
const container = document.querySelector('[data-id="reviews__swiper"]');
// const scrollbarEl = document.querySelector('[data-id="reviews__sw-scrollbar"]');

itemsList.insertAdjacentHTML('beforeend', cardsMarkup(checkStorage()));
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

    // scrollbar: {
    //   el: scrollbarEl,
    //   draggable: true,
    // },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      [displayBreakpoint]: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 21,
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
