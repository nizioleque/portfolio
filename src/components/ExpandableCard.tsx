import { Box, Card, CardContent, CardProps, Portal } from '@mui/material';
import { useContext, useRef, useState } from 'react';
import { SectionContentContext } from '../contexts/SectionContentContext';
import useHover from 'react-use-hover';

const transitionTime = 300;

function ExpandableCard(props: CardProps) {
  const placeholderRef = useRef<HTMLDivElement>(null);
  const {
    portalContainer,
    cardScrollLeft,
    scrollCardContainer,
    getCardZIndex,
  } = useContext(SectionContentContext);

  const [isHovering, hoverProps] = useHover({
    mouseLeaveDelayMS: transitionTime,
  });

  const [cardZIndex, setCardZIndex] = useState<number>(getCardZIndex());
  const updateCardZIndex = () => setCardZIndex(getCardZIndex());

  if (isHovering) {
    return (
      <>
        <Box
          sx={{ width: 800, height: 400, flexShrink: 0 }}
          ref={placeholderRef}
        />
        <Portal container={portalContainer.current}>
          <Card
            onWheel={(event) => scrollCardContainer(event.deltaX)}
            onMouseEnter={(event) => {
              updateCardZIndex();
              hoverProps.onMouseEnter?.(event);
            }}
            onMouseLeave={hoverProps.onMouseLeave}
            sx={{
              position: 'absolute',
              transition: `${transitionTime}ms ease-in-out`,
              transitionProperty: 'inset, width, height',
              top: placeholderRef.current?.offsetTop,
              left: placeholderRef.current?.offsetLeft,
              transform: `translateX(${-cardScrollLeft}px)`,
              width: 800,
              height: 400,
              '&:hover': {
                ...(placeholderRef.current && {
                  top: placeholderRef.current.offsetTop - 100,
                  left: placeholderRef.current.offsetLeft - 100,
                  width: 1000,
                  height: 600,
                }),
              },
              zIndex: cardZIndex,
            }}
          >
            <CardContent>{props.children}</CardContent>
          </Card>
        </Portal>
      </>
    );
  }

  return (
    <>
      <Card
        onMouseEnter={hoverProps.onMouseEnter}
        ref={placeholderRef}
        sx={{
          width: 800,
          height: 400,
          flexShrink: 0,
        }}
      >
        <CardContent>{props.children}</CardContent>
      </Card>
    </>
  );
}

export default ExpandableCard;
