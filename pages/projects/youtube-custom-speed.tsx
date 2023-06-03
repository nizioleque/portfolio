import icon from '../../src/assets/icons/youtube-custom-speed.png';
import ProjectContent from '../../src/components/ProjectContent';
import ProjectHeader from '../../src/components/projectPage/ProjectHeader';
import { ProjectCategory, ProjectMeta } from '../../src/types';

export const meta: ProjectMeta = {
  id: 'youtube-custom-speed',
  name: 'Youtube Custom Speed',
  category: ProjectCategory.Extension,
  icon,
  description:
    'Change the speed of Youtube videos to whatever you like, with customizable presets and keyboard shortcuts!',
  downloadUrl:
    'https://chrome.google.com/webstore/detail/youtube-custom-speed/kmfcinojnfabkpndlgomnfjllgeppegb',
  codeUrl: 'https://github.com/nizioleque/youtube-custom-speed',
};

function YoutubeCustomSpeed() {
  return (
    <>
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
    </>
  );
}

export default YoutubeCustomSpeed;
