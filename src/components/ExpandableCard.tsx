import { Box, Card, Portal, SxProps } from '@mui/material';
import { ReactNode, useContext, useRef, useState } from 'react';
import CardContainerContext from '../contexts/CardContainerContext';
import useHover from 'react-use-hover';
import { transitionTime, transitionTimingFunction } from '../theme';
import AnimateHeight from 'react-animate-height';

export interface ExpandableCardProps {
  width?: number;
  content: ReactNode;
  contentExpanded: ReactNode;
}

function ExpandableCard({
  width = 550,
  content,
  contentExpanded,
}: ExpandableCardProps) {
  const placeholderRef = useRef<HTMLDivElement>(null);
  const {
    portalContainer,
    cardScrollLeft,
    scrollCardContainer,
    getCardZIndex,
  } = useContext(CardContainerContext);

  const [isHovering, hoverProps] = useHover({
    mouseLeaveDelayMS: transitionTime,
  });

  const [cardZIndex, setCardZIndex] = useState<number>(getCardZIndex());
  const updateCardZIndex = () => setCardZIndex(getCardZIndex());

  const cardStyle: SxProps = {
    p: 4,
    width,
    flexShrink: 0,
  };

  return (
    <>
      <Portal container={portalContainer.current}>
        <Box
          sx={{
            position: 'absolute',
            top: placeholderRef.current?.offsetTop,
            left: placeholderRef.current?.offsetLeft,
            height: placeholderRef.current?.offsetHeight,
            zIndex: cardZIndex,

            display: !isHovering ? 'none' : 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Card
            onWheel={(event) =>
              event.deltaX !== -0 && scrollCardContainer(event.deltaX)
            }
            onMouseEnter={(event) => {
              updateCardZIndex();
              hoverProps.onMouseEnter?.(event);
            }}
            onMouseLeave={hoverProps.onMouseLeave}
            elevation={10}
            sx={{
              ...cardStyle,
              minHeight: placeholderRef.current?.offsetHeight,
              transform: `translateX(${-cardScrollLeft}px)`,
            }}
          >
            {content}
            <AnimateHeight
              duration={transitionTime}
              easing={transitionTimingFunction}
              height={isHovering ? 'auto' : 0}
              animateOpacity
            >
              <Box>{contentExpanded}</Box>
            </AnimateHeight>
          </Card>
        </Box>
      </Portal>
      <Card
        onMouseEnter={hoverProps.onMouseEnter}
        ref={placeholderRef}
        sx={{
          ...cardStyle,
          visibility: isHovering ? 'hidden' : undefined,
        }}
      >
        {content}
      </Card>
    </>
  );
}

export default ExpandableCard;
