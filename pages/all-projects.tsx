import { Stack } from '@mui/material';
import { GetStaticProps } from 'next';
import ProjectGroup from '../src/components/allProjects/ProjectGroup';
import { getProjectMeta, groupProjects } from '../src/serverUtils';
import { GroupedProjects } from '../src/types';

interface AllProjectsProps {
  groupedProjects: GroupedProjects;
}

function AllProjects({ groupedProjects }: AllProjectsProps) {
  return (
    <Stack paddingY='10vh' minHeight='100%'>
      <Stack gap={6} margin='auto' maxWidth='100%'>
        {Object.entries(groupedProjects).map(([name, projects]) => (
          <ProjectGroup key={name} name={name} projects={projects} />
        ))}
      </Stack>
    </Stack>
  );
}

export const getStaticProps: GetStaticProps<AllProjectsProps> = async () => {
  const projects = await getProjectMeta();
  const groupedProjects = groupProjects(projects);
  return { props: { groupedProjects } };
};

export default AllProjects;
