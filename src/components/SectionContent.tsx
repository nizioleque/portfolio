import { Box, Typography, useTheme } from '@mui/material';
import { ReactNode, useContext, useRef, useState } from 'react';
import { SectionContentContext } from '../contexts/SectionContentContext';
import { SectionContext } from '../contexts/SectionContext';

const horizontalMargin = 'max(13vw, 40px)';

interface SectionContentProps {
  title: string;
  description: string;
  cards?: ReactNode;
  children?: ReactNode;
}

function SectionContent({
  title,
  description,
  cards,
  children,
}: SectionContentProps) {
  const theme = useTheme();
  const portalContainer = useRef<HTMLElement>();
  const cardContainerRef = useRef<HTMLElement>();

  const [cardScrollLeft, setCardScrollLeft] = useState<number>(0);
  const scrollCardContainer = (offset: number): void => {
    cardContainerRef.current?.scrollBy(offset, 0);
  };

  const cardZIndex = useRef<number>(1);
  const getCardZIndex = (): number => {
    return cardZIndex.current++;
  };

  const { inView } = useContext(SectionContext);

  return (
    <SectionContentContext.Provider
      value={{
        portalContainer,
        cardScrollLeft,
        scrollCardContainer,
        getCardZIndex,
      }}
    >
      <Box
        sx={{
          py: 5,
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          contain: 'content',
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: theme.gap,
            '& > :not(.card-container)': {
              mx: horizontalMargin,
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }} />

          <Typography
            variant='h2'
            sx={{
              transition:
                'letter-spacing 1000ms 50ms cubic-bezier(0.22, 0.61, 0.36, 1)',
              letterSpacing: inView ? 8 : -2,
            }}
          >
            {title}
          </Typography>

          <Typography variant='bodyLarge' textAlign='justify'>
            {description}
          </Typography>

          {cards && (
            <>
              <Box sx={{ flexGrow: 0.2 }} />
              <Box className='card-container'>
                <Box
                  ref={cardContainerRef}
                  onScroll={() => {
                    setCardScrollLeft(
                      cardContainerRef.current?.scrollLeft ?? 0
                    );
                  }}
                  sx={{
                    display: 'flex',
                    gap: 2,
                    overflowX: 'scroll',
                    py: 2,
                    px: horizontalMargin,
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    },
                  }}
                >
                  {cards}
                </Box>
              </Box>
              <Box ref={portalContainer} />
            </>
          )}
          {children && <>{children}</>}

          <Box sx={{ flexGrow: 1 }} />
        </Box>
      </Box>
    </SectionContentContext.Provider>
  );
}

export default SectionContent;