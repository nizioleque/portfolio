import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import animationDirectionState, {
  AnimationDirection,
} from "../../atoms/animationDirectionState";
import { canvasBackgroundState } from "../../atoms/experiments";
import { links } from "../../constants";
import useResponsiveLayout from "../../hooks/useResponsiveLayout";
import Nav from "./nav/Nav";

const CanvasBackground = dynamic(() => import("./CanvasBackground"), {
  ssr: false,
});

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleExitComplete = () => {
    scrollContainerRef.current?.scrollTo({ top: 0 });
  };

  const { isMobile, mobileQuery, tabletQuery } = useResponsiveLayout();

  const router = useRouter();
  const setAnimationDirection = useSetRecoilState(animationDirectionState);

  const pageUrls = links.map((link) => link.href);

  const isIndex = router.pathname === "/";

  const showCanvasBackground = useRecoilValue(canvasBackgroundState);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const oldUrlIndex = pageUrls.indexOf(router.pathname);
      const newUrlIndex = pageUrls.indexOf(url);

      setAnimationDirection(
        newUrlIndex > oldUrlIndex
          ? AnimationDirection.Down
          : AnimationDirection.Up
      );
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [pageUrls, router, setAnimationDirection]);

  return (
    <>
      {showCanvasBackground && <CanvasBackground />}
      <Box
        sx={{
          // display: "grid",
          // gridTemplateColumns: "1fr 1fr",
          // [tabletQuery]: {
          //   gridTemplateColumns: "auto 1fr",
          // },
          // [mobileQuery]: {
          //   gridTemplateColumns: "1fr",
          // },
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Nav />
      </Box>
    </>
  );
}

export default HomeLayout;
