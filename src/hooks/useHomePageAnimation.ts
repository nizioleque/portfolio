import { stagger, useAnimate, usePresence } from 'framer-motion';
import { useEffect } from 'react';
import { animationInitialY } from '../constants';

const classInViewport = '.animation-child.in-viewport';
const classNotInViewport = '.animation-child:not(.in-viewport)';

export default function useHomePageAnimation(delayAnimate: boolean) {
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
  }, [animate, delayAnimate, scope]);

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
  }, [animate, isPresent, safeToRemove, scope]);

  return { scope };
}

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
