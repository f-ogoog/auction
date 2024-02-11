import { AuctionCategory } from "@/types/auction-category";

export class QueryAllAuctions {
  categories?: AuctionCategory[];
  minPrice?: number;
  page?: number;
  pageSize?: number;
  search?: string;
  order?: "asc" | "desc";
}
