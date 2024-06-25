import { createTheme } from "@mui/system";
import { Space_Mono } from "next/font/google";
import { shadowStrong, shadowWeak } from "./constants";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const themeBase = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "hsl(72deg, 85%, 65%)",
      light: "hsl(72deg, 100%, 75%)",
    },
    background: {
      default: "#141414",
      light: "#3a3a3a",
    },
    text: {
      accent: "hsl(72deg, 100%, 72%)",
    },
  },
  typography: {
    allVariants: {
      fontFamily: spaceMono.style.fontFamily,
      textShadow: shadowWeak,
    },
    h1: {
      textShadow: shadowStrong,
    },
    h2: {
      textShadow: shadowStrong,
    },
    h3: {
      fontSize: "1.3rem", // TODO remove
      fontWeight: "bold",
      letterSpacing: -0.5,
      textShadow: shadowStrong,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          fontSize: "1rem",
          borderRadius: 16,
          fontWeight: 700,
        },
      },
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 765,
      desktop: 1360,
    },
  },
});

export const mobileLayoutQuery = themeBase.breakpoints.down("desktop");
export const desktopLayoutQuery = themeBase.breakpoints.up("desktop");

declare module "@mui/material/styles" {
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
