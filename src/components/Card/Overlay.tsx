import { Box, Portal } from "@mui/material";
import { motion } from "framer-motion";

interface OverlayProps {
  closeModal: () => void;
}

function Overlay({ closeModal }: OverlayProps) {
  return (
    <Portal>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgb(0,0,0,0.5)",
          zIndex: 100,
          cursor: "pointer",
        }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      />
    </Portal>
  );
}

export default Overlay;
