import { Box, Typography, useTheme } from '@mui/material';
import { ReactNode, useRef } from 'react';
import { SectionContentContext } from '../src/contexts/SectionContentContext';

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

  return (
    <SectionContentContext.Provider value={{ portalContainer }}>
      <Box
        sx={{
          py: 5,
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
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

          <Typography variant='h2'>{title}</Typography>

          <Typography textAlign='justify'>{description}</Typography>

          {cards && (
            <>
              <Box sx={{ flexGrow: 0.2 }} />
              <Box className='card-container'>
                <Box
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
              {/* <Box ref={portalContainer} /> */}
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
