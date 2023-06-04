import { Box } from '@mui/material';
import { motion } from 'framer-motion';

interface OverlayProps {
  closeModal: () => void;
}

function Overlay({ closeModal }: OverlayProps) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgb(0,0,0,0.5)',
        zIndex: 1,
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
    />
  );
}

export default Overlay;
