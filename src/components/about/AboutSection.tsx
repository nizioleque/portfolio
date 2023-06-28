import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import HomePageChild from '../Layout/HomePageChild';

interface AboutSectionProps {
  children: ReactNode;
  large?: boolean;
}

function AboutSection({ children, large = false }: AboutSectionProps) {
  return (
    <HomePageChild>
      <Typography
        sx={{
          fontSize: large ? '2rem' : '1.25rem',
        }}
      >
        {children}
      </Typography>
    </HomePageChild>
  );
}

export default AboutSection;
