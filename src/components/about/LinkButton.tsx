import { IconButton } from "@mui/material";
import { ReactNode } from "react";
import { responsiveSize } from "../../theme/responsiveSize";

interface LinkButtonProps {
  icon: ReactNode;
  href: string;
}

function LinkButton({ icon, href }: LinkButtonProps) {
  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      size="large"
      sx={{
        "& .MuiSvgIcon-root": {
          color: "primary.main",
          ...responsiveSize("2.5rem", undefined, "fontSize"),
        },
      }}
    >
      {icon}
    </IconButton>
  );
}

export default LinkButton;
