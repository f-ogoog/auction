import React from "react";
import { Download } from "@/components/common/ui/download-button/types";
import { getFiles } from "@/components/common/ui/download-button/utils/get-files";
import Button from "@mui/material/Button";
import * as styles from './DownloadButton.styles';
import { Container, Typography } from "@mui/material";

interface DownloadButtonProps {
    download: Download;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ download }) => {
    const { title, description } = getFiles(download);

    return (
        <Container sx={styles.buttonContainer}>
            <Button
                fullWidth
                disableElevation
                variant="outlined"
                sx={styles.buttonContent}
            >
                <Container sx={styles.svgContainer}>
                <img src="/icons/plus.svg" alt="plus" />
                </Container>
                <Typography sx={styles.title} variant="body1SemiBold">{title}</Typography>
                <Typography sx={styles.description} variant="body2">{description}</Typography>
            </Button>
        </Container>
    );
};

export default DownloadButton;
