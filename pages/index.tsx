import { Box, useMediaQuery } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode, useEffect, useRef, useState } from 'react';
import AboutMe from '../src/components/indexSections/AboutMe';
import AutoHotkey from '../src/components/indexSections/AutoHotkey';
import Extensions from '../src/components/indexSections/Extensions';
import HomeSection from '../src/components/indexSections/HomeSection';
import Projects from '../src/components/indexSections/Projects';
import Navigation from '../src/components/Navigation';
import { htmlBackgroundColor, mobileLayoutQuery } from '../src/theme';
import IndexContext from '../src/contexts/IndexContext';
import { sections as sectionData } from '../src/constants';

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

  const sections: ReactNode[] = [
    <HomeSection key='home' />,
    <AboutMe key='about-me' />,
    <Projects key='projects' />,
    <Extensions key='extensions' />,
    <AutoHotkey key='autohotkey' />,
  ];

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
        <Navigation />

        <Box
          ref={scrollContainerMobile}
          sx={{
            backgroundColor: htmlBackgroundColor,
            [mobileLayoutQuery]: {
              display: 'flex',
              flex: 1,
              overflowY: 'scroll',
              scrollSnapType: 'x mandatory',
              height: '100%',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            },
          }}
        >
          {sections}
        </Box>
      </IndexContext.Provider>
    </>
  );
};

export default Home;
