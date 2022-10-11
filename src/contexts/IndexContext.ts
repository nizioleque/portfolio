import { Dispatch, SetStateAction, createContext } from 'react';

interface IndexContext {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
  mobileLayout: boolean;
}

const indexContextDefaultValue: IndexContext = {
  currentSection: '',
  setCurrentSection: () => {},
  mobileLayout: false,
};

const IndexContext = createContext<IndexContext>(indexContextDefaultValue);

export default IndexContext;
