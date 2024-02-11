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

const Bids = () => {
  const [open, setOpen] = React.useState(true);

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
          <TableRow>
            <TableCell align="left" sx={styles.cell}>
              <Typography variant="h4" color="gray.900">
                $ 1000
              </Typography>
            </TableCell>
            <TableCell align="center" sx={styles.cell}>
              <Typography variant="body2" color="gray.900">
                06.12.2023
              </Typography>
            </TableCell>
            <TableCell align="right" sx={styles.cell}>
              <Typography variant="body2" color="violet.800">
                Virgin Marry
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CollapseContainer>
  );
};

export default Bids;
