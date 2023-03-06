import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        outline: '10px red solid',
      }}
    >
      {children}
    </Box>
  );
}

export default Layout;
