import { Stack, Typography } from '@mui/material';
import { shadowStrong } from '../../theme/constants';
import { ProjectMeta } from '../../types';
import HomePageChild from '../Layout/HomePageChild';
import ProjectTile from './ProjectTile';

interface ProjectGroupProps {
  name: string;
  projects: ProjectMeta[];
}

function ProjectGroup({ name, projects }: ProjectGroupProps) {
  return (
    <Stack gap={1}>
      <HomePageChild>
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
      </HomePageChild>
      <Stack gap={2}>
        {projects.map((project) => (
          <HomePageChild key={project.id}>
            <ProjectTile project={project} />
          </HomePageChild>
        ))}
      </Stack>
    </Stack>
  );
}

export default ProjectGroup;
