import { displayBreakpoint } from '../constants';

// export default function isMobile() {
//   if (window.innerWidth < displayBreakpoint) return true;
//   else return false;
// }

let isMobile = window.innerWidth < displayBreakpoint;
const isMobileSubscribers = [];

function updateIsMobile() {
  const newValue = window.innerWidth < displayBreakpoint;
  if (newValue !== isMobile) {
    isMobile = newValue;
    isMobileSubscribers.forEach(callback => callback());
    console.log(isMobileSubscribers);
  }
}

// слушатель будет обновлять переменную при изменении окна
window.addEventListener('resize', updateIsMobile);

export function IsMobileChange(callback) {
  isMobileSubscribers.push(callback);
}

export function getIsMobile() {
  return isMobile;
}
// export default isMobile;
