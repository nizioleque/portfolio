import { Box } from '@mui/material';
import { ReactNode, useRef, useEffect, useCallback } from 'react';
import { useInterval } from 'usehooks-ts';
import CardContainerContext from '../contexts/CardContainerContext';
import { animateScroll, Events } from 'react-scroll';
import { useSetRecoilState } from 'recoil';
import scrollEndState, { ScrollEndStateStatus } from '../atoms/scrollEndState';

interface CardContainerProps {
  children: ReactNode;
}

function CardContainer({ children }: CardContainerProps) {
  const scrollContainer = useRef<HTMLElement>(null);
  const scrollContent = useRef<HTMLElement>(null);

  const isAutoScrolling = useRef<boolean>(false);
  const blockScrollChange = useRef<boolean>(false);
  const pauseAutoScroll = useRef<boolean>(false);

  // infinite scroll (user/auto)
  const handleScroll = useCallback(() => {
    if (
      !scrollContent.current ||
      !scrollContainer.current ||
      isAutoScrolling.current ||
      blockScrollChange.current
    )
      return;

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

  // scroll animation
  useInterval(() => {
    if (pauseAutoScroll.current === false) {
      animateScroll.scrollMore(340, {
        duration: 1500,
        smooth: 'easeInOutQuad',
        containerId: 'scroll-container',
      });
    }
  }, 4000);

  const setScrollEndListener = useSetRecoilState(scrollEndState);

  Events.scrollEvent.register('begin', () => {
    isAutoScrolling.current = true;
  });

  Events.scrollEvent.register('end', () => {
    isAutoScrolling.current = false;

    setScrollEndListener((scrollEndListener) => {
      if (
        scrollEndListener === null ||
        scrollEndListener.status !== ScrollEndStateStatus.Scrolling
      )
        return scrollEndListener;

      blockScrollChange.current = true;
      return {
        id: scrollEndListener.id,
        status: ScrollEndStateStatus.Done,
      };
    });

    setTimeout(() => handleScroll(), 0);
  });

  return (
    <CardContainerContext.Provider
      value={{
        scrollContainer,
        blockScrollChange,
        pauseAutoScroll,
      }}
    >
      <Box
        id='scroll-container'
        ref={scrollContainer}
        sx={{
          overflowY: 'scroll',
          height: '100%',
          // TODO apply on production
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
            gridTemplateColumns: 'auto auto',
            gap: 5,
            '& > :nth-of-type(even) .card-list-item': {
              top: 150,
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
