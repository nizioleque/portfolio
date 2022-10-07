import { Box, Typography, useTheme } from '@mui/material';
import { ReactNode } from 'react';

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

  return (
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
          '& > *': {
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
            <Box sx={{ mx: 0 }}>
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
          </>
        )}
        {children && <>{children}</>}

        <Box sx={{ flexGrow: 1 }} />
      </Box>
    </Box>
  );
}

export default SectionContent;
