import { Grid, Stack } from "@mui/material";

import CurrentSlot from "./components/current-slot";
import Bid from "./components/bid";
import Members from "./components/members";

import { Slot } from "@/types/Slot";

const Info = ({ lot }: { lot: Slot }) => {
  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={6}>
        <CurrentSlot lot={lot} />
      </Grid>
      <Grid item xs={6}>
        <Stack gap={2}>
          <Bid state={lot.state} minPrice={lot.minPrice} />
          <Members />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Info;
