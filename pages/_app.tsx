import '../src/index.css';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../src/theme';
import { RecoilRoot, RecoilEnv } from 'recoil';
import Layout from '../src/components/Layout';
import React from 'react';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

function MyApp({ Component, pageProps, router }: AppProps) {
  const addLayout = router.pathname !== '/';
  const LayoutComponent = addLayout ? Layout : React.Fragment;

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
