import { createContext, MutableRefObject, RefObject } from 'react';

interface CardContainerContext {
  scrollContainer: RefObject<HTMLElement>;
  blockScrollChange: MutableRefObject<boolean>;
  pauseAutoScroll: MutableRefObject<boolean>;
}

const cardContainerContextDefaultValue: CardContainerContext = {
  scrollContainer: { current: null },
  blockScrollChange: { current: false },
  pauseAutoScroll: { current: false },
};

const CardContainerContext = createContext<CardContainerContext>(
  cardContainerContextDefaultValue
);

export default CardContainerContext;
