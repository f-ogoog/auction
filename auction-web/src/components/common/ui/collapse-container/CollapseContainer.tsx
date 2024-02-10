import React from "react";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Button from "../button";

import * as styles from "./CollapseContainer.styles";
import { ButtonColor } from "../button/types";

interface CollapseContainerProps {
  title: string;
  open: boolean;
  setOpen: () => void;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const CollapseContainer: React.FC<CollapseContainerProps> = ({
  title,
  open,
  setOpen,
  children,
  icon,
}) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Box sx={styles.row}>
          {icon}
          <Typography variant="h3">{title}</Typography>
        </Box>
        <Box>
          <Button
            onClick={setOpen}
            icon={open && <CloseIcon />}
            color={ButtonColor.WHITE}
            text={!open ? "Open" : undefined}
            sx={styles.button}
          />
        </Box>
      </Box>
      {open && children}
    </Box>
  );
};

export default CollapseContainer;
