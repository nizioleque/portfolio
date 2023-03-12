import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { Ubuntu } from 'next/font/google';

interface ProjectContentProps {
  children: ReactNode;
}

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400'] });

function ProjectContent({ children }: ProjectContentProps) {
  return <Box className={ubuntu.className}>{children}</Box>;
}

export default ProjectContent;
