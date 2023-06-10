import { Stack, Typography } from '@mui/material';
import { ProjectMeta } from '../../types';
import ProjectTile from './ProjectTile';

interface ProjectGroupProps {
  name: string;
  projects: ProjectMeta[];
}

function ProjectGroup({ name, projects }: ProjectGroupProps) {
  return (
    <Stack gap={2}>
      <Typography variant='h2' fontSize='1.75rem'>
        {name}
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
