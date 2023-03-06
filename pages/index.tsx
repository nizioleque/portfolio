import { Box, Typography } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import CardContainer from '../src/components/CardContainer';
import dynamic from 'next/dynamic';
import fs from 'fs';
import path from 'path';
import { ProjectMeta } from '../src/types';
import CardContent from '../src/components/CardContent';

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

      <CanvasBackground />
      <Box
        sx={{
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
          <Typography
            variant='h1'
            sx={{
              fontWeight: 'bold',
              letterSpacing: -5,
              fontStyle: 'italic',
            }}
          >
            Norbert
            <br />
            Niziołek
          </Typography>
        </Box>
        <CardContainer>
          {projects.map((project) => (
            <CardContent
              key={project.id}
              id={project.id}
              name={project.name}
              icon={project.icon}
              description={project.description}
            />
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
