import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface HomePageContentProps {
  children: ReactNode;
}

function HomePageContent({ children }: HomePageContentProps) {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => setCount(count + 1)}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        Refresh
      </button>
      <Stack
        paddingY='10vh'
        minHeight='100%'
        sx={{
          overflowY: 'hidden',
        }}
      >
        <Stack
          key={count}
          margin='auto'
          component={motion.div}
          initial={['down', 'enter']}
          animate='visible'
          exit={['down', 'leave']}
          transition={{
            staggerChildren: 0.04,
          }}
          gap={10}
        >
          {children}
        </Stack>
      </Stack>
    </>
  );
}

export default HomePageContent;
