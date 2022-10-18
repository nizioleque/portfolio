import { GitHub, MailOutline } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import IndexContext from '../../contexts/IndexContext';
import {
  shadowStrong,
  transitionTimingFunction,
  dynamicFontSize,
} from '../../theme';
import Section from '../Section';
import SectionContent from '../SectionContent';
import { Textfit } from 'react-textfit';

const transitionTime = 200;

const texts: string[] = [
  'web development',
  'Duolingo lessons',
  'drink beer',
  'university bullshit',
  'break traffic laws while cycling',
];

function HomeSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [isTextHidden, setIsTextHidden] = useState<boolean>(false);
  const nextText = () => {
    setIsTextHidden(true);
    setTimeout(() => {
      setCurrentTextIndex(
        (currentIndex: number) => (currentIndex + 1) % texts.length
      );
      setIsTextHidden(false);
    }, transitionTime);
  };

  const { mobileLayout } = useContext(IndexContext);

  useEffect(() => {
    const interval = setInterval(() => nextText(), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id='home' fullscreen>
      <SectionContent>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          <Box>
            <Typography
              sx={{
                ...dynamicFontSize(2.6),
                letterSpacing: -1,
                color: '#ffffffcf',
                textShadow: shadowStrong,
              }}
            >
              {"Hello, I'm"}
            </Typography>
            <Typography
              variant='h1'
              sx={{
                ...dynamicFontSize(7.5),
                fontWeight: 'bold',
                letterSpacing: -5,
                fontStyle: 'italic',
                color: 'hsl(43deg 100% 50%)',
                lineHeight: !mobileLayout ? '100%' : undefined,
              }}
            >
              {mobileLayout ? (
                <Box>
                  <Textfit mode='single'>Norbert</Textfit>
                  <Textfit mode='single'>Niziołek</Textfit>
                </Box>
              ) : (
                <>{'Norbert Niziołek'}</>
              )}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gridTemplateRows: '1fr',
              '& > *': { gridColumn: '1 / 1', gridRow: '1 / 1' },
            }}
          >
            <Typography
              sx={{
                fontSize: dynamicFontSize(2.2),
                textShadow: shadowStrong,
              }}
            >
              I do{' '}
              <Box
                component='span'
                sx={{
                  transition: `opacity ${transitionTime}ms ${transitionTimingFunction}`,
                  opacity: isTextHidden ? 0 : 1,
                }}
              >
                {texts[currentTextIndex]}.
              </Box>
            </Typography>
            {texts.map((text) => (
              <Typography
                key={text}
                sx={{
                  fontSize: dynamicFontSize(2.2),
                  visibility: 'hidden',
                }}
              >
                I do <Box component='span'>{text}.</Box>
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            <Button
              variant='strong'
              startIcon={<GitHub />}
              component='a'
              href='https://github.com/nizioleque'
              target='_blank'
            >
              Github
            </Button>
            <Button
              variant='strong'
              startIcon={<MailOutline />}
              component='a'
              href='mailto:nizioleque@gmail.com'
              target='_blank'
            >
              Mail
            </Button>
          </Box>
        </Box>
      </SectionContent>
    </Section>
  );
}

export default HomeSection;
