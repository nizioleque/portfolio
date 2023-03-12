import { ProjectMeta } from '../../types';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

interface ProjectHeaderProps {
  meta: ProjectMeta;
}

const IMAGE_SIZE = 100;

function ProjectHeader({ meta }: ProjectHeaderProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        alignItems: 'center',
      }}
    >
      <Image
        alt={`${meta.name} icon`}
        src={meta.icon}
        height={IMAGE_SIZE}
        width={IMAGE_SIZE}
      />
      <Typography variant='h3' sx={{ fontSize: '2.2rem' }}>
        {meta.name}
      </Typography>
      <Typography
        sx={{
          fontSize: '1.2rem',
          fontWeight: 700,
        }}
      >
        {meta.description}
      </Typography>
    </Box>
  );
}

export default ProjectHeader;
