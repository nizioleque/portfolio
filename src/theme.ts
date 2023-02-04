import { createTheme, experimental_sx as sx } from '@mui/material/styles';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    menu: CSSProperties;
    bodyLarge: CSSProperties;
    mobileMenuButton: CSSProperties;
  }

  interface TypographyVariantsOptions {
    menu?: CSSProperties;
    bodyLarge?: CSSProperties;
    mobileMenuButton?: CSSProperties;
  }

  interface Theme {
    gap: number;
    horizontalMargin: string;
  }
  interface ThemeOptions {
    gap?: number;
    horizontalMargin?: string;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bodyLarge: true;
    menu: true;
    mobileMenuButton: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    strong: true;
  }
}

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

export const shadowStrong = '6px 6px 4px rgba(0, 0, 0, 0.8)';
export const shadowWeak = '2px 2px 4px rgba(0, 0, 0, 0.6)';
export const desktopNavWidth = 280;
// export const horizontalMargin = 'max(13vw, 40px)';
export const transitionTime = 300;
export const transitionTimingFunction = 'cubic-bezier(0.22, 0.61, 0.36, 1)';
export const htmlBackgroundColor = '#1a1a1a';

export const sectionColors: { [key: string]: string } = {
  home: '#492669',
  'about-me': '#3F3A88',
  projects: '#1E5171',
  extensions: '#1F5B5A',
  autohotkey: '#1F5B3C',
};

const themeBase = createTheme({
  palette: {
    // mode: 'dark',
  },
  typography: {
    allVariants: {
      fontFamily: 'Space Mono',
      textShadow: shadowWeak,
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      desktop: 800,
    },
  },
  gap: 4,
});

export const mobileLayoutQuery = themeBase.breakpoints.down('desktop');
export const desktopLayoutQuery = themeBase.breakpoints.up('desktop');

export const dynamicFontSize = (max: number) => ({
  fontSize: `clamp(${max * 0.91}rem, ${max * 1.346}vw, ${max}rem)`,
  [mobileLayoutQuery]: {
    fontSize: `${Math.max(0.8 * max, 0.95)}rem`,
  },
});

export const theme = createTheme(themeBase, {
  horizontalMargin: { mobile: 4, desktop: 'max(13vw, 40px)' },
  typography: {
    bodyLarge: {
      ...dynamicFontSize(1.3),
    },
    body1: {
      ...dynamicFontSize(1.1),
    },
    h1: {
      textShadow: shadowStrong,
    },
    h2: {
      textTransform: 'uppercase',
      ...dynamicFontSize(4),
      fontWeight: 600,
      textShadow: shadowStrong,
      fontStyle: 'italic',
    },
    h3: {
      ...dynamicFontSize(1.8),
      fontWeight: 'bold',
      letterSpacing: -0.5,
      textShadow: shadowStrong,
    },
    h4: {
      ...dynamicFontSize(1.6),
      fontWeight: 600,
      textShadow: shadowStrong,
    },
    menu: {
      ...dynamicFontSize(1.6),
      letterSpacing: -0.5,
      textShadow: shadowStrong,
    },
    mobileMenuButton: {
      fontSize: '1.2rem',
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
            ...dynamicFontSize(1.2),
          },
        },
      ],
      styleOverrides: {
        root: sx({
          border: '2px white solid',
          ...dynamicFontSize(1.1),
          py: 0.5,
          px: 2,
          borderRadius: 100,
          textShadow: shadowWeak,
          boxShadow: shadowWeak,
          color: 'white',
          '&:hover': {
            backgroundColor: '#ffffff3a',
          },
        }),
      },
    },
  },
});
