import { displayBreakpoint } from '../constants';

// export default function isMobile() {
//   if (window.innerWidth < displayBreakpoint) return true;
//   else return false;
// }

let isMobile = window.innerWidth < displayBreakpoint;

function updateIsMobile() {
  isMobile = window.innerWidth < displayBreakpoint;
}

// слушатель будет обновлять переменную при изменении окна
window.addEventListener('resize', updateIsMobile);

// можно сразу вызвать, чтобы значение было актуальным
updateIsMobile();

// теперь в любом месте кода можно использовать:
console.log(isMobile); // true / false

export default isMobile;
