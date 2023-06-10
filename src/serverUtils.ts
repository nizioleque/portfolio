import fs from 'fs';
import path from 'path';
import { GroupedProjects, ProjectCategory, ProjectMeta } from '../src/types';

export async function getProjectMeta(): Promise<ProjectMeta[]> {
  const projectsDirectory = path.join(process.cwd(), 'pages', 'projects');
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

export function groupProjects(projects: ProjectMeta[]): GroupedProjects {
  const groupedProjects: GroupedProjects = {
    [ProjectCategory.Extension]: [],
    [ProjectCategory.Flutter]: [],
    [ProjectCategory.React]: [],
  };

  for (const category of Object.values(ProjectCategory)) {
    groupedProjects[category] = projects.filter(
      (project) => project.category === category
    );
  }

  return groupedProjects;
}
