import { Box } from '@mui/material';
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Element, scroller } from 'react-scroll';
import { useRecoilState } from 'recoil';
import shouldOpenModalState from '../../atoms/shouldOpenModalState';
import { CardSize } from '../../constants';
import CardContainerContext from '../../contexts/CardContainerContext';
import CardIterationCountContext from '../../contexts/CardIterationCountContext';
import dynamicComponents from '../../dynamicComponents';
import Card from './Card';
import Overlay from './Overlay';

export interface ExpandableCardProps {
  content: ReactNode;
  id: string;
}

function ExpandableCard({ content, id }: ExpandableCardProps) {
  const { scrollContainer, blockScrollChange, pauseAutoScroll } =
    useContext(CardContainerContext);

  const idIteration = useContext(CardIterationCountContext);

  const cardContainer = useRef<HTMLAnchorElement>(null);

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

  const transformOrigin = useRef<'bottom' | 'center' | 'top'>('center');

  const scrollYProgressCombined = useTransform(
    [scrollYProgressTop, scrollYProgressBottom],
    ([latestTop, latestBottom]: number[]) => {
      if (!cardContainer.current) return 0;

      if (latestTop === 1 && latestBottom === 0) {
        transformOrigin.current = 'center';
        return 1;
      }

      if (latestTop < 1 - latestBottom) {
        transformOrigin.current = 'bottom';
        return latestTop;
      } else {
        transformOrigin.current = 'top';
        return 1 - latestBottom;
      }
    }
  );

  const originY = useTransform(scrollYProgressCombined, () => {
    switch (transformOrigin.current) {
      case 'top':
        cardContainer.current?.classList.remove('transform-origin-bottom');
        cardContainer.current?.classList.add('transform-origin-top');
        return 0;
      case 'center':
        cardContainer.current?.classList.remove('transform-origin-top');
        cardContainer.current?.classList.remove('transform-origin-bottom');
        return 0.5;
      case 'bottom':
        cardContainer.current?.classList.remove('transform-origin-top');
        cardContainer.current?.classList.add('transform-origin-bottom');
        return 1;
    }
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();
  const closeModal = () => {
    setIsModalOpen(false);
    router.push('/');
  };

  const uniqueId = useMemo(() => `${id}-${idIteration}`, [id, idIteration]);

  const [shouldOpenModal, setShouldOpenModal] = useRecoilState(
    shouldOpenModalState(uniqueId)
  );

  useEffect(() => {
    if (shouldOpenModal) {
      pauseAutoScroll.current = true;
      setIsModalOpen(true);
      setShouldOpenModal(false);
    }
  }, [shouldOpenModal, setShouldOpenModal, pauseAutoScroll]);

  const DynamicContent =
    id in dynamicComponents
      ? dynamicComponents[id as keyof typeof dynamicComponents]
      : null;

  return (
    <Element name={uniqueId}>
      <Box>
        <Link href={`/`} as={`/${id}`} passHref legacyBehavior>
          <Card
            onClick={() => {
              if (!cardContainer.current) return;

              if (transformOrigin.current !== 'center') {
                setShouldOpenModal(true);

                // TODO calculate exact vh value
                const padding = 50;
                let offset =
                  transformOrigin.current === 'bottom'
                    ? -padding
                    : -document.documentElement.clientHeight + 300 + padding;
                offset += parseInt(getComputedStyle(cardContainer.current).top);

                scroller.scrollTo(uniqueId, {
                  containerId: 'scroll-container',
                  smooth: 'easeInOutQuad',
                  duration: 250,
                  offset,
                });
                return;
              }

              pauseAutoScroll.current = true;
              setIsModalOpen(true);
            }}
            ref={cardContainer}
            className='card-list-item'
            style={{
              scale: scrollYProgressCombined,
              originY,
              originX: 0.5,
              width: CardSize,
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
              if (isModalOpen === false) pauseAutoScroll.current = false;
            }}
            layoutId={uniqueId}
          >
            {content}
          </Card>
        </Link>
        <AnimatePresence
          onExitComplete={() => (blockScrollChange.current = false)}
        >
          {isModalOpen && (
            <>
              <Overlay closeModal={closeModal} key='overlay' />
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
                    backgroundColor: 'hsl(271deg 47% 10%)',
                    color: 'rgb(255 255 255 / 75%)',
                    pointerEvents: 'initial',
                  }}
                  component={motion.div}
                  layoutId={uniqueId}
                  key='modal'
                >
                  {DynamicContent ? (
                    <DynamicContent />
                  ) : (
                    <div>CONTENT NOT FOUND FOR {id}</div>
                  )}
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
