import { Box } from '@mui/material';
import Link from 'next/link';
import { ReactNode, useContext } from 'react';
import { sectionColors } from '../theme';
import { navWidth } from '../constants';
import { IndexContext } from '../contexts/IndexContext';
import useHoverCallback from '../hooks/useHoverCallback';

interface MenuLinkProps {
  id: string;
  children: ReactNode;
}

const MenuLink = ({ id, children }: MenuLinkProps) => {
  const isActive = useContext(IndexContext).currentSection === id;
  const [hoverRef, isHovering] = useHoverCallback();

  return (
    <Box
      ref={hoverRef}
      sx={{
        '& a': {
          transition: 'all 0.15s ease-in',
          py: 1,
          px: 2,
          display: 'block',
          borderRadius: '100px 0 0 100px',
          width: 240,
          ...((isActive || isHovering) && {
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

function Navigation() {
  return (
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
  );
}

export default Navigation;