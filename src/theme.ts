import { createTheme, experimental_sx as sx } from '@mui/material/styles';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    menu: CSSProperties;
    bodyLarge: CSSProperties;
  }

  interface TypographyVariantsOptions {
    menu?: CSSProperties;
    bodyLarge?: CSSProperties;
  }

  interface Theme {
    gap: number;
  }
  interface ThemeOptions {
    gap?: number;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bodyLarge: true;
    menu: true;
  }
}

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#463db9',
    },
    secondary: {
      main: '#eda439',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Space Mono',
      textShadow: '6px 6px 4px rgba(0, 0, 0, 0.8)',
    },
    bodyLarge: {
      fontSize: '1.3rem',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
    },
    body1: {
      fontSize: '1.1rem',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
    },
    h2: {
      textTransform: 'uppercase',
      fontSize: '4rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      letterSpacing: -0.5,
    },
    h4: {
      fontSize: '1.6rem',
      fontWeight: 600,
    },
    menu: {
      fontSize: '1.6rem',
      letterSpacing: -0.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: sx({
          // color: 'white',
          border: '3px white solid',
          fontSize: '1.2rem',
          // fontWeight: 'bold',
          // py: 1,
          px: 2,
          borderRadius: 100,
          textShadow: '6px 6px 4px rgba(0, 0, 0, 0.8)',
          boxShadow: '6px 6px 4px rgba(0, 0, 0, 0.8)',
          color: '#ffffffcf',
          borderColor: '#ffffffcf',
        }),
      },
    },
  },
  gap: 4,
});

export const sectionColors: { [key: string]: string } = {
  home: '#492669',
  'about-me': '#3F3A88',
  projects: '#1E5171',
  extensions: '#1F5B5A',
  autohotkey: '#1F5B3C',
};

export const transitionTime = 300;
export const transitionTimingFunction = 'cubic-bezier(0.22, 0.61, 0.36, 1)';
