import Modal from "@/components/common/ui/modals/modal";
import { useWebSocket } from "@/components/templates/auction-page/context/WebSocketProvider";
import { Grid, Typography } from "@mui/material";
import React from "react";

interface AllMembersProps {
  open: boolean;
  handleClose: () => void;
}

const AllMembers: React.FC<AllMembersProps> = ({ open, handleClose }) => {
  const { users } = useWebSocket();

  return (
    <Modal open={open} handleClose={handleClose}>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid
            item
            key={user.id}
            xs={6}
            sx={{
              background: "white",
              borderRadius: "16px",
              overflow: "hidden",
              padding: "16px",
            }}
          >
            <Typography variant="h4">
              {user.firstName} {user.lastName}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Modal>
  );
};

export default AllMembers;
