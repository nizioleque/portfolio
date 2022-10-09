import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import AboutMe from '../src/components/indexSections/AboutMe';
import AutoHotkey from '../src/components/indexSections/AutoHotkey';
import Extensions from '../src/components/indexSections/Extensions';
import HomeSection from '../src/components/indexSections/HomeSection';
import Projects from '../src/components/indexSections/Projects';
import Navigation from '../src/components/Navigation';
import { htmlBackgroundColor } from '../src/theme';
import { IndexContext } from '../src/contexts/IndexContext';

const Home: NextPage = () => {
  const [currentSection, setCurrentSection] = useState<string>('home');

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <IndexContext.Provider
        value={{
          currentSection,
          setCurrentSection,
        }}
      >
        <Navigation />

        <Box sx={{ backgroundColor: htmlBackgroundColor }}>
          <HomeSection />
          <AboutMe />
          <Projects />
          <Extensions />
          <AutoHotkey />
        </Box>
      </IndexContext.Provider>
    </>
  );
};

export default Home;
