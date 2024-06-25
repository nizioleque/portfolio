import icon from "@/assets/icons/nagasaki-minesweeper.png";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "nagasaki-minesweeper",
  name: "Nagasaki Minesweeper",
  category: ProjectCategory.Flutter,
  hue: 199,
  icon,
  description: "Game",
  downloadUrl: "https://spicy-nachos.github.io/nagasaki/",
  codeUrl: "https://github.com/spicy-nachos/nagasaki",
};

function NagasakiMinesweeper() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>NagasakiMinesweeper is a game.</p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default NagasakiMinesweeper;
