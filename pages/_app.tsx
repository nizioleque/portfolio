import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilEnv, RecoilRoot } from 'recoil';
import HomeLayout from '../src/components/Layout/HomeLayout';
import ProjectLayout from '../src/components/Layout/ProjectLayout';
import '../src/index.css';
import { theme } from '../src/theme';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

function MyApp({ Component, pageProps, router }: AppProps) {
  let LayoutComponent;

  if (router.pathname.startsWith('/projects')) {
    LayoutComponent = ProjectLayout;
  } else {
    LayoutComponent = HomeLayout;
  }

  return (
    <>
      <Head>
        <meta
          name='description'
          content="Norbert Niziołek's portfolio website"
        />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </Head>

      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <LayoutComponent>
            <AnimatePresence mode='wait'>
              <Component key={router.pathname} {...pageProps} />
            </AnimatePresence>
          </LayoutComponent>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
