import { ProjectMeta } from '../../src/types';
import icon from '../../src/assets/icons/mouse-pinch-to-zoom.png';
import ProjectHeader from '../../src/components/projectPage/ProjectHeader';
import ProjectContent from '../../src/components/ProjectContent';

export const meta: ProjectMeta = {
  id: 'mouse-pinch-to-zoom',
  name: 'Mouse Pinch To Zoom',
  icon,
  description:
    'Zoom in on a specific part of the website, like you would with a touchpad gesture!',
};

function MousePinchToZoom() {
  return (
    <>
      <ProjectHeader meta={meta} />
      <ProjectContent>
      </ProjectContent>
    </>
  );
}

export default MousePinchToZoom;
