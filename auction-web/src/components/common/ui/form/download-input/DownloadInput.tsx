import React from "react";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import * as styles from "./DownloadInput.styles";

interface DownloadInputProps {
  onChange: (...event: any[]) => void;
}

const DownloadInput: React.FC<DownloadInputProps> = ({ onChange }) => {
  const [src, setSrc] = React.useState<string>("");
  const ref = React.useRef<HTMLInputElement>(null);
  const onClick = () => ref.current && ref.current.click();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSrc(URL.createObjectURL(file));
    }
    onChange(file);
  };

  return (
    <Button sx={styles.button} onClick={onClick}>
      <FileDownloadIcon sx={{ width: "80%", height: "80%" }} />
      <Typography variant="body2">Download</Typography>
      <input
        type="file"
        ref={ref}
        hidden
        accept="image/*"
        onChange={handleChange}
      />
      {ref.current?.files && ref.current?.files?.length > 0 && (
        <Image src={src} fill alt={ref.current.files[0].name} />
      )}
    </Button>
  );
};

export default DownloadInput;
