import LinkButton from "@/components/about/LinkButton";
import useResponsiveLayout from "@/hooks/useResponsiveLayout";
import {
  GitHub,
  Instagram,
  LinkedIn,
  MailOutline,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";
import { Box } from "@mui/material";

function Contact() {
  const { mobileQuery } = useResponsiveLayout();

  return (
    <Box
      sx={{
        gap: 2,
        display: "flex",
        justifyContent: "center",
        [mobileQuery]: {
          gap: 0,
        },
      }}
    >
      <LinkButton icon={<MailOutline />} href="mailto:norbert@niziolek.dev" />
      <LinkButton icon={<GitHub />} href="https://github.com/nizioleque" />
      <LinkButton icon={<Telegram />} href="https://t.me/don_rododendron" />
      <LinkButton icon={<WhatsApp />} href="https://wa.me/48887877975" />
      <LinkButton
        icon={<Instagram />}
        href="https://instagram.com/nizioleque"
      />
      <LinkButton
        icon={<LinkedIn />}
        href="https://www.linkedin.com/in/norbert-nizio%C5%82ek-927304286/"
      />
    </Box>
  );
}

export default Contact;
