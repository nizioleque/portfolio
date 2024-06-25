import icon from "@/assets/icons/splitsmart.png";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "splitsmart",
  name: "Splitsmart",
  category: ProjectCategory.Flutter,
  hue: 120,
  icon,
  description: "Split expenses with friends, with ease.",
  downloadUrl: "https://splitsmart.niziolek.dev",
  codeUrl: "https://github.com/nizioleque/splitsmart",
  priority: 10,
};

function Splitsmart() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>Splitsmart is a Flutter app.</p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default Splitsmart;
