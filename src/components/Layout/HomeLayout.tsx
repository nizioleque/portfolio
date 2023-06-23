import { Box } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import animationDirectionState, {
  AnimationDirection,
} from '../../atoms/animationDirectionState';
import { links } from '../../constants';
import Nav from './Nav';

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleExitComplete = () => {
    scrollContainerRef.current?.scrollTo({ top: 0 });
  };

  const router = useRouter();
  const setAnimationDirection = useSetRecoilState(animationDirectionState);

  const pageUrls = links.map((link) => link.href);

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
        height: '100%',
        alignItems: 'center',
      }}
    >
      <Nav />
      <Box
        ref={scrollContainerRef}
        sx={{
          overflowY: 'auto',
          height: '100%',
          '&::-webkit-scrollbar': {
            width: 16,
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '999px',
            backgroundClip: 'padding-box',
            backgroundColor: 'rgb(255 255 255 / 24%)',
            border: '4px solid transparent',
            '&:hover': {
              backgroundColor: 'rgb(255 255 255 / 48%)',
            },
          },
        }}
      >
        <AnimatePresence mode='wait' onExitComplete={handleExitComplete}>
          {children}
        </AnimatePresence>
      </Box>
    </Box>
  );
}

export default HomeLayout;
