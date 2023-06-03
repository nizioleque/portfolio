import icon from '../../src/assets/icons/splitsmart.png';
import ProjectContent from '../../src/components/ProjectContent';
import ProjectHeader from '../../src/components/projectPage/ProjectHeader';
import { ProjectMeta } from '../../src/types';

export const meta: ProjectMeta = {
  id: 'splitsmart',
  name: 'Splitsmart',
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