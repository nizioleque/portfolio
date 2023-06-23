import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
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
  const { scope } = useHomePageAnimation(delayAnimate);

  const containerProps = {
    ref: scope,
    margin: 'auto',
    component: motion.div,
  };

  return noScrollContainer ? (
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
}

export default HomePageContent;
