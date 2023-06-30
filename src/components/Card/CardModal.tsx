import { Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import CardContainerContext from '../../contexts/CardContainerContext';
import dynamicComponents from '../../dynamicComponents';
import useResponsiveLayout from '../../hooks/useResponsiveLayout';
import { scrollbarStyles } from '../../theme/constants';
import Overlay from './Overlay';

interface CardModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  uniqueId?: string;
  id: string;
  hue: number;
}

function CardModal({
  isModalOpen,
  closeModal,
  id,
  uniqueId = id,
  hue,
}: CardModalProps) {
  const { blockScrollChange } = useContext(CardContainerContext);
  const { isMobile } = useResponsiveLayout();

  const DynamicContent =
    id in dynamicComponents
      ? dynamicComponents[id as keyof typeof dynamicComponents]
      : null;

  return (
    <AnimatePresence onExitComplete={() => (blockScrollChange.current = false)}>
      {isModalOpen && (
        <>
          <Overlay key='overlay' closeModal={closeModal} />
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 101,
              display: 'grid',
              placeItems: 'center',
              pointerEvents: 'none',
              paddingY: 4,
            }}
          >
            <Box
              key='modal'
              component={motion.div}
              layoutId={uniqueId}
              sx={{
                maxWidth: 500,
                width: '100%',
                minHeight: 500,
                maxHeight: '100%',
                borderRadius: 12,
                padding: isMobile ? 3 : 4,
                backgroundColor: `hsl(${hue}deg 24% 8%)`,
                color: `hsl(${hue}deg 100% 96%)`,
                pointerEvents: 'initial',
                overflowY: 'auto',
                ...scrollbarStyles,
              }}
            >
              {DynamicContent ? (
                <DynamicContent />
              ) : (
                <div>CONTENT NOT FOUND FOR {id}</div>
              )}
            </Box>
          </Box>
        </>
      )}
    </AnimatePresence>
  );
}

export default CardModal;
