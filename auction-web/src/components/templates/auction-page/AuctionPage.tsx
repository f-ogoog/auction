"use client";

import React from "react";
import { Auction } from "@/types/auction";
import { Box, Typography } from "@mui/material";
import Loading from "./components/Loading";
import Header from "./components/header";

import * as styles from "./AuctionPage.styles";
import Info from "./components/info";

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
      <Box sx={styles.descriptionContainer}>
        <Box sx={styles.description}>
          <Typography variant="h3" color="white.main">
            Description
          </Typography>
          {auction?.description ? (
            <Typography variant="body2" color="white.main">
              {auction!.description}
            </Typography>
          ) : (
            <Typography variant="body2" color="white.main">
              No description :(
            </Typography>
          )}
        </Box>
      </Box>
      <Info lot={auction!.lots[0]} />
    </Box>
  );
};

export default AuctionPage;
