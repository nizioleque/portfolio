import { Box, Typography, useTheme } from '@mui/material';
import { ReactNode, useContext } from 'react';
import IndexContext from '../contexts/IndexContext';
import SectionContext from '../contexts/SectionContext';
import CardContainer from './CardContainer';

interface SectionContentProps {
  title?: string;
  description?: string;
  cards?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
}

function SectionContent({
  title,
  description,
  cards,
  children,
  footer,
}: SectionContentProps) {
  const theme = useTheme();

  const { inView } = useContext(SectionContext);
  const { mobileLayout } = useContext(IndexContext);

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
          contain: 'content',
          '& > :not(.card-container)': {
            mx: theme.horizontalMargin,
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }} />
        {title && (
          <Typography
            variant='h2'
            sx={{
              transition:
                'letter-spacing 1000ms 50ms cubic-bezier(0.22, 0.61, 0.36, 1)',
              letterSpacing: inView && !mobileLayout ? 8 : -2, // TODO: fix letter spacing animation on mobile
            }}
          >
            {title}
          </Typography>
        )}

        {description && (
          <Typography variant='bodyLarge' textAlign='justify'>
            {description}
          </Typography>
        )}

        {cards && (
          <>
            <Box sx={{ flexGrow: 0.2 }} />
            <CardContainer cards={cards} />
          </>
        )}
        {children && <>{children}</>}
        {footer && (
          <>
            <Box sx={{ flexGrow: 0.2 }} />
            <>{footer}</>
          </>
        )}

        <Box sx={{ flexGrow: 1 }} />
      </Box>
    </Box>
  );
}

export default SectionContent;
