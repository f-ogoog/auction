import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import * as styles from "./TextArea.styles";

interface TextAreaProps {
  disabled?: boolean;
  defaultValue?: string;
}

const TextArea = (
  { disabled = false, defaultValue = "" }: TextAreaProps,
  ref: React.Ref<HTMLInputElement>
) => {
  return (
    <TextField
      disabled={disabled}
      sx={styles.root}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <KeyboardIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
      inputRef={ref}
      defaultValue={defaultValue}
    />
  );
};

export default React.forwardRef(TextArea);
