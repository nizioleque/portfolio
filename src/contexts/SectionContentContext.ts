import { createContext, MutableRefObject } from 'react';

interface SectionContentContext {
  portalContainer: MutableRefObject<HTMLElement | undefined>;
  cardScrollLeft: number;
  scrollCardContainer: (offset: number) => void;
  getCardZIndex: () => number;
}

const sectionContentContextDefaultValue: SectionContentContext = {
  portalContainer: { current: undefined },
  cardScrollLeft: 0,
  scrollCardContainer: () => {},
  getCardZIndex: () => 0,
};

export const SectionContentContext = createContext(
  sectionContentContextDefaultValue
);
