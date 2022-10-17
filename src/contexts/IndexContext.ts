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
  hideMenu: boolean;
  setHideMenu: Dispatch<SetStateAction<boolean>>;
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
  hideMenu: false,
  setHideMenu: () => {},
};

const IndexContext = createContext<IndexContext>(indexContextDefaultValue);

export default IndexContext;
