import React from "react";
import Card from "../card";
import { AuctionCardType } from "../types";

const AuctionCard: React.FC<AuctionCardType> = (props) => {
  return <Card {...props} />;
};

export default AuctionCard;
