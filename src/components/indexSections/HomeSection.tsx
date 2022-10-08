import { Box, useTheme } from '@mui/material';
import Section from '../Section';

function HomeSection() {
  const theme = useTheme();

  return (
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
  );
}

export default HomeSection;
