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
  runUrl?: string;
  downloadUrl?: string;
  codeUrl?: string;
}
