import { Box } from '@mui/material';
import fs from 'fs';
import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import path from 'path';
import CardContainer from '../src/components/CardContainer';
import CardContent from '../src/components/CardContent';
import Logo from '../src/components/Logo';
import { ProjectMeta } from '../src/types';

interface HomeProps {
  projects: ProjectMeta[];
}

const CanvasBackground = dynamic(
  () => import('../src/components/CanvasBackground'),
  { ssr: false }
);

const Home: NextPage<HomeProps> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>NORBERT NIZIOŁEK</title>
        <meta
          name='description'
          content="Norbert Niziołek's portfolio website"
        />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </Head>

      {/* <CanvasBackground /> */}
      <Box
        sx={{
          backgroundColor: '#141414',
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          height: '100%',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Logo />
        </Box>
        <CardContainer>
          {projects.map((project) => (
            <CardContent key={project.id} project={project} />
          ))}
        </CardContainer>
      </Box>
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
