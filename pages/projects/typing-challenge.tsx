import icon from '../../src/assets/icons/typing-challenge.png';
import ProjectLayout from '../../src/components/Layout/ProjectLayout';
import ProjectContent from '../../src/components/projectPage/ProjectContent';
import ProjectHeader from '../../src/components/projectPage/ProjectHeader';
import { ProjectCategory, ProjectMeta } from '../../src/types';

export const meta: ProjectMeta = {
  id: 'typing-challenge',
  name: 'Typing Challenge',
  category: ProjectCategory.Web,
  hue: 60,
  icon,
  description: 'typing challenge',
  downloadUrl: 'https://nizioleque.github.io/typing-challenge/',
  codeUrl: 'https://github.com/nizioleque/typing-challenge',
};

function TypingChallenge() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>TypingChallenge is a streaming service.</p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default TypingChallenge;
