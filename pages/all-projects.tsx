import { Stack } from '@mui/material';
import { GetStaticProps } from 'next';
import HomePageContent from '../src/components/Layout/HomePageContent';
import ProjectGroup from '../src/components/allProjects/ProjectGroup';
import { getProjectMeta, groupProjects } from '../src/serverUtils';
import { GroupedProjects } from '../src/types';

interface AllProjectsProps {
  groupedProjects: GroupedProjects;
}

function AllProjects({ groupedProjects }: AllProjectsProps) {
  return (
    <HomePageContent>
      <Stack gap={6}>
        {Object.entries(groupedProjects).map(([name, projects]) => (
          <ProjectGroup key={name} name={name} projects={projects} />
        ))}
      </Stack>
    </HomePageContent>
  );
}

export const getStaticProps: GetStaticProps<AllProjectsProps> = async () => {
  const projects = await getProjectMeta();
  const groupedProjects = groupProjects(projects);
  return { props: { groupedProjects } };
};

export default AllProjects;
