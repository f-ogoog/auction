"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Auction } from "@/types/auction";
import * as styles from "./Header.styles";
import AuctionList from "../auction-list";
import Modal from "@/components/common/ui/modals/modal";

const Header = ({ auctions }: { auctions: Auction[] }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={styles.row}>
      <Typography
        variant="h3"
        sx={{ display: "flex", alignItems: "center", gap: "8px" }}
      >
        My auctions{" "}
        <Typography variant="body2" color="gray.300" component="span">
          ({auctions.length})
        </Typography>
      </Typography>
      <Typography
        variant="body2"
        onClick={handleOpen}
        sx={{ cursor: "pointer" }}
      >
        <u>All auctions</u>
      </Typography>

      <Modal open={open} handleClose={handleClose}>
        <AuctionList auctions={auctions} />
      </Modal>
    </Box>
  );
};

export default Header;
