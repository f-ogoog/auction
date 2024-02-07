import { PageBanner } from "../types";

export const getBanner = (pageBanner: PageBanner) => {
  switch (pageBanner) {
    case PageBanner.HOME:
      return {
        title: "Share\nYour Generosity!",
        description:
          "This is a large-scale project that brings people from all over the world. Here you can create, sell, buy and hold auctions. All money will go to the charity!",
        image: "/images/banners/home.webp",
        alt: "Auction",
      };
    case PageBanner.MARKETPLACE:
      return {
        title: "Marketplace",
        description: "Her you can search for auctions",
        image: "/images/banners/marketplace.webp",
        alt: "Marketplace",
      };
    case PageBanner.CREATE_SLOT:
      return {
        title: "Lets create a Slot!",
        description:
          "Just fill the fields and download a file! It's much easier than you expected!",
        image: "/images/banners/create-slot.jpg",
        alt: "Create Slot",
      };
  }
};
