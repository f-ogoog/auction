import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

interface InputProps {
  label: string;
  id: "username" | "password" | "firstName" | "lastName" | "middleName";
  type?: "text" | "password";
  error?: string;
}

const Input = (
  { label, id, error, type = "text", ...props }: InputProps,
  ref: React.Ref<HTMLInputElement>
) => {
  return (
    <FormControl>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        label={label}
        aria-describedby={`${id}-error-text`}
        ref={ref}
        type={type}
        {...props}
      />
      {error && (
        <FormHelperText id={`${id}-error-text`}>{error}</FormHelperText>
      )}
    </FormControl>
  );
};

export default React.forwardRef(Input);
