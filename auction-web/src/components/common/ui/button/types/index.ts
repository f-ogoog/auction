export enum ButtonVariant {
  FILLED = "filled",
  OUTLINE = "outline",
}

export enum ButtonColor {
  PRIMARY = "primary",
  BLACK = "black",
  WHITE = "white",
}

export enum ButtonState {
  DEFAULT = "default",
  HOVER = "hover",
  ACTIVE = "active",
  DISABLED = "disabled",
}

export interface ButtonColorsStruct {
  textColor: string[];
  backgroundColor: string[];
  borderColor: string[];
  textColorDisabled: string;
}

export type ButtonColorsMap = Record<
  ButtonVariant,
  Record<ButtonColor, ButtonColorsStruct>
>;
