"use client";

import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

import Header from "./components/header";
import Price from "./components/price";
import Footer from "./components/footer";

import * as styles from "./Card.styles";

import { CardType } from "../types";

const Card: React.FC<CardType> = (props) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.imageContainer}>
        <Image
          src={props.image}
          alt={props.auctionId}
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box sx={styles.content}>
        <Header {...props} />
        <Price {...props} />
        <Footer {...props} />
      </Box>
    </Box>
  );
};

export default Card;
