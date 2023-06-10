import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { ProjectMeta } from '../../types';
import Card from '../Card/Card';

interface ProjectTileProps {
  project: ProjectMeta;
}

function ProjectTile({ project }: ProjectTileProps) {
  return (
    <Card hue={project.hue} sx={{ maxWidth: 500, marginLeft: 6 }}>
      <Stack
        sx={{
          flexDirection: 'row',
          gap: 3,
          alignItems: 'center',
        }}
      >
        <Image
          alt={`${project.name} icon`}
          src={project.icon}
          height={40}
          width={40}
          style={{ objectFit: 'contain' }}
        />
        <Typography variant='h3' textAlign='center'>
          {project.name}
        </Typography>
      </Stack>
    </Card>
  );
}

export default ProjectTile;
