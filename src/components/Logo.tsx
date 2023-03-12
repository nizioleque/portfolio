import { Box, Typography } from '@mui/material';
import { forwardRef, MouseEventHandler } from 'react';
import { shadowWeak } from '../theme';

interface LogoProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  href?: string;
  fontSize?: string | number;
}

const Logo = forwardRef<HTMLAnchorElement, LogoProps>(
  ({ onClick, href, fontSize }, ref) => {
    return (
      <Typography
        variant='h1'
        component='a'
        onClick={onClick}
        href={href}
        ref={ref}
        sx={{
          fontSize,
          fontWeight: 'bold',
          letterSpacing: -2,
          fontStyle: 'italic',
          textShadow: shadowWeak,
        }}
      >
        <Box
          sx={{
            color: 'hsl(282deg 100% 73% / 48%)',
            marginBottom: '-0.5rem',
          }}
        >
          Norbert
        </Box>
        <Box
          sx={{
            color: 'hsl(43deg 100% 50%)',
            position: 'relative',
            left: '0.5rem',
          }}
        >
          Niziołek
        </Box>
      </Typography>
    );
  }
);

Logo.displayName = 'Logo';

export default Logo;
