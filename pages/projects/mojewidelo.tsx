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
  description: "Just another YouTube clone",
};

function MojeWidelo() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>
          MojeWideło is a streaming service created as a university project.
        </p>
        <p>
          My first experience with Vite, Tanstack Query and reviewing the code
          of less experienced colleagues. It showed me why bundle size matters
          and all of that React Suspense and dynamic import stuff.
        </p>
        <p>
          Uses a backend created with ASP.NET in C# – I also had a chance to
          learn some of that.
        </p>
        <p>Currently not deployed because it costs money.</p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default MojeWidelo;
