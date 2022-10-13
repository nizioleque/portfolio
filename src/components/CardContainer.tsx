import { Box } from '@mui/material';
import { ReactNode, useRef, useState } from 'react';
import ArrowButton from './ArrowButton';
import CardContainerContext from '../contexts/CardContainerContext';

interface CardContainerProps {
  cards: ReactNode;
}

function CardContainer({ cards }: CardContainerProps) {
  const portalContainer = useRef<HTMLElement>();
  const cardContainerRef = useRef<HTMLElement>();

  const [cardScrollLeft, setCardScrollLeft] = useState<number>(0);
  const scrollCardContainer = (
    offset: number,
    smooth: boolean = false
  ): void => {
    if (!cardContainerRef.current) return;
    if (smooth) cardContainerRef.current.style.scrollBehavior = 'smooth';
    cardContainerRef.current?.scrollBy(offset, 0);
    if (smooth) cardContainerRef.current.style.scrollBehavior = '';
  };

  const scrollCardContainerByChild = (offset: number): void => {
    if (!cardContainerRef.current) return;
    const childSize =
      cardContainerRef.current.children[0]?.getBoundingClientRect().width + 16;
    scrollCardContainer(offset * childSize, true);
  };

  const isCardContainerScrolledToEnd = (
    direction: 'left' | 'right'
  ): boolean => {
    const container = cardContainerRef.current;
    if (!container) return false;
    if (direction === 'left') return container.scrollLeft === 0;
    return (
      container.scrollLeft === container.scrollWidth - container.offsetWidth
    );
  };

  const cardZIndex = useRef<number>(1);
  const getCardZIndex = (): number => {
    return cardZIndex.current++;
  };

  return (
    <CardContainerContext.Provider
      value={{
        portalContainer,
        cardScrollLeft,
        scrollCardContainer,
        scrollCardContainerByChild,
        isCardContainerScrolledToEnd,
        getCardZIndex,
      }}
    >
      <Box className='card-container' position='relative'>
        <Box
          ref={cardContainerRef}
          onScroll={() => {
            setCardScrollLeft(cardContainerRef.current?.scrollLeft ?? 0);
          }}
          sx={ theme => ({
            display: 'flex',
            gap: 2,
            overflowX: 'scroll',
            py: 2,
            px: theme.horizontalMargin,
            // '&::-webkit-scrollbar': {
            //   display: 'none',
            // },
          })}
        >
          {cards}
        </Box>
        <ArrowButton direction='left' />
        <ArrowButton direction='right' />
        <Box ref={portalContainer} />
      </Box>
    </CardContainerContext.Provider>
  );
}

export default CardContainer;
