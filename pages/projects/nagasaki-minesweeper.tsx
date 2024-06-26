import icon from "@/assets/icons/nagasaki-minesweeper.png";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import Screenshot from "@/components/projects/Screenshot";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "nagasaki-minesweeper",
  name: "Nagasaki Minesweeper",
  category: ProjectCategory.Flutter,
  hue: 199,
  icon,
  description: "Just another Minesweeper clone",
  visitUrl: "https://spicy-nachos.github.io/nagasaki/",
  codeUrl: "https://github.com/spicy-nachos/nagasaki",
};

function NagasakiMinesweeper() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>
          Nagasaki Minesweeper is Minesweeper, but in Flutter. My first Flutter
          project, a great learning experience.
        </p>
        <p>You can play it now! Hosted for free 🤑 with GitHub Pages.</p>
        <Screenshot filename="nagasaki-minesweeper-1" aspectRatio={1.4} />
        <Screenshot filename="nagasaki-minesweeper-2" aspectRatio={1.4} />
      </ProjectContent>
    </ProjectLayout>
  );
}

export default NagasakiMinesweeper;
