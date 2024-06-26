import { Stack, Typography } from "@mui/material";
import { shadowStrong } from "../../theme/constants";
import { responsiveSize } from "../../theme/responsiveSize";
import { CategoryLabels, ProjectCategory, ProjectMeta } from "../../types";
import HomePageChild from "../Layout/HomePageChild";
import ProjectTile from "./ProjectTile";

interface ProjectGroupProps {
  name: ProjectCategory;
  projects: ProjectMeta[];
}

function ProjectGroup({ name, projects }: ProjectGroupProps) {
  const categoryLabel = CategoryLabels[name];

  return (
    <Stack gap={1}>
      <HomePageChild>
        <Typography
          variant="h6"
          sx={{
            ...responsiveSize("1.35rem"),
            fontStyle: "italic",
            zIndex: 2,
            marginLeft: 3,
            textShadow: shadowStrong,
            color: "text.secondary",
            fontVariant: "small-caps",
          }}
        >
          {categoryLabel.toLowerCase()}
        </Typography>
      </HomePageChild>
      <Stack sx={responsiveSize(2, undefined, "gap")}>
        {projects.map((project) => (
          <HomePageChild key={project.id}>
            <ProjectTile project={project} />
          </HomePageChild>
        ))}
      </Stack>
    </Stack>
  );
}

export default ProjectGroup;