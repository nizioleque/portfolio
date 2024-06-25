import icon from "@/assets/icons/search-shortcut.png";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "search-shortcut",
  name: "Search Shortcut",
  category: ProjectCategory.Extension,
  hue: 205,
  icon,
  description: "Activate search boxes with a keyboard shortcut!",
  downloadUrl:
    "https://chrome.google.com/webstore/detail/search-shortcut/nnnejpimaidlnnhnfnkjanmkjigdamgm",
  codeUrl: "https://github.com/nizioleque/search-shortcut",
};

function SearchShortcut() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>SearchShortcut is a streaming service.</p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default SearchShortcut;
