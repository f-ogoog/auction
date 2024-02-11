import { Grid } from "@mui/material";
import React from "react";
import CurrentSlot from "./components/current-slot";
import { Slot } from "@/types/Slot";
import Bid from "./components/bid";

const Info = ({ lot }: { lot: Slot }) => {
  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={6}>
        <CurrentSlot lot={lot} />
      </Grid>
      <Grid item xs={6}>
        <Bid state={lot.state} minPrice={lot.minPrice} />
      </Grid>
    </Grid>
  );
};

export default Info;
