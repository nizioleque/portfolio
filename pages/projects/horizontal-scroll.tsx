import icon from "@/assets/icons/ahk.png";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "horizontal-scroll",
  name: "Horizontal Scroll",
  category: ProjectCategory.Autohotkey,
  hue: 199,
  icon,
  description: "Ahk",
  downloadUrl:
    "https://github.com/nizioleque/AutoHotkey/blob/master/Horizontal%20Scroll/Horizontal%20Scroll.exe",
  codeUrl: "https://github.com/nizioleque/AutoHotkey",
  hideFromHomepage: true,
};

function HorizontalScroll() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>HorizontalScroll is a streaming service.</p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default HorizontalScroll;
