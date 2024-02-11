import { AuctionCategory } from "@/types/auction-category";
import { create } from "zustand";

interface MarketPlaceQuery {
  sort?: string;
  search?: string;
  page?: number;
  pageSize?: number;
  order?: "asc" | "desc";
  categories?: AuctionCategory[];
  minPrice?: number;
}

interface MarketPlaceQueryStore {
  marketPlaceQuery: MarketPlaceQuery;
  setMinPrice: (minPrice: number) => void;
  setCategory: (category: AuctionCategory) => void;
  setSearch: (search: string) => void;
  setSort: (sort: string) => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  setOrder: (order: "asc" | "desc") => void;
  clearAllFilters: () => void;
}

export const useMarketplaceQueryStore = create<MarketPlaceQueryStore>(
  (set) => ({
    marketPlaceQuery: {
      pageSize: 9,
    },
    setMinPrice: (minPrice: number) =>
      set((state) => ({
        marketPlaceQuery: { ...state.marketPlaceQuery, minPrice },
      })),
    setCategory: (category: AuctionCategory) =>
      set((state) => ({
        marketPlaceQuery: {
          ...state.marketPlaceQuery,
          categories: state.marketPlaceQuery.categories?.includes(category)
            ? state.marketPlaceQuery.categories.filter((c) => c !== category)
            : [...(state.marketPlaceQuery.categories || []), category],
        },
      })),
    setSearch: (search: string) =>
      set((state) => ({
        marketPlaceQuery: { ...state.marketPlaceQuery, search },
      })),
    setSort: (sort: string) =>
      set((state) => ({
        marketPlaceQuery: { ...state.marketPlaceQuery, sort },
      })),
    setPage: (page: number) =>
      set((state) => ({
        marketPlaceQuery: { ...state.marketPlaceQuery, page },
      })),
    setPageSize: (pageSize: number) =>
      set((state) => ({
        marketPlaceQuery: { ...state.marketPlaceQuery, pageSize },
      })),
    setOrder: (order: "asc" | "desc") =>
      set((state) => ({
        marketPlaceQuery: { ...state.marketPlaceQuery, order },
      })),
    clearAllFilters: () =>
      set((state) => ({
        marketPlaceQuery: {
          page: state.marketPlaceQuery.page,
          pageSize: state.marketPlaceQuery.pageSize,
          sort: state.marketPlaceQuery.sort,
          order: state.marketPlaceQuery.order,
          search: state.marketPlaceQuery.search,
        },
      })),
  })
);

export default useMarketplaceQueryStore;
