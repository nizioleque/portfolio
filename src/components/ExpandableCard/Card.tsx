import { styled } from '@mui/material';
import { motion } from 'framer-motion';

const Card = styled(motion.a)(({ theme }) =>
  theme.unstable_sx({
    display: 'block',
    padding: 4,

    background: 'rgb(255, 255, 255, 0.3)',
    borderRadius: 8,
    border: '1px rgb(0, 0, 0, 0.15) solid',

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
        'radial-gradient(rgb(255, 255, 255, 0.6) 0%, rgb(255, 255, 255, 0) 75%)',
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
