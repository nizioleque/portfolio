import { Dispatch, SetStateAction, createContext, RefObject } from 'react';

interface IndexContext {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
  mobileLayout: boolean;
  mobileNavHeight: number | undefined;
  setMobileNavHeight: Dispatch<SetStateAction<number | undefined>>;
  mobileMenuHeight: number;
  setMobileMenuHeight: Dispatch<SetStateAction<number>>;
  scrollContainerMobile: RefObject<HTMLDivElement>;
}

const indexContextDefaultValue: IndexContext = {
  currentSection: '',
  setCurrentSection: () => {},
  mobileLayout: false,
  mobileNavHeight: undefined,
  setMobileNavHeight: () => {},
  mobileMenuHeight: 0,
  setMobileMenuHeight: () => {},
  scrollContainerMobile: { current: null },
};

const IndexContext = createContext<IndexContext>(indexContextDefaultValue);

export default IndexContext;
