import { SxProps, Theme } from "@mui/material";

export const row: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  gap: "32px",
};

export const column: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "16px",
};
