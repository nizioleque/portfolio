import { Box } from '@mui/material';
import Link from 'next/link';
import { ReactNode, useContext } from 'react';
import { Element, scroller } from 'react-scroll';
import { CardSize } from '../../constants';
import CardContainerContext from '../../contexts/CardContainerContext';
import useCardModal from '../../hooks/useCardModal';
import useCardScale from '../../hooks/useCardScale';
import Card from './Card';
import CardModal from './CardModal';

export interface ExpandableCardProps {
  content: ReactNode;
  id: string;
  hue: number;
}

function ExpandableCard({ content, id, hue }: ExpandableCardProps) {
  const { pauseAutoScroll } = useContext(CardContainerContext);

  const { cardContainerRef, originY, scrollYProgress, transformOrigin } =
    useCardScale();

  const targetUrl = `/${id}`;

  const {
    isModalOpen,
    closeModal,
    uniqueId,
    setShouldOpenModal,
    setIsModalOpen,
  } = useCardModal(id, targetUrl);

  const handleClick = () => {
    if (!cardContainerRef.current) return;

    if (transformOrigin.current !== 'center') {
      setShouldOpenModal(true);

      // TODO calculate exact vh value
      const padding = 50;
      let offset =
        transformOrigin.current === 'bottom'
          ? -padding
          : -document.documentElement.clientHeight + 300 + padding;
      offset += parseInt(getComputedStyle(cardContainerRef.current).top);

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
  };

  const handleMouseEnter = () => {
    pauseAutoScroll.current = true;
  };

  const handleMouseLeave = () => {
    if (isModalOpen === false) pauseAutoScroll.current = false;
  };

  return (
    <Element name={uniqueId}>
      <Box>
        <Link href={`/`} as={targetUrl} passHref legacyBehavior>
          <Card
            className='card-list-item'
            hue={hue}
            layoutId={uniqueId}
            ref={cardContainerRef}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              scale: scrollYProgress,
              originY,
              originX: 0.5,
              width: CardSize,
              aspectRatio: '1 / 1',
            }}
          >
            {content}
          </Card>
        </Link>
        <CardModal
          closeModal={closeModal}
          id={id}
          uniqueId={uniqueId}
          isModalOpen={isModalOpen}
        />
      </Box>
    </Element>
  );
}

export default ExpandableCard;
