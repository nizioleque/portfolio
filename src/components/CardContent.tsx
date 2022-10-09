import { Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import ExpandableCard, { ExpandableCardProps } from './ExpandableCard';
import Image, { StaticImageData } from 'next/image';

export type CardContentProps = Partial<ExpandableCardProps> & {
  icon?: StaticImageData;
  name: string;
  description?: string;
  descriptionExpanded?: string;
  children?: ReactNode;
};

function CardContent({
  icon,
  name,
  description,
  descriptionExpanded,
  children,
  ...expandableCardProps
}: CardContentProps) {
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
            {icon && <Image src={icon} height={90} width={90} />}
            <Typography variant='h3'>{name}</Typography>
          </Box>
          {description && <Typography>{description}</Typography>}
        </>
      }
      contentExpanded={
        <>
          {descriptionExpanded && (
            <Typography mt={2}>{descriptionExpanded}</Typography>
          )}
          {children && <Box mt={4}>{children}</Box>}
        </>
      }
      {...expandableCardProps}
    />
  );
}

export default CardContent;
