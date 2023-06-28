import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import animationDirectionState from '../../atoms/animationDirectionState';
import { AnimationInitialY } from '../../constants';

interface HomePageChildProps {
  children: ReactNode;
}

function HomePageChild({ children }: HomePageChildProps) {
  const animationDirection = useRecoilValue(animationDirectionState);
  const direction = animationDirection ? 1 : -1;

  return (
    <motion.div
      className='animation-child'
      initial={{ y: direction * AnimationInitialY, opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default HomePageChild;
