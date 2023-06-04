import { createTheme } from '@mui/material/styles';
import { Space_Mono } from 'next/font/google';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    desktop: true;
  }
}

export const shadowStrong = '4px 4px 4px rgba(0, 0, 0, 0.6)';
export const shadowWeak = '2px 2px 4px rgba(0, 0, 0, 0.6)';
export const transitionTime = 300;
export const transitionTimingFunction = 'cubic-bezier(0.22, 0.61, 0.36, 1)';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const themeBase = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: `hsl(72deg 100% 60%)`,
      light: `hsl(72deg 100% 75%)`,
    },
  },
  typography: {
    allVariants: {
      fontFamily: spaceMono.style.fontFamily,
      textShadow: shadowWeak,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          fontSize: '1rem',
          borderRadius: 16,
          fontWeight: 700,
        },
        contained: {
          color: 'black',
          backgroundColor: 'hsl(43deg 100% 50%)',
          '&:hover': {
            backgroundColor: 'hsl(43deg 100% 75%)',
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      desktop: 800,
    },
  },
});

export const mobileLayoutQuery = themeBase.breakpoints.down('desktop');

const transitionDuration = 300;
const transitionEasing = 'ease';

export function transition(property: string | string[]): string {
  if (Array.isArray(property)) {
    const results = property.map((property) => transition(property));
    return results.join(',');
  }
  return `${property} ${transitionEasing} ${transitionDuration}ms`;
}

export const theme = createTheme(themeBase, {
  typography: {
    h1: {
      textShadow: shadowStrong,
    },
    h3: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      letterSpacing: -0.5,
      textShadow: shadowStrong,
    },
  },
});
