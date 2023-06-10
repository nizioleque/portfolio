import icon from '../../src/assets/icons/pdf-search.png';
import ProjectContent from '../../src/components/projectPage/ProjectContent';
import ProjectHeader from '../../src/components/projectPage/ProjectHeader';
import { ProjectCategory, ProjectMeta } from '../../src/types';

export const meta: ProjectMeta = {
  id: 'pdf-search',
  name: 'PDF Search',
  category: ProjectCategory.React,
  hue: 223,
  icon,
  description: 'Search your PDFs',
  downloadUrl: 'https://pdf-search.niziolek.dev/',
  codeUrl: 'https://github.com/nizioleque/pdf-search',
};

function PdfSearch() {
  return (
    <>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>PdfSearch is a streaming service.</p>
      </ProjectContent>
    </>
  );
}

export default PdfSearch;
