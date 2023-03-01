import { Box } from '@mui/material';
import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
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
import { Element, scroller } from 'react-scroll';
import shouldOpenModalState from '../../atoms/shouldOpenModalState';
import { useRecoilState } from 'recoil';

export interface ExpandableCardProps {
  width?: number;
  content: ReactNode;
}

function ExpandableCard({ content }: ExpandableCardProps) {
  const cardContainer = useRef<HTMLDivElement>(null);

  const { scrollContainer, blockScrollChange, pauseAutoScroll } =
    useContext(CardContainerContext);

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

      cardContainer.current.classList.remove('transform-origin-top');
      cardContainer.current.classList.remove('transform-origin-bottom');

      if (latestTop === 1 && latestBottom === 0) return;

      if (latestTop < 1 - latestBottom) {
        cardContainer.current.classList.add('transform-origin-top');
        return latestTop;
      } else {
        cardContainer.current.classList.add('transform-origin-bottom');
        return 1 - latestBottom;
      }
    }
  );

  const [isSelected, setIsSelected] = useState<boolean>(false);

  const [id, _] = useState<string>(generate());

  const [shouldOpenModal, setShouldOpenModal] = useRecoilState(
    shouldOpenModalState(id)
  );

  useEffect(() => {
    if (shouldOpenModal) {
      pauseAutoScroll.current = true;
      setIsSelected(true);
      setShouldOpenModal(false);
    }
  }, [shouldOpenModal, setShouldOpenModal, pauseAutoScroll]);

  return (
    <Element name={id}>
      <Box
        sx={{
          '& .transform-origin-top': {
            transformOrigin: 'bottom center !important',
          },
          '& .transform-origin-bottom': {
            transformOrigin: 'top center !important',
          },
        }}
      >
        <Card
          onClick={() => {
            if (!cardContainer.current || !scrollContainer.current) return 0;

            const classList = cardContainer.current.classList;
            if (
              classList.contains('transform-origin-top') ||
              classList.contains('transform-origin-bottom')
            ) {
              setShouldOpenModal(true);

              // TODO calculate exact vh value
              const padding = 50;
              let offset = classList.contains('transform-origin-top')
                ? -padding
                : -document.documentElement.clientHeight + 300 + padding;
              offset += parseInt(getComputedStyle(cardContainer.current).top);

              scroller.scrollTo(id, {
                containerId: 'scroll-container',
                smooth: 'easeInOutQuad',
                duration: 250,
                offset,
              });
              return;
            }

            pauseAutoScroll.current = true;
            setIsSelected(true);
          }}
          ref={cardContainer}
          className='card-list-item'
          style={{
            scale: scrollYProgressCombined,
            width: 300,
            aspectRatio: '1 / 1',
          }}
          onMouseMove={(event) => {
            const target = event.currentTarget as HTMLElement;

            const x = event.clientX - target.getBoundingClientRect().left;
            const y = event.clientY - target.getBoundingClientRect().top;

            target.style.setProperty('--x', `${x}px`);
            target.style.setProperty('--y', `${y}px`);
          }}
          onMouseEnter={() => (pauseAutoScroll.current = true)}
          onMouseLeave={() => {
            if (isSelected === false) pauseAutoScroll.current = false;
          }}
          layoutId={id}
        >
          {content}
        </Card>
        <AnimatePresence
          onExitComplete={() => (blockScrollChange.current = false)}
        >
          {isSelected && (
            <>
              <Overlay setIsSelected={setIsSelected} key='overlay' />
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
                  key='modal'
                >
                  SELECTED
                  {content}
                </Box>
              </Box>
            </>
          )}
        </AnimatePresence>
      </Box>
    </Element>
  );
}

export default ExpandableCard;
