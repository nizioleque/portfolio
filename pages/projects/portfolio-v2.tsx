import icon from "@/assets/icons/portfolio-v2.ico";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "portfolio-v2",
  name: "Portfolio V2",
  category: ProjectCategory.React,
  cardLabel: "Next.js app",
  hue: 72,
  icon,
  description: "this",
  visitUrl: "https://niziolek.dev/",
  codeUrl: "https://github.com/nizioleque/portfolio",
  priority: 11,
  hideFromHomepage: true,
  hideSupport: true,
};

function PortfolioV2() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>It&apos;s the thing that you&apos;re looking at right now.</p>
        <p>
          The previous version of the portfolio had too much text and too little
          focus on the projects. So I created this one.
        </p>
        <p>
          It also gave me another opportunity to experiment with design and
          learn new tools – especially the Framer Motion animation library.
        </p>
        <p>I hope you like it!</p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default PortfolioV2;
