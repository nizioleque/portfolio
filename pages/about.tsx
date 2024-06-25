import { Instagram, MailOutline, Telegram } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import HomePageChild from "../src/components/Layout/HomePageChild";
import HomePageContent from "../src/components/Layout/HomePageContent";
import Section from "../src/components/about/AboutSection";
import Em from "../src/components/about/Emphasis";
import Hi from "../src/components/about/Hi";
import LinkButton from "../src/components/about/LinkButton";
import { responsiveSize } from "../src/theme/responsiveSize";

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
          I&apos;m <Em>Norbert Niziołek</Em>,
        </Section>
        <Section>
          a front-end developer based in Warsaw, Poland. I am passionate about
          designing <Em>beautiful interfaces</Em> which enable{" "}
          <Em>great user experiences</Em>.
        </Section>
        <Section>
          Over many years of experience with Web and mobile technologies I have
          created numerous helpful <Em>browser extensions</Em>,{" "}
          <Em>React apps</Em> and <Em>Flutter apps</Em>.
        </Section>
        <Section>
          I also enjoy <Em>full stack development</Em> – I have worked with
          various back-end frameworks including <Em>Spring</Em> in Java,{" "}
          <Em>ASP.NET</Em> in C# and <Em>FastAPI</Em> in Python.
        </Section>
        <Section large>
          I would love to <Em>work with you</Em>!
        </Section>
        <Section>
          Let&apos;s get in touch and together{" "}
          <Em>we&apos;ll make your idea come to life</Em>.
        </Section>
        <Box alignSelf="start">
          <HomePageChild>
            <Box
              sx={{
                gap: 1,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              <LinkButton
                icon={<MailOutline />}
                href="mailto:norbert@niziolek.dev"
              >
                norbert@niziolek.dev
              </LinkButton>
              <LinkButton
                icon={<Telegram />}
                href="https://t.me/don_rododendron"
              >
                don_rododendron
              </LinkButton>
              <LinkButton
                icon={<Instagram />}
                href="https://instagram.com/nizioleque"
              >
                nizioleque
              </LinkButton>
            </Box>
          </HomePageChild>
        </Box>
      </Stack>
    </HomePageContent>
  );
}

export default About;
