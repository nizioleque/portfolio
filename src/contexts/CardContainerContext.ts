import { createContext, RefObject } from 'react';

interface CardContainerContext {
  scrollContainer: RefObject<HTMLElement>;
}

const cardContainerContextDefaultValue: CardContainerContext = {
  scrollContainer: { current: null },
};

const CardContainerContext = createContext(cardContainerContextDefaultValue);

export default CardContainerContext;
