import CardContent from '../CardContent';
import Section from '../Section';
import SectionContent from '../SectionContent';
import nagasakiIcon from '../../assets/projectIcons/nagasakiIcon.png';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { GitHub } from '@mui/icons-material';

function Projects() {
  return (
    <Section id='projects'>
      <SectionContent
        title='Projects'
        description='Whenever I come up with a new programming project, I rush to actualize it. My attention span never exceeds thirty minutes, so I give up after a couple of lines of code. And then I forget about it for the rest of my life. This page is the ideal place to store those discarded scraps of code.'
        cards={
          <>
            <CardContent
              icon={nagasakiIcon}
              name='Nagasaki Minesweeper'
              description='Bombs go boom. Created in Flutter by the Spicy Nachos team.'
            >
              <Typography
                component='a'
                href='https://spicy-nachos.github.io/nagasaki/'
                target='_blank'
                sx={{
                  textDecoration: 'underline',
                  '&:hover': {
                    fontWeight: 'bold',
                  },
                }}
              >
                Play here
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography>Code on GitHub</Typography>
                <IconButton
                  href='https://github.com/spicy-nachos/nagasaki'
                  target='_blank'
                >
                  <GitHub fontSize='large' />
                </IconButton>
              </Box>
            </CardContent>
            <CardContent
              name='Typing Challenge'
              description='How fast can you type? A simple web game created for my classes for Ukrainian refugees.'
            >
              <Typography
                component='a'
                href='https://nizioleque.github.io/typing-challenge/'
                target='_blank'
                sx={{
                  textDecoration: 'underline',
                  '&:hover': {
                    fontWeight: 'bold',
                  },
                }}
              >
                Play here
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography>Code on GitHub</Typography>
                <IconButton
                  href='https://github.com/nizioleque/typing-challenge'
                  target='_blank'
                >
                  <GitHub fontSize='large' />
                </IconButton>
              </Box>
            </CardContent>
            <CardContent
              name='Portfolio'
              description={
                <Typography sx={{ fontStyle: 'italic' }}>this.</Typography>
              }
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography>Code on GitHub</Typography>
                <IconButton
                  href='https://github.com/nizioleque/portfolio'
                  target='_blank'
                >
                  <GitHub fontSize='large' />
                </IconButton>
              </Box>
            </CardContent>
          </>
        }
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant='bodyLarge'>
            {"You'll find these and more on my "}
            <Button startIcon={<GitHub />}>Github</Button> !
          </Typography>
        </Box>
      </SectionContent>
    </Section>
  );
}

export default Projects;
