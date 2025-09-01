import isMobile from './isMobile';

export default function getImage({ mobile1x, mobile2x, desktop1x, desktop2x }) {
  const dpr = window.devicePixelRatio || 1;

  if (isMobile) {
    return dpr > 1 ? mobile2x : mobile1x;
  } else {
    return dpr > 1 ? desktop2x : desktop1x;
  }
}
