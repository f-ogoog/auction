import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  padding: "32px",
  backgroundColor: "violet.300",
  borderRadius: "32px",
  overflow: "hidden",
  alignItems: "center",
};

export const photoContainer: SxProps<Theme> = {
  width: "300px",
  height: "300px",
  backgroundColor: "white.main",
  borderRadius: "32px",
  overflow: "hidden",
  position: "relative",
};

export const info: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  width: "100%",
};

export const text: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  backgroundColor: "white.main",
  padding: "16px",
  borderRadius: "8px",
  width: "100%",
};
