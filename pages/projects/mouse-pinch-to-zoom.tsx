import icon from "@/assets/icons/mouse-pinch-to-zoom.png";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "mouse-pinch-to-zoom",
  name: "Mouse\nPinch-To-Zoom",
  category: ProjectCategory.Extension,
  hue: 216,
  icon,
  description:
    "Zoom in on a specific part of the website, like you would with a touchpad gesture!",
  downloadUrl:
    "https://chrome.google.com/webstore/detail/pffiadlahfhoniddbipeiiohjnlongfi",
  codeUrl: "https://github.com/nizioleque/mouse-pinch-to-zoom",
  priority: 10,
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
          Currently available on the Chrome Web Store with over 10,000 users and
          a 4.8 ⭐ average from 150 ratings. Also available for Firefox.
        </p>
        <div>
          The extension offers four activation modes:
          <ul style={{ marginBottom: 0 }}>
            <li>
              Zoom by turning the mouse wheel while holding the Alt or Ctrl key
            </li>
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
        <video
          src="https://user-images.githubusercontent.com/92390086/168915530-35dbd0d9-104e-417d-9d7e-2bfcdafd5893.mp4"
          controls
        />
      </ProjectContent>
    </ProjectLayout>
  );
}

export default MousePinchToZoom;
