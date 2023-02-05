import { createContext, MutableRefObject } from 'react';

interface CardContainerContext {
  getCardZIndex: () => number;
}

const cardContainerContextDefaultValue: CardContainerContext = {
  getCardZIndex: () => 0,
};

const CardContainerContext = createContext(cardContainerContextDefaultValue);

export default CardContainerContext;
