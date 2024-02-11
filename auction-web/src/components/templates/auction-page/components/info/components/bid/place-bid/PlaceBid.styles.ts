import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export const dollar: SxProps<Theme> = {
  backgroundColor: "gray.900",
  color: "white.main",
  paddingX: "24px",
  borderRadius: "16px",
  height: "57px",
  display: "flex",
  alignItems: "center",
};
