import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Box, Grow, IconButton } from '@mui/material';
import { useContext } from 'react';
import CardContainerContext from '../contexts/CardContainerContext';
import IndexContext from '../contexts/IndexContext';

interface ArrowButtonProps {
  direction: 'left' | 'right';
}

function ArrowButton({ direction }: ArrowButtonProps) {
  const { scrollCardContainerByChild, isCardContainerScrolledToEnd } =
    useContext(CardContainerContext);

  const { mobileLayout } = useContext(IndexContext);

  const spacing = mobileLayout ? -18 : 24;
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: direction === 'left' ? spacing : undefined,
        right: direction === 'right' ? spacing : undefined,
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
            paddingLeft:
              mobileLayout && direction === 'right' ? '3px' : undefined,
            paddingRight:
              mobileLayout && direction === 'left' ? '3px' : undefined,
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
