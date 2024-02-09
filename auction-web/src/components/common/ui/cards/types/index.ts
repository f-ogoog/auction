import { User } from "@/types/user";

interface CardProps {
  image: string;
  auctionId: string;
}

// header types
interface CardHeaderProps {
  title: string;
  subtitle: string;
}

interface SlotCardHeaderProps extends CardHeaderProps {}
interface AuctionCardHeaderProps extends CardHeaderProps {
  categoryLink: string;
}

// price types
interface CardPriceProps {
  lastPrice: number;
  minPrice: number;
}

interface SlotCardPriceProps extends CardPriceProps {}
interface AuctionCardPriceProps extends CardPriceProps {}

// footer types
interface CardFooterProps {
  timeLeft: string;
}

interface SlotCardFooterProps extends CardFooterProps {}
interface AuctionCardFooterProps extends CardFooterProps {
  slotsLeft: number;
  owner: User;
  collectors: User[];
}

// content types
export type CardHeaderType = SlotCardHeaderProps | AuctionCardHeaderProps;
export type CardPriceType = SlotCardPriceProps | AuctionCardPriceProps;
export type CardFooterType = SlotCardFooterProps | AuctionCardFooterProps;

type CardContent = CardHeaderType & CardPriceType & CardFooterType;

export type CardType = CardProps & CardContent;
export type SlotCardType = CardProps &
  SlotCardHeaderProps &
  SlotCardPriceProps &
  SlotCardFooterProps;
export type AuctionCardType = CardProps &
  AuctionCardHeaderProps &
  AuctionCardPriceProps &
  AuctionCardFooterProps;
