import { Box } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import animationDirectionState, {
  AnimationDirection,
} from '../../atoms/animationDirectionState';
import { links } from '../../constants';
import useResponsiveLayout from '../../hooks/useResponsiveLayout';
import { scrollbarStyles } from '../../theme/constants';
import Nav from './Nav';

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

  const isIndex = router.pathname === '/';

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

    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [pageUrls, router, setAnimationDirection]);

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        [tabletQuery]: {
          gridTemplateColumns: 'auto 1fr',
        },
        [mobileQuery]: {
          gridTemplateColumns: '1fr',
        },
        height: '100%',
        alignItems: 'center',
      }}
    >
      <Nav />
      {!(isMobile && isIndex) && (
        <Box
          ref={scrollContainerRef}
          sx={{
            overflowY: 'auto',
            height: '100%',
            ...scrollbarStyles,
          }}
        >
          <AnimatePresence mode='wait' onExitComplete={handleExitComplete}>
            {children}
          </AnimatePresence>
        </Box>
      )}
    </Box>
  );
}

export default HomeLayout;
