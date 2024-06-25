import icon from "@/assets/icons/youtube-custom-speed.png";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "youtube-custom-speed",
  name: "Youtube Custom Speed",
  category: ProjectCategory.Extension,
  hue: 15,
  icon,
  description:
    "Change the speed of Youtube videos to whatever you like, with customizable presets and keyboard shortcuts!",
  downloadUrl:
    "https://chrome.google.com/webstore/detail/youtube-custom-speed/kmfcinojnfabkpndlgomnfjllgeppegb",
  codeUrl: "https://github.com/nizioleque/youtube-custom-speed",
};

function YoutubeCustomSpeed() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>
          Youtube Custom Speed is a browser extension which allows you to easily
          change YouTube playback rate to a custom value.
        </p>
        <p>
          Currently available on the Chrome Web Store with over 3,500 users and
          a 4.96 ⭐ average rating.
        </p>
        <p>
          Youtube Custom Speed lets you play any Youtube video at any speed you
          like, from 0.0125x to 16x!
        </p>
        <p>
          Use the options menu to set your preferred playback rate values. Then,
          change the speed using buttons at the bottom of the video. It also
          cooperates with the default Youtube keyboard shortcuts - Shift + , and
          Shift + .
        </p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default YoutubeCustomSpeed;
