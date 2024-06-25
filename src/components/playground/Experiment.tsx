import { Box, FormControlLabel, Switch } from "@mui/material";
import { RecoilState, useRecoilState } from "recoil";
import HomePageChild from "../Layout/HomePageChild";

interface ExperimentProps {
  label: string;
  state: RecoilState<boolean>;
}

function Experiment({ label, state }: ExperimentProps) {
  const [value, setValue] = useRecoilState(state);
  console.log(value);
  return (
    <HomePageChild>
      <Box
        sx={{
          background:
            "linear-gradient(to right, rgb(0 0 0 / 70%) 67%, rgb(0 0 0 / 30%) 100%)",
          borderRadius: 8,
          width: 300,
          padding: 1,
          paddingRight: 3,
        }}
      >
        <FormControlLabel
          sx={{ width: "100%" }}
          control={
            <Switch
              sx={{ marginLeft: "auto" }}
              checked={value}
              onChange={(event) => setValue(event.currentTarget.checked)}
            />
          }
          label={label}
          labelPlacement="start"
        />
      </Box>
    </HomePageChild>
  );
}

export default Experiment;
