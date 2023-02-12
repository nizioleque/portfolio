import { Box, keyframes } from '@mui/material';
import { ReactNode, useRef, useEffect, useCallback } from 'react';
import CardContainerContext from '../contexts/CardContainerContext';

const infiniteScrollAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-25%);
  }
`;

interface CardContainerProps {
  children: ReactNode;
}

function CardContainer({ children }: CardContainerProps) {
  const scrollContainer = useRef<HTMLElement>();
  const scrollContent = useRef<HTMLElement>();

  const cardZIndex = useRef<number>(1);
  const getCardZIndex = (): number => {
    return cardZIndex.current++;
  };

  // infinite scroll (user/auto)
  const handleScroll = useCallback(() => {
    if (!scrollContent.current || !scrollContainer.current) return;

    const contentHeight = scrollContent.current.offsetHeight / 4;
    const scrollTop = scrollContainer.current.scrollTop;

    if (scrollTop > 2 * contentHeight) {
      scrollContainer.current.scrollTo({
        top: contentHeight + (scrollTop % contentHeight),
      });
    } else if (scrollTop < contentHeight) {
      scrollContainer.current.scrollTo({
        top: contentHeight + (scrollTop % contentHeight),
      });
    }
  }, []);

  // default scroll position
  useEffect(() => {
    if (!scrollContent.current || !scrollContainer.current) return;

    const contentHeight = scrollContent.current.offsetHeight / 4;
    scrollContainer.current.scrollTo({ top: contentHeight + 1 });
  }, []);

  return (
    <CardContainerContext.Provider
      value={{
        getCardZIndex,
      }}
    >
      <Box
        ref={scrollContainer}
        sx={{
          overflowY: 'scroll',
          height: '100%',
          // '&::-webkit-scrollbar': {
          //   display: 'none',
          // },
        }}
        onScroll={handleScroll}
      >
        <Box
          ref={scrollContent}
          sx={{
            display: 'grid',
            justifyContent: 'center',
            gridTemplateColumns: '300px 300px',
            gap: 5,
            '& > :nth-of-type(even)': {
              position: 'relative',
              top: 150,
            },
            animation: `${infiniteScrollAnimation} 30s linear infinite`,
            '&:hover': {
              animationPlayState: 'paused',
            },
          }}
        >
          {children}
          {children}
          {children}
          {children}
        </Box>
      </Box>
    </CardContainerContext.Provider>
  );
}

export default CardContainer;
