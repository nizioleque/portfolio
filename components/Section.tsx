import { Box, BoxProps, SxProps } from '@mui/material';
import { ReactNode } from 'react';
import { navWidth } from '../pages';

interface SectionProps {
  title: string;
  description: string;
}

function Section({ children, ...props }: BoxProps & SectionProps) {
  return (
    <Box
      {...props}
      sx={{
        height: '100vh',
        // position: 'relative',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        paddingRight: navWidth + 'px',
        '& > *': {
          flexShrink: 0,
        },
        ...props.sx,
      }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          '& > *:not(.card-container)': {
            mx: 5,
          },

          '& > .card-container': {
            ml: 5,
          },
        }}
      >
        {children}
      </Box>
      {/* <Box
        sx={{
          width: 200,
          bgcolor: 'red',
          position: 'absolute',
          right: navWidth,
          height: '100%',
          opacity: 0.5,
        }}
      /> */}
    </Box>
  );
}

export default Section;
