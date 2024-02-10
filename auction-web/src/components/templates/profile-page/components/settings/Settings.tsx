"use client";

import useAuth from "@/hooks/use-auth";
import AuthService from "@/lib/services/auth/AuthService";
import { Box, Button, Typography } from "@mui/material";
import * as styles from "./Settings.styles";
import DeleteAccountButton from "./DeleteAccountButton";

const Settings = () => {
  const { update } = useAuth();

  return (
    <Box sx={styles.container}>
      <Button
        onClick={async () => {
          await AuthService.logout();
          await update();
        }}
        sx={styles.logout}
      >
        <Typography color="white.main" sx={{ paddingY: "8px" }}>
          Log out
        </Typography>
      </Button>
      <DeleteAccountButton />
    </Box>
  );
};

export default Settings;
