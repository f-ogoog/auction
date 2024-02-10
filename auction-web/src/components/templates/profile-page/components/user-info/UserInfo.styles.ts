import { SxProps, Theme } from "@mui/material";

export const row: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  gap: "32px",
  alignItems: "center",
};

export const imageContainer: SxProps<Theme> = {
  position: "relative",
  borderRadius: "9999px",
  overflow: "hidden",
  border: "5px solid #fff",
  boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.15)",
  width: "300px",
  height: "300px",
};

export const stack: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};
