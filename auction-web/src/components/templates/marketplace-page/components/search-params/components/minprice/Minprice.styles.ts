import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export const row: SxProps<Theme> = {
  display: "flex",
  gap: "8px",
  alignItems: "center",
};
