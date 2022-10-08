import {
  Instagram,
  MailOutline,
  SentimentVeryDissatisfied,
  Telegram,
  ThumbUpOutlined,
} from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import ExpandableCard from '../components/ExpandableCard';
import Navigation from '../components/Navigation';
import Section from '../components/Section';
import SectionContent from '../components/SectionContent';
import { htmlBackgroundColor } from '../src/constants';
import { IndexContext } from '../src/contexts/IndexContext';

const Li = ({ icon, text }: any) => (
  <ListItem sx={{ py: 0, '& > .MuiListItemIcon-root': { minWidth: 48 } }}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

const Home: NextPage = () => {
  const theme = useTheme();
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
          <Section id='home' fullscreen>
            <Box
              sx={{
                textShadow: '0 0 5px rgba(0,0,0,0.5)',
                px: 12,
              }}
            >
              <Box sx={{ fontSize: '2.5rem', fontWeight: 700 }}>
                Hello, my name is
              </Box>
              <Box
                sx={{
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: theme.palette.secondary.main,
                }}
              >
                Janusz Kowalski
              </Box>
            </Box>
          </Section>
          <Section id='about-me'>
            <SectionContent
              title='About me'
              description='I am Norbert Niziołek, a student-debil based in Warsaw, Poland. Every day I drink piwo and strive to use technology to my advantage. Programming enables me to craft tools that aid my daily life.'
            >
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  columnGap: 8,
                  rowGap: theme.gap,
                }}
              >
                <Box>
                  <Typography variant='h4'>what I love</Typography>
                  <Box>
                    <List>
                      <Li
                        icon={<ThumbUpOutlined />}
                        text='learning languages'
                      />
                      <Li icon={<ThumbUpOutlined />} text='cycling' />
                      <Li icon={<ThumbUpOutlined />} text='vegan junk food' />
                    </List>
                  </Box>
                </Box>
                <Box>
                  <Typography variant='h4'>what I hate</Typography>
                  <List>
                    <Li
                      icon={<SentimentVeryDissatisfied />}
                      text='Polskie Koleje Państwowe'
                    />
                    <Li icon={<SentimentVeryDissatisfied />} text='Apple' />
                    <Li
                      icon={<SentimentVeryDissatisfied />}
                      text='vehicles (except trains)'
                    />
                  </List>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  columnGap: 1,
                  rowGap: 2,
                }}
              >
                <Typography>If you disagree, insult me here:</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: 1,
                  }}
                >
                  <IconButton
                    href='https://instagram.com/nizioleque'
                    target='_blank'
                  >
                    <Instagram fontSize='large' />
                  </IconButton>
                  <IconButton href='https://t.me/pedalarz' target='_blank'>
                    <Telegram fontSize='large' />
                  </IconButton>
                  <IconButton
                    href='mailto:nizioleque@gmail.com'
                    target='_blank'
                  >
                    <MailOutline fontSize='large' />
                  </IconButton>
                </Box>
              </Box>
            </SectionContent>
          </Section>
          <Section id='projects'>
            <SectionContent
              title='Projects'
              description='Whenever I come up with a new programming project, I rush to actualize it. My attention span never exceeds thirty minutes, so I give up after a couple of lines of code. And then I forget about it for the rest of my life. This page is the ideal place to store those discarded scraps of code.'
            />
          </Section>
          <Section id='extensions'>
            <SectionContent
              title='Browser extensions'
              description='Since I comprehended the immense potential of browser extensions at 13 years old, I have created a lengthy list of ideas. Surprisingly, I managed to turn a couple of them into functional products.'
              cards={
                <>
                  <ExpandableCard>
                    Ea minim mollit eiusmod magna ad voluptate. Ut minim dolore
                    deserunt ea. Enim et eu adipisicing ipsum sit in. Officia
                    tempor sunt qui incididunt laboris enim minim minim culpa id
                    amet incididunt mollit nisi.
                  </ExpandableCard>
                  <Card sx={{ width: 800, flexShrink: 0 }}>
                    <CardContent>
                      Ea minim mollit eiusmod magna ad voluptate. Ut minim
                      dolore deserunt ea. Enim et eu adipisicing ipsum sit in.
                      Officia tempor sunt qui incididunt laboris enim minim
                      minim culpa id amet incididunt mollit nisi. Nostrud
                      excepteur magna reprehenderit sunt incididunt excepteur
                      voluptate excepteur exercitation culpa eu eu. Dolor
                      incididunt elit commodo consectetur officia in. Cillum
                      velit excepteur aliqua eu enim.
                    </CardContent>
                  </Card>
                  <Card sx={{ width: 400, flexShrink: 0 }}>
                    <CardContent>
                      Ea minim mollit eiusmod magna ad voluptate. Ut minim
                      dolore deserunt ea. Enim et eu adipisicing ipsum sit in.
                      Officia tempor sunt qui incididunt laboris enim minim
                      minim culpa id amet incididunt mollit nisi.
                    </CardContent>
                  </Card>
                  <Card sx={{ width: 400, flexShrink: 0 }}>
                    <CardContent>
                      Ea minim mollit eiusmod magna ad voluptate. Ut minim
                      dolore deserunt ea. Enim et eu adipisicing ipsum sit in.
                      Officia tempor sunt qui incididunt laboris enim minim
                      minim culpa id amet incididunt mollit nisi.
                    </CardContent>
                  </Card>
                  <Card sx={{ width: 400, flexShrink: 0 }}>
                    <CardContent>
                      Ea minim mollit eiusmod magna ad voluptate. Ut minim
                      dolore deserunt ea. Enim et eu adipisicing ipsum sit in.
                      Officia tempor sunt qui incididunt laboris enim minim
                      minim culpa id amet incididunt mollit nisi.
                    </CardContent>
                  </Card>
                </>
              }
            />
          </Section>

          <Section id='autohotkey'>
            <SectionContent
              title='AutoHotkey'
              description='I refuse to put up with the limitations of the OS. When I am annoyed by the lack of functionality, I add it by myself. To achieve this goal I have chosen AutoHotkey and AutoIt — two incomprehensible and obsolete languages.'
            />
          </Section>
        </Box>
      </IndexContext.Provider>
    </>
  );
};

export default Home;
