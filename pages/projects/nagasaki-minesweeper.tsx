import icon from '../../src/assets/icons/nagasaki-minesweeper.png';
import ProjectLayout from '../../src/components/Layout/ProjectLayout';
import ProjectContent from '../../src/components/projectPage/ProjectContent';
import ProjectHeader from '../../src/components/projectPage/ProjectHeader';
import { ProjectCategory, ProjectMeta } from '../../src/types';

export const meta: ProjectMeta = {
  id: 'nagasaki-minesweeper',
  name: 'Nagasaki Minesweeper',
  category: ProjectCategory.Flutter,
  hue: 199,
  icon,
  description: 'Game',
  downloadUrl: 'https://spicy-nachos.github.io/nagasaki/',
  codeUrl: 'https://github.com/spicy-nachos/nagasaki',
};

function NagasakiMinesweeper() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>NagasakiMinesweeper is a game.</p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default NagasakiMinesweeper;
