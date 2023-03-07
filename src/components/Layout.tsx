import { Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { shadowWeak } from '../theme';

interface LayoutProps {
  children: ReactNode;
}

const CanvasBackground = dynamic(() => import('./CanvasBackground'), {
  ssr: false,
});

function Layout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <CanvasBackground />
      <Box
        component='header'
        sx={{
          position: 'sticky',
          display: 'flex',
          justifyContent: 'center',
          paddingY: 4,
          backgroundColor: 'rgb(216,0,255,0.25)',
        }}
      >
        <Link href='/' legacyBehavior passHref>
          <Typography
            variant='h1'
            component='a'
            sx={{
              fontSize: '3rem',
              fontWeight: 'bold',
              letterSpacing: -2,
              fontStyle: 'italic',
              textShadow: shadowWeak,
            }}
          >
            Norbert Niziołek
          </Typography>
        </Link>
      </Box>
      <Box
        component='main'
        sx={{
          flex: 1,
          padding: 2,
          backgroundColor: 'rgb(255,255,255,0.25)',

          '& > *': {
            // marginBottom: 2,
            // borderRadius: 5,
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
