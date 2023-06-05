import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { CardImageSize } from '../../constants';
import { ProjectMeta } from '../../types';
import ExpandableCard from './ExpandableCard';

export type CardContentProps = {
  project: ProjectMeta;
};

function CardContent({ project }: CardContentProps) {
  return (
    <ExpandableCard
      hue={project.hue}
      id={project.id}
      content={
        <>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              gap: 2,
              minHeight: CardImageSize,
              zIndex: 1,
              position: 'relative',
            }}
          >
            {project.icon && (
              <Image
                alt={`${project.name} icon`}
                src={project.icon}
                height={CardImageSize}
                width={CardImageSize}
                style={{ objectFit: 'contain' }}
              />
            )}
            <Box>
              <Typography
                variant='h3'
                textAlign='center'
                gutterBottom
                sx={{ whiteSpace: 'pre-line' }}
              >
                {project.name}
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  textAlign: 'center',
                  fontVariant: 'small-caps',
                }}
              >
                {project.category.toLowerCase()}
              </Typography>
            </Box>
          </Box>
        </>
      }
    />
  );
}

export default CardContent;
