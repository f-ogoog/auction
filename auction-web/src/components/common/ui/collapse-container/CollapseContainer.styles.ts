import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  background: "white",
  borderRadius: "24px",
  width: "100%",
};

export const header: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  paddingX: "24px",
  paddingY: "32px",
};

export const row: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "16px",
};

export const button: SxProps<Theme> = {
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
};
