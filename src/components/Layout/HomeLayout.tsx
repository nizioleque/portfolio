import { Box } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import Nav from './Nav';

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleExitComplete = () => {
    ref.current?.scrollTo({ top: 0 });
  };

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
        ref={ref}
        sx={{
          overflowY: 'auto',
          height: '100%',
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
