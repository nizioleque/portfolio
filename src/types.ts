import { StaticImageData } from "next/image";

export enum ProjectCategory {
  Extension = "Browser extension",
  Flutter = "Flutter app",
  React = "React app",
  Web = "Web app",
  Autohotkey = "AutoHotkey script",
}

export interface ProjectCategoryDetails {
  name: string;
  priority?: number;
}

export const ProjectPriority: Record<ProjectCategory, number> = {
  [ProjectCategory.Extension]: 10,
  [ProjectCategory.Flutter]: 7,
  [ProjectCategory.React]: 9,
  [ProjectCategory.Web]: 8,
  [ProjectCategory.Autohotkey]: 6,
};

export interface ProjectMeta {
  id: string;
  name: string;
  icon: StaticImageData;
  category: ProjectCategory;
  description: string;
  hue: number;
  runUrl?: string;
  downloadUrl?: string;
  codeUrl?: string;
  hideFromHomepage?: boolean;
}

export interface ProjectGroup {
  category: ProjectCategory;
  projects: ProjectMeta[];
}
