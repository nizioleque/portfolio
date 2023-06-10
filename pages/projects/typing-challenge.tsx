import icon from '../../src/assets/icons/typing-challenge.png';
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
    <>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>TypingChallenge is a streaming service.</p>
      </ProjectContent>
    </>
  );
}

export default TypingChallenge;
