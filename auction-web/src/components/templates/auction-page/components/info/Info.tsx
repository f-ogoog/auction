import { Grid } from "@mui/material";
import React from "react";
import CurrentSlot from "./components/current-slot";
import { Slot } from "@/types/Slot";

const Info = ({ lot }: { lot: Slot }) => {
  return (
    <Grid container spacing="3">
      <Grid item xs={6}>
        <CurrentSlot lot={lot} />
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
};

export default Info;
