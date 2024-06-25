import { Box } from "@mui/material";
import { MouseEvent, ReactNode, forwardRef } from "react";
import CardBase, { CardBaseProps } from "./CardBase";

type CardProps = {
  children: ReactNode;
} & CardBaseProps;

const Card = forwardRef<HTMLAnchorElement, CardProps>(
  ({ children, ...props }, ref) => {
    const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
      const target = event.currentTarget as HTMLElement;

      const x = event.clientX - target.getBoundingClientRect().left;
      const y = event.clientY - target.getBoundingClientRect().top;

      target.style.setProperty("--x", `${x}px`);
      target.style.setProperty("--y", `${y}px`);
    };

    return (
      <CardBase {...props} onMouseMove={handleMouseMove} ref={ref}>
        <Box sx={{ zIndex: 0, position: "relative", height: "100%" }}>
          {children}
        </Box>
      </CardBase>
    );
  }
);

Card.displayName = "Card";

export default Card;
