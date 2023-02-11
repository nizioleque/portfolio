import { Box, Button, keyframes } from '@mui/material';
import { ReactNode, useRef, useEffect, useCallback, useState } from 'react';
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

  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [logs, setLogs] = useState<string>('');

  const cardZIndex = useRef<number>(1);
  const getCardZIndex = (): number => {
    return cardZIndex.current++;
  };

  // infinite scroll (user/auto)
  const handleScroll = useCallback(() => {
    if (!scrollContent.current || !scrollContainer.current) return;

    const contentHeight = scrollContent.current.offsetHeight / 4;
    const scrollTop = scrollContainer.current.scrollTop;

    setLastScrollTop(scrollTop);
    setLogs((old) => `current ${scrollTop}\n` + old);

    if (scrollTop > 2 * contentHeight) {
      setLogs(
        (old) =>
          `up ${scrollTop}, new ${
            contentHeight + (scrollTop % contentHeight)
          }\n` + old
      );

      scrollContainer.current.scrollTo({
        top: contentHeight + (scrollTop % contentHeight),
      });

      setLogs((old) => `up FINISHED ${scrollTop}\n` + old);
    } else if (scrollTop < contentHeight) {
      setLogs(
        (old) =>
          old +
          `down ${scrollTop}, new ${
            contentHeight + (scrollTop % contentHeight)
          }\n`
      );

      scrollContainer.current.scrollTo({
        top: contentHeight + (scrollTop % contentHeight),
      });
      setLogs((old) => `down FINISHED ${scrollTop}\n` + old);
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
        onTouchMove={() => setLogs((old) => `onTouchMove\n` + old)}
        onTouchStart={() => setLogs((old) => `onTouchStart\n` + old)}
        onTouchEnd={() => setLogs((old) => `onTouchEnd\n` + old)}
        onTouchCancel={() => setLogs((old) => `onTouchCancel\n` + old)}
      >
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            right: 0,
            background: 'red',
            minHeight: 50,
            minWidth: 50,
            whiteSpace: 'pre',
            color: 'white',
            zIndex: '1000000',
          }}
        >
          <Button onClick={() => setLogs('')}> clear</Button>
          <Box sx={{ fontWeight: 700 }}>
            LAST TOP: {lastScrollTop.toFixed(2)}
          </Box>
          {logs}
        </Box>
        <Box
          ref={scrollContent}
          sx={{
            display: 'grid',
            justifyContent: 'center',
            gridTemplateColumns: '350px 350px',
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
