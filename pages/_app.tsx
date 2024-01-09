import { CssBaseline, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import "../src/index.css";
import { theme } from "../src/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Component {...pageProps} /> */}
      <Typography variant="h1">Hello world</Typography>
    </ThemeProvider>
  );
}

export default MyApp;
