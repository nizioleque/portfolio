import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { responsiveSize } from "../../theme/responsiveSize";
import HomePageChild from "../Layout/HomePageChild";

interface AboutSectionProps {
  children: ReactNode;
  large?: boolean;
  id?: string;
}

function AboutSection({ children, id, large }: AboutSectionProps) {
  const fontSize = large ? "2rem" : "1.25rem";

  return (
    <HomePageChild>
      <Typography id={id} sx={responsiveSize(fontSize)}>
        {children}
      </Typography>
    </HomePageChild>
  );
}

export default AboutSection;
