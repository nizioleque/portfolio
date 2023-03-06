import { StaticImageData } from 'next/image';

export interface ProjectMeta {
  id: string;
  name: string;
  icon: StaticImageData;
  description: string;
}