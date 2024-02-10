import { Box, Divider } from "@mui/material";
import React from "react";
import Header from "./components/header";
import AuctionList from "./components/auction-list";
import { Auction } from "@/types/auction";

import { container } from "./MyProfile.styles";

import image from "../../../../../../public/images/avatars/avatar1.webp";
import MyBids from "./components/my-bids";

const MyProfilePage = () => {
  const auctions: Auction = [
    {
      id: "1",
      name: "Auction 1",
      avatar: image,
    },
    {
      id: "2",
      name: "Auction 2",
      avatar: image,
    },
    {
      id: "3",
      name: "Auction 3",
      avatar: image,
    },
    {
      id: "4",
      name: "Auction 4",
      avatar: image,
    },
    {
      id: "5",
      name: "Auction 5",
      avatar: image,
    },
    {
      id: "6",
      name: "Auction 6",
      avatar: image,
    },
    {
      id: "7",
      name: "Auction 7",
      avatar: image,
    },
    {
      id: "8",
      name: "Auction 8",
      avatar: image,
    },
  ];

  return (
    <Box sx={container}>
      <Header auctions={auctions} />
      <Divider />
      <AuctionList auctions={auctions} max={4} />
      <Divider />
      <MyBids />
    </Box>
  );
};

export default MyProfilePage;
