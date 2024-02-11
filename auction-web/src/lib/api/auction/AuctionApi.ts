import { client } from "../instance";
import { QueryAllAuctions } from "./types/QueryAllAuctions";

class AuctionApi {
  async getAuctions(params: QueryAllAuctions) {
    const { data } = await client.get("/auctions", {
      params,
    });
    return data;
  }
}

export default new AuctionApi();
