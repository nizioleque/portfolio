import { Box } from '@mui/material';
import { ReactNode, useRef, useEffect } from 'react';
import CardContainerContext from '../contexts/CardContainerContext';

const CONTENT_REPETITIONS = 3;
const SCROLL_DIVIDER = 15;

interface CardContainerProps {
  children: ReactNode;
}

function CardContainer({ children }: CardContainerProps) {
  const scrollContainer = useRef<HTMLElement>();
  const scrollContent = useRef<HTMLElement>();
  const autoScroll = useRef<boolean>(true);

  const cardZIndex = useRef<number>(1);
  const getCardZIndex = (): number => {
    return cardZIndex.current++;
  };

  const handleScroll = () => {
    if (!scrollContent.current || !scrollContainer.current) return;

    const contentHeight =
      scrollContent.current.getBoundingClientRect().height /
      CONTENT_REPETITIONS;
    const scrollTop = scrollContainer.current.scrollTop;

    if (scrollTop > (CONTENT_REPETITIONS - 1) * contentHeight) {
      scrollContainer.current.scrollTo({
        top: contentHeight + (scrollTop % contentHeight),
      });
    } else if (scrollTop < contentHeight) {
      scrollContainer.current.scrollTo({
        top:
          (CONTENT_REPETITIONS - 2) * contentHeight +
          (scrollTop % contentHeight),
      });
    }
  };

  useEffect(() => {
    if (!scrollContent.current || !scrollContainer.current) return;
    const contentHeight =
      scrollContent.current.offsetHeight / CONTENT_REPETITIONS;
    scrollContainer.current.scrollTo({ top: contentHeight + 1 });
  }, []);

  useEffect(() => {
    let handle: number | undefined;
    let lastTimestamp = performance.now();

    const scroll = (timestamp: DOMHighResTimeStamp) => {
      if (autoScroll.current === false) {
        lastTimestamp = timestamp;
        handle = requestAnimationFrame(scroll);
        return;
      }

      const timeDiff = timestamp - lastTimestamp;
      if (timeDiff / SCROLL_DIVIDER >= 1) {
        lastTimestamp = timestamp;
        scrollContainer.current?.scrollBy({
          top: 1,
        });
      }
      handle = requestAnimationFrame(scroll);
    };

    handle = requestAnimationFrame(scroll);

    return () => {
      if (handle) cancelAnimationFrame(handle);
    };
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
          onMouseEnter={() => (autoScroll.current = false)}
          onMouseLeave={() => (autoScroll.current = true)}
          sx={{
            display: 'grid',
            justifyContent: 'center',
            gridTemplateColumns: '350px 350px',
            gap: 5,
            '& > :nth-of-type(even)': {
              position: 'relative',
              top: 150,
            },
          }}
        >
          {children}
          {/* <Box sx={{ width: '100%', outline: '5px red solid' }} /> */}
          {children}
          {/* <Box sx={{ width: '100%', outline: '5px lime solid' }} /> */}
          {children}
        </Box>
      </Box>
    </CardContainerContext.Provider>
  );
}

export default CardContainer;
