import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { responsiveSize } from "../../theme/responsiveSize";
import HomePageChild from "../Layout/HomePageChild";

interface AboutSectionProps {
  children: ReactNode;
  large?: boolean;
}

function AboutSection({ children, large = false }: AboutSectionProps) {
  const fontSize = large ? "2rem" : "1.25rem";

  return (
    <HomePageChild>
      <Typography sx={responsiveSize(fontSize)}>{children}</Typography>
    </HomePageChild>
  );
}

export default AboutSection;
