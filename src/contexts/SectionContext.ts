import { createContext } from 'react';

interface SectionContext {
  inView: boolean;
}

const sectionContentDefaultValue: SectionContext = {
  inView: false,
};

export const SectionContext = createContext(sectionContentDefaultValue);
