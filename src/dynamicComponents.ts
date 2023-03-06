import dynamic from 'next/dynamic';

const dynamicComponents = {
  'mouse-pinch-to-zoom': dynamic(
    () => import('../pages/projects/mouse-pinch-to-zoom')
  ),
};

export default dynamicComponents;
