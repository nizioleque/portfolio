import { Stack, Typography } from '@mui/material';
import { shadowStrong } from '../../theme';
import { ProjectMeta } from '../../types';
import ProjectTile from './ProjectTile';

interface ProjectGroupProps {
  name: string;
  projects: ProjectMeta[];
}

function ProjectGroup({ name, projects }: ProjectGroupProps) {
  return (
    <Stack>
      <Typography
        variant='h6'
        sx={{
          fontSize: '1.35rem',
          fontStyle: 'italic',
          zIndex: 2,
          marginLeft: 3,
          textShadow: shadowStrong,
          color: 'text.secondary',
          fontVariant: 'small-caps',
        }}
      >
        {name.toLowerCase()}s
      </Typography>
      <Stack gap={2}>
        {projects.map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
      </Stack>
    </Stack>
  );
}

export default ProjectGroup;
