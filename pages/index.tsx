import { Box, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import ProjectsCards from '../src/components/indexCards/ProjectsCards';
import ExtensionsCards from '../src/components/indexCards/ExtensionsCards';
import AutoHotkeyCards from '../src/components/indexCards/AutoHotkeyCards';
import CardContainer from '../src/components/CardContainer';
import dynamic from 'next/dynamic';

const CanvasBackground = dynamic(
  () => import('../src/components/CanvasBackground'),
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NORBERT NIZIOŁEK</title>
        <meta
          name='description'
          content="Norbert Niziołek's portfolio website"
        />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </Head>

      <Box
        sx={{
          position: 'absolute',
          zIndex: -1,
          maxWidth: '100%',
          maxHeight: '100%',
          overflow: 'hidden',
        }}
      >
        <CanvasBackground />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          height: '100%',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Typography
            variant='h1'
            sx={{
              fontWeight: 'bold',
              letterSpacing: -5,
              fontStyle: 'italic',
            }}
          >
            Norbert
            <br />
            Niziołek
          </Typography>
        </Box>
        <CardContainer>
          <ProjectsCards />
          <ExtensionsCards />
          <AutoHotkeyCards />
        </CardContainer>
      </Box>
    </>
  );
};

export default Home;
