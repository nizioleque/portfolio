import {
  EmailOutlined,
  GitHub,
  Language,
  LinkedIn,
  PhoneOutlined,
  PlaceOutlined,
} from "@mui/icons-material";
import ContactTile from "./ContactTile";

function Infobar() {
  return (
    <div className="bg-cv-700 flex shrink-0 flex-col justify-between p-6 text-white shadow-2xl">
      <div className="flex flex-col gap-1">
        <h1 className="text-shadow-950/15 text-[32px] leading-none font-normal text-shadow-lg">
          Norbert Kosma
        </h1>
        <h1 className="text-shadow-950/15 text-[38px] leading-none font-black text-shadow-lg">
          Niziołek
        </h1>
        <div className="leading-none font-light italic">
          [neez-<strong>yo</strong>-weck]
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <ContactTile
          icon={<EmailOutlined />}
          label="norbert@niziolek.dev"
          href="mailto:norbert@niziolek.dev"
        />
        <ContactTile
          icon={<PhoneOutlined />}
          label="+48 887 877 975"
          href="tel:+48887877975"
        />
        <ContactTile icon={<PlaceOutlined />} label="Warsaw, Poland" />
      </div>
      <div className="flex flex-col gap-2">
        <ContactTile
          size="small"
          icon={<Language />}
          label="niziolek.dev"
          href="https://niziolek.dev"
        />
        <ContactTile
          size="small"
          icon={<GitHub />}
          label="nizioleque"
          href="https://github.com/nizioleque"
        />
        <ContactTile
          size="small"
          icon={<LinkedIn />}
          label="norbert-niziolek"
          href="https://www.linkedin.com/in/norbert-niziolek/"
        />
      </div>
      <div>
        <h3 className="mb-1 text-lg font-bold">Skills</h3>
        <ul className="ms-4 flex list-disc flex-col gap-1">
          <li>
            Front-end
            <ul className="ms-4 list-disc">
              <li>HTML, CSS, JavaScript</li>
              <li>TypeScript</li>
              <li>React, Next.js</li>
              <li>Tailwind CSS, MUI</li>
              <li>Framer Motion</li>
              <li>Tanstack Query</li>
              <li>Webpack</li>
              <li>Playwright, Cypress</li>
            </ul>
          </li>
          <li>Mobile – Flutter</li>
          <li>
            Backend
            <ul className="ms-4 list-disc">
              <li>Python – FastAPI</li>
              <li>Java – Sprint Boot</li>
              <li>Firebase</li>
            </ul>
          </li>
          <li>Databases – SQL, MongoDB</li>
          <li>Git</li>
          <li>UI/UX Design</li>
        </ul>
      </div>
      <div>
        <h3 className="mb-1 text-lg font-bold">Languages</h3>
        <ul className="ms-4 flex list-disc flex-col gap-1">
          <li>Polish – native</li>
          <li>
            English – C2
            <br />
            CAE (grade A) certificate
          </li>
          <li>Italian, Russian – B2</li>
          <li>Spanish, Ukrainian – B1</li>
          <li>German – A2</li>
        </ul>
      </div>
    </div>
  );
}

export default Infobar;
