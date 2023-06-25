import icon from '../../src/assets/icons/mouse-pinch-to-zoom.png';
import ProjectLayout from '../../src/components/Layout/ProjectLayout';
import ProjectContent from '../../src/components/projectPage/ProjectContent';
import ProjectHeader from '../../src/components/projectPage/ProjectHeader';
import { ProjectCategory, ProjectMeta } from '../../src/types';

export const meta: ProjectMeta = {
  id: 'mouse-pinch-to-zoom',
  name: 'Mouse\nPinch-To-Zoom',
  category: ProjectCategory.Extension,
  hue: 216,
  icon,
  description:
    'Zoom in on a specific part of the website, like you would with a touchpad gesture!',
  downloadUrl:
    'https://chrome.google.com/webstore/detail/pffiadlahfhoniddbipeiiohjnlongfi',
  codeUrl: 'https://github.com/nizioleque/mouse-pinch-to-zoom',
};

function MousePinchToZoom() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>
          Mouse Pinch-To-Zoom is a browser extension which allows you to achieve
          touchpad or touchscreen zoom effect using a mouse.
        </p>
        <p>
          Currently available on the Chrome Web Store with over 5,000 users and
          a 4.7 ⭐ average rating.
        </p>
        <div>
          The extension offers three activation modes:
          <ul style={{ marginBottom: 0 }}>
            <li>Zoom by turning the mouse wheel while holding the Alt key</li>
            <li>
              Zoom by turning the mouse wheel while holding the left or right
              mouse button
            </li>
          </ul>
        </div>
        <p>
          You can also customize the speed and smoothness. All the settings are
          easily accessible by clicking on the extension logo.
        </p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default MousePinchToZoom;
