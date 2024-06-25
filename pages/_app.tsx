import HomeLayout from "@/components/Layout/HomeLayout";
import "@/index.css";
import { theme } from "@/theme/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilEnv, RecoilRoot } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

function MyApp({ Component, pageProps, router }: AppProps) {
  let LayoutComponent;

  if (!router.pathname.startsWith("/projects/")) {
    LayoutComponent = HomeLayout;
  }

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Norbert Niziołek's portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {LayoutComponent !== undefined ? (
            <LayoutComponent>
              <Component key={router.pathname} {...pageProps} />
            </LayoutComponent>
          ) : (
            <Component key={router.pathname} {...pageProps} />
          )}
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
