import icon from "@/assets/icons/extension-template.svg";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "extension-template",
  name: "HH Extension Template",
  category: ProjectCategory.Extension,
  cardLabel: "Extension template",
  hue: 196,
  icon,
  description: "The Create React App of the extension world",
  priority: 8.5,
  codeUrl: "https://github.com/herohunt-ai/chrome-extension-react-mui",
};

function ExtensionTemplate() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>
          One of my greatest achievements and learning experiences. Modern, easy
          to use and extremely powerful browser extension template. The best.
        </p>
        <p>
          Best features:
          <ul>
            <li>
              Use any NPM module and rebuild in the blink of an eye (literally)
              with Webpack & esbuild
            </li>
            <li>Create UI with React and MUI</li>
            <li>Import SVG images into HTML with SVGR</li>
            <li>
              Inject UI into webpages without CSS conflicts and getting detected
              with Shadow DOM
            </li>
            <li>
              Keep your code safe and clean with TypeScript, ESLint and Prettier
            </li>
          </ul>
        </p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default ExtensionTemplate;
