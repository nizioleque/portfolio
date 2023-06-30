import { Box, Typography } from '@mui/material';
import { MouseEventHandler, forwardRef } from 'react';
import { shadowStrong } from '../../theme/constants';
import { transition } from '../../theme/transitions';

interface LogoProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  href?: string;
  fontSize?: string | number;
  active?: boolean;
}

const Logo = forwardRef<HTMLAnchorElement, LogoProps>(
  ({ onClick, href, fontSize, active = false }, ref) => {
    return (
      <Typography
        variant='h1'
        component='a'
        onClick={onClick}
        href={href}
        ref={ref}
        sx={{
          fontSize,
          letterSpacing: -3,
          fontStyle: 'italic',
          textShadow: shadowStrong,
          lineHeight: '45%',

          transition: transition('font-size'),

          color: 'rgb(255 255 255 / 30%)',
          '& > span:nth-of-type(2)': {
            fontWeight: 'bold',
            color: active ? 'primary.light' : 'text.primary',
            '&:hover': { color: 'primary.main' },
            transition: transition('color'),
          },
        }}
      >
        <Box component='span'>Norbert</Box>
        <br />
        <Box component='span'>Niziołek</Box>
      </Typography>
    );
  }
);

Logo.displayName = 'Logo';

export default Logo;
