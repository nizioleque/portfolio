import { createContext, MutableRefObject } from 'react';

interface SectionContentContext {
  portalContainer: MutableRefObject<HTMLElement | undefined>;
  cardScrollLeft: number;
  scrollCardContainer: (offset: number) => void;
  scrollCardContainerByChild: (offset: number) => void;
  isCardContainerScrolledToEnd: (direction: 'left' | 'right') => boolean;
  getCardZIndex: () => number;
}

const sectionContentContextDefaultValue: SectionContentContext = {
  portalContainer: { current: undefined },
  cardScrollLeft: 0,
  scrollCardContainer: () => {},
  scrollCardContainerByChild: () => {},
  isCardContainerScrolledToEnd: () => false,
  getCardZIndex: () => 0,
};

export const SectionContentContext = createContext(
  sectionContentContextDefaultValue
);
