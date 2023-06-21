import { motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

const initialY = 250;

interface HomePageChildProps {
  children: ReactNode;
}

function HomePageChild({ children }: HomePageChildProps) {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (ref.current === null) return;

    const element =
      ref.current.querySelector('.animation-child-sized') ?? ref.current;

    const r = element.getBoundingClientRect();
    const isInViewport =
      r.top >= initialY && r.bottom <= window.innerHeight + 2 * initialY;

    const classList = ref.current.classList;
    if (isInViewport) classList.add('in-viewport');
    else classList.remove('in-viewport');
  });

  return (
    <motion.div
      ref={ref}
      className={'animation-child'}
      initial={{ y: initialY, opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default HomePageChild;
