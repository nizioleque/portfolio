import { Box } from '@mui/material';
import { ReactNode, useContext, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import CardContainerContext from '../../contexts/CardContainerContext';
import Card from './Card';
import { generate } from 'randomstring';
import Overlay from './Overlay';

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

  const [isSelected, setIsSelected] = useState<boolean>(false);

  const [id, _] = useState<string>(generate());
  console.log(id);

  return (
    <Box>
      <Card
        sx={{
          width: 300,
          aspectRatio: '1 / 1',
        }}
        onClick={() => setIsSelected(true)}
        ref={cardContainer}
        className='card-list-item'
        style={{
          scale: scrollYProgressCombined,
          height: '100%',
        }}
        onMouseMove={(event) => {
          const target = event.currentTarget as HTMLElement;

          const x = event.clientX - target.getBoundingClientRect().left;
          const y = event.clientY - target.getBoundingClientRect().top;

          target.style.setProperty('--x', `${x}px`);
          target.style.setProperty('--y', `${y}px`);
        }}
        layoutId={id}
      >
        {content}
      </Card>
      <AnimatePresence>
        {isSelected && (
          <>
            <Overlay setIsSelected={setIsSelected} />
            <Box
              sx={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 2,
                display: 'grid',
                placeItems: 'center',
                pointerEvents: 'none',
              }}
            >
              <Box
                sx={{
                  maxWidth: 500,
                  width: '100%',
                  minHeight: 500,
                  borderRadius: 8,
                  background: 'white',
                  pointerEvents: 'initial',
                }}
                component={motion.div}
                layoutId={id}
              >
                SELECTED
              </Box>
            </Box>
          </>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default ExpandableCard;
