"use client";

import React from "react";
import { Auction } from "@/types/auction";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

import * as styles from "./AuctionCard.styles";
import Button from "../../button";
import { useRouter } from "next/navigation";

const AuctionCard: React.FC<
  Omit<
    Auction,
    "description" | "maxSlots" | "state" | "userId" | "createdAt" | "lots"
  >
> = ({ id, avatar, category, name }) => {
  const router = useRouter();

  return (
    <Box sx={styles.container} onClick={() => router.push(`/auction/${id}`)}>
      <Box sx={styles.imageContainer}>
        {avatar && <Image src={avatar} objectFit="cover" fill alt={name} />}
      </Box>
      <Box sx={styles.textContainer}>
        <Typography variant="h4">{name}</Typography>
        <Box sx={styles.row}>
          <Typography variant="body2">Category</Typography>
          <Typography variant="body2">{category}</Typography>
        </Box>
        <Box>
          <Button
            text="See auction"
            onClick={() => router.push(`/auction/${id}`)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AuctionCard;
