import { stagger, useAnimate, usePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import animationDirectionState, {
  AnimationDirection,
} from '../atoms/animationDirectionState';
import { animationInitialY } from '../constants';

const classInViewport = '.animation-child.in-viewport';
const classNotInViewport = '.animation-child:not(.in-viewport)';
const animationOptions = (
  cause: 'enter' | 'exit',
  direction: AnimationDirection
) => ({
  delay: stagger(cause === 'enter' ? 2 / 60 : 1 / 60, {
    from: direction === AnimationDirection.Down ? 'first' : 'last',
  }),
  type: 'keyframes' as const,
  duration: cause === 'enter' ? 18 / 60 : 12 / 60,
  ease: cause === 'enter' ? ('backOut' as const) : ('easeIn' as const),
});

export default function useHomePageAnimation(delayAnimate: boolean) {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();
  const animationDirection = useRecoilValue(animationDirectionState);

  useEffect(() => {
    if (!delayAnimate) {
      prepareElements('enter', animationDirection);

      if (scope.current?.querySelector(classInViewport)) {
        animate(
          classInViewport,
          { y: 0, opacity: 1 },
          animationOptions('enter', animationDirection)
        );
      }

      if (scope.current?.querySelector(classNotInViewport)) {
        animate(classNotInViewport, { y: 0, opacity: 1 }, { duration: 0.01 });
      }
    }
  }, [animate, animationDirection, delayAnimate, scope]);

  useEffect(() => {
    if (!isPresent) {
      const exitAnimation = async () => {
        prepareElements('exit', animationDirection);

        if (scope.current?.querySelector(classNotInViewport)) {
          animate(classNotInViewport, { y: 0, opacity: 0 }, { duration: 0.01 });
        }

        if (scope.current?.querySelector(classInViewport)) {
          const direction =
            animationDirection === AnimationDirection.Down ? -1 : 1;

          await animate(
            classInViewport,
            { y: direction * animationInitialY, opacity: 0 },
            animationOptions('exit', animationDirection)
          );
        }

        safeToRemove();
      };

      exitAnimation();
    }
  }, [animate, animationDirection, isPresent, safeToRemove, scope]);

  return { scope };
}

function prepareElements(
  cause: 'enter' | 'exit',
  direction: AnimationDirection
) {
  const elements = Array.from(document.querySelectorAll('.animation-child'));
  for (const element of elements) {
    addViewportClass(element, cause, direction);
  }
}

function addViewportClass(
  element: Element,
  cause: 'enter' | 'exit',
  direction: AnimationDirection
) {
  const visibleElement =
    element.querySelector('.animation-child-positioned') ?? element;

  const r = visibleElement.getBoundingClientRect();
  let isInViewport = false;

  if (cause === 'enter') {
    isInViewport =
      direction === AnimationDirection.Down
        ? r.bottom >= animationInitialY &&
          r.top <= window.innerHeight + animationInitialY
        : r.bottom >= -animationInitialY &&
          r.top <= window.innerHeight - animationInitialY;
  } else {
    isInViewport = r.bottom > 0 && r.top < window.innerHeight;
  }

  if (isInViewport) element.classList.add('in-viewport');
  else element.classList.remove('in-viewport');
}
