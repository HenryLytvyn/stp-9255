import { getIsMobile, IsMobileChange } from '../functions/isMobile';
import createDeckDesktopMarkup from './features-deck-markup';
import createCardMarkup from './features-card-markup';
import cards from './features-images-array';
import createDeckMobileMarkup from './features-deck-mobile-markup';
import {
  firstCardTransferAnim,
  secondCardTransferAnim,
  thirdCardTransferAnim,
  triggerCardAnimation,
} from './features-card-transfer-animations';
import { cardDeckContainer, openCardContainer } from './features-constants';

let handleCardRef = null;

renderCards();

IsMobileChange(() => renderCards());

function renderCards() {
  if (handleCardRef) {
    cardDeckContainer.removeEventListener('click', handleCardRef);
    handleCardRef = null;
  }

  // DESKTOP
  if (!getIsMobile()) {
    let deckCards = [...cards];
    const openCard = [];
    openCard.push(deckCards[deckCards.length - 1]);
    deckCards.pop();

    openCardContainer.innerHTML = `${createCardMarkup(openCard)}`;

    triggerCardAnimation();

    cardDeckContainer.innerHTML = createDeckDesktopMarkup(deckCards);

    handleCardRef = function handleCard() {
      const lastDeckCard = firstCardTransferAnim();

      setTimeout(() => {
        secondCardTransferAnim(lastDeckCard);
      }, 1000);

      setTimeout(() => {
        thirdCardTransferAnim(
          openCard,
          deckCards,
          lastDeckCard,
          openCardContainer,
          cardDeckContainer
        );
      }, 2000);
    };

    cardDeckContainer.addEventListener('click', handleCardRef);
  } else {
    cardDeckContainer.style.cursor = 'default';
    cardDeckContainer.innerHTML = createDeckMobileMarkup(cards);
  }
}
