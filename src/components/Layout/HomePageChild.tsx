import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { animationInitialY } from '../../constants';

interface HomePageChildProps {
  children: ReactNode;
}

function HomePageChild({ children }: HomePageChildProps) {
  return (
    <motion.div
      className='animation-child'
      initial={{ y: animationInitialY, opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default HomePageChild;
