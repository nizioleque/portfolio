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

export function groupProjects(projects: ProjectMeta[]): GroupedProjects {
  const groupedProjects: GroupedProjects = {
    [ProjectCategory.Extension]: [],
    [ProjectCategory.Flutter]: [],
  };

  for (const category of Object.values(ProjectCategory)) {
    groupedProjects[category] = projects.filter(
      (project) => project.category === category
    );
  }

  return groupedProjects;
}
