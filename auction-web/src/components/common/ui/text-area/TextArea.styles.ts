import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const root: SxProps<Theme> = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    padding: "0px 16px",
    stroke: "gray.50",
  },
};
