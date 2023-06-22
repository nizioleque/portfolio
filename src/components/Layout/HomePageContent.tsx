import { Stack } from '@mui/material';
import { motion, stagger, useAnimate, usePresence } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { animationInitialY } from '../../constants';

const classInViewport = '.animation-child.in-viewport';
const classNotInViewport = '.animation-child:not(.in-viewport)';

function prepareElements(cause: 'enter' | 'exit') {
  const elements = Array.from(document.querySelectorAll('.animation-child'));
  for (const element of elements) {
    addViewportClass(element, cause);
  }
}

function addViewportClass(element: Element, cause: 'enter' | 'exit') {
  const visibleElement =
    element.querySelector('.animation-child-positioned') ?? element;

  const r = visibleElement.getBoundingClientRect();
  const isInViewport =
    cause === 'enter'
      ? r.bottom >= animationInitialY &&
        r.top <= window.innerHeight + animationInitialY
      : r.bottom > 0 && r.top < window.innerHeight;

  if (isInViewport) element.classList.add('in-viewport');
  else element.classList.remove('in-viewport');
}

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

  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!delayAnimate) {
      prepareElements('enter');

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
        animate(classNotInViewport, { y: 0, opacity: 1 }, { duration: 0.01 });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delayAnimate]);

  useEffect(() => {
    if (!isPresent) {
      const exitAnimation = async () => {
        prepareElements('exit');

        if (scope.current?.querySelector(classNotInViewport)) {
          animate(classNotInViewport, { y: 0, opacity: 0 }, { duration: 0.01 });
        }

        if (scope.current?.querySelector(classInViewport)) {
          await animate(
            classInViewport,
            { y: animationInitialY, opacity: 0 },
            {
              delay: stagger(3 / 60, { from: 'last' }),
              type: 'keyframes',
            }
          );
        }

        safeToRemove();
      };

      exitAnimation();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent]);

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
