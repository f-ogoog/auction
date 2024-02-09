import React from "react";
import { Box, Typography } from "@mui/material";
import * as styles from "./Pill.styles";

interface PillProps {
  text: string;
  color: "success" | "warning";
}

const Pill: React.FC<PillProps> = ({ text, color }) => {
  return (
    <Box sx={styles.pill(color)}>
      <Typography variant="body2" color="gray.300">
        {text}
      </Typography>
    </Box>
  );
};

export default Pill;
