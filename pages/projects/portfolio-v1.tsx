import icon from "@/assets/icons/portfolio-v1.ico";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import Screenshot from "@/components/projects/Screenshot";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "portfolio-v1",
  name: "Portfolio V1",
  category: ProjectCategory.React,
  cardLabel: "Next.js app",
  hue: 271,
  icon,
  description: "this – but version 1",
  visitUrl: "https://v1.niziolek.dev/",
  codeUrl: "https://github.com/nizioleque/portfolio/tree/v1",
  priority: 10,
  hideSupport: true,
};

function PortfolioV1() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>
          The previous version of this portfolio. Maybe even cooler than this
          one? Check it out and let me know.
        </p>
        <p>
          My first experience with Next.js. Cool animations, hover effects,
          responsiveness. I learned a lot from this project.
        </p>
        <Screenshot filename="portfolio-v1-1" aspectRatio={1.4} />
        <Screenshot filename="portfolio-v1-2" aspectRatio={1.4} />
      </ProjectContent>
    </ProjectLayout>
  );
}

export default PortfolioV1;
