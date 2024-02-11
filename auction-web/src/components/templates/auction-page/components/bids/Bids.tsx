"use client";

import React from "react";
import CollapseContainer from "@/components/common/ui/collapse-container";
import FlagIcon from "@mui/icons-material/Flag";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import * as styles from "./Bids.styles";
import { useWebSocket } from "../../context/WebSocketProvider";
import { Bet } from "@/types/bet";

const Bids = () => {
  const [open, setOpen] = React.useState(true);
  const { bets } = useWebSocket();

  return (
    <CollapseContainer
      open={open}
      setOpen={() => setOpen(!open)}
      title="My Bids"
      icon={<FlagIcon fontSize="large" />}
    >
      <Table>
        <TableHead sx={styles.head}>
          <TableRow>
            <TableCell sx={styles.cell} align="left">
              <Typography variant="body2" color="white.main">
                Price
              </Typography>
            </TableCell>
            <TableCell sx={styles.cell} align="center">
              <Typography variant="body2" color="white.main">
                Date
              </Typography>
            </TableCell>
            <TableCell sx={styles.cell} align="right">
              <Typography variant="body2" color="white.main">
                Bid Address
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bets.length > 0 ? (
            <Tab bets={bets} />
          ) : (
            <Typography variant="h4" sx={{ padding: "24px" }}>
              No bets
            </Typography>
          )}
        </TableBody>
      </Table>

      {bets.length > 0 ? <Tab bets={bets} /> : null}
    </CollapseContainer>
  );
};

export default Bids;

const Tab = ({ bets }: { bets: Bet[] }) => {
  return bets.map((bet) => (
    <TableRow key={bet.user.id}>
      <TableCell align="left" sx={styles.cell}>
        <Typography variant="h4" color="gray.900">
          $ {bet.value}
        </Typography>
      </TableCell>
      <TableCell align="center" sx={styles.cell}>
        <Typography variant="body2" color="gray.900">
          {new Date(Date.now()).toLocaleString().split(",")[0]}
        </Typography>
      </TableCell>
      <TableCell align="right" sx={styles.cell}>
        <Typography variant="body2" color="violet.800">
          {bet.user.firstName} {bet.user.lastName}
        </Typography>
      </TableCell>
    </TableRow>
  ));
};
