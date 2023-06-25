import icon from '../../src/assets/icons/ahk.png';
import ProjectLayout from '../../src/components/Layout/ProjectLayout';
import ProjectContent from '../../src/components/projectPage/ProjectContent';
import ProjectHeader from '../../src/components/projectPage/ProjectHeader';
import { ProjectCategory, ProjectMeta } from '../../src/types';

export const meta: ProjectMeta = {
  id: 'mouse-xbuttons',
  name: 'Mouse XButtons',
  category: ProjectCategory.Autohotkey,
  hue: 199,
  icon,
  description: 'Ahk',
  downloadUrl:
    'https://github.com/nizioleque/AutoHotkey/blob/master/Mouse%20XButtons/Mouse%20XButtons.exe',
  codeUrl: 'https://github.com/nizioleque/AutoHotkey',
  hideFromHomepage: true,
};

function MouseXButtons() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>MouseXButtons is a streaming service.</p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default MouseXButtons;
