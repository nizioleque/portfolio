import { GetStaticProps } from 'next';
import { getProjectMeta, groupProjects } from '../src/serverUtils';
import { GroupedProjects } from '../src/types';

interface AllProjectsProps {
  groupedProjects: GroupedProjects;
}

function AllProjects({ groupedProjects }: AllProjectsProps) {
  console.log(groupedProjects);
  return <div>AllProjects</div>;
}

export const getStaticProps: GetStaticProps<AllProjectsProps> = async () => {
  const projects = await getProjectMeta();
  const groupedProjects = groupProjects(projects);
  return { props: { groupedProjects } };
};

export default AllProjects;
