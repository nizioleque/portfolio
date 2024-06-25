import icon from "@/assets/icons/mojewidelo.png";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "mojewidelo",
  name: "MojeWideło",
  category: ProjectCategory.React,
  hue: 33,
  icon,
  description: "Streaming service",
  downloadUrl: "https://mojewidelo.pl",
  codeUrl: "https://github.com/IO2-2023-JB/team_10_frontend",
};

function MojeWidelo() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>MojeWidelo is a streaming service.</p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default MojeWidelo;
