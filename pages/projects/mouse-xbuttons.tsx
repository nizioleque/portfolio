import icon from "@/assets/icons/ahk.png";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "mouse-xbuttons",
  name: "Mouse XButtons",
  category: ProjectCategory.Autohotkey,
  hue: 199,
  icon,
  description: "Superpowers for your mouse!",
  downloadUrl:
    "https://github.com/nizioleque/AutoHotkey/raw/master/Mouse%20XButtons/Mouse%20XButtons.exe",
  codeUrl: "https://github.com/nizioleque/AutoHotkey",
  hideFromHomepage: true,
};

function MouseXButtons() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>
          MouseXButtons is an AutoHotkey script which gives your mouse
          superpowers. Use the back and forward side buttons on your mouse to
          switch windows or browser tabs.
        </p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default MouseXButtons;
