import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ReactNode } from 'react';
import Logo from '../Logo';

interface ProjectLayoutProps {
  children: ReactNode;
}

const CanvasBackground = dynamic(() => import('../CanvasBackground'), {
  ssr: false,
});

function ProjectLayout({ children }: ProjectLayoutProps) {
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
        }}
      >
        <Link href='/' legacyBehavior passHref>
          <Logo fontSize='3rem' />
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

export default ProjectLayout;
