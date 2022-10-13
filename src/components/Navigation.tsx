import { Box, IconButton, Typography } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import { transitionTime, transitionTimingFunction } from '../theme';
import { desktopNavWidth, sectionNames } from '../constants';
import IndexContext from '../contexts/IndexContext';
import { ArrowForwardIos, Close, Menu } from '@mui/icons-material';
import AnimateHeight, { Height } from 'react-animate-height';
import { MenuLink, MenuLinkMobile } from './MenuLink';

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
  const {
    currentSection,
    setMobileNavHeight,
    setMobileMenuHeight,
    scrollContainerMobile,
  } = useContext(IndexContext);

  const sectionIndex = Object.keys(sectionNames).indexOf(currentSection);
  const nextSectionName = Object.values(sectionNames)[sectionIndex + 1];

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
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
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          px: 1,
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
          <IconButton
            size='large'
            edge='start'
            sx={{ ml: 'auto' }}
            onClick={() => {
              scrollContainerMobile.current?.scrollBy(
                document.body.clientWidth,
                0
              );
            }}
          >
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
            height: 'auto',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 1,
          }}
        >
          <MenuLinkMobile id='home'>home</MenuLinkMobile>
          <MenuLinkMobile id='about-me'>about me</MenuLinkMobile>
          <MenuLinkMobile id='projects'>projects</MenuLinkMobile>
          <MenuLinkMobile id='extensions'>extensions</MenuLinkMobile>
          <MenuLinkMobile id='autohotkey'>autohotkey</MenuLinkMobile>
        </Box>
      </AnimateHeight>
    </Box>
  );
};

export default Navigation;
