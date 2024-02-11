import { Box, Typography } from "@mui/material";
import React from "react";
import * as styles from "./Bid.styles";
import mergeSx from "@/lib/utils/mergeSx";
import PlaceBid from "./place-bid";
import Button from "@/components/common/ui/button";
import { useWebSocket } from "@/components/templates/auction-page/context/WebSocketProvider";

const Bid = () => {
  const { lot, bets, isOwner } = useWebSocket();

  if (!lot) {
    return (
      <Box sx={styles.container}>
        <Typography variant="h4">Currently there no slots</Typography>
      </Box>
    );
  }

  return (
    <Box sx={styles.container}>
      <Typography variant="h4">Buy slot</Typography>
      <Box sx={styles.row}>
        <Box sx={mergeSx(styles.price, { backgroundColor: "white.main" })}>
          <Typography variant="h4">Minimal price</Typography>
          <Typography variant="h3">$ {lot.minPrice}</Typography>
        </Box>
        <Box sx={mergeSx(styles.price, { backgroundColor: "primary.main" })}>
          <Typography variant="h4" color="white.main">
            Lead bid
          </Typography>
          <Typography variant="h3" color="white.main">
            {bets?.length > 0
              ? `$ ${bets[length - 1].value}`
              : `$ ${lot.minPrice}`}
          </Typography>
        </Box>
      </Box>

      {isOwner ? (
        lot.state === "OPENED" ? (
          <Button text="Close auction" onClick={() => {}} />
        ) : (
          <Button text="Open auction" onClick={() => {}} />
        )
      ) : lot !== null && lot.state === "OPENED" ? (
        <PlaceBid
          currentBid={bets.length > 0 ? bets[length - 1].value : lot.minPrice}
        />
      ) : null}
    </Box>
  );
};

export default Bid;
