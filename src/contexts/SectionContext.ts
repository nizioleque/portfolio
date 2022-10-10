import { createContext } from 'react';

interface SectionContext {
  inView: boolean;
}

const sectionContentDefaultValue: SectionContext = {
  inView: false,
};

const SectionContext = createContext(sectionContentDefaultValue);

export default SectionContext;
