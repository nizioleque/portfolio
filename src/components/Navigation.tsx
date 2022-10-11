import { Box } from '@mui/material';
import Link from 'next/link';
import { ReactNode, useContext } from 'react';
import {
  sectionColors,
  transitionTime,
  transitionTimingFunction,
} from '../theme';
import { desktopNavWidth, mobileNavHeight } from '../constants';
import IndexContext from '../contexts/IndexContext';
import useHoverCallback from '../hooks/useHoverCallback';

interface MenuLinkProps {
  id: string;
  children: ReactNode;
  hideOnActive?: boolean;
}

const MenuLink = ({ id, children, hideOnActive = false }: MenuLinkProps) => {
  const isActive = useContext(IndexContext).currentSection === id;
  const [hoverRef, isHovering] = useHoverCallback();

  return (
    <Box
      ref={hoverRef}
      sx={{
        '& a': {
          transition: `all ${transitionTime}ms ${transitionTimingFunction}`,
          py: 1,
          px: 2, // TODO: rem
          display: 'block',
          borderRadius: '100px 0 0 100px',
          width: 240, // TODO: rem
          opacity: 1,
          ...((isActive || isHovering) && {
            backgroundColor: sectionColors[id],
            boxShadow: 4,
          }),
          ...(isActive && {
            fontWeight: 'bold',
            letterSpacing: 2,
          }),
          ...(isActive &&
            hideOnActive && {
              backgroundColor: undefined,
              fontWeight: undefined,
              letterSpacing: undefined,
              opacity: 0,
              marginTop: '-54.4px', // TODO: rem
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

function Navigation() {
  const { mobileLayout } = useContext(IndexContext);

  return <>{mobileLayout ? <NavigationMobile /> : <NavigationDesktop />}</>;
}

const NavigationDesktop = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: desktopNavWidth,
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
        <MenuLink id='home' hideOnActive>
          home
        </MenuLink>
        <MenuLink id='about-me'>about me</MenuLink>
        <MenuLink id='projects'>projects</MenuLink>
        <MenuLink id='extensions'>extensions</MenuLink>
        <MenuLink id='autohotkey'>autohotkey</MenuLink>
      </Box>
    </Box>
  );
};

const NavigationMobile = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: mobileNavHeight,
        border: '1px red solid',
      }}
    >
      NAVIGATION PLACEHOLDER (SWIPE -&gt;&gt;&gt;&gt;&gt;)
    </Box>
  );
};

export default Navigation;
