import Section from "@/components/about/AboutSection";
import Contact from "@/components/about/Contact";
import Em from "@/components/about/Emphasis";
import Hi from "@/components/about/Hi";
import HomePageChild from "@/components/Layout/HomePageChild";
import HomePageContent from "@/components/Layout/HomePageContent";
import { responsiveSize } from "@/theme/responsiveSize";
import { Stack } from "@mui/material";

function About() {
  return (
    <HomePageContent>
      <Stack
        sx={{
          maxWidth: 700,
          alignItems: "center",
          textAlign: "justify",
          ...responsiveSize(4, 0.7, "gap"),
        }}
      >
        <Hi />
        <Section large>
          I&apos;m <Em>Norbert Kosma Niziołek</Em>,
        </Section>
        <HomePageChild>
          <Contact />
        </HomePageChild>
        <Section>
          a frontend developer based in Warsaw, Poland, soon moving to Madrid,
          Spain. I am passionate about <Em>beautiful interfaces</Em> which
          enable <Em>great user experiences</Em>.
        </Section>
        <Section>
          Over many years of experience I have created numerous helpful{" "}
          <Em>browser extensions</Em>, <Em>Web apps</Em>, <Em>mobile apps</Em>{" "}
          and more.
        </Section>
        <Section>
          I have experience with <Em>React</Em>, <Em>Next.js</Em> (including the{" "}
          <Em>App Router</Em>), and various popular libraries, including{" "}
          <Em>MUI</Em>, <Em>Tailwind CSS</Em>, <Em>Tanstack Query</Em> and{" "}
          <Em>Framer Motion</Em>. For mobile apps, I&apos;ve worked with{" "}
          <Em>Flutter</Em>.
        </Section>
        <Section>
          I love writing beautiful, <Em>clean and maintainable code</Em> and I
          am determined to <Em>solve any problem</Em> that comes my way.
        </Section>
        <Section>
          I also enjoy <Em>full stack</Em> development – I have worked with
          various backend frameworks including <Em>Spring Boot</Em> in Java and{" "}
          <Em>FastAPI</Em> in Python.
        </Section>
        <Section>
          Whenever I have some time to get up from my desk, I usually ride my
          bike, go for a run or study languages.
        </Section>
        <Section large>
          I am currently <Em color="text.accentSecondary">looking for a job</Em>
          !
        </Section>
        <Section id="hire-me">
          Learn more about my professional experience in my{" "}
          <Em
            color="text.accentSecondary"
            sx={{
              textDecoration: "underline",
              textUnderlineOffset: 4,
            }}
          >
            <a target="_blank" href="/cv.pdf">
              CV
            </a>
          </Em>{" "}
          and don&apos;t hesitate to{" "}
          <Em
            color="text.accentSecondary"
            sx={{
              textDecoration: "underline",
              textUnderlineOffset: 4,
            }}
          >
            <a
              target="_blank"
              href="mailto: norbert@niziolek.dev
     ?subject=Saw your portfolio!
     &body=Hi Norbert,%0D%0A%0D%0AI just saw your portfolio and I'm interested in working with you! Let's talk!%0D%0A"
            >
              reach out to me
            </a>
          </Em>{" "}
          if you think I would be a good fit for your team!
        </Section>
      </Stack>
    </HomePageContent>
  );
}

export default About;
