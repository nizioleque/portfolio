import { shadowWeak } from "@/theme/constants";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import useResponsiveLayout from "../../../hooks/useResponsiveLayout";
import { responsiveSize } from "../../../theme/responsiveSize";
import Logo from "../Logo";

function Nav() {
  const router = useRouter();
  const isIndex = router.pathname === "/";
  const { isMobile } = useResponsiveLayout();

  // const isMini = isMobile && !isIndex;
  const isMini = false;

  return (
    <Stack
      sx={{
        alignItems: "center",
        ...responsiveSize(4, 0.65, "gap"),
        "& #logo-container": !isMini
          ? responsiveSize(2, undefined, "marginBottom")
          : null,
        paddingX: 3,
        paddingY: isMini ? 1 : null,
        transform: "scale(0.7)",
      }}
    >
      <Box
        id="logo-container"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
      >
        <Link href="/" legacyBehavior passHref>
          <Logo active={router.pathname === "/"} />
        </Link>
        <Typography
          variant="h3"
          textAlign="right"
          marginTop={1}
          sx={{
            fontSize: "1.7rem",
            position: "relative",
            right: 8,
            fontWeight: 400,

            // letterSpacing: 0,
            // fontStyle: "italic",

            // LIGHT MODE
            textShadow: shadowWeak,
            color: "#0d1117",
          }}
        >
          frontend developer
        </Typography>
      </Box>
    </Stack>
  );
}

export default Nav;
