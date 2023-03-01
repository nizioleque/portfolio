import { createContext, MutableRefObject, RefObject } from 'react';

interface CardContainerContext {
  scrollContainer: RefObject<HTMLElement>;
  blockScrollChange: MutableRefObject<boolean>;
}

const cardContainerContextDefaultValue: CardContainerContext = {
  scrollContainer: { current: null },
  blockScrollChange: { current: false },
};

const CardContainerContext = createContext(cardContainerContextDefaultValue);

export default CardContainerContext;
