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
    <>
      <CanvasBackground />
      <Box
        component='header'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingY: 3,
          backgroundColor: 'hsl(272deg 46% 38% / 25%)',
          color: 'hsl(43deg 100% 50%)',
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
            <Box
              sx={{
                color: 'hsl(282deg 100% 73% / 48%)',
                marginLeft: -1,
                marginBottom: -1,
              }}
            >
              Norbert
            </Box>
            <Box sx={{}}>Niziołek</Box>
          </Typography>
        </Link>
      </Box>
      <Box
        component='main'
        sx={{
          flex: 1,
          padding: 2,
          color: 'rgb(255 255 255 / 95%)',
          paddingTop: 5,

          '& > *': {
            width: '100%',
            maxWidth: 800,
            margin: '0 auto',
            marginBottom: 4,
          },
        }}
      >
        {children}
      </Box>
    </>
  );
}

export default Layout;
