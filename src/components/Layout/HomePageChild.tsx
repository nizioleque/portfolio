import { Variants, motion } from 'framer-motion';
import { ReactNode } from 'react';

const variants: Variants = {
  down: { y: 250, opacity: 0 },
  up: { y: -250, opacity: 0 },
  //   enter: { transition: { ease: [0.0, 0, 0.2, 1] } },
  //   leave: { transition: { ease: [0.4, 0, 1, 1] } },
  visible: { y: 0, opacity: 1 },
};

interface HomePageChildProps {
  children: ReactNode;
}

function HomePageChild({ children }: HomePageChildProps) {
  return (
    <motion.div
      variants={variants}
      transition={{
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}

export default HomePageChild;
