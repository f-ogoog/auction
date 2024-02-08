import { Download } from "../types";

export const getFiles = (download: Download) => {
    switch (download) {
        case Download.UPLOAD:
            return {
                title: "Upload file",
                description:
                    "PNG, JPG, JPEG, WEBP, Max 1 Mb",
            };
        case Download.CREATE:
            return {
                title: "Create new auction",
                description: "Add your new or purchased items",
            };
    }
};
