import { SxProps, Theme } from "@mui/material";

export const sidebar: SxProps<Theme> = {
  backgroundColor: "primary.main",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  padding: "32px",
};

export const text: SxProps<Theme> = {
  color: "white.main",
};
