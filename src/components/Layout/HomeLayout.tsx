import { Box } from '@mui/material';
import { ReactNode } from 'react';
import Nav from './Nav';

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <Box
      sx={{
        backgroundColor: '#141414',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <Nav />
      {children}
    </Box>
  );
}

export default HomeLayout;
