import { Box } from '@mui/material';
import { ReactNode, useRef } from 'react';
import CardContainerContext from '../contexts/CardContainerContext';

interface CardContainerProps {
  children: ReactNode;
}

function CardContainer({ children }: CardContainerProps) {
  const cardZIndex = useRef<number>(1);
  const getCardZIndex = (): number => {
    return cardZIndex.current++;
  };

  return (
    <CardContainerContext.Provider
      value={{
        getCardZIndex,
      }}
    >
      <Box
        sx={{
          overflowY: 'scroll',
          height: '100%',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            justifyContent: 'center',
            gridTemplateColumns: '350px 350px',
            gap: 5,
            '& > :nth-of-type(even)': {
              position: 'relative',
              top: 150,
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </CardContainerContext.Provider>
  );
}

export default CardContainer;
