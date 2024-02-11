import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "16px",
};

export const pagination: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "4px",
  borderRadius: "8px",
  overflow: "hidden",
  gap: "8px",
};

export const item = (isActive: boolean): SxProps<Theme> => ({
  padding: "8px",
  borderRadius: "8px",
  backgroundColor: isActive ? "primary.gray.900" : "white",
  color: isActive ? "white" : "primary.main",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: isActive ? "primary.main" : "primary.light",
  },
});
