import { ProjectMeta } from '../../src/types';
import icon from '../../src/assets/icons/mouse-pinch-to-zoom.png';
import ProjectHeader from '../../src/components/projectPage/ProjectHeader';
import { Box } from '@mui/material';

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
      <Box>
        Download here:{' '}
        <a href='google.com'>https://chreome web store/ mousepinchtozoom</a>
      </Box>
    </>
  );
}

export default MousePinchToZoom;
