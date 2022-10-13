import { Box, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import {
  sectionColors,
  transitionTime,
  transitionTimingFunction,
} from '../theme';
import { desktopNavWidth, sectionNames } from '../constants';
import IndexContext from '../contexts/IndexContext';
import useHoverCallback from '../hooks/useHoverCallback';
import { ArrowForwardIos, Close, Menu } from '@mui/icons-material';
import AnimateHeight, { Height } from 'react-animate-height';

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
              marginTop: '-54.4px', // TODO: rem, use actual height
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
  const { currentSection, setMobileNavHeight, setMobileMenuHeight } =
    useContext(IndexContext);

  const sectionIndex = Object.keys(sectionNames).indexOf(currentSection);
  const nextSectionName = Object.values(sectionNames)[sectionIndex + 1];

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  // const toggleMenuOpen = () => setMenuOpen((oldValue) => !oldValue);
  const showMenu = () => setMenuOpen(true);
  const hideMenu = () => setMenuOpen(false);

  const navContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileNavHeight(navContainerRef.current?.offsetHeight);
    return () => setMobileNavHeight(undefined);
  }, []);

  return (
    <Box
      ref={navContainerRef}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        px: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {menuOpen ? (
          <IconButton size='large' onClick={hideMenu}>
            <Close fontSize='large' />
          </IconButton>
        ) : (
          <IconButton size='large' onClick={showMenu}>
            <Menu fontSize='large' />
          </IconButton>
        )}
        {nextSectionName && !menuOpen && (
          <IconButton size='large' edge='start' sx={{ ml: 'auto' }}>
            <Typography>{nextSectionName}</Typography>
            <ArrowForwardIos fontSize='large' />
          </IconButton>
        )}
      </Box>
      <AnimateHeight
        height={menuOpen ? 'auto' : 0}
        duration={transitionTime}
        easing={transitionTimingFunction}
        onHeightAnimationStart={(newHeight: Height) => {
          console.log(newHeight);
          setMobileMenuHeight(newHeight as number);
        }}
      >
        <Box
          sx={{
            width: '80vw',
            height: 200,
            backgroundColor: 'red',
          }}
        ></Box>
      </AnimateHeight>
    </Box>
  );
};

export default Navigation;
