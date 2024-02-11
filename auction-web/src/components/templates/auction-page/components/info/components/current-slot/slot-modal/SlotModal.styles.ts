import { SxProps, Theme } from "@mui/material";

export const photoContainer: SxProps<Theme> = {
  width: "100%",
  height: "300px",
  position: "relative",
  overflow: "hidden",
  borderRadius: "16px",
  backgroundColor: "gray.50",
};

export const description: SxProps<Theme> = {
  minWidth: "500px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  backgroundColor: "primary.main",
  borderRadius: "16px",
  padding: "16px",
};
