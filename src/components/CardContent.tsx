import { Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import ExpandableCard, { ExpandableCardProps } from './ExpandableCard';
import Image, { StaticImageData } from 'next/image';

export type CardContentProps = Partial<ExpandableCardProps> & {
  icon?: StaticImageData;
  name: string;
  description?: ReactNode;
  descriptionExpanded?: ReactNode;
  children?: ReactNode;
};

const IMAGE_SIZE = 60;

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
              <Image src={icon} height={IMAGE_SIZE} width={IMAGE_SIZE} />
            )}
            <Typography variant='h3' textAlign='center'>
              {name}
            </Typography>
            {description &&
              (typeof description === 'string' ? (
                <Typography>{description}</Typography>
              ) : (
                <>{description}</>
              ))}
          </Box>
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
