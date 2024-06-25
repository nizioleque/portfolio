import canvasBackgroundState from "@/atoms/canvasBackgroundState";
import HomePageContent from "@/components/Layout/HomePageContent";
import Experiment from "@/components/playground/Experiment";
import { Stack } from "@mui/material";

function Playground() {
  return (
    <HomePageContent>
      <Stack>
        <Experiment label="Canvas background" state={canvasBackgroundState} />
      </Stack>
    </HomePageContent>
  );
}

export default Playground;
