import { Plus } from "../types";

export const getFiles = (plus: Plus) => {
  switch (plus) {
    case Plus.DOWNLOAD:
      return {
        title: "Upload file",
        description: "PNG, JPG, JPEG, WEBP, Max 1 Mb",
      };
    case Plus.AUCTION:
      return {
        title: "Create new auction",
        description: "Add your new or purchased items",
      };
    case Plus.SLOT:
      return {
        title: "Add new slot",
      };
  }
};
