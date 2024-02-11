import { Slot } from "./Slot";
import { AuctionCategory } from "./auction-category";

export interface Auction {
  id: string;
  name: string;
  description: string | null;
  avatar: string | null;
  maxSlots: number;
  state: State;
  category: AuctionCategory;
  userId: string;
  createdAt: Date;
  lots: Slot[];
}

enum State {
  OPENED = "opened",
  CLOSED = "closed",
}
