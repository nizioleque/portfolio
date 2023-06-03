import fs from 'fs';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import path from 'path';
import CardContainer from '../src/components/CardContainer';
import CardContent from '../src/components/CardContent';
import { ProjectMeta } from '../src/types';

interface HomeProps {
  projects: ProjectMeta[];
}

const Home: NextPage<HomeProps> = ({ projects }) => {
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
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const projectsDirectory = path.join(process.cwd(), 'pages', 'projects');
  const filenames = await fs.promises.readdir(projectsDirectory);

  const projects: ProjectMeta[] = await Promise.all(
    filenames.map(async (filename) => {
      const fileContents = (await import(`./projects/${filename}`)) as {
        meta: ProjectMeta;
      };
      return fileContents.meta;
    })
  );

  return { props: { projects } };
};

export default Home;
