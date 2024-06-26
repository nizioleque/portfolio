import { Box } from "@mui/material";
import { Ubuntu } from "next/font/google";
import { ReactNode } from "react";

interface ProjectContentProps {
  children: ReactNode;
}

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"] });

function ProjectContent({ children }: ProjectContentProps) {
  return (
    <Box
      className={`${ubuntu.className} project-content`}
      sx={{
        textAlign: "justify",
      }}
    >
      {children}
    </Box>
  );
}

export default ProjectContent;
