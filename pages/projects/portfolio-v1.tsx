import icon from "@/assets/icons/portfolio-v1.ico";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "portfolio-v1",
  name: "Portfolio V1",
  category: ProjectCategory.React,
  hue: 271,
  icon,
  description: "Portfolio – version 1",
  downloadUrl: "https://v1.niziolek.dev/",
  codeUrl: "https://github.com/nizioleque/portfolio/tree/v1",
};

function PortfolioV1() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>PortfolioV1 is a streaming service.</p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default PortfolioV1;
