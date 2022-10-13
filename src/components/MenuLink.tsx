import { Box } from '@mui/material';
import Link from 'next/link';
import { ReactNode, useContext } from 'react';
import IndexContext from '../contexts/IndexContext';
import useHoverCallback from '../hooks/useHoverCallback';
import {
  transitionTime,
  transitionTimingFunction,
  sectionColors,
} from '../theme';

interface MenuLinkProps {
  id: string;
  children: ReactNode;
  hideOnActive?: boolean;
}

export const MenuLink = ({
  id,
  children,
  hideOnActive = false,
}: MenuLinkProps) => {
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

export const MenuLinkMobile = ({
  id,
  children,
  hideOnActive = false,
}: MenuLinkProps) => {
  const isActive = useContext(IndexContext).currentSection === id;

  return (
    <Box
      sx={{
        textAlign: 'center',
        '& a': {
          transition: `all ${transitionTime}ms ${transitionTimingFunction}`,
          px: 2,
          py: 1,
          display: 'block',
          borderRadius: 100,
          opacity: 1,
          ...(isActive && {
            backgroundColor: sectionColors[id],
            fontWeight: 'bold',
            letterSpacing: 2,
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
