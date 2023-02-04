import { GitHub } from '@mui/icons-material';
import { Typography, Box, IconButton } from '@mui/material';

import CardContent from '../CardContent';
import nagasakiIcon from '../../assets/projectIcons/nagasakiIcon.png';

function ProjecsCards() {
  return (
    <>
      <CardContent
        name='Splitsmart'
        description='Split expenses with friends, with ease. Work in progress.'
      >
        <Typography
          component='a'
          href='https://splitsmart.niziolek.dev/'
          target='_blank'
          sx={{
            textDecoration: 'underline',
            '&:hover': {
              fontWeight: 'bold',
            },
          }}
        >
          Check out here
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography>Code on GitHub</Typography>
          <IconButton
            href='https://github.com/nizioleque/splitsmart/'
            target='_blank'
          >
            <GitHub fontSize='large' />
          </IconButton>
        </Box>
      </CardContent>
      <CardContent
        name='Polygon Paint'
        description='Draw polygons on a canvas and make them dance! University project, but cool.'
      >
        <Typography
          component='a'
          href='https://polygon-paint.niziolek.dev/'
          target='_blank'
          sx={{
            textDecoration: 'underline',
            '&:hover': {
              fontWeight: 'bold',
            },
          }}
        >
          Check out here
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography>Code on GitHub</Typography>
          <IconButton
            href='https://github.com/nizioleque/gk-lab/'
            target='_blank'
          >
            <GitHub fontSize='large' />
          </IconButton>
        </Box>
      </CardContent>
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
  );
}

export default ProjecsCards;
