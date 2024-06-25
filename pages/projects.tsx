import { Stack } from "@mui/material";
import { GetStaticProps } from "next";
import HomePageContent from "../src/components/Layout/HomePageContent";
import GitHubTile from "../src/components/projects/GitHubTile";
import ProjectGroup from "../src/components/projects/ProjectGroup";
import { getProjectMeta, groupProjects } from "../src/serverUtils";
import { responsiveSize } from "../src/theme/responsiveSize";
import { GroupedProjects } from "../src/types";

interface ProjectsProps {
  groupedProjects: GroupedProjects;
}

function Projects({ groupedProjects }: ProjectsProps) {
  return (
    <HomePageContent>
      <Stack sx={responsiveSize(6, undefined, "gap")}>
        <GitHubTile />
        {Object.entries(groupedProjects).map(([name, projects]) => (
          <ProjectGroup key={name} name={name} projects={projects} />
        ))}
      </Stack>
    </HomePageContent>
  );
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  const projects = await getProjectMeta();
  const groupedProjects = groupProjects(projects);
  return { props: { groupedProjects } };
};

export default Projects;
