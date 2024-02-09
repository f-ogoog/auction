import { SxProps, Theme } from "@mui/material";
import { Plus } from "./types";

export const button = (plus: Plus): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "none",
  borderRadius: "32px",
  outline: "3px solid",
  outlineColor: "gray.900",
  backgroundColor: "white",
  "& .MuiTypography-root": {
    paddingBlock: "16px",
  },
  border: "none",
  "&:hover": {
    border: "none",
  },

  ...(plus === Plus.SLOT && {
    outlineColor: "primary.main",
    color: "primary.main",
    "& > span": {
      color: "primary.main",
    },
  }),
});

export const svgContainer: SxProps<Theme> = {
  marginBottom: "16px",
  marginTop: "16px",
};

export const description: SxProps<Theme> = {
  color: "gray.200",
};

export const title: SxProps<Theme> = {
  color: "gray.900",
};
