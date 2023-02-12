import { createTheme } from '@mui/material/styles';

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

const themeBase = createTheme({
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
});

export const mobileLayoutQuery = themeBase.breakpoints.down('desktop');

// export const dynamicFontSize = (max: number) => ({
//   fontSize: `clamp(${max * 0.91}rem, ${max * 1.346}vw, ${max}rem)`,
//   [mobileLayoutQuery]: {
//     fontSize: `${Math.max(0.8 * max, 0.95)}rem`,
//   },
// });

export const theme = createTheme(themeBase, {
  typography: {
    h1: {
      textShadow: shadowStrong,
    },
    h3: {
      // ...dynamicFontSize(1.5),
      fontSize: '1.3rem',
      fontWeight: 'bold',
      letterSpacing: -0.5,
      textShadow: shadowStrong,
    },
  },
});
