import { Box, Typography, useMediaQuery } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { mobileLayoutQuery } from '../src/theme';
import IndexContext from '../src/contexts/IndexContext';
import { sections as sectionData } from '../src/constants';
import ProjectsCards from '../src/components/indexCards/ProjectsCards';
import ExtensionsCards from '../src/components/indexCards/ExtensionsCards';
import AutoHotkeyCards from '../src/components/indexCards/AutoHotkeyCards';

const Home: NextPage = () => {
  const [currentSection, setCurrentSection] = useState<string>('home');
  const [mobileNavHeight, setMobileNavHeight] = useState<number | undefined>(
    undefined
  );
  const [mobileMenuHeight, setMobileMenuHeight] = useState<number>(0);
  const [hideMenu, setHideMenu] = useState<boolean>(false);

  const scrollContainerMobile = useRef<HTMLDivElement>(null);

  const mobileLayout = useMediaQuery(mobileLayoutQuery);

  useEffect(() => {
    const index = sectionData.findIndex(
      (section) => section.id === currentSection
    );
    if (mobileLayout) {
      scrollContainerMobile.current?.scrollTo({
        left: index * document.body.clientWidth,
        behavior: 'auto',
      });
    } else {
      document.documentElement.style.scrollBehavior = 'initial';
      document.documentElement.scrollTo({
        top: index * document.body.clientHeight,
        behavior: 'auto',
      });
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, [mobileLayout]);

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

      <IndexContext.Provider
        value={{
          currentSection,
          setCurrentSection,
          mobileLayout,
          mobileNavHeight,
          setMobileNavHeight,
          mobileMenuHeight,
          setMobileMenuHeight,
          scrollContainerMobile,
          hideMenu,
          setHideMenu,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            height: '100%',
            alignItems: 'center',
            // overflowY: 'hidden',
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
          <Box sx={{ overflowY: 'scroll', height: '100%' }}>
            <Box
              sx={{
                display: 'grid',
                justifyContent: 'center',
                gridTemplateColumns: '350px 350px',
                gap: 5,
                '& > :nth-child(even)': {
                  backgroundColor: 'red',
                  position: 'relative',
                  top: '50%',
                },
                // overflowY: 'visible',
              }}
            >
              <ProjectsCards />
              <ExtensionsCards />
              <AutoHotkeyCards />
            </Box>
          </Box>
        </Box>
      </IndexContext.Provider>
    </>
  );
};

export default Home;
