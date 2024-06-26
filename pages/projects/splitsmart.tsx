import icon from "@/assets/icons/splitsmart.png";
import ProjectContent from "@/components/projectPage/ProjectContent";
import ProjectHeader from "@/components/projectPage/ProjectHeader";
import ProjectLayout from "@/components/projectPage/ProjectLayout";
import { ProjectCategory, ProjectMeta } from "@/types";

export const meta: ProjectMeta = {
  id: "splitsmart",
  name: "Splitsmart",
  category: ProjectCategory.Flutter,
  cardLabel: "Flutter & FastAPI app",
  hue: 120,
  icon,
  description: "Split expenses with friends, with ease.",
  visitUrl: "https://splitsmart.niziolek.dev",
  codeUrl: "https://github.com/nizioleque/splitsmart",
  priority: 10,
};

function Splitsmart() {
  return (
    <ProjectLayout hue={meta.hue}>
      <ProjectHeader meta={meta} />
      <ProjectContent>
        <p>
          Splitsmart is a Flutter mobile app with a backend created with
          FastAPI, my favorite backend framework for Python.
        </p>
        <p>
          It&apos;s meant for splitting bills, just like Splitwise, but it has a
          great interface for splitting items from long store receipts.
        </p>
        <p>
          And the best part – OCR receipt scanning 🤩 with a fine-tuned
          Tesseract model.
        </p>
        <p>
          Almost production ready, release coming <i>soon</i>™️. You can check
          the web version right now.
        </p>
      </ProjectContent>
    </ProjectLayout>
  );
}

export default Splitsmart;
