import { styled } from '@mui/material';
import { motion } from 'framer-motion';

interface CardProps {
  hue: number;
}

const Card = styled(motion.a)<CardProps>(({ theme, hue }) =>
  theme.unstable_sx({
    display: 'block',
    padding: 4,

    backgroundColor: `hsl(${hue}deg 32% 18%)`,
    color: `hsl(${hue}deg 32% 86%)`,

    borderRadius: 8,

    position: 'relative',

    overflow: 'hidden',
    '--x': '10px',
    '--y': '10px',

    cursor: 'pointer',

    '&::before': {
      content: '""',
      zIndex: -1,
      width: 0,
      height: 0,
      background:
        'radial-gradient(hsl(43deg 100% 50% / 35%) 0%, hsl(43deg 100% 50% / 0) 75%)',
      position: 'absolute',
      left: 'var(--x)',
      top: 'var(--y)',
      transition: `height 120ms cubic-bezier(0.61, 1, 0.88, 1), width 120ms cubic-bezier(0.61, 1, 0.88, 1)`,
      transform: 'translate(-50%, -50%)',
    },

    '&:hover::before': {
      transition: `height 120ms cubic-bezier(0.12, 0, 0.39, 0), width 120ms cubic-bezier(0.12, 0, 0.39, 0)`,
      width: 1000,
      height: 1000,
    },

    '&.transform-origin-top': {
      transformOrigin: 'top center !important',
    },
    '&.transform-origin-bottom': {
      transformOrigin: 'bottom center !important',
    },
  })
);

export default Card;
