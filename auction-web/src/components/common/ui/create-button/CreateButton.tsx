import React from "react";
import PlusButton from "../plus-button";
import { Plus } from "../plus-button/types";

interface CreateButtonProps {
  type: Exclude<Plus, Plus.DOWNLOAD>;
  onClick: () => void;
}

const CreateButton: React.FC<CreateButtonProps> = ({ type, onClick }) => {
  return <PlusButton type={type} onClick={onClick} />;
};

export default CreateButton;
