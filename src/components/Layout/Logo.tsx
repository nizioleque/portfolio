import { shadowStrong, shadowWeak } from "@/theme/constants";
import { Box, Typography } from "@mui/material";
import { forwardRef, MouseEventHandler } from "react";
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
      // fontSize !== undefined ? { fontSize } : responsiveSize("6rem", 0.6);
      { fontSize: "6rem" };

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

          color: "rgb(0 0 0 / 30%)",

          "& > :nth-of-type(1)": {
            marginBottom: "-12.5%",
            textShadow: shadowWeak,
          },

          "& > :nth-of-type(2)": {
            fontWeight: "bold",
            color: "primary.main",
            // color: active ? "primary.light" : "text.primary",
            // "&:hover": { color: "primary.main" },
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
