"use client";

import { Box, Typography } from "@mui/material";
import React from "react";

import { row } from "../Bid.styles";
import * as sxStyles from "./PlaceBid.styles";
import styles from "./PlaceBid.module.scss";
import Button from "@/components/common/ui/button";
import { useWebSocket } from "@/components/templates/auction-page/context/WebSocketProvider";
import useAuth from "@/hooks/use-auth";

const PlaceBid = ({ currentBid }: { currentBid: number }) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const [error, setError] = React.useState(false);
  const { socket, lot } = useWebSocket();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (parseInt(ref.current?.value as string) > currentBid) {
      socket.emit("newBet", {
        value: parseInt(ref.current?.value as string),
        lotId: lot!.id,
      });
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Box sx={sxStyles.container}>
        <Box sx={row}>
          <Box sx={sxStyles.dollar}>
            <Typography variant="h4" sx={{ color: "white.main" }}>
              $
            </Typography>
          </Box>
          <input
            placeholder="Enter"
            ref={ref}
            className={styles.input}
            type="number"
            style={{ borderColor: error ? "#ff3093" : "c4c4c4" }}
          />
        </Box>
        {error && (
          <Typography variant="body2" color="warning.main">
            Your bid is too low
          </Typography>
        )}
        <Button text="Place bid" type="submit" />
      </Box>
    </form>
  );
};

export default PlaceBid;
