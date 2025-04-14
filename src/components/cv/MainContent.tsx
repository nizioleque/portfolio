import cognityLogo from "@/assets/cv/cognity.webp";
import developolisLogo from "@/assets/cv/developolis.png";
import herohuntLogo from "@/assets/cv/herohunt.png";
import omegaLogo from "@/assets/cv/omega.png";
import samsungLogo from "@/assets/cv/samsung.jpg";
import mousePinchLogo from "@/assets/icons/mouse-pinch-to-zoom.png";
import splitsmartLogo from "@/assets/icons/splitsmart.png";
import youtubeSpeedLogo from "@/assets/icons/youtube-custom-speed.png";
import Education from "./Education";
import Experience from "./Experience";
import MainSection from "./MainSection";
import Project from "./Project";

function MainContent() {
  return (
    <div className="flex w-full flex-1 flex-col justify-between gap-4 p-6">
      <MainSection title="Experience">
        <Experience
          title="Senior Full Stack Developer"
          company="O-mega"
          startDate="September 2024"
          endDate="Now"
          logo={omegaLogo}
          description={[
            <>
              <strong>Sole engineer</strong> in an AI agent startup, responsible
              for end-to-end development and architecture
            </>,
            <>
              Developing <strong>Next.js (App Router)</strong> and{" "}
              <strong>FastAPI</strong> applications
            </>,
            <>
              Completely rebuilt a vanilla JS frontend, modernized styling,
              introduced <strong>modular design</strong> and improved{" "}
              <strong>maintainability</strong>
            </>,
            <>
              Refactored an existing backend application with{" "}
              <strong>type safety</strong>, restructured the codebase and
              deployed it with <strong>Render</strong>
            </>,
            <>
              Built <strong>AI-driven</strong> features including LLM prompt
              tuning, structured response parsing, and{" "}
              <strong>browser automation</strong>
            </>,
          ]}
        />
        <Experience
          title="Senior Full Stack Developer"
          company="The Cognity"
          startDate="October 2024"
          endDate="Now"
          logo={cognityLogo}
          description={[
            <>
              <strong>Main frontend developer</strong> for an e-learning
              platform supporting users on the autism spectrum
            </>,
            <>
              Developing a <strong>C# (ASP.NET)</strong> backend to support new
              frontend functionality and improve API responses
            </>,
            <>
              Refactored a legacy <strong>Pages Router</strong> frontend
              application into <strong>Next.js (App Router)</strong> and fixed
              styling inconsistencies
            </>,
            <>
              Worked with <strong>GitHub Actions</strong>,{" "}
              <strong>Docker</strong> and <strong>Azure</strong> to improve
              build times and ensure proper resource caching
            </>,
          ]}
        />
        <Experience
          title="Senior Frontend Developer"
          company="HeroHunt.ai"
          startDate="August 2023"
          endDate="June 2024"
          logo={herohuntLogo}
          description={[
            <>
              <strong>Sole frontend developer </strong> in an AI recruitment
              startup
            </>,
            <>
              Built a web app and a browser extension from scratch using{" "}
              <strong>Next.js (App Router)</strong>, <strong>React</strong>,{" "}
              <strong>Tailwind CSS</strong>, <strong>Tanstack Query</strong>
            </>,
            <>
              Leveraged <strong>React Server Components</strong> and prefetching
              strategies to reduce bundle size and improve loading times
            </>,
            <>
              Suggested <strong>REST API </strong>
              improvements to reduce overfetching
            </>,
          ]}
        />
        <Experience
          title="Software Developer"
          company="Samsung R&D"
          startDate="July 2022"
          endDate="July 2023"
          logo={samsungLogo}
          description={[
            <>
              <strong>Independently</strong> built a frontend application for
              managing cloud infrastructure using <strong>TypeScript</strong>,{" "}
              <strong>React</strong>, <strong>MUI</strong>,{" "}
              <strong>RTK Query</strong>
            </>,
            <>
              Developed a back-end application in{" "}
              <strong>Java (Spring Boot)</strong>
            </>,
            <>
              Maintained <strong>NLP</strong> code in the Bixby voice assistant
              team
            </>,
            <>
              Created an <strong>Electron</strong> desktop app to automate
              internal release processes, integrated with <strong>Git</strong>,{" "}
              <strong>GitHub</strong>, <strong>Jenkins</strong> API and CLI
            </>,
          ]}
        />
      </MainSection>
      <MainSection
        title="Projects"
        subtitle={
          <a href="https://github.com/nizioleque" target="_blank">
            (more on GitHub)
          </a>
        }
      >
        <Project
          title="Mouse Pinch-To-Zoom"
          type="Browser extension"
          users={12600}
          rating={4.8}
          description="Emulating touchpad pinch-to-zoom with a mouse wheel"
          logo={mousePinchLogo}
          href="https://github.com/nizioleque/mouse-pinch-to-zoom"
          year="2021"
        />
        <Project
          title="YouTube Custom Speed"
          type="Browser extension"
          users={22600}
          rating={4.7}
          description="Easy way to customize YouTube playback speed"
          logo={youtubeSpeedLogo}
          href="https://github.com/nizioleque/youtube-custom-speed"
          year="2021"
        />
        <Project
          title="Developolis"
          type="Web application"
          description="Corporate training, gamified"
          logo={developolisLogo}
          techStack={["Next.js", "AdonisJS (Node.js)", "PostgreSQL"]}
          year="2025"
          href="https://developolis.pl"
        />
        <Project
          title="Splitsmart"
          type="Mobile application"
          description="Split bills with friends using OCR receipt scanning"
          logo={splitsmartLogo}
          techStack={["Flutter", "FastAPI", "MongoDB"]}
          year="2024"
        />
      </MainSection>
      <MainSection title="Skills">
        <div className="col-span-2 flex flex-col gap-3 text-justify leading-5.5">
          <div className="flex flex-col gap-1 [&_strong]:font-semibold">
            <span className="text-cv-700 text-lg">Tech stack </span>
            <p>
              <strong>Frontend: </strong> HTML, CSS, JavaScript, TypeScript,
              React, Next.js (Pages Router, App Router), React Server Components
              (RSC), Tailwind CSS, MUI (Material UI), Framer Motion, Tanstack
              Query (React Query), Redux, Webpack, Playwright, Cypress,
              Prettier, ESLint, Electron, Flutter
            </p>
            <p>
              <strong>Backend: </strong>
              Node.js, AdonisJS, Python, Flask, FastAPI, Pydantic, Beanie (ODM),
              SQLAlchemy (ORM), Poetry, uv, Ruff, Java, Spring Boot, Firebase,
              C#, ASP.NET, SQL (Microsoft SQL Server, PostgreSQL, SQLite),
              MongoDB
            </p>
            <p>
              <strong>DevOps: </strong>
              Microsoft Azure, Google Cloud Platform (GCP), Docker, CI/CD,
              GitHub Actions, Jenkins, Render, Vercel
            </p>
            <p>
              <strong>Other: </strong>
              Git, OpenAPI, UI/UX Design, Figma, Cursor AI, Browser Use
            </p>
          </div>
          <p>
            <span className="text-cv-700 text-lg">Languages: </span>
            Polish native, English C2 (CAE certificate), Spanish C1, Italian B2,
            Russian B2, Ukrainian B2, German A2
          </p>
        </div>
      </MainSection>
      <MainSection title="Education">
        <Education
          area="Computer Science and Information Systems"
          institution="Warsaw University of Technology"
          startDate="2020"
          endDate="2024"
          title="Bachelor of Science in Engineering – with honors"
          faculty="Faculty of Mathematics and Information Science"
        />
        <Education
          area="Data Science"
          institution="Warsaw University of Technology"
          startDate="2024"
          endDate="2025"
          title="Master of Science"
          faculty="Faculty of Mathematics and Information Science"
        />
      </MainSection>
    </div>
  );
}

export default MainContent;
