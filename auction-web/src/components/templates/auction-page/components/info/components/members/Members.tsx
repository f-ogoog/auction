import { Box, Typography } from "@mui/material";
import React from "react";
import * as styles from "./Members.styles";

const Members = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h4" color="white.main">
        See all members
      </Typography>
    </Box>
  );
};

export default Members;
