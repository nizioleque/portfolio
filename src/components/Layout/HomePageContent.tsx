import { Stack } from '@mui/material';
import { ReactNode } from 'react';

interface HomePageContentProps {
  children: ReactNode;
}

function HomePageContent({ children }: HomePageContentProps) {
  return (
    <Stack paddingY='10vh' minHeight='100%'>
      <Stack gap={6} margin='auto'>
        {children}
      </Stack>
    </Stack>
  );
}

export default HomePageContent;
