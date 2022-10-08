import { Box, Card, CardContent, CardProps, Portal } from '@mui/material';
import useHover from '@react-hook/hover';
import { useContext, useEffect, useRef } from 'react';
import { SectionContentContext } from '../src/contexts/SectionContentContext';

function ExpandableCard(props: CardProps) {
  const hoverRef = useRef(null);
  const isHovered = useHover(hoverRef);

  const { portalContainer } = useContext(SectionContentContext);

  //   useEffect(() => {
  //     const aaa = setInterval(() => {
  //       console.log(hoverRef.current);
  //     }, 1000);
  //     return () => clearInterval(aaa);
  //   }, []);

  //   useEffect(() => {
  //     console.log('aaa', isHovered);
  //   }, [isHovered]);

  //   if (isHovered)
  //     return (
  //       <Portal container={portalContainer.current}>
  //         <Box ref={hoverRef}>Aaaaaa!</Box>
  //       </Portal>
  //     );

  return (
    <Box ref={hoverRef}>
      <Card
        sx={{
          transition: 'all 0.1s linear',
          width: 800,
          height: 400,
          flexShrink: 0,
          top: 0,
          left: 0,
          position: 'relative',
          //   '&:hover': {
          //     top: -100,
          //     left: -100,
          //     width: 1000,
          //     height: 600,
          //   },
        }}
      >
        <CardContent>{props.children}</CardContent>
      </Card>
      {/* {isHovered && (
        <Portal container={portalContainer.current}>
          <Box>Aaaaaa!</Box>
        </Portal>
      )} */}
    </Box>
  );
}

export default ExpandableCard;
