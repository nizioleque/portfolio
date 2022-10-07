import { createTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    menu: CSSProperties;
  }

  interface TypographyVariantsOptions {
    menu?: CSSProperties;
  }

  interface Theme {
    gap: number;
  }
  interface ThemeOptions {
    gap?: number;
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
    body1: {
      fontSize: '1.3rem',
    },
    h2: {
      textTransform: 'uppercase',
      fontSize: '4rem',
      fontWeight: 600,
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
