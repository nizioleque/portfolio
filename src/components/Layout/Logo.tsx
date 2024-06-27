import { Box, Typography } from "@mui/material";
import { forwardRef, MouseEventHandler } from "react";
import { shadowStrong } from "../../theme/constants";
import { responsiveSize } from "../../theme/responsiveSize";
import { transition } from "../../theme/transitions";

interface LogoProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  href?: string;
  fontSize?: string | number;
  active?: boolean;
}

const Logo = forwardRef<HTMLAnchorElement, LogoProps>(
  ({ onClick, href, fontSize, active = false }, ref) => {
    const fontSizeStyles =
      fontSize !== undefined ? { fontSize } : responsiveSize("6rem", 0.6);

    return (
      <Typography
        variant="h1"
        component="a"
        onClick={onClick}
        href={href}
        ref={ref}
        sx={{
          ...fontSizeStyles,
          letterSpacing: -3,
          fontStyle: "italic",
          textShadow: shadowStrong,
          lineHeight: "100%",

          transition: transition("font-size"),

          color: "rgb(255 255 255 / 30%)",

          "& > :nth-of-type(1)": {
            marginBottom: "-12.5%",
          },

          "& > :nth-of-type(2)": {
            fontWeight: "bold",
            color: active ? "primary.light" : "text.primary",
            "&:hover": { color: "primary.main" },
            transition: transition("color"),
          },
        }}
      >
        <Box>Norbert</Box>
        <Box>Niziołek</Box>
      </Typography>
    );
  }
);

Logo.displayName = "Logo";

export default Logo;
