import { displayBreakpoint } from '../constants';

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

// the listener will update the variable when the window changes
window.addEventListener('resize', updateIsMobile);

export function IsMobileChange(callback) {
  isMobileSubscribers.push(callback);
}

export function getIsMobile() {
  return isMobile;
}
