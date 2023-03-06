import { Box, Typography } from '@mui/material';
import ExpandableCard from './ExpandableCard/ExpandableCard';
import Image, { StaticImageData } from 'next/image';

export type CardContentProps = {
  id: string;
  icon?: StaticImageData;
  name: string;
  description: string;
};

const IMAGE_SIZE = 60;

function CardContent({ id, icon, name, description }: CardContentProps) {
  return (
    <ExpandableCard
      id={id}
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
