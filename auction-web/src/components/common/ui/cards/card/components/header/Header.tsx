import React from "react";
import { Box, Typography } from "@mui/material";

import * as styles from "./Header.styles";
import { CardHeaderType } from "../../../types";
import Link from "next/link";

type HeaderProps = CardHeaderType & { auctionId: string };

const Header: React.FC<HeaderProps> = (props) => {
  const isAuction = "categoryLink" in props;

  return (
    <Box sx={styles.header}>
      <Typography variant="h3">{props.title}</Typography>
      <Typography variant="body2">
        {isAuction ? "Category" : "Auction"}
        <Link
          href={
            isAuction
              ? `/auction/${props.auctionId}`
              : `/marketplace?category=${props.subtitle.toLowerCase()}`
          }
        >
          {props.subtitle}
        </Link>
      </Typography>
    </Box>
  );
};

export default Header;
