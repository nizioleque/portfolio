import Cv from "@/components/cv/Cv";
import { Box } from "@mui/material";

function CvV2() {
  return (
    <>
      <Box
        sx={{
          "@media screen": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 4,
            background: "black",
            minHeight: "100vh",
          },
          "@media print": {
            background: "none",
          },

          // Development overrides
          padding: "0 !important",
        }}
      >
        <Box
          sx={{
            "@media screen": {
              transformOrigin: "top",
              scale: 1.203,
            },
          }}
        >
          <Cv />
        </Box>
      </Box>
    </>
  );
}

export default CvV2;
