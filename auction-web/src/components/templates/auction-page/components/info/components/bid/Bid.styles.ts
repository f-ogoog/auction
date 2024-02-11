import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
  backgroundColor: "violet.300",
  borderRadius: "32px",
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
};

export const row: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  alignItems: "center",
};

export const price: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "16px",
  borderRadius: "16px",
};
