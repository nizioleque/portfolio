import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { ProjectMeta } from '../types';
import ExpandableCard from './ExpandableCard/ExpandableCard';

export type CardContentProps = {
  project: ProjectMeta;
};

const IMAGE_SIZE = 94;

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
              minHeight: IMAGE_SIZE,
            }}
          >
            {project.icon && (
              <Image
                alt={`${project.name} icon`}
                src={project.icon}
                height={IMAGE_SIZE}
                width={IMAGE_SIZE}
                style={{ objectFit: 'contain' }}
              />
            )}
            <Box>
              <Typography variant='h3' textAlign='center' gutterBottom>
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
