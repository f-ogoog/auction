import React from "react";
import { Box, Checkbox as MUICheckbox, Typography } from "@mui/material";

import * as styles from "./Checkbox.styles";

interface CheckboxProps {
  label: string;
  onChange: () => void;
  isChecked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  onChange,
  isChecked = false,
}) => {
  return (
    <Box sx={styles.row}>
      <MUICheckbox onChange={onChange} checked={isChecked} />
      <Typography variant="body2">{label}</Typography>
    </Box>
  );
};

export default Checkbox;
