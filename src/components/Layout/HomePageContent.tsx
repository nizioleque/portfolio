import { Stack } from '@mui/material';
import { motion, stagger, useAnimate } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

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

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!delayAnimate) {
      const classInViewport = '.animation-child.in-viewport';
      const classNotInViewport = '.animation-child:not(.in-viewport)';

      if (scope.current?.querySelector(classInViewport)) {
        animate(
          classInViewport,
          { y: 0, opacity: 1 },
          {
            delay: stagger(3 / 60),
            type: 'keyframes',
          }
        );
      }

      if (scope.current?.querySelector(classNotInViewport)) {
        animate(classNotInViewport, { y: 0, opacity: 1 }, { duration: 0 });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delayAnimate]);

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
