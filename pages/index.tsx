import CardContainer from "@/components/Card/CardContainer";
import CardContent from "@/components/Card/CardContent";
import HomePageChild from "@/components/Layout/HomePageChild";
import HomePageContent from "@/components/Layout/HomePageContent";
import { getProjectMeta, sortByHue } from "@/serverUtils";
import { ProjectMeta } from "@/types";
import type { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";

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
