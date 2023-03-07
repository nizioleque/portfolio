import { ProjectMeta } from '../../types';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

interface ProjectHeaderProps {
  meta: ProjectMeta;
}

const IMAGE_SIZE = 80;

function ProjectHeader({ meta }: ProjectHeaderProps) {
  return (
    <Box sx={{ display: 'grid', placeItems: 'center' }}>
      <Box
        sx={{
          margin: '0 auto',
          display: 'inline-grid',
          flexDirection: 'column',
          gridTemplateColumns: 'auto 1fr 1fr',
          gridTemplateAreas: "'icon name name' 'desc desc desc'",
          placeItems: 'center',
          columnGap: 4,
          rowGap: 2,
          borderRadius: 8,
          padding: 4,
        }}
      >
        <Image
          alt={`${meta.name} icon`}
          src={meta.icon}
          style={{ display: 'block', margin: '0 auto', gridArea: 'icon' }}
          height={IMAGE_SIZE}
          width={IMAGE_SIZE}
        />
        <Typography
          variant='h3'
          sx={{ textAlign: 'center', fontSize: '2rem', gridArea: 'name' }}
        >
          {meta.name}
        </Typography>
        <Typography sx={{ gridArea: 'desc', width: 0, minWidth: '100%' }}>
          {meta.description}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProjectHeader;
