import { SxProps, Theme } from "@mui/material";

export const header: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "primary.main",
  boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.15)",
};

export const row: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
};

export const nav: SxProps<Theme> = {
  display: "flex",
  gap: "16px",
};
