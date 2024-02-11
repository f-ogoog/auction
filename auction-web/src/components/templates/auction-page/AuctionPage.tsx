"use client";

import React from "react";
import { Auction } from "@/types/auction";
import { Box, Typography } from "@mui/material";

import Loading from "./components/Loading";
import Header from "./components/header";
import Info from "./components/info";
import Bids from "./components/bids";
import { WebSocketProvider } from "./context/WebSocketProvider";

import * as styles from "./AuctionPage.styles";
import useAuth from "@/hooks/use-auth";

interface AuctionPageProps {
  auction?: Auction;
  isLoading: boolean;
}

const AuctionPage: React.FC<AuctionPageProps> = ({ auction, isLoading }) => {
  const { user } = useAuth();

  if (!auction && isLoading) return <Loading />;

  return (
    <WebSocketProvider
      userId={user.id}
      auctionId={auction!.id}
      isOwner={user.id === auction?.userId}
    >
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
        <Info />
        <Bids />
      </Box>
    </WebSocketProvider>
  );
};

export default AuctionPage;
