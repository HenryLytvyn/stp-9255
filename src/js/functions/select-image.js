import { displayBreakpoint } from '../constants';

export default function selectImage(images, alt, section) {
  const { mobile1x, mobile2x, desktop1x, desktop2x } = images;

  return `
        <picture class="${section}__card-picture">
        <source
          media="(min-width: ${displayBreakpoint}px)"
          srcset="
            ${desktop1x}    1x,
            ${desktop2x}    2x
          "
        />
        <source
          media="(max-width: ${displayBreakpoint - 0.02}px)"
          srcset="
            ${mobile1x}    1x,
            ${mobile2x}    2x
          "
        />
        <img
          class="${section}__card-img"
          src="${mobile1x}"
          alt="${alt}"
        />
      </picture>
        `;
}
