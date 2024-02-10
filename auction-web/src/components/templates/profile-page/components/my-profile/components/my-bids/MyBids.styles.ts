import { SxProps, Theme } from "@mui/material";

export const head: SxProps<Theme> = {
  background: (theme) => theme.palette.primary.main,
};

export const cell: SxProps<Theme> = {
  border: "none",
};
