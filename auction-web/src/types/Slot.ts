import { State } from "./state";

export interface Slot {
  id: string;
  name: string;
  minPrice: number;
  description: string | null;
  auctionId: string;
  state: State;
  photos: string[];
}
