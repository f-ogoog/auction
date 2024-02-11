"use client";

import React from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as styles from "./RemovePill.styles";

interface RemovePillProps {
  label: string;
  onRemove: () => void;
  color?: "primary" | "gray";
}

const RemovePill: React.FC<RemovePillProps> = ({
  label,
  onRemove,
  color = "primary",
}) => {
  return (
    <Button onClick={onRemove} sx={styles.pill(color)}>
      {label}
      <CloseIcon />
    </Button>
  );
};

export default RemovePill;
