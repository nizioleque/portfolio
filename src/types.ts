import { StaticImageData } from 'next/image';

export enum ProjectCategory {
  Extension = 'Browser extension',
  Flutter = 'Flutter app',
  React = 'React app',
  Web = 'Web app',
  Autohotkey = 'AutoHotkey script',
}

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

export type GroupedProjects = Record<ProjectCategory, ProjectMeta[]>;
