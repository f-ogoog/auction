import React from "react";
import PlusButton from "../plus-button";
import { Plus } from "../plus-button/types";

interface DownloadButtonProps {
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ onClick }) => {
  const ref = React.useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (ref.current && onClick) {
      ref.current.click();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
      <PlusButton onClick={handleClick} type={Plus.DOWNLOAD}>
        <input ref={ref} type="file" accept="image/*" hidden onChange={handleChange} />
      </PlusButton>
  );
};

export default DownloadButton;
