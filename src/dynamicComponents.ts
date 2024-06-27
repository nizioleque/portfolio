import dynamic from "next/dynamic";

const dynamicComponents = {
  "mouse-pinch-to-zoom": dynamic(
    () => import("../pages/projects/mouse-pinch-to-zoom")
  ),
  "youtube-custom-speed": dynamic(
    () => import("../pages/projects/youtube-custom-speed")
  ),
  splitsmart: dynamic(() => import("../pages/projects/splitsmart")),
  "youtube-distraction-killer": dynamic(
    () => import("../pages/projects/youtube-distraction-killer")
  ),
  mojewidelo: dynamic(() => import("../pages/projects/mojewidelo")),
  "nagasaki-minesweeper": dynamic(
    () => import("../pages/projects/nagasaki-minesweeper")
  ),
  "pdf-search": dynamic(() => import("../pages/projects/pdf-search")),
  "portfolio-v1": dynamic(() => import("../pages/projects/portfolio-v1")),
  "portfolio-v2": dynamic(() => import("../pages/projects/portfolio-v2")),
  "search-shortcut": dynamic(() => import("../pages/projects/search-shortcut")),
  "typing-challenge": dynamic(
    () => import("../pages/projects/typing-challenge")
  ),
  "mx-master-alt-tab": dynamic(
    () => import("../pages/projects/mx-master-alt-tab")
  ),
  "mouse-xbuttons": dynamic(() => import("../pages/projects/mouse-xbuttons")),
  "horizontal-scroll": dynamic(
    () => import("../pages/projects/horizontal-scroll")
  ),
  "hh-extension-template": dynamic(
    () => import("../pages/projects/hh-extension-template")
  ),
  "react-props-sync": dynamic(
    () => import("../pages/projects/react-props-sync")
  ),
};

export default dynamicComponents;
