import { Box, Card, Portal, SxProps } from '@mui/material';
import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import CardContainerContext from '../contexts/CardContainerContext';
import { transitionTime, transitionTimingFunction } from '../theme';
import AnimateHeight, { Height } from 'react-animate-height';

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
  const {
    portalContainer,
    cardScrollLeft,
    scrollCardContainer,
    getCardZIndex,
  } = useContext(CardContainerContext);

  const placeholderRef = useRef<HTMLDivElement>(null);
  const expandedCardRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const [isHiding, setIsHiding] = useState<boolean>(false);
  const [_, setTouchStartX] = useState<number>(0);

  const mouseEnter = () => {
    if (!isMouseOver) {
      updateCardZIndex();
      setIsHovering(true);
      setIsMouseOver(true);
      setIsHiding(false);
    }
  };
  const mouseLeave = () => {
    setIsMouseOver(false);
    hide();
  };
  const hide = () => {
    setIsHiding(true);
  };
  const animationEnd = (newHeight: Height) => {
    if (newHeight === 0) {
      setIsHiding(false);
      setIsHovering(false);
    }
  };

  const [cardZIndex, setCardZIndex] = useState<number>(getCardZIndex());
  const updateCardZIndex = () => setCardZIndex(getCardZIndex());

  const cardStyle: SxProps = {
    p: 4,
    pb: 0,
    width,
    flexShrink: 0,
  };


  useEffect(() => {
    const handler = (event: WheelEvent) => {
      hide();
      event.preventDefault();
      event.deltaX !== -0 && scrollCardContainer(event.deltaX);
    };
    const container = expandedCardRef.current;
    if (!container) return;
    container.addEventListener('wheel', handler, { passive: false });
    return () => container.removeEventListener('wheel', handler);
  }, [scrollCardContainer]);

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
            ref={expandedCardRef}
            onTouchStart={(event) => {
              setTouchStartX(event.changedTouches[0].screenX);
            }}
            onTouchMove={(event) => {
              mouseLeave();
              setTouchStartX((previousX) => {
                const currentX = event.changedTouches[0].screenX;
                const deltaX = previousX - currentX;
                scrollCardContainer(deltaX);
                return currentX;
              });
            }}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            sx={{
              ...cardStyle,
              minHeight: placeholderRef.current?.offsetHeight,
              width: placeholderRef.current?.offsetWidth,
              transform: `translateX(${-cardScrollLeft}px)`,
              touchAction: 'none',
            }}
          >
            {content}

            <AnimateHeight
              duration={transitionTime}
              easing={transitionTimingFunction}
              height={isHovering && !isHiding ? 'auto' : 0}
              animateOpacity
              onHeightAnimationEnd={animationEnd}
            >
              <Box>{contentExpanded}</Box>
              <Box height={32} />
            </AnimateHeight>
          </Card>
        </Box>
      </Portal>
      <Card
        onMouseEnter={mouseEnter}
        onClick={mouseEnter}
        ref={placeholderRef}
        sx={{
          ...cardStyle,
          visibility: isHovering ? 'hidden' : undefined,
          maxWidth: '100%',
        }}
      >
        {content}
        <Box height={32} />
      </Card>
    </>
  );
}

export default ExpandableCard;
