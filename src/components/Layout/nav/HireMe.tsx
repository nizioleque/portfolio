import { hireMe } from "@/atoms/experiments";
import { shadowStrong } from "@/theme/constants";
import { Box, keyframes } from "@mui/material";
import { useRecoilValue } from "recoil";

const flashAnimation = keyframes`
  0%, 50% {
    opacity: 0.5;
  }
  51%, 100% {
    opacity: 1;
  } 
`;

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
        animation: `${flashAnimation} 800ms 3`,
        "&:hover": {
          opacity: 1,
        },
      }}
    >
      HIRE ME!
    </Box>
  );
}

export default HireMe;
