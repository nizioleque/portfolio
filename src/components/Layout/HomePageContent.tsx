import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import useHomePageAnimation from '../../hooks/useHomePageAnimation';

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

  const { scope } = useHomePageAnimation(delayAnimate);

  const containerProps = {
    key: count,
    ref: scope,
    margin: 'auto',
    component: motion.div,
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
