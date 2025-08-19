import { displayBreakpoint } from '../constants';

export default function isMobile() {
  if (window.innerWidth < displayBreakpoint) return true;
  else return false;
}
