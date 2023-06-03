import dynamic from 'next/dynamic';

const dynamicComponents = {
  'mouse-pinch-to-zoom': dynamic(
    () => import('../pages/projects/mouse-pinch-to-zoom')
  ),
  'youtube-custom-speed': dynamic(
    () => import('../pages/projects/youtube-custom-speed')
  ),
  splitsmart: dynamic(() => import('../pages/projects/splitsmart')),
  'youtube-distraction-killer': dynamic(
    () => import('../pages/projects/youtube-distraction-killer')
  ),
};

export default dynamicComponents;
