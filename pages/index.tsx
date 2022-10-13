import { Box, useMediaQuery } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode, useContext, useRef, useState } from 'react';
import AboutMe from '../src/components/indexSections/AboutMe';
import AutoHotkey from '../src/components/indexSections/AutoHotkey';
import Extensions from '../src/components/indexSections/Extensions';
import HomeSection from '../src/components/indexSections/HomeSection';
import Projects from '../src/components/indexSections/Projects';
import Navigation from '../src/components/Navigation';
import { htmlBackgroundColor, mobileLayoutQuery } from '../src/theme';
import IndexContext from '../src/contexts/IndexContext';

const Home: NextPage = () => {
  const [currentSection, setCurrentSection] = useState<string>('home');
  const [mobileNavHeight, setMobileNavHeight] = useState<number | undefined>(
    undefined
  );
  const [mobileMenuHeight, setMobileMenuHeight] = useState<number>(0);

  const scrollContainerMobile = useRef<HTMLDivElement>(null);

  const mobileLayout = useMediaQuery(mobileLayoutQuery);

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
        }}
      >
        <Navigation />

        {mobileLayout ? (
          <LayoutMobile sections={sections} />
        ) : (
          <LayoutDesktop sections={sections} />
        )}
      </IndexContext.Provider>
    </>
  );
};

interface LayoutDesktopProps {
  sections: ReactNode[];
}

const LayoutDesktop = ({ sections }: LayoutDesktopProps) => {
  return (
    <Box
      sx={{
        backgroundColor: htmlBackgroundColor,
      }}
    >
      {sections}
    </Box>
  );
};

interface LayoutMobileProps {
  sections: ReactNode[];
}

const LayoutMobile = ({ sections }: LayoutMobileProps) => {
  const { scrollContainerMobile } = useContext(IndexContext);

  return (
    <Box
      ref={scrollContainerMobile}
      sx={{
        backgroundColor: htmlBackgroundColor,
        display: 'flex',
        flex: 1,
        overflowY: 'scroll',
        scrollBehavior: 'smooth',
        scrollSnapType: 'x mandatory',
        height: '100%',
      }}
    >
      {sections}
    </Box>
  );
};

export default Home;
