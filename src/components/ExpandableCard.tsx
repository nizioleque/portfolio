import { styled } from '@mui/material';
import { ReactNode, useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CardContainerContext from '../contexts/CardContainerContext';

const Card = styled(motion.div)(({ theme }) =>
  theme.unstable_sx({
    width: 300,
    aspectRatio: '1 / 1',

    padding: 4,

    background: 'rgb(255, 255, 255, 0.3)',
    borderRadius: 8,
    border: '1px rgb(0, 0, 0, 0.15) solid',

    position: 'relative',
    overflow: 'hidden',
    '--x': '10px',
    '--y': '10px',

    '&::before': {
      content: '""',
      zIndex: -1,
      width: 0,
      height: 0,
      background:
        'radial-gradient(rgb(255, 255, 255, 0.6) 0%, rgb(255, 255, 255, 0) 75%)',
      position: 'absolute',
      left: 'var(--x)',
      top: 'var(--y)',
      transition: `height 120ms cubic-bezier(0.61, 1, 0.88, 1), width 120ms cubic-bezier(0.61, 1, 0.88, 1)`,
      transform: 'translate(-50%, -50%)',
    },

    '&:hover::before': {
      transition: `height 120ms cubic-bezier(0.12, 0, 0.39, 0), width 120ms cubic-bezier(0.12, 0, 0.39, 0)`,
      width: 1000,
      height: 1000,
    },
  })
);

export interface ExpandableCardProps {
  width?: number;
  content: ReactNode;
}

function ExpandableCard({ content }: ExpandableCardProps) {
  const cardContainer = useRef<HTMLDivElement>(null);

  const { scrollContainer } = useContext(CardContainerContext);

  const { scrollYProgress: scrollYProgressTop } = useScroll({
    container: scrollContainer,
    target: cardContainer,
    offset: ['end 0.5vh', 'start 3vh'],
    layoutEffect: false,
  });

  const { scrollYProgress: scrollYProgressBottom } = useScroll({
    container: scrollContainer,
    target: cardContainer,
    offset: ['end 97vh', 'start 99.5vh'],
    layoutEffect: false,
  });

  const scrollYProgressCombined = useTransform(
    [scrollYProgressTop, scrollYProgressBottom],
    ([latestTop, latestBottom]: number[]) => {
      if (!cardContainer.current) return 0;
      if (latestTop < 1 - latestBottom) {
        cardContainer.current.style.transformOrigin = 'bottom center';
        return latestTop;
      } else {
        cardContainer.current.style.transformOrigin = 'top center';
        return 1 - latestBottom;
      }
    }
  );

  return (
    <Card
      ref={cardContainer}
      style={{
        scale: scrollYProgressCombined,
      }}
      onMouseMove={(event) => {
        const target = event.currentTarget as HTMLElement;

        const x = event.clientX - target.getBoundingClientRect().left;
        const y = event.clientY - target.getBoundingClientRect().top;

        target.style.setProperty('--x', `${x}px`);
        target.style.setProperty('--y', `${y}px`);
      }}
    >
      {content}
    </Card>
  );
}

export default ExpandableCard;
