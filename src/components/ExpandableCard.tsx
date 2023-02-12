import { Box, styled } from '@mui/material';
import { ReactNode, useEffect, useRef } from 'react';
import BezierEasing from 'bezier-easing';

const HEIGHT_MULTIPLIER = 0.7;
const SCROLL_OFFSET = 325;
const MIN_SCALE = 0;

const EASING = BezierEasing(0, 0, 0.58, 1);
const EASING_STEPS_SIZE = 200;
const EASING_STEPS = new Array(EASING_STEPS_SIZE)
  .fill(0)
  .map((_, index) => EASING(index / EASING_STEPS_SIZE));

const Card = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    padding: 4,
    paddingBottom: 0,
    flexShrink: 0,

    background: 'rgb(255, 255, 255, 0.3)',
    borderRadius: 8,
    border: '1px rgb(0, 0, 0, 0.15) solid',

    position: 'relative',
    overflow: 'hidden',
    '--x': '10px',
    '--y': '10px',

    '&::before': {
      content: '""',
      zIndex: -1,
      width: 0,
      height: 0,
      background: 'radial-gradient(white 0%, rgb(255,0,0,0) 75%)',
      position: 'absolute',
      left: 'var(--x)',
      top: 'var(--y)',
      transition: `height 120ms cubic-bezier(0.61, 1, 0.88, 1), width 120ms cubic-bezier(0.61, 1, 0.88, 1)`,
      transform: 'translate(-50%, -50%)',
    },

    '&:hover::before': {
      transition: `height 120ms cubic-bezier(0.12, 0, 0.39, 0), width 120ms cubic-bezier(0.12, 0, 0.39, 0)`,
      width: 1000,
      height: 1000,
    },
  })
);

export interface ExpandableCardProps {
  width?: number;
  content: ReactNode;
}

function ExpandableCard({ content }: ExpandableCardProps) {
  const gridElement = useRef<HTMLDivElement>(null);
  const cardContainer = useRef<HTMLDivElement>(null);
  const placeholder = useRef<HTMLDivElement>(null);

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
          display: 'grid',
          position: 'relative',
          willChange: 'transform, opacity',
        }}
        ref={cardContainer}
      >
        <Card
          onMouseMove={(event) => {
            const target = event.currentTarget as HTMLElement;

            const x = event.clientX - target.getBoundingClientRect().left;
            const y = event.clientY - target.getBoundingClientRect().top;

            target.style.setProperty('--x', `${x}px`);
            target.style.setProperty('--y', `${y}px`);
          }}
          ref={placeholder}
          sx={{
            gridColumn: 1,
            gridRow: 1,
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
