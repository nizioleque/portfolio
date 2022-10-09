import { createTheme } from '@mui/material/styles';
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
    fontFamily: 'Space Mono',
    bodyLarge: {
      fontSize: '1.3rem',
    },
    body1: {
      fontSize: '1.1rem',
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
  gap: 4,
});

export const sectionColors: { [key: string]: string } = {
  home: '#582847',
  'about-me': '#3F3A88',
  projects: '#1E5171',
  extensions: '#1F5B5A',
  autohotkey: '#1F5B3C',
};

export const transitionTime = 300;
export const transitionTimingFunction = 'cubic-bezier(0.22, 0.61, 0.36, 1)';
