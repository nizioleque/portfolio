import icon from "@/assets/icons/react-props-sync.svg";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "react-props-sync",
  name: "React Props Sync",
  category: ProjectCategory.VsCodeExtension,
  hue: 201,
  icon,
  description: "Sync the props interface with the component's parameters",
  installUrl:
    "https://marketplace.visualstudio.com/items?itemName=HeroHunt-ai.react-props-sync",
  codeUrl: "https://github.com/herohunt-ai/react-props-sync",
};

function ReactPropsSync() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>
          I couldn&apos;t find an extension to help me sync the props. So I
          created this one. Cool, right?
        </p>
        <p>
          It has some boring snippets, but nobody cares about that. The cool
          part are the props. Here&apos;s what it does:
        </p>
        <ul>
          <li>
            Run a command to add props to a component – this will add a
            TypeScript interface above the component and empty brackets in the
            component parameter list
          </li>
          <li>
            Whenever you add a prop to the interface, it will automatically be
            added to the parameter list. Magic 🤯🪄
          </li>
        </ul>
        <p>
          It still has some bugs, but I guess that&apos;s better than not having
          it at all!
        </p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default ReactPropsSync;
