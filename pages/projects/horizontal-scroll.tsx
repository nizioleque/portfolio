import icon from '../../src/assets/icons/ahk.png';
import ProjectContent from '../../src/components/projectPage/ProjectContent';
import ProjectHeader from '../../src/components/projectPage/ProjectHeader';
import { ProjectCategory, ProjectMeta } from '../../src/types';

export const meta: ProjectMeta = {
  id: 'horizontal-scroll',
  name: 'Horizontal Scroll',
  category: ProjectCategory.Autohotkey,
  hue: 199,
  icon,
  description: 'Ahk',
  downloadUrl:
    'https://github.com/nizioleque/AutoHotkey/blob/master/Horizontal%20Scroll/Horizontal%20Scroll.exe',
  codeUrl: 'https://github.com/nizioleque/AutoHotkey',
  hideFromHomepage: true,
};

function HorizontalScroll() {
  return (
    <>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>HorizontalScroll is a streaming service.</p>
      </ProjectContent>
    </>
  );
}

export default HorizontalScroll;
