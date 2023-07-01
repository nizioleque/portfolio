import { Stack } from '@mui/material';
import HomePageContent from '../src/components/Layout/HomePageContent';
import Experiment from '../src/components/playground/Experiment';
import canvasBackgroundState from '../src/atoms/canvasBackgroundState';

function Playground() {
  return (
    <HomePageContent>
      <Stack>
        <Experiment label='Canvas background' state={canvasBackgroundState}/>
      </Stack>
    </HomePageContent>
  );
}

export default Playground;
