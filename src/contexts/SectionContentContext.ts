import { createContext, MutableRefObject } from 'react';

interface SectionContentContext {
  portalContainer: MutableRefObject<HTMLElement | undefined>;
}

const sectionContentContextDefaultValue: SectionContentContext = {
  portalContainer: { current: undefined },
};

export const SectionContentContext = createContext(
  sectionContentContextDefaultValue
);
