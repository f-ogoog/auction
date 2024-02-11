import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
  backgroundColor: "white",
  boxShadow: "0 5px 10px 0 rgba(0,0,0,0.25)",
  transition: "0.2s",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  borderRadius: "16px",
  outline: "5px solid transparent",
  "&:hover": {
    cursor: "pointer",
    outlineColor: "primary.main",
  },
};

export const imageContainer: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: "300px",
  overflow: "hidden",
  backgroundColor: "gray.50",
};

export const textContainer: SxProps<Theme> = {
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export const row: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};
