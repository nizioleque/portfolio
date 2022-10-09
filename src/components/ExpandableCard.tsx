import { Box, Card, Portal, SxProps } from '@mui/material';
import { ReactNode, useContext, useRef, useState } from 'react';
import { SectionContentContext } from '../contexts/SectionContentContext';
import useHover from 'react-use-hover';

const transitionTime = 300;

export interface ExpandableCardProps {
  width?: number;
  height: number;
  heightExpanded: number;
  content: ReactNode;
  contentExpanded: ReactNode;
}

function ExpandableCard({
  width = 550,
  height,
  heightExpanded,
  content,
  contentExpanded,
}: ExpandableCardProps) {
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

  const expandedContentRef = useRef<HTMLDivElement>(null);
  expandedContentRef.current && getComputedStyle(expandedContentRef.current);

  const cardStyle: SxProps = {
    p: 4,
    width,
    height,
    flexShrink: 0,
  };

  if (isHovering) {
    return (
      <>
        <Box sx={{ ...cardStyle }} ref={placeholderRef} />
        <Portal container={portalContainer.current}>
          <Card
            onWheel={(event) => scrollCardContainer(event.deltaX)}
            onMouseEnter={(event) => {
              updateCardZIndex();
              hoverProps.onMouseEnter?.(event);
            }}
            onMouseLeave={hoverProps.onMouseLeave}
            sx={{
              ...cardStyle,
              position: 'absolute',
              transition: `${transitionTime}ms ease-in-out`,
              transitionProperty: 'inset, width, height',
              top: placeholderRef.current?.offsetTop,
              left: placeholderRef.current?.offsetLeft,
              transform: `translateX(${-cardScrollLeft}px)`,
              '&:hover': {
                ...(placeholderRef.current && {
                  top:
                    placeholderRef.current.offsetTop -
                    (heightExpanded - height) / 2,
                  height: heightExpanded,
                }),
                '& .card-content-expanded': {
                  opacity: 1,
                },
              },
              zIndex: cardZIndex,
            }}
          >
            {content}
            <Box
              className='card-content-expanded'
              ref={expandedContentRef}
              sx={{
                transition: `opacity ${transitionTime}ms ease-in-out`,
                opacity: 0,
              }}
            >
              {contentExpanded}
            </Box>
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
          ...cardStyle,
        }}
      >
        {content}
      </Card>
    </>
  );
}

export default ExpandableCard;
