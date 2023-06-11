import { styled } from '@mui/material';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

interface CardBaseCustomProps {
  hue: number;
}

const enterEasing = 'cubic-bezier(0.61, 1, 0.88, 1)';
const leaveEasing = 'cubic-bezier(0.12, 0, 0.39, 0)';
const duration = '120ms';

const CardBase = styled(motion.a)<CardBaseCustomProps>(({ theme, hue }) =>
  theme.unstable_sx({
    display: 'block',
    padding: 3,

    backgroundColor: `hsl(${hue}deg 18% 12%)`,
    color: `hsl(${hue}deg 50% 82%)`,

    borderRadius: 10,

    position: 'relative',

    overflow: 'hidden',
    '--x': '10px',
    '--y': '10px',

    cursor: 'pointer',

    '&::before': {
      content: '""',
      opacity: 0,
      background: `radial-gradient(hsl(${hue} 30% 16% / 100%) 0%, hsl(${hue} 30% 16% / 0) 70%)`,
      position: 'absolute',
      left: 'var(--x)',
      top: 'var(--y)',
      transition: `opacity ${enterEasing} ${duration}`,
      transform: 'translate(-50%, -50%)',
      width: 500,
      height: 500,
    },

    '&:hover::before': {
      opacity: 1,
      transition: `opacity ${leaveEasing} ${duration}`,
    },

    '&.transform-origin-top-odd': {
      transformOrigin: 'top right !important',
    },
    '&.transform-origin-top-even': {
      transformOrigin: 'top left !important',
    },

    '&.transform-origin-bottom-odd': {
      transformOrigin: 'bottom right !important',
    },
    '&.transform-origin-bottom-even': {
      transformOrigin: 'bottom left !important',
    },
  })
);

export type CardBaseProps = ComponentProps<typeof CardBase>;

export default CardBase;
