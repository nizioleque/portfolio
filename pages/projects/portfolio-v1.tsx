import icon from "@/assets/icons/portfolio-v1.ico";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";
import Image from "next/image";

export const meta: ProjectMeta = {
  id: "portfolio-v1",
  name: "Portfolio V1",
  category: ProjectCategory.React,
  hue: 271,
  icon,
  description: "this – but version 1",
  // TODO change to visit
  downloadUrl: "https://v1.niziolek.dev/",
  codeUrl: "https://github.com/nizioleque/portfolio/tree/v1",
  priority: 10,
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
        <Image
          src="/screenshots/portfolio-v1-1.png"
          alt="Homepage screenshot"
          // TODO update width/height depending on the image and location
          width={800}
          height={571}
          quality={90}
        />
        <Image
          src="/screenshots/portfolio-v1-2.png"
          alt="Homepage screenshot"
          width={800}
          height={571}
          quality={90}
        />
      </ProjectContent>
    </ProjectLayout>
  );
}

export default PortfolioV1;
