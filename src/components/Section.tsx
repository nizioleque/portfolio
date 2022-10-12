import { Box } from '@mui/material';
import { ReactNode, useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { desktopNavWidth } from '../constants';
import IndexContext from '../contexts/IndexContext';
import SectionContext from '../contexts/SectionContext';
import { sectionColors, transitionTime, transitionTimingFunction } from '../theme';

interface SectionProps {
  children: ReactNode;
  id: string;
  fullscreen?: boolean;
}

function Section({ children, id, fullscreen }: SectionProps) {
  const backgroundColor = sectionColors[id];
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setCurrentSection, mobileLayout, mobileNavHeight, mobileMenuHeight } =
    useContext(IndexContext);

  useEffect(() => {
    if (inView) setCurrentSection(id);
  }, [inView]);

  const sectionInner = (
    <Box
      id={id}
      ref={ref}
      sx={{
        overflowY: 'auto',
        backgroundColor,
        // '&::-webkit-scrollbar': {
        //   display: 'none',
        // },
        ...(!mobileLayout && {
          mr: !fullscreen ? desktopNavWidth + 'px' : undefined,
          pr: fullscreen ? desktopNavWidth + 'px' : undefined,
          my: '5vh',
          '&:first-of-type': { mt: 0 },
          '&:last-of-type': { mb: 0 },
          boxShadow: !fullscreen ? 14 : undefined,
          borderRadius: !fullscreen ? '0 5vh 5vh 0' : undefined,
          height: '100vh',
          scrollSnapAlign: 'start',
          scrollSnapStop: 'always',
        }),
        ...(mobileLayout && {
          width: '100vw',
          height: '100%',
          borderRadius: !fullscreen ? '0 0 5vw 5vw' : undefined,
          pb: fullscreen ? `${mobileNavHeight}px` : undefined,
        }),
      }}
    >
      {children}
    </Box>
  );

  return (
    <SectionContext.Provider value={{ inView }}>
      {mobileLayout ? (
        <Box
          sx={{
            height: '100vh',
            overflowY: 'scroll',
            flexShrink: 0,
            pb: !fullscreen ? `${mobileNavHeight}px` : undefined,
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            transform: `translateY(-${mobileMenuHeight}px)`,
            transition: `transform ${transitionTime}ms ${transitionTimingFunction}`,
          }}
        >
          {sectionInner}
        </Box>
      ) : (
        <>{sectionInner}</>
      )}
    </SectionContext.Provider>
  );
}

export default Section;
