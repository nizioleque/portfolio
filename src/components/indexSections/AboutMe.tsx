import {
  ThumbUpOutlined,
  SentimentVeryDissatisfied,
  Instagram,
  Telegram,
  MailOutline,
} from '@mui/icons-material';
import { Box, Typography, List, useTheme, Button } from '@mui/material';
import IconListItem from '../IconListItem';
import Section from '../Section';
import SectionContent from '../SectionContent';

function AboutMe() {
  const theme = useTheme();

  return (
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
                <IconListItem
                  icon={<ThumbUpOutlined />}
                  text='learning languages'
                />
                <IconListItem icon={<ThumbUpOutlined />} text='cycling' />
                <IconListItem
                  icon={<ThumbUpOutlined />}
                  text='vegan junk food'
                />
              </List>
            </Box>
          </Box>
          <Box>
            <Typography variant='h4'>what I hate</Typography>
            <List>
              <IconListItem
                icon={<SentimentVeryDissatisfied />}
                text='Polskie Koleje Państwowe'
              />
              <IconListItem icon={<SentimentVeryDissatisfied />} text='Apple' />
              <IconListItem
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
            columnGap: 3,
            rowGap: 2,
            mt: '-12px',
          }}
        >
          <Typography variant='bodyLarge'>
            If you disagree, insult me here:
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              columnGap: 3,
              rowGap: 2,
            }}
          >
            <Button
              href='https://instagram.com/nizioleque'
              target='_blank'
              size='large'
              startIcon={<Instagram />}
            >
              Instagram
            </Button>
            <Button
              href='https://t.me/pedalarz'
              target='_blank'
              size='large'
              startIcon={<Telegram />}
            >
              Telegram
            </Button>
            <Button
              href='mailto:nizioleque@gmail.com'
              target='_blank'
              size='large'
              startIcon={<MailOutline />}
            >
              Mail
            </Button>
          </Box>
        </Box>
      </SectionContent>
    </Section>
  );
}

export default AboutMe;
