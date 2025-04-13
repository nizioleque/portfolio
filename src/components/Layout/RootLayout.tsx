import HomeLayout from "@/components/Layout/HomeLayout";
import { theme } from "@/theme/theme";
import { spaceMono } from "@/theme/themeBase";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { RecoilEnv, RecoilRoot } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

interface RootLayoutProps {
  children: React.ReactNode;
  router: AppProps["router"];
}

function RootLayout({ children, router }: RootLayoutProps) {
  let LayoutComponent;
  if (!router.pathname.startsWith("/projects/")) {
    LayoutComponent = HomeLayout;
  }

  return (
    <>
      <style jsx global>{`
        code,
        pre {
          font-family: ${spaceMono.style.fontFamily};
        }

        :root {
          color-scheme: dark;
        }

        * {
          font-variant-ligatures: none;
        }

        html {
          height: 100%;
          user-select: none;
        }

        body {
          height: 100%;
        }

        #__next {
          height: 100%;
        }

        .project-content {
          video,
          img {
            width: 100%;
            height: auto;
          }

          ul,
          ol {
            margin-top: -8px;
          }
        }
      `}</style>

      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {LayoutComponent !== undefined ? (
            <LayoutComponent>{children}</LayoutComponent>
          ) : (
            children
          )}
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default RootLayout;
