import { createTheme } from '@mui/material/styles';
import { Space_Mono } from 'next/font/google';

export const shadowStrong = '4px 4px 4px rgba(0, 0, 0, 0.6)';
export const shadowWeak = '2px 2px 4px rgba(0, 0, 0, 0.35)';
export const transitionTime = 300;
export const transitionTimingFunction = 'cubic-bezier(0.22, 0.61, 0.36, 1)';

export const scrollbarStyles = {
  '::-webkit-scrollbar': {
    width: 16,
  },
  '::-webkit-scrollbar-thumb': {
    borderRadius: '999px',
    backgroundClip: 'padding-box',
    backgroundColor: 'rgb(255 255 255 / 24%)',
    border: '4px solid transparent',
    '&:hover': {
      backgroundColor: 'rgb(255 255 255 / 48%)',
    },
  },
};

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const themeBase = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'hsl(72deg, 85%, 65%)',
      light: 'hsl(72deg, 100%, 75%)',
    },
    background: {
      default: '#141414',
      light: '#3a3a3a',
    },
    text: {
      accent: 'hsl(72deg, 100%, 72%)',
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
      },
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 800,
      desktop: 1360,
    },
  },
});

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

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
  }

  interface TypeBackground {
    light: string;
  }

  interface TypeText {
    accent: string;
  }
}
