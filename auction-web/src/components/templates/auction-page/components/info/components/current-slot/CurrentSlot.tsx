"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import Image from "next/image";
import Button from "@/components/common/ui/button";

import * as styles from "./CurrentSlot.styles";
import { Slot } from "@/types/Slot";
import SlotModal from "./slot-modal/SlotModal";

interface CurrentSlotProps {
  lot: Slot;
}

const CurrentSlot: React.FC<CurrentSlotProps> = ({ lot }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={styles.container}>
        <Typography variant="h4">Current slot</Typography>
        <Box sx={styles.photoContainer}>
          {lot.photos.length > 0 && (
            <Image src={lot.photos[0]} alt={lot.name} fill objectFit="cover" />
          )}
        </Box>
        <Box sx={styles.info}>
          <Box sx={styles.text}>
            <Typography variant="body2" color="gray.300">
              Name
            </Typography>
            <Typography variant="h4">{lot.name}</Typography>
          </Box>
          <Box sx={{ height: "fit-container" }}>
            <Button
              icon={<OpenInNewIcon fontSize="large" />}
              sx={{ gap: 0, height: "100%" }}
              onClick={handleOpen}
            />
          </Box>
        </Box>
      </Box>

      <SlotModal open={open} handleClose={handleClose} lot={lot} />
    </>
  );
};

export default CurrentSlot;
