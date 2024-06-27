import { Box } from "@mui/material";
import { ReactNode } from "react";

interface EmpahsisProps {
  children: ReactNode;
  color?: string;
}

function Emphasis({ children, color = "text.accent" }: EmpahsisProps) {
  return (
    <Box component="em" color={color}>
      {children}
    </Box>
  );
}

export default Emphasis;
