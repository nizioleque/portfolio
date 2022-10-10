import { Dispatch, SetStateAction, createContext } from 'react';

interface IndexContext {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
}

const indexContextDefaultValue: IndexContext = {
  currentSection: '',
  setCurrentSection: () => {},
};

const IndexContext = createContext<IndexContext>(indexContextDefaultValue);

export default IndexContext;
