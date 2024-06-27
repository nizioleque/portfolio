import CardContainer from "@/components/Card/CardContainer";
import CardContent from "@/components/Card/CardContent";
import HireMeCard from "@/components/Card/HireMeCard";
import HomePageChild from "@/components/Layout/HomePageChild";
import HomePageContent from "@/components/Layout/HomePageContent";
import { getProjectMeta, sortByHue } from "@/serverUtils";
import { ProjectMeta } from "@/types";
import type { GetStaticProps } from "next";
import { useRef, useState } from "react";

interface HomeProps {
  projects: ProjectMeta[];
}

function Home({ projects }: HomeProps) {
  const [delayAnimate, setDelayAnimate] = useState<boolean>(true);

  // TODO fix incorrect z-order on first open
  const zIndex = useRef<number>(2);

  return (
    <HomePageContent delayAnimate={delayAnimate} noScrollContainer>
      <CardContainer onRender={() => setDelayAnimate(false)}>
        {projects.map((_, index, projects) => {
          if (index === 3) return <HireMeCard key="hire-me" />;

          const projectIndex = index > 3 ? index - 1 : index;
          const project = projects[projectIndex];

          return (
            <HomePageChild key={project.id}>
              <CardContent project={project} zIndex={zIndex} />
            </HomePageChild>
          );
        })}
      </CardContainer>
    </HomePageContent>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let projects = await getProjectMeta();
  projects = projects.filter((project) => !project.hideFromHomepage);
  projects = sortByHue(projects);
  return { props: { projects } };
};

export default Home;
