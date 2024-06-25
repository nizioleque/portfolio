import type { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";
import CardContainer from "../src/components/Card/CardContainer";
import CardContent from "../src/components/Card/CardContent";
import HomePageChild from "../src/components/Layout/HomePageChild";
import HomePageContent from "../src/components/Layout/HomePageContent";
import { getProjectMeta, sortByHue } from "../src/serverUtils";
import { ProjectMeta } from "../src/types";

interface HomeProps {
  projects: ProjectMeta[];
}

function Home({ projects }: HomeProps) {
  const [delayAnimate, setDelayAnimate] = useState<boolean>(true);

  return (
    <>
      <Head>
        <title>NORBERT NIZIOŁEK</title>
      </Head>

      <HomePageContent delayAnimate={delayAnimate} noScrollContainer>
        <CardContainer onRender={() => setDelayAnimate(false)}>
          {projects.map((project) => (
            <HomePageChild key={project.id}>
              <CardContent project={project} />
            </HomePageChild>
          ))}
        </CardContainer>
      </HomePageContent>
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
