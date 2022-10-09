import { Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import ExpandableCard from './ExpandableCard';
import Image, { StaticImageData } from 'next/image';

interface CardContentProps {
  icon: StaticImageData;
  name: string;
  description: string;
  children: ReactNode;
}

function CardContent({ icon, name, description, children }: CardContentProps) {
  return (
    <ExpandableCard
      height={250}
      heightExpanded={350}
      content={
        <>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              mb: 2,
            }}
          >
            <Image src={icon} height={90} width={90} />
            <Typography variant='h3'>{name}</Typography>
          </Box>
          <Typography>{description}</Typography>
        </>
      }
      contentExpanded={<Box mt={4}>{children}</Box>}
    />
  );
}

export default CardContent;
