import herohuntLogo from "@/assets/cv/herohunt.png";
import miniLogo from "@/assets/cv/mini.png";
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
    <div className="flex w-full flex-col justify-between p-6">
      <MainSection title="Experience">
        <Experience
          title="Senior Front-end Developer"
          company="HeroHunt.ai"
          startDate="August 2023"
          endDate="June 2024"
          logo={herohuntLogo}
          description={[
            <>
              Created a <strong>web application</strong> for AI-assisted
              recruitment with state-of-the-art tools including{" "}
              <strong>Next.js</strong>, <strong>Tailwind CSS</strong> and{" "}
              <strong>Tanstack Query</strong>
            </>,
            <>
              Created a <strong>browser extension</strong> using{" "}
              <strong>React</strong>, including a custom build process with{" "}
              <strong>Webpack</strong> and integration with third party websites
            </>,
            <>
              Led the development of the front-end projects and made critical{" "}
              <strong>architectural decisions</strong>
            </>,
            <>
              Collaborated closely with back-end developers to ensure efficient
              and secure data exchange
            </>,
            <>
              Proactively supported the leadership and design teams to achieve{" "}
              <strong>high-quality system design</strong> and{" "}
              <strong>user experience</strong>
            </>,
            <>
              Released an <strong>open-source</strong> browser extension
              template
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
              Created a front-end application for managing cloud infrastructure
              using <strong>TypeScript</strong>, <strong>React</strong> and{" "}
              <strong>MUI</strong>
            </>,
            <>
              Developed a back-end application in <strong>Spring Boot</strong>{" "}
              and <strong>Java</strong>
            </>,
            <>
              Maintained code for <strong>NLP</strong> tasks as part of the
              Bixby assistant team
            </>,
            <>
              Created an <strong>Electron</strong> app for automating internal
              release processes
            </>,
          ]}
        />
      </MainSection>
      <MainSection title="Projects">
        <Project
          title="Mouse Pinch-To-Zoom"
          type="Browser extension"
          users={11200}
          rating={4.8}
          description="Emulating touchpad pinch-to-zoom with a mouse wheel"
          logo={mousePinchLogo}
          href="https://github.com/nizioleque/mouse-pinch-to-zoom"
        />
        <Project
          title="YouTube Custom Speed"
          type="Browser extension"
          users={15900}
          rating={4.7}
          description="Easy and customizable way to adjust YouTube playback speed"
          logo={youtubeSpeedLogo}
          href="https://github.com/nizioleque/youtube-custom-speed"
        />
        <Project
          title="Splitsmart"
          type="Mobile application"
          description="Split bills with friends easily using OCR receipt scanning"
          logo={splitsmartLogo}
          href="https://github.com/nizioleque/splitsmart"
        />
        <div className="text-cv-500 mt-2">
          + more on{" "}
          <a
            href="https://github.com/nizioleque"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/nizioleque
          </a>
        </div>
      </MainSection>
      <MainSection title="Education">
        <Education
          title="Data Science"
          institution="Warsaw University of Technology"
          startDate="2024"
          endDate="NOW"
          area="Master of Science"
          faculty="Faculty of Mathematics and Information Science"
          info={{}}
          logo={miniLogo}
        />
        <Education
          title="Computer Science and Information Systems"
          institution="Warsaw University of Technology"
          startDate="2020"
          endDate="2024"
          area="Bachelor of Science in Engineering – with honors"
          faculty="Faculty of Mathematics and Information Science"
          info={{
            Grade: "4.75 (on a scale of 2-5)",
          }}
          logo={miniLogo}
        />
      </MainSection>
    </div>
  );
}

export default MainContent;
