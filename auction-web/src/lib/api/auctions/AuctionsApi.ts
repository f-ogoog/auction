import {client} from "@/lib/api/instance";
import {getAuthorizationHeader} from "@/lib/api/utils";
import {LotBody} from "@/lib/api/auctions/types/LotBody";
import {Auction} from "@/types/auction";
import {AuctionBody} from "@/lib/api/auctions/types/AuctionBody";

class AuctionsApi {
    async getAll() {
        const {data} = await client.get(`/auctions`);
        return data;
    }

    async createLot(auctionId: string, body: LotBody) {
        const {data} = await client.post<LotBody>(`/auctions/${auctionId}/lots`, body, getAuthorizationHeader());
        return data;
    }

    async findAuctionsById() {
        const {data} = await client.get(`/auctions/my`, getAuthorizationHeader());
        return data;
    }

    async createAuction(body: AuctionBody | FormData) {
        const {data} = await client.post<Auction>('/auctions',body, getAuthorizationHeader());
        return data;
    }
}


export default new AuctionsApi();