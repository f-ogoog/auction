import React from "react";
import AuctionCard from "./auction-card";
import { Auction } from "@/types/auction";
import { Grid } from "@mui/material";

interface AuctionProps {
  auctions: Auction[];
  max?: number;
}

const AuctionList: React.FC<AuctionProps> = ({ auctions, max }) => {
  return (
    <Grid container spacing={2}>
      {auctions.slice(0, max).map((auction) => (
        <Grid item xs={6} key={auction.id}>
          <AuctionCard {...auction} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AuctionList;
