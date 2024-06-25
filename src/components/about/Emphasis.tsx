import { Box } from "@mui/material";
import { ReactNode } from "react";

interface EmpahsisProps {
  children: ReactNode;
}

function Emphasis({ children }: EmpahsisProps) {
  return (
    <Box component="em" color="text.accent">
      {children}
    </Box>
  );
}

export default Emphasis;
