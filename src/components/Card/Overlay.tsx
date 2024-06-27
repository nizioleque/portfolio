import { Box, Portal } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

interface OverlayProps {
  closeModal: () => void;
}

function Overlay({ closeModal }: OverlayProps) {
  const [isClosing, setIsClosing] = useState<boolean>(false);

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
          pointerEvents: isClosing ? "none" : "auto",
        }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => {
          setIsClosing(true);
          closeModal();
        }}
      />
    </Portal>
  );
}

export default Overlay;
