import React from "react";
import Card from "../card";
import { SlotCardType } from "../types";

const SlotCard: React.FC<SlotCardType> = (props) => {
  return <Card {...props} />;
};

export default SlotCard;
