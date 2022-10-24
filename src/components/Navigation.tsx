import { Box, IconButton, Typography } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import {
  desktopNavWidth,
  mobileLayoutQuery,
  transitionTime,
  transitionTimingFunction,
} from '../theme';
import { sections } from '../constants';
import IndexContext from '../contexts/IndexContext';
import { ArrowForwardIos, Close, Menu } from '@mui/icons-material';
import AnimateHeight, { Height } from 'react-animate-height';
import { MenuLink, MenuLinkMobile } from './MenuLink';

function Navigation() {
  return (
    <>
      <NavigationMobile /> <NavigationDesktop />
    </>
  );
}

const NavigationDesktop = () => {
  return (
    <Box
      sx={{
        [mobileLayoutQuery]: {
          display: 'none',
        },
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
        {sections.map((section) => (
          <MenuLink
            key={section.id}
            id={section.id}
            hideOnActive={section.id === 'home'}
          >
            {section.name}
          </MenuLink>
        ))}
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
    hideMenu,
    mobileLayout,
  } = useContext(IndexContext);

  const currentSectionIndex = sections.findIndex(
    (section) => section.id === currentSection
  );
  const nextSection = sections[currentSectionIndex + 1];

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const showMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const navContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileNavHeight(navContainerRef.current?.offsetHeight);
    return () => setMobileNavHeight(undefined);
  }, [setMobileNavHeight, mobileLayout]);

  const scrollToSection = (id: string) => {
    const indexCurrent = sections.findIndex(
      (section) => section.id === currentSection
    );
    const indexNew = sections.findIndex((section) => section.id === id);
    const diff = indexNew - indexCurrent;
    scrollContainerMobile.current?.scrollTo({
      left:
        scrollContainerMobile.current!.scrollLeft +
        diff * document.body.clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      ref={navContainerRef}
      sx={{
        display: 'none',
        [mobileLayoutQuery]: {
          display: 'unset',
        },
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        transform: `translateY(${hideMenu ? '100' : '0'}%)`,
        transition: `transform ${transitionTime}ms ${transitionTimingFunction}`,
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
          <IconButton size='large' onClick={closeMenu}>
            <Close fontSize='large' />
          </IconButton>
        ) : (
          <IconButton size='large' onClick={showMenu}>
            <Menu fontSize='large' />
          </IconButton>
        )}
        {nextSection && !menuOpen && (
          <Box
            onClick={() => scrollToSection(nextSection.id)}
            sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}
          >
            <Typography variant='mobileMenuButton'>
              {nextSection.name}
            </Typography>
            <IconButton size='large' edge='start'>
              <ArrowForwardIos fontSize='large' />
            </IconButton>
          </Box>
        )}
      </Box>
      <AnimateHeight
        height={menuOpen ? 'auto' : 0}
        duration={transitionTime}
        easing={transitionTimingFunction}
        onHeightAnimationStart={(newHeight: Height) => {
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
          {sections.map((section) => (
            <MenuLinkMobile
              key={section.id}
              id={section.id}
              onClick={scrollToSection}
            >
              {section.name}
            </MenuLinkMobile>
          ))}
        </Box>
      </AnimateHeight>
    </Box>
  );
};

export default Navigation;
