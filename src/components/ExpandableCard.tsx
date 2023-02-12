import { Box, styled } from '@mui/material';
import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import CardContainerContext from '../contexts/CardContainerContext';
import { transitionTime, transitionTimingFunction } from '../theme';
import AnimateHeight, { Height } from 'react-animate-height';
import BezierEasing from 'bezier-easing';

const HEIGHT_MULTIPLIER = 0.7;
const SCROLL_OFFSET = 325;
const MIN_SCALE = 0;

const EASING = BezierEasing(0, 0, 0.58, 1);
const EASING_STEPS_SIZE = 200;
const EASING_STEPS = new Array(EASING_STEPS_SIZE)
  .fill(0)
  .map((_, index) => EASING(index / EASING_STEPS_SIZE));

const Card = styled(Box)({
  padding: 4 * 8,
  paddingBottom: 0,
  flexShrink: 0,

  background: 'rgb(255, 255, 255, 0.3)',
  borderRadius: 30,
  border: '1px rgb(0, 0, 0, 0.15) solid',
});

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
        let scaleProgress: number | null = null;

        if (currentTop >= -height && currentTop < height * HEIGHT_MULTIPLIER) {
          cardContainer.current.style.transformOrigin = 'bottom center';
          scaleProgress = Math.max(
            MIN_SCALE,
            currentTop / (height * HEIGHT_MULTIPLIER)
          );
        } else {
          const currentBottom =
            document.body.clientHeight - rect.bottom + SCROLL_OFFSET;
          if (
            currentBottom >= -height &&
            currentBottom < height * HEIGHT_MULTIPLIER
          ) {
            cardContainer.current.style.transformOrigin = 'top center';
            scaleProgress = Math.max(
              MIN_SCALE,
              currentBottom / (height * HEIGHT_MULTIPLIER)
            );
          } else {
            cardContainer.current.style.transform = '';
            cardContainer.current.style.opacity = '1';
          }
        }

        if (scaleProgress) {
          const easedValue =
            EASING_STEPS[Math.round(scaleProgress * EASING_STEPS_SIZE)];
          cardContainer.current.style.transform = `scale(${easedValue})`;
          cardContainer.current.style.opacity = (easedValue + 0.1).toString();
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
          zIndex: cardZIndex,

          display: 'grid',
          position: 'relative',
          willChange: 'transform, opacity',
        }}
        ref={cardContainer}
      >
        <Box
          sx={{
            gridColumn: 1,
            gridRow: 1,

            height: placeholder.current?.offsetHeight,
            width: placeholder.current?.offsetWidth,

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
            sx={{
              minHeight: '100%',
              transition: `background-color ${transitionTime}ms ${transitionTimingFunction}`,
              '&:hover': {
                backgroundColor: 'white',
              },
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
          sx={{
            gridColumn: 1,
            gridRow: 1,
            visibility: isHovering ? 'hidden' : undefined,
            aspectRatio: '1 / 1',
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
