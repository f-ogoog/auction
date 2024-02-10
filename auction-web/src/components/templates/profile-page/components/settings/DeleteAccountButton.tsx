import useAuth from "@/hooks/use-auth";
import UserApi from "@/lib/api/user/UserApi";
import AuthService from "@/lib/services/auth";
import { Box, Button as MUIButton, Typography } from "@mui/material";

import { deleteAccount } from "./Settings.styles";
import Modal from "@/components/common/ui/modals/modal";
import { useState } from "react";
import Button from "@/components/common/ui/button";
import { ButtonColor } from "@/components/common/ui/button/types";
import { useRouter } from "next/navigation";

const DeleteAccountButton = () => {
  const { update } = useAuth();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <MUIButton onClick={() => setOpen(true)} sx={deleteAccount}>
        <Typography color="white.main" sx={{ paddingY: "8px" }}>
          Delete account
        </Typography>
      </MUIButton>
      <Modal
        open={open}
        handleClose={() => setOpen(false)}
        sx={{ display: "flex", flexDirection: "column", gap: "32px" }}
      >
        <Typography variant="h3">
          Are you sure you want to delete your account?
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "16px" }}>
          <Button
            color={ButtonColor.PRIMARY}
            onClick={() => setOpen(false)}
            text="Cancel"
          />
          <Button
            color={ButtonColor.BLACK}
            onClick={async () => {
              await UserApi.deleteMe();
              await AuthService.logout();
              await update().then(() => router.push("/login"));
            }}
            text="Delete"
          ></Button>
        </Box>
      </Modal>
    </>
  );
};

export default DeleteAccountButton;
