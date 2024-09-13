import icon from "@/assets/icons/quiz.png";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "quiz",
  name: "Quiz",
  category: ProjectCategory.React,
  hue: 175,
  icon,
  description: "This is actually a questionnaire app",
  visitUrl: "https://quiz.niziolek.dev/",
  codeUrl: "https://github.com/nizioleque/quiz",
};

function Quiz() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>
          Beautiful, intuitive and smooth questionnaire app. Build yours with
          the simple but powerful JSON definition and enjoy filling in the form.
        </p>
        <video
          src="https://github.com/user-attachments/assets/a2d11a9c-be41-47ef-95ed-cf533e998024"
          controls
        />
        <h4>Features</h4>
        <ul>
          <li>
            Clear JSON structure for question definition (see{" "}
            <code>/src/types.ts</code>)
          </li>
          <li>Animation between questions</li>
          <li>Progress bar</li>
          <li>Conditional navigation</li>
          <li>Support for optional and single/multi-line input questions</li>
          <li>Responsive design</li>
          <li>Attention to accessibility</li>
        </ul>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default Quiz;
