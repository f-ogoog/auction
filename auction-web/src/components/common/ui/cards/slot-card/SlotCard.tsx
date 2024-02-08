"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

import Card from "../card";
import Button from "../../button";

import mergeSx from "@/lib/utils/mergeSx";
import * as styles from "./SlotCard.styles";

import {
  CardProps,
  SlotCardFooterProps,
  SlotCardHeaderProps,
  SlotCardPriceProps,
} from "../card/types";

interface SlotCardProps
  extends SlotCardHeaderProps,
    SlotCardPriceProps,
    SlotCardFooterProps,
    CardProps {}

const SlotCard: React.FC<SlotCardProps> = (props) => {
  return (
    <Card<SlotCardProps>
      content={() => (
        <Box sx={styles.content}>
          <Box sx={styles.header}>
            <Typography variant="h3">{props.title}</Typography>
            <Typography variant="body2">
              Auction <u>{props.subtitle}</u>
            </Typography>
          </Box>
          <Box
            sx={mergeSx(styles.price, {
              borderColor: (theme) => theme.palette.gray[100],
            })}
          >
            <Box sx={styles.row}>
              <Typography variant="body1">Sold price</Typography>
              <Typography variant="body1">{props.lastPrice}</Typography>
            </Box>
            <Box sx={styles.row}>
              <Typography variant="body2">Start price</Typography>
              <Typography variant="body2">{props.minPrice}</Typography>
            </Box>
          </Box>
          <Box>
            <Button text="See auction" />
          </Box>
        </Box>
      )}
      contentProps={props}
    />
  );
};

export default SlotCard;
