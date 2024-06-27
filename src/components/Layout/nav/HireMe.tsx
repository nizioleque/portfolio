import { hireMe } from "@/atoms/experiments";
import { shadowStrong } from "@/theme/constants";
import { Box } from "@mui/material";
import { useRecoilValue } from "recoil";

function HireMe() {
  const isVisible = useRecoilValue(hireMe);

  if (!isVisible) return null;

  return (
    <Box
      sx={{
        position: "absolute",
        right: -30,
        bottom: -15,
        backgroundColor: "secondary.main",
        textShadow: shadowStrong,
        boxShadow: shadowStrong,
        transform: "rotate(-10deg)",
        padding: "8px 16px",
        fontSize: "1.2rem",
        opacity: 0.5,
      }}
    >
      HIRE ME!
    </Box>
  );
}

export default HireMe;
