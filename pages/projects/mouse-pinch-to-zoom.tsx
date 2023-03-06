import { ProjectMeta } from '../../src/types';
import icon from '../../src/assets/icons/mouse-pinch-to-zoom.png';

export const meta: ProjectMeta = {
  id: 'mouse-pinch-to-zoom',
  name: 'Mouse Pinch To Zoom',
  icon,
  description:
    'Zoom in on a specific part of the website, like you would with a touchpad gesture!',
};

function MousePinchToZoom() {
  return <div>MousePinchToZoom</div>;
}

export default MousePinchToZoom;