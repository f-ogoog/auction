import { Box, Typography } from "@mui/material";
import React from "react";
import * as styles from "./Bid.styles";
import { State } from "@/types/state";
import mergeSx from "@/lib/utils/mergeSx";
import PlaceBid from "./place-bid";
import Button from "@/components/common/ui/button";

interface BidProps {
  minPrice: number;
  state: State;
}

const Bid: React.FC<BidProps> = ({ minPrice, state }) => {
  const currentBid = 10_000;

  return (
    <Box sx={styles.container}>
      <Typography variant="h4">Buy slot</Typography>
      <Box sx={styles.row}>
        <Box sx={mergeSx(styles.price, { backgroundColor: "white.main" })}>
          <Typography variant="h4">Minimal price</Typography>
          <Typography variant="h3">$ {minPrice}</Typography>
        </Box>
        <Box sx={mergeSx(styles.price, { backgroundColor: "primary.main" })}>
          <Typography variant="h4" color="white.main">
            Current price
          </Typography>
          <Typography variant="h3" color="white.main">
            $ {currentBid}
          </Typography>
        </Box>
      </Box>

      {state === "OPENED" ? (
        <PlaceBid currentBid={currentBid} />
      ) : (
        <Button text="Stop auction" onClick={() => {}} />
      )}
    </Box>
  );
};

export default Bid;
