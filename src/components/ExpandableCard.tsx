import { Box, Card, CardProps, SxProps } from '@mui/material';
import { ReactNode, useContext, useRef, useState } from 'react';
import CardContainerContext from '../contexts/CardContainerContext';
import { transitionTime, transitionTimingFunction } from '../theme';
import AnimateHeight, { Height } from 'react-animate-height';

export interface ExpandableCardProps {
  width?: number;
  content: ReactNode;
  contentExpanded: ReactNode;
}

function ExpandableCard({ content, contentExpanded }: ExpandableCardProps) {
  const { getCardZIndex } = useContext(CardContainerContext);

  const placeholderRef = useRef<HTMLDivElement>(null);

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

  return (
    <Box sx={{ display: 'grid', position: 'relative' }}>
      <Box
        sx={{
          gridColumn: 1,
          gridRow: 1,

          height: placeholderRef.current?.offsetHeight,
          width: placeholderRef.current?.offsetWidth,
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
        ref={placeholderRef}
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
  );
}

export default ExpandableCard;
