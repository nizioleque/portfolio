import icon from '../../src/assets/icons/portfolio-v1.ico';
import ProjectContent from '../../src/components/projectPage/ProjectContent';
import ProjectHeader from '../../src/components/projectPage/ProjectHeader';
import { ProjectCategory, ProjectMeta } from '../../src/types';

export const meta: ProjectMeta = {
  id: 'portfolio-v1',
  name: 'Portfolio V1',
  category: ProjectCategory.React,
  hue: 271,
  icon,
  description: 'Portfolio – version 1',
  downloadUrl: 'https://v1.niziolek.dev/',
  codeUrl: 'https://github.com/nizioleque/portfolio/tree/v1',
};

function PortfolioV1() {
  return (
    <>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>PortfolioV1 is a streaming service.</p>
      </ProjectContent>
    </>
  );
}

export default PortfolioV1;
