"use client";

import React from "react";
import { Auction } from "@/types/auction";
import { Box } from "@mui/material";
import Loading from "./components/Loading";
import Header from "./components/header";

import * as styles from "./AuctionPage.styles";

interface AuctionPageProps {
  auction?: Auction;
  isLoading: boolean;
}

const AuctionPage: React.FC<AuctionPageProps> = ({ auction, isLoading }) => {
  if (!auction && isLoading) return <Loading />;

  return (
    <Box sx={styles.container}>
      <Header
        category={auction!.category}
        name={auction!.name}
        userId={auction!.userId}
        avatar={auction!.avatar}
      />
    </Box>
  );
};

export default AuctionPage;
