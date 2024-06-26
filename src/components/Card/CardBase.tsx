import { styled } from "@mui/material";
import { motion } from "framer-motion";
import { ComponentProps } from "react";

interface CardBaseCustomProps {
  hue: number;
}

const EnterEasing = "cubic-bezier(0.61, 1, 0.88, 1)";
const LeaveEasing = "cubic-bezier(0.12, 0, 0.39, 0)";
const Duration = "120ms";
const GlowSize = 700;

const CardBase = styled(motion.a)<CardBaseCustomProps>(({ theme, hue }) =>
  theme.unstable_sx({
    display: "block",
    padding: 3,

    backgroundColor: `hsl(${hue}deg 22% 13%)`,
    color: `hsl(${hue}deg 50% 80%)`,

    borderRadius: 10,

    position: "relative",

    overflow: "hidden",
    "--x": "10px",
    "--y": "10px",

    cursor: "pointer",

    "&::before": {
      content: '""',
      opacity: 0,
      background: `radial-gradient(hsl(${hue} 30% 18% / 100%) 0%, hsl(${hue} 30% 18% / 0) 60%)`,
      position: "absolute",
      left: "var(--x)",
      top: "var(--y)",
      transition: `opacity ${EnterEasing} ${Duration}`,
      transform: "translate(-50%, -50%)",
      width: GlowSize,
      height: GlowSize,
    },

    "&:hover::before": {
      opacity: 1,
      transition: `opacity ${LeaveEasing} ${Duration}`,
    },

    "&.transform-origin-top": {
      transformOrigin: "top center !important",
    },
    "&.transform-origin-bottom": {
      transformOrigin: "bottom center !important",
    },
  })
);

export type CardBaseProps = ComponentProps<typeof CardBase>;

export default CardBase;
