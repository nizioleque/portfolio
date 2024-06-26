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
  description: "Simple typing challenge game",
  downloadUrl: "https://nizioleque.github.io/typing-challenge/",
  codeUrl: "https://github.com/nizioleque/typing-challenge",
};

function TypingChallenge() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>
          The task for my Web Design classes for Ukrainian refugee teenagers in
          2022.
        </p>
        <p>
          Type as quickly as you can. Switch between Polish, English and
          Ukrainian. Don&apos;t make the screen go red!
        </p>
        <p>
          Teaching those kids was a great experience, it felt great to put
          smiles on their faces in the most difficult time of their life. I also
          enjoyed practicing Ukrainian, what a beautiful language!
        </p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default TypingChallenge;
