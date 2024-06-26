/* eslint-disable @next/next/no-img-element */

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
        <p>
          Do you find yourself watching cute kitten videos instead of
          educational content all the time? Get rid of all the reccomendations,
          suggestions, comments and other tempting buttons!
        </p>
        <p>Easily choose what is hidden using the options menu!</p>
        <p>
          Available on the Chrome Web Store with just above 200 users and
          average 4.7 ⭐.
        </p>
        <img
          src="https://lh3.googleusercontent.com/T6URhtt5LGbv5M5oonejPeLHiavxDcGMB03az2xCrHPxqWfmEWjLFApZ_drtfAjgZ4njvV43AdUYlCqkIx_Ic1A2GQ=s1280-w1280-h800"
          alt="YouTube Distraction Killer promotional image"
        />
        <img
          src="https://lh3.googleusercontent.com/T4chY4oTLbRZdMgke29CBbl9e6vJwPnNr2aN_V3r3ywn6Ntw556nvZBEDSCcouT2D9DSo7q87Ck7GJ4TffJbcj3jHg=s1280-w1280-h800"
          alt="YouTube Distraction Killer promotional image"
        />
      </ProjectContent>
    </ProjectLayout>
  );
}

export default YtDistractionKiller;
