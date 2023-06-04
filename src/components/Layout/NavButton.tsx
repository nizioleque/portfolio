import { EastRounded } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { MouseEventHandler, forwardRef } from 'react';
import { transition } from '../../theme';

interface NavButtonProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  href?: string;
  children: string;
  active: boolean;
}

const NavButton = forwardRef<HTMLAnchorElement, NavButtonProps>(
  ({ onClick, href, children, active }, ref) => {
    return (
      <Stack
        direction='row'
        alignItems='center'
        component='a'
        onClick={onClick}
        href={href}
        ref={ref}
        sx={{
          position: 'relative',
          zIndex: 1,

          borderRadius: 0,
          padding: '2px 4px',
          overflow: 'hidden',

          color: active ? 'black' : 'inherit',
          fontSize: '1.25rem',
          fontWeight: active ? 600 : 400,

          transition: transition('color'),

          '&::after': {
            content: '""',
            position: 'absolute',
            zIndex: -1,
            bottom: 0,
            left: 0,

            width: '100%',
            height: active ? '100%' : 2,

            backgroundColor: 'primary.light',

            transition: transition(['opacity', 'transform', 'height']),
            transform: active
              ? 'translate3d(0, 0, 0)'
              : 'translate3d(-101%, 0, 0)',
          },

          '&:hover::after, &:focus::after': {
            transform: 'translate3d(0, 0, 0)',
          },
        }}
      >
        {children.toLowerCase()}
        <EastRounded />
      </Stack>
    );
  }
);

NavButton.displayName = 'NavButton';

export default NavButton;
