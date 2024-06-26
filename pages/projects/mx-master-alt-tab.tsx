import icon from "@/assets/icons/ahk.png";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "mx-master-alt-tab",
  name: "MX Master AltTab",
  category: ProjectCategory.Autohotkey,
  hue: 199,
  icon,
  description: "Superpowers for your MX Master!",
  downloadUrl:
    "https://github.com/nizioleque/AutoHotkey/raw/master/MX%20Master%20Gesture%20AltTab/MX%20Master%20Gesture%20AltTab.exe",
  codeUrl: "https://github.com/nizioleque/AutoHotkey",
  hideFromHomepage: true,
};

function MxMasterAltTab() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>
          MX Master Gesture AltTab is an AutoHotkey script for the Logitech MX
          Master users. It gives your mouse superpowers – you can use the
          gesture button for quick and easy window switching.
        </p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default MxMasterAltTab;
