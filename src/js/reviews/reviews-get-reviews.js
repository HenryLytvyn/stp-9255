import reviewsArr from './reviews-array';

// let actualReviews = checkStorage();

// document.addEventListener('DOMContentLoaded', checkStorage);

export default function getReviews() {
  let reviewsSt;
  try {
    reviewsSt = JSON.parse(localStorage.getItem('reviews'));
  } catch {
    reviewsSt = null;
  }
  // JSON.parse(localStorage.getItem('reviews')) ?? [];
  if (Array.isArray(reviewsSt) && reviewsSt.length) {
    return reviewsSt;
  } else {
    localStorage.setItem('reviews', JSON.stringify(reviewsArr));
    return reviewsArr;
  }
}
