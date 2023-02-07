import { Box, Card, CardProps, SxProps } from '@mui/material';
import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import CardContainerContext from '../contexts/CardContainerContext';
import { transitionTime, transitionTimingFunction } from '../theme';
import AnimateHeight, { Height } from 'react-animate-height';

const HEIGHT_MULTIPLIER = 0.7;
const SCROLL_OFFSET = 325;
const MIN_SCALE = 0;

export interface ExpandableCardProps {
  width?: number;
  content: ReactNode;
  contentExpanded: ReactNode;
}

function ExpandableCard({ content, contentExpanded }: ExpandableCardProps) {
  const { getCardZIndex } = useContext(CardContainerContext);

  const gridElement = useRef<HTMLDivElement>(null);
  const cardContainer = useRef<HTMLDivElement>(null);
  const placeholder = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const [isHiding, setIsHiding] = useState<boolean>(false);

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

  const cardProps: CardProps = {
    variant: 'outlined',
  };

  const cardStyle: SxProps = {
    p: 4,
    pb: 0,
    flexShrink: 0,
  };

  useEffect(() => {
    let handle: number | undefined;
    let lastTop = 0;

    const f = () => {
      const rect = gridElement.current?.getBoundingClientRect();
      const currentTop = (rect?.top ?? 0) + SCROLL_OFFSET;
      if (
        rect &&
        cardContainer.current &&
        Math.abs(currentTop - lastTop) >= 1
      ) {
        const height = rect.height;
        lastTop = currentTop;

        if (currentTop >= -height && currentTop < height * HEIGHT_MULTIPLIER) {
          cardContainer.current.style.transformOrigin = 'bottom center';
          cardContainer.current.style.transform = `scale(${Math.max(
            MIN_SCALE,
            currentTop / (height * HEIGHT_MULTIPLIER)
          )})`;
        } else {
          const currentBottom =
            document.body.clientHeight - rect.bottom + SCROLL_OFFSET;
          if (
            currentBottom >= -height &&
            currentBottom < height * HEIGHT_MULTIPLIER
          ) {
            cardContainer.current.style.transformOrigin = 'top center';
            cardContainer.current.style.transform = `scale(${Math.max(
              MIN_SCALE,
              currentBottom / (height * HEIGHT_MULTIPLIER)
            )})`;
          } else {
            cardContainer.current.style.transform = '';
          }
        }
      }

      handle = requestAnimationFrame(f);
    };

    handle = requestAnimationFrame(f);

    return () => cancelAnimationFrame(handle!);
  }, []);

  return (
    <Box ref={gridElement} display='grid'>
      <Box
        sx={{
          display: 'grid',
          position: 'relative',
        }}
        ref={cardContainer}
      >
        <Box
          sx={{
            gridColumn: 1,
            gridRow: 1,

            height: placeholder.current?.offsetHeight,
            width: placeholder.current?.offsetWidth,
            zIndex: cardZIndex,

            display: !isHovering ? 'none' : 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Card
            onTouchMove={(event) => {
              // TODO hide all expanded cards on scroll
              mouseLeave();
            }}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            {...cardProps}
            sx={{
              ...cardStyle,
              minHeight: '100%',
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
        <Card
          onMouseEnter={mouseEnter}
          onClick={mouseEnter}
          ref={placeholder}
          {...cardProps}
          sx={{
            gridColumn: 1,
            gridRow: 1,

            ...cardStyle,
            visibility: isHovering ? 'hidden' : undefined,
          }}
        >
          {content}
          <Box height={32} />
        </Card>
      </Box>
    </Box>
  );
}

export default ExpandableCard;
