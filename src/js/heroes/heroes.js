import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import cardsMarkup from './heroes-cards-markup';
import heroesCards from './heroes-cards-array';
import { displayBreakpoint } from '../constants';

export const sectionName = 'heroes';
const container = document.querySelector('[data-id="heroes__cards-list"]');
const prevBtn = document.querySelector('[data-id="heroes__prev-btn"]');
const nextBtn = document.querySelector('[data-id="heroes__next-btn"]');
const swiperContainer = document.querySelector('[data-id="heroes__swiper"]');
const paginationContainer = document.querySelector(
  '[data-id="heroes__sw-pagin-container"]'
);
// const paginationItem = document.querySelector(
//   '[data-id="heroes__sw-pagin-item"]'
// );

container.insertAdjacentHTML('beforeend', cardsMarkup(heroesCards));
initSwiper();

function initSwiper() {
  const swiper = new Swiper(swiperContainer, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 500,
    navigation: {
      prevEl: prevBtn,
      nextEl: nextBtn,
    },
    pagination: {
      el: paginationContainer,
      // bulletClass: paginationItem,
      // bulletActiveClass: 'heroes__sw-pagin-active-item',
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      [displayBreakpoint]: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 21,
      },
    },
  });
}
