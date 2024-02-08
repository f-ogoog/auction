import { SxProps, Theme } from "@mui/material";

export const content: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export const header: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

export const row: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const price: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  paddingY: "16px",
  borderBlock: "1px solid",
};
