import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import useResponsiveLayout from '../../hooks/useResponsiveLayout';
import HomePageChild from '../Layout/HomePageChild';

interface AboutSectionProps {
  children: ReactNode;
  large?: boolean;
}

function AboutSection({ children, large = false }: AboutSectionProps) {
  const { isDesktop } = useResponsiveLayout();

  let fontSize;

  if (isDesktop) {
    fontSize = large ? '2rem' : '1.25rem';
  } else {
    fontSize = large ? '1.6rem' : '1rem';
  }

  return (
    <HomePageChild>
      <Typography sx={{ fontSize }}>{children}</Typography>
    </HomePageChild>
  );
}

export default AboutSection;
