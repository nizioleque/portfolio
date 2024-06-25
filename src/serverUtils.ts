import {
  ProjectCategory,
  ProjectGroup,
  ProjectMeta,
  ProjectPriority,
} from "@/types";
import fs from "fs";
import path from "path";

export async function getProjectMeta(): Promise<ProjectMeta[]> {
  const projectsDirectory = path.join(process.cwd(), "pages", "projects");
  const filenames = await fs.promises.readdir(projectsDirectory);

  const projects: ProjectMeta[] = await Promise.all(
    filenames.map(async (filename) => {
      const fileContents = (await import(`../pages/projects/${filename}`)) as {
        meta: ProjectMeta;
      };
      return fileContents.meta;
    })
  );

  return projects;
}

export function sortByHue(projects: ProjectMeta[]): ProjectMeta[] {
  return projects.sort((a, b) => a.hue - b.hue);
}

export function groupProjects(projects: ProjectMeta[]): ProjectGroup[] {
  const groups = Object.values(ProjectCategory).map((category) => ({
    category,
    projects: projects.filter((project) => project.category === category),
  }));

  return groups.toSorted(
    (a, b) => ProjectPriority[b.category] - ProjectPriority[a.category]
  );
}
