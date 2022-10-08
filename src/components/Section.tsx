import { Box } from '@mui/material';
import { ReactNode, useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { navWidth } from '../constants';
import { IndexContext } from '../contexts/IndexContext';
import { sectionColors } from '../theme';

interface SectionProps {
  children: ReactNode;
  id: string;
  fullscreen?: boolean;
}

function Section({ children, id, fullscreen }: SectionProps) {
  const backgroundColor = sectionColors[id];
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setCurrentSection } = useContext(IndexContext);

  useEffect(() => {
    if (inView) setCurrentSection(id);
  }, [inView]);

  return (
    <Box
      id={id}
      ref={ref}
      sx={{
        height: '100vh',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        marginRight: !fullscreen ? navWidth + 'px' : undefined,
        paddingRight: fullscreen ? navWidth + 'px' : undefined,
        // backgroundColor: !fullscreen ? backgroundColor : undefined,
        backgroundColor,
        borderRadius: !fullscreen ? '0 5vh 5vh 0' : undefined,
        my: '5vh',
        overflowY: 'auto',
        overflowX: 'visible',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '& > *': {
          flexShrink: 0,
        },
      }}
    >
      {children}
    </Box>
  );
}

export default Section;
