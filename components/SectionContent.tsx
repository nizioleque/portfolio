import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface SectionContentProps {
  title: string;
  description: string;
  cards?: ReactNode;
}

const gradientWidth = 100;

function SectionContent({ title, description, cards }: SectionContentProps) {

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
          //   px: 10,
          '& > :not(.card-container)': {
            mx: 10,
          },
          '& > .card-container': {
            // mr: 8,
          },

          '& > .card-container > :first-child': {
            pl: 10,
            pr: `${gradientWidth}px`,
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }} />

        <Typography variant='h2'>{title}</Typography>

        <Typography sx={{ mt: 2, maxWidth: 1000 }} textAlign='justify'>
          {description}
        </Typography>

        {cards && (
          <>
            <Box sx={{ flexGrow: 0.2 }} />
            <Box position='relative' className='card-container' mt={5}>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  overflowX: 'scroll', // TODO: shadow not visible!!!
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

        <Box sx={{ flexGrow: 1 }} />
      </Box>
    </Box>
  );
}

export default SectionContent;
