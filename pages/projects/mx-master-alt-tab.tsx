import icon from '../../src/assets/icons/ahk.png';
import ProjectContent from '../../src/components/projectPage/ProjectContent';
import ProjectHeader from '../../src/components/projectPage/ProjectHeader';
import { ProjectCategory, ProjectMeta } from '../../src/types';

export const meta: ProjectMeta = {
  id: 'mx-master-alt-tab',
  name: 'MX Master AltTab',
  category: ProjectCategory.Autohotkey,
  hue: 199,
  icon,
  description: 'Ahk',
  downloadUrl:
    'https://github.com/nizioleque/AutoHotkey/blob/master/MX%20Master%20Gesture%20AltTab/MX%20Master%20Gesture%20AltTab.exe',
  codeUrl: 'https://github.com/nizioleque/AutoHotkey',
  hideFromHomepage: true,
};

function MxMasterAltTab() {
  return (
    <>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>MxMasterAltTab is a streaming service.</p>
      </ProjectContent>
    </>
  );
}

export default MxMasterAltTab;
