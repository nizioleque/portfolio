import LinkButton from "@/components/about/LinkButton";
import useResponsiveLayout from "@/hooks/useResponsiveLayout";
import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";
import { Box } from "@mui/material";

interface ContactProps {
  mini?: boolean;
}

function Contact({ mini = false }: ContactProps) {
  const { mobileQuery } = useResponsiveLayout();

  return (
    <Box
      sx={{
        gap: mini ? 1 : 2,
        display: "flex",
        justifyContent: mini ? "flex-end" : "center",
        marginY: mini ? 0 : -2,
        [mobileQuery]: {
          gap: 0,
        },
      }}
    >
      <LinkButton
        edge={mini ? "start" : undefined}
        icon={<Email />}
        href="mailto:norbert@niziolek.dev"
        mini={mini}
      />
      <LinkButton
        icon={<GitHub sx={{ transform: "scale(0.85)" }} />}
        href="https://github.com/nizioleque"
        mini={mini}
      />
      <LinkButton
        icon={<LinkedIn />}
        href="https://www.linkedin.com/in/norbert-nizio%C5%82ek-927304286/"
        mini={mini}
      />
      {!mini && (
        <>
          <LinkButton
            icon={<Telegram />}
            href="https://t.me/don_rododendron"
            mini={mini}
          />
          <LinkButton
            icon={<WhatsApp />}
            href="https://wa.me/48887877975"
            mini={mini}
          />
          <LinkButton
            icon={<Instagram />}
            href="https://instagram.com/nizioleque"
            mini={mini}
          />
        </>
      )}
    </Box>
  );
}

export default Contact;
