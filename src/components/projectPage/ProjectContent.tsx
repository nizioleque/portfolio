import { Box } from "@mui/material";
import { Karla } from "next/font/google";
import { ReactNode } from "react";

interface ProjectContentProps {
  children: ReactNode;
}

const karla = Karla({ subsets: ["latin"], weight: ["400"] });

function ProjectContent({ children }: ProjectContentProps) {
  return (
    <Box
      className={`${karla.className} project-content`}
      sx={{
        textAlign: "justify",
      }}
    >
      {children}
    </Box>
  );
}

export default ProjectContent;
