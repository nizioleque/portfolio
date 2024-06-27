import { Box, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface EmpahsisProps {
  children: ReactNode;
  color?: string;
  sx?: SxProps;
}

function Emphasis({ children, color = "text.accent", sx }: EmpahsisProps) {
  return (
    <Box component="em" color={color} sx={sx}>
      {children}
    </Box>
  );
}

export default Emphasis;
