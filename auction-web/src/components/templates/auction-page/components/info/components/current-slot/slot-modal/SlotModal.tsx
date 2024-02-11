import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import Modal from "@/components/common/ui/modals/modal";

import * as styles from "./SlotModal.styles";
import { Slot } from "@/types/Slot";

interface SlotModalProps {
  open: boolean;
  handleClose: () => void;
  lot: Slot;
}

const SlotModal: React.FC<SlotModalProps> = ({ handleClose, open, lot }) => {
  return (
    <Modal
      open={open}
      handleClose={handleClose}
      sx={{ display: "flex", flexDirection: "column", gap: "32px" }}
    >
      <Typography variant="h3">Current slot</Typography>

      {lot.photos.length > 0 && (
        <Grid container spacing={2}>
          {lot.photos.map((photo, index) => (
            <Grid item xs={6} key={index}>
              <Box sx={styles.photoContainer}>
                <Image src={photo} alt={lot.name} objectFit="cover" fill />
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography variant="body2" color="gray.300">
          Name
        </Typography>
        <Typography variant="h4">{lot.name}</Typography>
      </Box>
      <Box sx={styles.description}>
        <Typography variant="h4" color="white.main">
          Description
        </Typography>
        <Typography variant="body2" color="white.main">
          {lot.description ? lot.description : "No description :("}
        </Typography>
      </Box>
    </Modal>
  );
};

export default SlotModal;
