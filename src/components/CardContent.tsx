import { Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import ExpandableCard from './ExpandableCard';
import Image, { StaticImageData } from 'next/image';

export type CardContentProps = {
  icon?: StaticImageData;
  name: string;
  description: string;
  // TODO (re)move
  descriptionExpanded?: ReactNode;
  children?: ReactNode;
};

const IMAGE_SIZE = 60;

function CardContent({ icon, name, description }: CardContentProps) {
  return (
    <ExpandableCard
      content={
        <>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              minHeight: IMAGE_SIZE,
            }}
          >
            {icon && (
              <Image
                alt={`${name} icon`}
                src={icon}
                height={IMAGE_SIZE}
                width={IMAGE_SIZE}
              />
            )}
            <Typography variant='h3' textAlign='center'>
              {name}
            </Typography>
            <Typography>{description}</Typography>
          </Box>
        </>
      }
    />
  );
}

export default CardContent;
