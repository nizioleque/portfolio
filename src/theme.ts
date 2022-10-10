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

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    strong: true;
  }
}

export const shadowStrong = '6px 6px 4px rgba(0, 0, 0, 0.8)';
export const shadowWeak = '2px 2px 4px rgba(0, 0, 0, 0.6)';

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
      textShadow: shadowWeak,
    },
    bodyLarge: {
      fontSize: '1.3rem',
    },
    body1: {
      fontSize: '1.1rem',
    },
    h1: {
      textShadow: shadowStrong,
    },
    h2: {
      textTransform: 'uppercase',
      fontSize: '4rem',
      fontWeight: 600,
      textShadow: shadowStrong,
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      letterSpacing: -0.5,
      textShadow: shadowStrong,
    },
    h4: {
      fontSize: '1.6rem',
      fontWeight: 600,
      textShadow: shadowStrong,
    },
    menu: {
      fontSize: '1.6rem',
      letterSpacing: -0.5,
      textShadow: shadowStrong,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'strong' },
          style: {
            textShadow: shadowStrong,
            boxShadow: shadowStrong,
            fontSize: '1.2rem',
          },
        },
      ],
      styleOverrides: {
        root: sx({
          border: '2px white solid',
          fontSize: '1.1rem',
          py: 0.5,
          px: 2,
          borderRadius: 100,
          textShadow: shadowWeak,
          boxShadow: shadowWeak,
          color: 'white',
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
export const htmlBackgroundColor = '#1a1a1a';
