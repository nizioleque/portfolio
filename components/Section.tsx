import { Box } from '@mui/material';
import { createContext, ForwardedRef, forwardRef, ReactNode } from 'react';
import { navWidth } from '../pages';

interface SectionContext {
  backgroundColor: string;
}

export const SectionContext = createContext<SectionContext>({
  backgroundColor: '#000000',
});

interface SectionProps {
  children: ReactNode;
  backgroundColor: string;
  id: string;
  fullscreen?: boolean;
}

function Section(
  { children, backgroundColor, id, fullscreen }: SectionProps,
  ref: ForwardedRef<HTMLElement | undefined>
) {
  return (
    <SectionContext.Provider value={{ backgroundColor }}>
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
    </SectionContext.Provider>
  );
}

export default forwardRef(Section);
