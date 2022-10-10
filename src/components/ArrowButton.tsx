import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Box, Grow, IconButton } from '@mui/material';
import { useContext } from 'react';
import { CardContainerContext } from '../contexts/CardContainerContext';

interface ArrowButtonProps {
  direction: 'left' | 'right';
}

function ArrowButton({ direction }: ArrowButtonProps) {
  const { scrollCardContainerByChild, isCardContainerScrolledToEnd } =
    useContext(CardContainerContext);
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: direction === 'left' ? 24 : undefined,
        right: direction === 'right' ? 24 : undefined,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <Grow in={!isCardContainerScrolledToEnd(direction)}>
        <IconButton
          onMouseDown={() =>
            scrollCardContainerByChild(direction === 'left' ? -1 : 1)
          }
          sx={{
            color: '#000000',
            p: 2,
            boxShadow: 5,
            zIndex: 9999,
            backgroundColor: '#dddddd',
            pointerEvents: 'initial',
            '&:hover': {
              backgroundColor: '#aaaaaa',
            },
          }}
        >
          {direction === 'left' && <ArrowBackIosNew />}
          {direction === 'right' && <ArrowForwardIos />}
        </IconButton>
      </Grow>
    </Box>
  );
}

export default ArrowButton;
