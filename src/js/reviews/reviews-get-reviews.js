import reviewsArr from './reviews-array';

export default function getReviews() {
  let reviewsSt;
  try {
    reviewsSt = JSON.parse(localStorage.getItem('reviews'));
  } catch {
    reviewsSt = null;
  }
  if (Array.isArray(reviewsSt) && reviewsSt.length) {
    return reviewsSt;
  } else {
    localStorage.setItem('reviews', JSON.stringify(reviewsArr));
    return reviewsArr;
  }
}
