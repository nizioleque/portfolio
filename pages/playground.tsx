import { canvasBackgroundState, hireMe } from "@/atoms/experiments";
import HomePageContent from "@/components/Layout/HomePageContent";
import Experiment from "@/components/playground/Experiment";
import { Stack } from "@mui/material";

function Playground() {
  return (
    <HomePageContent>
      <Stack sx={{ gap: 2 }}>
        <Experiment label="Canvas background" state={canvasBackgroundState} />
        <Experiment label="Hire me!" state={hireMe} />
      </Stack>
    </HomePageContent>
  );
}

export default Playground;
