import { createContext, MutableRefObject } from 'react';

interface SectionContentContext {
  portalContainer: MutableRefObject<HTMLElement | undefined>;
  cardScrollLeft: number;
  scrollCardContainer: (offset: number) => void;
}

const sectionContentContextDefaultValue: SectionContentContext = {
  portalContainer: { current: undefined },
  cardScrollLeft: 0,
  scrollCardContainer: () => {},
};

export const SectionContentContext = createContext(
  sectionContentContextDefaultValue
);
