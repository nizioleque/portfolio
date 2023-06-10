import type { GetStaticProps } from 'next';
import Head from 'next/head';
import CardContainer from '../src/components/Card/CardContainer';
import CardContent from '../src/components/Card/CardContent';
import { getProjectMeta, sortByHue } from '../src/serverUtils';
import { ProjectMeta } from '../src/types';

interface HomeProps {
  projects: ProjectMeta[];
}

function Home({ projects }: HomeProps) {
  return (
    <>
      <Head>
        <title>NORBERT NIZIOŁEK</title>
      </Head>

      <CardContainer>
        {projects.map((project) => (
          <CardContent key={project.id} project={project} />
        ))}
      </CardContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let projects = await getProjectMeta();
  projects = projects.filter((project) => !project.hideFromHomepage);
  projects = sortByHue(projects);
  return { props: { projects } };
};

export default Home;
