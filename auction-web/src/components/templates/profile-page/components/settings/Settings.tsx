"use client";

import useAuth from "@/hooks/use-auth";
import AuthService from "@/lib/services/auth/AuthService";
import { Box, Button, Typography } from "@mui/material";
import * as styles from "./Settings.styles";
import DeleteAccountButton from "./DeleteAccountButton";
import { useRouter } from "next/navigation";

const Settings = () => {
  const { update } = useAuth();
  const router = useRouter();

  return (
    <Box sx={styles.container}>
      <Button
        onClick={async () => {
          await AuthService.logout()
            .then(update)
            .then(() => router.push("/login"));
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
