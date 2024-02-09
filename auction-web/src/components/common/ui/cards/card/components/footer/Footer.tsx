import React from "react";
import Image from "next/image";

import { Box, Typography } from "@mui/material";
import Button from "@/components/common/ui/button";

import * as styles from "./Footer.styles";

import { CardFooterType } from "../../../types";
import Pill from "@/components/common/ui/pill";

const Footer: React.FC<CardFooterType> = (props) => {
  const isAuction = "slotsLeft" in props;

  return (
    <Box sx={styles.footer} component="footer">
      {isAuction && (
        <Box sx={styles.row}>
          <Box sx={styles.inline}>
            <Image
              src={props.owner.avatar}
              alt={props.owner.id}
              width={40}
              height={40}
              style={{ borderRadius: "100%" }}
            />
            <Typography variant="body2">{props.owner.username}</Typography>
          </Box>
          <Box sx={styles.inline}>
            {props.collectors.map((collector, index) => (
              <Image
                src={collector.avatar}
                alt={collector.id}
                width={40}
                height={40}
                style={{
                  borderRadius: "100%",
                  marginLeft: -20,
                }}
                objectFit="cover"
                key={collector.id}
              />
            ))}
            <Typography variant="body2">Collectors</Typography>
          </Box>
        </Box>
      )}
      <Box sx={styles.buttons}>
        <Pill text={`1 Day : 20 hour : 50 min Left`} color="success" />
        {isAuction && <Pill text={`${props.slotsLeft} / 12`} color="warning" />}
        <Button text="See auction" />
      </Box>
    </Box>
  );
};

export default Footer;
