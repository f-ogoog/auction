import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: "100%",
  padding: "64px 128px",
};

export const modal: SxProps<Theme> = {
  background: "white",
  borderRadius: "32px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "&:focus": {
    outline: "none",
  },
  maxHeight: "calc(100% - 128px)",
  overflowY: "scroll",
};

export const closeIcon: SxProps<Theme> = {
  position: "absolute",
  top: "32px",
  right: "32px",
  cursor: "pointer",
};
