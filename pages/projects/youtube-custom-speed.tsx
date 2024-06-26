/* eslint-disable @next/next/no-img-element */

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
  priority: 9,
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
          Currently available on the Chrome Web Store with over 10,000 users and
          a 4.7 ⭐ average rating. Also available for Firefox.
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
        <img
          src="https://lh3.googleusercontent.com/KE7vjemtrFWIQVKzdiMS1hksQCiwdJ9LTpyxL5V4rjzLu56t7tBc6rokA1TKbcrBB_weWCuFBUjITT2xR845j9zGzoc=s1280-w1280-h800"
          alt="YouTube Custom Speed UI screenshot"
        />
        <img
          src="https://lh3.googleusercontent.com/3KKuOYQMew4-Wacns1N2Ox3KYYU6oUNw4N9JIRcaInPbGHoc3_sqeYXhEW1LlG-EYk7pt65jwEgKRXV1UJNDleJEXA=s1280-w1280-h800"
          alt="YouTube Custom Speed settings screenshot"
        />
      </ProjectContent>
    </ProjectLayout>
  );
}

export default YoutubeCustomSpeed;
