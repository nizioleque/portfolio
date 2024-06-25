import HomePageContent from "@/components/Layout/HomePageContent";
import GitHubTile from "@/components/projects/GitHubTile";
import ProjectGroup from "@/components/projects/ProjectGroup";
import { getProjectMeta, groupProjects } from "@/serverUtils";
import { responsiveSize } from "@/theme/responsiveSize";
import { GroupedProjects } from "@/types";
import { Stack } from "@mui/material";
import { GetStaticProps } from "next";

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
