import { SxProps, Theme } from "@mui/material";

export const card: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px",
  backgroundColor: "white.main",
  borderRadius: "8px",
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
  "&:hover": {
    cursor: "pointer",
  },
};

export const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "16px",
};

export const imageContainer: SxProps<Theme> = {
  position: "relative",
  width: "100px",
  height: "100px",
  borderRadius: "8px",
  overflow: "hidden",
};
