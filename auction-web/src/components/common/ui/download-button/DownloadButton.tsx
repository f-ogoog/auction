"use client";

import React from "react";
import PlusButton from "../plus-button";
import { Plus } from "../plus-button/types";

const DownloadButton = () => {
  const ref = React.useRef<HTMLInputElement | null>(null);

  const onClick = () => ref.current && ref.current.click();

  return (
    <PlusButton onClick={onClick} type={Plus.DOWNLOAD}>
      <input ref={ref} type="file" accept="image/*" hidden />
    </PlusButton>
  );
};

export default DownloadButton;
