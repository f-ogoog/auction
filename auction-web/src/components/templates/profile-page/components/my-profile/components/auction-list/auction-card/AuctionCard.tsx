import React from "react";

import * as styles from "./AuctionCard.styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Auction } from "@/types/auction";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AuctionCard = ({ avatar, name }: Auction) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.container}>
        <Box sx={styles.imageContainer}>
          <Image src={avatar} objectFit="cover" fill alt={name} />
        </Box>
        <Typography variant="h4">{name}</Typography>
      </Box>
      <ArrowForwardIosIcon color="disabled" />
    </Box>
  );
};

export default AuctionCard;
