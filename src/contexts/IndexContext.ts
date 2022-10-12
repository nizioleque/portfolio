import { Dispatch, SetStateAction, createContext } from 'react';

interface IndexContext {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
  mobileLayout: boolean;
  mobileNavHeight: number | undefined;
  setMobileNavHeight: Dispatch<SetStateAction<number | undefined>>;
  mobileMenuHeight: number;
  setMobileMenuHeight: Dispatch<SetStateAction<number>>;
}

const indexContextDefaultValue: IndexContext = {
  currentSection: '',
  setCurrentSection: () => {},
  mobileLayout: false,
  mobileNavHeight: undefined,
  setMobileNavHeight: () => {},
  mobileMenuHeight: 0,
  setMobileMenuHeight: () => {},
};

const IndexContext = createContext<IndexContext>(indexContextDefaultValue);

export default IndexContext;
