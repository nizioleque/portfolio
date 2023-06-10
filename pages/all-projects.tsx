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
    <Stack gap={5}>
      {Object.entries(groupedProjects).map(([name, projects]) => (
        <ProjectGroup key={name} name={name} projects={projects} />
      ))}
    </Stack>
  );
}

export const getStaticProps: GetStaticProps<AllProjectsProps> = async () => {
  const projects = await getProjectMeta();
  const groupedProjects = groupProjects(projects);
  return { props: { groupedProjects } };
};

export default AllProjects;
