"use client";

import React from "react";

import Image from "next/image";
import { Button, Typography } from "@mui/material";
import * as styles from "./PlusButton.styles";

import { Plus } from "./types";
import { getFiles } from "./utils/get-files";

interface PlusButtonProps {
  type: Plus;
  children?: React.ReactNode;
  onClick: () => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({ type, children, onClick }) => {
  const { title, description } = getFiles(type);

  return (
    <Button
      fullWidth
      disableElevation
      variant="outlined"
      sx={styles.button(type)}
      onClick={onClick}
    >
      <Image
        src="/icons/plus.svg"
        alt="plus"
        width={96}
        height={96}
        style={{
          paddingBlock: "16px",
        }}
      />
      <Typography sx={styles.title} variant="body1SemiBold">
        {title}
      </Typography>
      {type !== Plus.SLOT && (
        <Typography sx={styles.description} variant="body2">
          {description}
        </Typography>
      )}
      {children}
    </Button>
  );
};

export default PlusButton;
