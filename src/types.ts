import { StaticImageData } from 'next/image';

export enum ProjectCategory {
  Extension = 'Browser extension',
  Flutter = 'Flutter app',
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
}

export type GroupedProjects = Record<ProjectCategory, ProjectMeta[]>;
