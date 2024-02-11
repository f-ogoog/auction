import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  gap: "32px",
  width: "100%",
};

export const avatarContainer: SxProps<Theme> = {
  width: "500px",
  height: "500px",
  position: "relative",
  borderRadius: "32px",
  overflow: "hidden",
  border: "1px solid",
  backgroundColor: "gray.50",
  borderColor: "white.main",
  boxShadow: "0px 5px 10px rgba(0,0,0,0.15)",
};

export const infoContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const text: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

export const sellerCard: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  gap: "16px",
  backgroundColor: "white.main",
  borderRadius: "16px",
  padding: "8px",
  boxShadow: "0px 5px 10px rgba(0,0,0,0.15)",
};

export const sellerAvatarContainer: SxProps<Theme> = {
  position: "relative",
  top: 0,
  left: 0,
  width: "100px",
  height: "100px",
  backgroundColor: "gray.50",
  borderRadius: "8px",
  overflow: "hiddne",
};

export const sellerText: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  paddingRight: "32px",
};
