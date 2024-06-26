/* eslint-disable @next/next/no-img-element */

import icon from "@/assets/icons/pdf-search.png";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import Screenshot from "@/components/projects/Screenshot";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "pdf-search",
  name: "PDF Search",
  category: ProjectCategory.React,
  hue: 223,
  icon,
  description: "Search inside your PDFs",
  // TODO update SSL certificate?
  downloadUrl: "https://pdf-search.niziolek.dev/",
  codeUrl: "https://github.com/nizioleque/pdf-search",
};

function PdfSearch() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>
          PDF Search is a university project, my first full-stack experience.
          React frontend with Java & Spring Boot backend.
        </p>
        <p>
          Load a PDF, let the backend extract the text and index it and search
          the contents. Add as many PDFs as you like.
        </p>
        <p>More details on GitHub.</p>
        <Screenshot filename="pdf-search" aspectRatio={2294 / 1404} />
      </ProjectContent>
    </ProjectLayout>
  );
}

export default PdfSearch;
