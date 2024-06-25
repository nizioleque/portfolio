import icon from "../../src/assets/icons/mojewidelo.png";
import ProjectContent from "../../src/components/projectPage/ProjectContent";
import ProjectHeader from "../../src/components/projectPage/ProjectHeader";
import ProjectLayout from "../../src/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "../../src/types";

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
