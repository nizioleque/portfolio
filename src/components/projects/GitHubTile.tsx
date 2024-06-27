import { responsiveSize } from "@/theme/responsiveSize";
import { GitHub } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import useResponsiveLayout from "../../hooks/useResponsiveLayout";
import HomePageChild from "../Layout/HomePageChild";

function GitHubTile() {
  const { isDesktop } = useResponsiveLayout();

  return (
    <HomePageChild>
      <Box
        sx={{
          paddingY: 2,
          paddingX: 3,
          borderRadius: 8,

          height: isDesktop ? 77 : 70.6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.5,

          border: "4px solid",
          borderColor: "rgb(255 255 255 / 6%)",
          color: "text.secondary",
          backgroundColor: "background.default",
        }}
      >
        More on{" "}
        <Button
          component="a"
          href="https://github.com/nizioleque"
          target="_blank"
          variant="text"
          startIcon={<GitHub />}
          sx={{
            textTransform: "none",
            ...responsiveSize("1.25rem"),
            fontWeight: 400,
            color: "text.primary",
            borderRadius: 20,
            paddingX: 2,
            "& .MuiSvgIcon-root": {
              marginRight: 0.5,
              color: "primary.main",
              ...responsiveSize("2rem", undefined, "width"),
              ...responsiveSize("2rem", undefined, "height"),
            },
          }}
        >
          GitHub
        </Button>
      </Box>
    </HomePageChild>
  );
}

export default GitHubTile;
