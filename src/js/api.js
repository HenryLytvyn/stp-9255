import axios from 'axios';

export async function getReviews() {
  const { data } = await axios.get(
    `https://stp-9255-backend.onrender.com/reviews`
  );
  return data.data;
}

const data = getReviews();

// console.log(data);
