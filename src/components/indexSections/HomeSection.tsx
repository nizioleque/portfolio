import { GitHub, MailOutline } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { horizontalMargin } from '../../constants';
import { shadowStrong, transitionTimingFunction } from '../../theme';
import Section from '../Section';

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

  useEffect(() => {
    const interval = setInterval(() => nextText(), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id='home' fullscreen>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 6,
          px: horizontalMargin,
          textShadow: '6px 6px 4px rgba(0, 0, 0, 0.8)',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: '2.6rem',
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
              fontSize: '7.5rem',
              fontWeight: 'bold',
              letterSpacing: -5,
              fontStyle: 'italic',
              color: 'hsl(43deg 100% 50%)',
              lineHeight: '100%',
            }}
          >
            Norbert Niziołek
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: '2.2rem',
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
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Button variant='strong' startIcon={<GitHub />}>
            Github
          </Button>
          <Button variant='strong' startIcon={<MailOutline />}>
            Mail
          </Button>
        </Box>
      </Box>
    </Section>
  );
}

export default HomeSection;
