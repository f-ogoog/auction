import { SxProps, Theme } from "@mui/material";

export const footer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export const row: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const inline: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  alignItems: "center",
  height: "40px",
};

export const buttons: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};
