import { Box, Typography } from "@mui/material";
import React from "react";
import * as styles from "./Members.styles";
import AllMembers from "./all-members";

const Members = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <Box sx={styles.container}>
        <Typography variant="h4" color="white.main" onClick={handleOpen}>
          See all members
        </Typography>
      </Box>

      <AllMembers open={open} handleClose={handleClose} />
    </>
  );
};

export default Members;
