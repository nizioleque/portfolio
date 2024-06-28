import HomePageContent from "@/components/Layout/HomePageContent";
import ProjectGroup from "@/components/projects/ProjectGroup";
import { getProjectMeta, groupProjects } from "@/serverUtils";
import { responsiveSize } from "@/theme/responsiveSize";
import { ProjectGroup as ProjectGroupType } from "@/types";
import { Stack } from "@mui/material";
import { GetStaticProps } from "next";

interface ProjectsProps {
  groupedProjects: ProjectGroupType[];
}

function Projects({ groupedProjects }: ProjectsProps) {
  return (
    <HomePageContent>
      <Stack sx={responsiveSize(6, undefined, "gap")}>
        {groupedProjects.map(({ category, projects }) => (
          <ProjectGroup key={category} name={category} projects={projects} />
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
