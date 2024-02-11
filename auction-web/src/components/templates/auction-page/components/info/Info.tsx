import { Grid, Stack } from "@mui/material";

import CurrentSlot from "./components/current-slot";
import Bid from "./components/bid";
import Members from "./components/members";

const Info = () => {
  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={6}>
        <CurrentSlot />
      </Grid>
      <Grid item xs={6}>
        <Stack gap={2}>
          <Bid />
          <Members />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Info;
