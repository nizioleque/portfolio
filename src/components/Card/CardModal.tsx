import { Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import CardContainerContext from '../../contexts/CardContainerContext';
import dynamicComponents from '../../dynamicComponents';
import Overlay from './Overlay';

interface CardModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  uniqueId?: string;
  id: string;
}

function CardModal({
  isModalOpen,
  closeModal,
  id,
  uniqueId = id,
}: CardModalProps) {
  const { blockScrollChange } = useContext(CardContainerContext);

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
              zIndex: 2,
              display: 'grid',
              placeItems: 'center',
              pointerEvents: 'none',
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
                borderRadius: 8,
                backgroundColor: 'hsl(271deg 47% 10%)',
                color: 'rgb(255 255 255 / 75%)',
                pointerEvents: 'initial',
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
