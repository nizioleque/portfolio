import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface HomePageContentProps {
  children: ReactNode;
  delayAnimate?: boolean;
  noScrollContainer?: boolean;
}

function HomePageContent({
  children,
  delayAnimate = false,
  noScrollContainer = false,
}: HomePageContentProps) {
  const [count, setCount] = useState(0);

  const containerProps = {
    key: count,
    margin: 'auto',
    component: motion.div,
    initial: ['down', 'enter'],
    animate: delayAnimate ? ['down', 'enter'] : 'visible',
    exit: ['down', 'leave'],
    transition: {
      staggerChildren: 0.04,
    },
  };

  const content = noScrollContainer ? (
    <Stack {...containerProps} height='100%'>
      {children}
    </Stack>
  ) : (
    <Stack
      paddingY='10vh'
      minHeight='100%'
      sx={{
        overflowY: 'hidden',
      }}
    >
      <Stack {...containerProps} gap={10}>
        {children}
      </Stack>
    </Stack>
  );

  return (
    <>
      <button
        onClick={() => setCount(count + 1)}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        Refresh
      </button>
      {content}
    </>
  );
}

export default HomePageContent;
