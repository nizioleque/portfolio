import { Dispatch, SetStateAction, createContext } from 'react';

interface NavigationContext {
  hoveredLink: string | undefined;
  setHoveredLink: Dispatch<SetStateAction<string | undefined>>;
}

const navigationContextDefaultValue: NavigationContext = {
  hoveredLink: undefined,
  setHoveredLink: () => {},
};

export const NavigationContext = createContext(navigationContextDefaultValue);
