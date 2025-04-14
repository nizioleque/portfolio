import cognityLogo from "@/assets/cv/cognity.webp";
import developolisLogo from "@/assets/cv/developolis.png";
import herohuntLogo from "@/assets/cv/herohunt.png";
import miniLogo from "@/assets/cv/mini.png";
import omegaLogo from "@/assets/cv/omega.jpg";
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
    <div className="flex w-full flex-col justify-between gap-3 px-6 py-4">
      <MainSection title="Experience">
        <Experience
          title="Senior Full Stack Developer"
          company="O-mega"
          startDate="September 2024"
          endDate="Now"
          logo={omegaLogo}
          description={[
            <>
              <strong>Sole technical owner</strong> of the product; responsible
              for end-to-end development and architecture in a fast-paced AI
              startup
            </>,
            <>
              Rebuilt the frontend from vanilla JS to{" "}
              <strong>React (Next.js App Router)</strong>, modernized styling,
              and introduced modular design
            </>,
            <>
              Refactored a monolithic <strong>FastAPI</strong> backend: added
              type safety, restructured the codebase into modules
            </>,
            <>
              Improved <strong>MongoDB</strong> queries for performance,
              minimizing unnecessary data fetches and roundtrips
            </>,
            <>
              Used <strong>Cursor AI</strong> to accelerate development while
              maintaining full control and code quality
            </>,
            <>
              Built <strong>AI-driven</strong> features including LLM prompt
              tuning, structured response parsing, and browser automation
            </>,
          ]}
        />
        <Experience
          title="Senior Front-end Developer"
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
              Contributed to a major UX-focused redesign, transforming the user
              experience from an open library to a guided lesson path
            </>,
            <>
              Worked within a large legacy codebase, implementing new features
              and improving usability without disrupting existing flows
            </>,
            <>
              Made backend changes in <strong>ASP.NET</strong> (
              <strong>C#</strong>) to support new frontend functionality and
              improve API responses when needed
            </>,
          ]}
        />
        <Experience
          title="Senior Front-end Developer"
          company="HeroHunt.ai"
          startDate="August 2023"
          endDate="June 2024"
          logo={herohuntLogo}
          description={[
            <>
              <strong>Sole frontend developer</strong>, responsible for building
              a web app and a browser extension from scratch using{" "}
              <strong>Next.js (App Router)</strong>, <strong>React</strong>, and{" "}
              <strong>Tailwind CSS</strong>
            </>,
            <>
              Built a browser extension with a custom <strong>Webpack</strong>
              -based build system and deep integration with third-party websites
            </>,
            <>
              Used <strong>React Server Components</strong> and advanced
              preloading strategies (with <strong>RSC</strong> +{" "}
              <strong>Tanstack Query</strong>) to reduce bundle size, avoid
              loading waterfalls and improve UX
            </>,
            <>
              Suggested and implemented backend <strong>REST API</strong> design
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
              <strong>Independently</strong> built a front-end application for
              managing cloud infrastructure using <strong>TypeScript</strong>,{" "}
              <strong>React</strong> and <strong>MUI</strong>
            </>,
            <>
              Developed a back-end application in <strong>Java</strong> with{" "}
              <strong>Spring Boot</strong>
            </>,
            <>
              Maintained code for <strong>NLP</strong> tasks as part of the
              Bixby assistant team
            </>,
            <>
              Created an <strong>Electron</strong> desktop app to automate
              internal release processes, with a <strong>React</strong> frontend
              and <strong>Node.js</strong> backend that integrated with multiple
              APIs and CLI tools
            </>,
          ]}
        />
      </MainSection>
      <MainSection title="Projects">
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
        />
        <Project
          title="Splitsmart"
          type="Mobile application"
          description="Split bills with friends using OCR receipt scanning"
          logo={splitsmartLogo}
          techStack={["Flutter", "FastAPI", "MongoDB"]}
          year="2024"
        />
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
