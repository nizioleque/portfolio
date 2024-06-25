import icon from "@/assets/icons/typing-challenge.png";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "typing-challenge",
  name: "Typing Challenge",
  category: ProjectCategory.Web,
  hue: 60,
  icon,
  description: "typing challenge",
  downloadUrl: "https://nizioleque.github.io/typing-challenge/",
  codeUrl: "https://github.com/nizioleque/typing-challenge",
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
