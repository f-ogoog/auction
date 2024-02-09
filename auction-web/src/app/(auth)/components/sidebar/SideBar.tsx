import React from "react";
import { Box, Typography } from "@mui/material";
import * as styles from "./SideBar.styles";

const SideBar = () => {
  return (
    <Box sx={styles.sidebar}>
      <Typography variant="h1" sx={styles.text}>
        Welcome to the Auction
      </Typography>
      <Typography variant="body1" sx={styles.text}>
        Bid for a Better World: Where Generosity Meets Opportunity
      </Typography>
    </Box>
  );
};

export default SideBar;
