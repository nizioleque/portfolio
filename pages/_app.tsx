import RootLayout from "@/components/Layout/RootLayout";
import "@/index.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilEnv } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

function MyApp({ Component, pageProps, router }: AppProps) {
  const isCvPage = router.pathname === "/cv-v2";
  const Layout = isCvPage ? undefined : RootLayout;

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
        <title>NORBERT NIZIOŁEK</title>
      </Head>
      {Layout !== undefined ? (
        <Layout router={router}>
          <Component key={router.pathname} {...pageProps} />
        </Layout>
      ) : (
        <Component key={router.pathname} {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
