import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { ProjectMeta } from '../types';
import ExpandableCard from './ExpandableCard/ExpandableCard';

export type CardContentProps = {
  project: ProjectMeta;
};

const IMAGE_SIZE = 60;

function CardContent({ project }: CardContentProps) {
  return (
    <ExpandableCard
      id={project.id}
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
              <Typography variant='h3' textAlign='center'>
                {project.name}
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  textAlign: 'center',
                  // fontSize: '0.8rem',
                  fontVariant: 'small-caps',
                  // fontWeight: 100,
                }}
              >
                {project.category.toLowerCase()}
              </Typography>
            </Box>
            <Typography>{project.description}</Typography>
          </Box>
        </>
      }
    />
  );
}

export default CardContent;
