import { Button } from "@mui/material";
import { ReactNode } from "react";
import { responsiveSize } from "../../theme/responsiveSize";

interface LinkButtonProps {
  children: ReactNode;
  icon: ReactNode;
  href: string;
}

function LinkButton({ children, icon, href }: LinkButtonProps) {
  return (
    <Button
      component="a"
      href={href}
      target="_blank"
      variant="text"
      startIcon={icon}
      sx={{
        textTransform: "none",
        ...responsiveSize("1.25rem"),
        fontWeight: 400,
        color: "text.primary",
        borderRadius: 20,
        paddingX: 2,
        "& .MuiSvgIcon-root": {
          marginRight: 0.5,
          color: "primary.main",
          ...responsiveSize("2rem", undefined, "width"),
          ...responsiveSize("2rem", undefined, "height"),
        },
      }}
    >
      {children}
    </Button>
  );
}

export default LinkButton;
