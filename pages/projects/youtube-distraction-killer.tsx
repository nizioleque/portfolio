import icon from "@/assets/icons/youtube-distraction-killer.png";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "youtube-distraction-killer",
  name: "YT Distraction Killer",
  category: ProjectCategory.Extension,
  hue: 0,
  icon,
  description: "Remove distracting elements from YouTube's layout!",
  downloadUrl:
    "https://chrome.google.com/webstore/detail/youtube-distraction-kille/pahjidceabkifggkmokpmlmhoaiflaeh",
  codeUrl: "https://github.com/nizioleque/youtube-distraction-killer",
  priority: 8,
};

function YtDistractionKiller() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>Remove distracting elements from YouTube&apos;s layout</p>
        <p>
          Do you find yourself watching cute kitten videos instead of
          educational content all the time? Get rid of all the reccomendations,
          suggestions, comments and other tempting buttons!
        </p>
        <p>Easily choose what is hidden using the options menu!</p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default YtDistractionKiller;
