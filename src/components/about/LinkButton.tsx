import { transition } from "@/theme/transitions";
import { IconButton, IconButtonProps } from "@mui/material";
import { ReactNode } from "react";
import { responsiveSize } from "../../theme/responsiveSize";

interface LinkButtonProps extends IconButtonProps {
  icon: ReactNode;
  href: string;
  mini?: boolean;
}

function LinkButton({ icon, href, mini = false, ...props }: LinkButtonProps) {
  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      size={mini ? "small" : "large"}
      sx={{
        opacity: mini ? 0.7 : 1,
        transition: transition(["opacity", "color"]),
        "&:hover": { opacity: 1, color: "primary.main" },

        "& .MuiSvgIcon-root": {
          ...responsiveSize(mini ? "1.5rem" : "2rem", undefined, "fontSize"),
        },
      }}
      {...props}
    >
      {icon}
    </IconButton>
  );
}

export default LinkButton;
