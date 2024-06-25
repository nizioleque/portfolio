import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import useHomePageAnimation from "../../hooks/useHomePageAnimation";
import useResponsiveLayout from "../../hooks/useResponsiveLayout";

interface HomePageContentProps {
  children: ReactNode;
  delayAnimate?: boolean;
  noScrollContainer?: boolean;
}

function HomePageContent({
  children,
  delayAnimate = false,
  noScrollContainer = false,
}: HomePageContentProps) {
  const { scope } = useHomePageAnimation(delayAnimate);
  const { isMobile } = useResponsiveLayout();

  const containerProps = {
    ref: scope,
    margin: "auto",
    component: motion.div,
  };

  return noScrollContainer ? (
    <Stack {...containerProps} height="100%">
      {children}
    </Stack>
  ) : (
    <Stack
      sx={{
        paddingY: !isMobile ? "10vh" : 4,
        paddingX: 2,
        minHeight: "100%",
        overflowY: "hidden",
      }}
    >
      <Stack {...containerProps}>{children}</Stack>
    </Stack>
  );
}

export default HomePageContent;
