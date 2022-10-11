import { Box } from '@mui/material';
import { ReactNode, useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { navWidth } from '../constants';
import IndexContext from '../contexts/IndexContext';
import SectionContext from '../contexts/SectionContext';
import { sectionColors } from '../theme';

interface SectionProps {
  children: ReactNode;
  id: string;
  fullscreen?: boolean;
}

function Section({ children, id, fullscreen }: SectionProps) {
  const backgroundColor = sectionColors[id];
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setCurrentSection, mobileLayout } = useContext(IndexContext);

  useEffect(() => {
    if (inView) setCurrentSection(id);
  }, [inView]);

  return (
    <SectionContext.Provider value={{ inView }}>
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
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            mr: !fullscreen ? navWidth + 'px' : undefined,
            pr: fullscreen ? navWidth + 'px' : undefined,
            my: '5vh',
            '&:first-of-type': { mt: 0 },
            '&:last-of-type': { mb: 0 },
            boxShadow: !fullscreen ? 14 : undefined,
            borderRadius: !fullscreen ? '0 5vh 5vh 0' : undefined,
            height: '100vh',
          }),
          ...(mobileLayout && {
            flexShrink: 0,
            width: '100vw',
            height: '100%',
            borderRadius: '0 0 5vw 5vw',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            overflowX: 'hidden', // crop when text is to large
          }),
        }}
      >
        {children}
      </Box>
    </SectionContext.Provider>
  );
}

export default Section;
