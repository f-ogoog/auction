import { SxProps, Theme } from "@mui/material";
import { PageBanner } from "./types";

export const bg = (pageBanner: PageBanner): SxProps<Theme> => ({
  display: "flex",
  alignItems: "center",

  ...(pageBanner !== PageBanner.CREATE_SLOT
    ? {
        background:
          "linear-gradient(90deg, rgba(190,169,226,0) 0%, rgba(190,169,226,1) 50%)",
        height: "612px",
      }
    : {
        background:
          "linear-gradient(180deg, rgba(144,177,223,1) 10%, rgba(175,202,232,1) 55%)",
      }),
});

export const row: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

export const textContainer: SxProps<Theme> = {
  width: "50%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export const title: SxProps<Theme> = {
  whiteSpace: "pre-wrap",
};

export const description: SxProps<Theme> = {
  width: "75%",
  color: "gray.200",
};

export const imgContainer = (pageBanner: PageBanner): SxProps<Theme> => ({
  ...(pageBanner === PageBanner.CREATE_SLOT && {
    position: "relative",
    width: "612px",
    height: "612px",
  }),

  ...(pageBanner === PageBanner.HOME && {
    position: "relative",
    width: "600px",
    height: "600px",
  }),

  ...(pageBanner === PageBanner.MARKETPLACE && {
    position: "relative",
    width: "400px",
    height: "400px",
  }),
});
