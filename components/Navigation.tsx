import { Box } from '@mui/material';
import Link from 'next/link';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { sectionColors } from '../src/theme';
import { navWidth } from '../src/constants';
import { IndexContext } from '../pages';

interface MenuLinkProps {
  id: string;
  children: ReactNode;
}

const MenuLink = ({ id, children }: MenuLinkProps) => {
  const isActive = useContext(IndexContext).currentSection === id;
  const { hoveredLink, setHoveredLink } = useContext(NavigationContext);

  const ref = useRef(null);
  const isHovered = useHover(ref);

  useEffect(() => {
    if (isHovered) setHoveredLink(id);
    return () => setHoveredLink(undefined);
  }, [isHovered]);

  const showHoverStyle = isHovered || (isActive && hoveredLink === undefined);

  return (
    <Box
      ref={ref}
      sx={{
        '& a': {
          transition: 'all 0.1s ease-in',
          py: 1,
          px: 2,
          display: 'block',
          borderRadius: '100px 0 0 100px',
          width: 240,
          ...(showHoverStyle && {
            backgroundColor: sectionColors[id],
            ...(isActive && {
              fontWeight: 'bold',
              letterSpacing: 2,
            }),
          }),
        },
      }}
    >
      <Link href={`#${id}`}>
        <a>{children}</a>
      </Link>
    </Box>
  );
};

interface NavigationContext {
  hoveredLink: string | undefined;
  setHoveredLink: Dispatch<SetStateAction<string | undefined>>;
}

const navigationContextDefaultValue: NavigationContext = {
  hoveredLink: undefined,
  setHoveredLink: () => {},
};

const NavigationContext = createContext(navigationContextDefaultValue);

function Navigation() {
  const [hoveredLink, setHoveredLink] = useState<string | undefined>();

  return (
    <NavigationContext.Provider value={{ hoveredLink, setHoveredLink }}>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: navWidth,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          component='nav'
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            ...theme.typography.menu,
          })}
        >
          <MenuLink id='home'>home</MenuLink>
          <MenuLink id='about-me'>about me</MenuLink>
          <MenuLink id='projects'>projects</MenuLink>
          <MenuLink id='extensions'>extensions</MenuLink>
          <MenuLink id='autohotkey'>autohotkey</MenuLink>
        </Box>
      </Box>
    </NavigationContext.Provider>
  );
}

export default Navigation;
