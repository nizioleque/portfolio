import icon from '../../src/assets/icons/splitsmart.png';
import ProjectContent from '../../src/components/projectPage/ProjectContent';
import ProjectHeader from '../../src/components/projectPage/ProjectHeader';
import { ProjectCategory, ProjectMeta } from '../../src/types';

export const meta: ProjectMeta = {
  id: 'splitsmart',
  name: 'Splitsmart',
  category: ProjectCategory.Flutter,
  hue: 120,
  icon,
  description: 'Split expenses with friends, with ease.',
  downloadUrl: 'https://splitsmart.niziolek.dev',
  codeUrl: 'https://github.com/nizioleque/splitsmart',
};

function Splitsmart() {
  return (
    <>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>Splitsmart is a Flutter app.</p>
      </ProjectContent>
    </>
  );
}

export default Splitsmart;
