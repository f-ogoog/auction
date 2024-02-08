import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

import * as styles from "./Card.styles";

import { CardType } from "./types";

interface CardProps<T extends CardType> {
  content: React.ComponentType<T>;
  contentProps: T;
}

const Card = <T extends CardType>({
  content: Content,
  contentProps,
}: CardProps<T>) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.imageContainer}>
        <Image
          src={contentProps.image}
          alt={contentProps.auctionId}
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Box sx={styles.content}>
        <Content {...contentProps} />
      </Box>
    </Box>
  );
};

export default Card;
