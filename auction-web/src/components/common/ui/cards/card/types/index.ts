import { User } from "@/types/user";

export interface CardProps {
  image: string;
  auctionId: string;
}

// header types
interface CardHeaderProps {
  title: string;
  subtitle: string;
}

export interface SlotCardHeaderProps extends CardHeaderProps {}
export interface AuctionCardHeaderProps extends CardHeaderProps {
  categoryLink: string;
}

// price types
interface CardPriceProps {
  lastPrice: number;
  minPrice: number;
}

export interface SlotCardPriceProps extends CardPriceProps {}
export interface AuctionCardPriceProps extends CardPriceProps {}

// footer types
interface CardFooterProps {
  timeLeft: string;
}

export interface SlotCardFooterProps extends CardFooterProps {}
export interface AuctionCardFooterProps extends CardFooterProps {
  left: number;
  owner: User;
  collectors: User[];
}

// content types
type CardHeaderType = SlotCardHeaderProps | AuctionCardHeaderProps;
type CardPriceType = SlotCardPriceProps | AuctionCardPriceProps;
type CardFooterType = SlotCardFooterProps | AuctionCardFooterProps;

export type CardContent = CardHeaderType & CardPriceType & CardFooterType;

export type CardType = CardProps & CardContent;
