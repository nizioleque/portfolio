import { StaticImageData } from "next/image";

export enum ProjectCategory {
  Extension = "Browser extension",
  Flutter = "Flutter app",
  React = "React app",
  Autohotkey = "AutoHotkey script",
}

export const CategoryLabels: Record<ProjectCategory, string> = {
  [ProjectCategory.Extension]: "Browser extensions",
  [ProjectCategory.Flutter]: "Flutter apps",
  [ProjectCategory.React]: "React, Next.js & JavaScript apps",
  [ProjectCategory.Autohotkey]: "AutoHotkey script",
};

export interface ProjectCategoryDetails {
  name: string;
  priority?: number;
}

export const ProjectPriority: Record<ProjectCategory, number> = {
  [ProjectCategory.Extension]: 10,
  [ProjectCategory.Flutter]: 7,
  [ProjectCategory.React]: 9,
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
  priority?: number;
  cardLabel?: string;
}

export interface ProjectGroup {
  category: ProjectCategory;
  projects: ProjectMeta[];
}
