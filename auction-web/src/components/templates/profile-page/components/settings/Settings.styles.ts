import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export const logout: SxProps<Theme> = {
  width: "100%",
  borderRadius: "8px",
  textTransform: "none",
  background: (theme) => theme.palette.warning.main,
  "&:hover": {
    background: (theme) => theme.palette.gray[900],
  },
  "&:active": {
    backgroundColor: "error.light",
  },
};

export const deleteAccount: SxProps<Theme> = {
  width: "100%",
  borderRadius: "8px",
  textTransform: "none",
  backgroundColor: "warning.light",
  "&:hover": {
    backgroundColor: "warning.main",
  },
  "&:active": {
    backgroundColor: "gray.900",
  },
};
