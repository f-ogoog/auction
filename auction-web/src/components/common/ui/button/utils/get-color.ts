import {
  ButtonColor,
  ButtonColorsMap,
  ButtonState,
  ButtonVariant,
} from "../types";

const buttonColorsMap: ButtonColorsMap = {
  [ButtonVariant.FILLED]: {
    [ButtonColor.PRIMARY]: {
      textColor: ["white.main", "white.main", "white.main"],
      backgroundColor: [
        "primary.main",
        "violet.600",
        "violet.700",
        "violet.300",
      ],
      borderColor: ["transparent", "transparent", "transparent", "transparent"],
      textColorDisabled: "white.main",
    },
    [ButtonColor.BLACK]: {
      textColor: ["white.main", "white.main", "white.main"],
      backgroundColor: ["gray.900", "gray.300", "gray.400", "gray.100"],
      borderColor: ["transparent", "transparent", "transparent", "transparent"],
      textColorDisabled: "gray.300",
    },
    [ButtonColor.WHITE]: {
      textColor: ["gray.900", "gray.900", "gray.900"],
      backgroundColor: ["white.main", "gray.50", "gray.100", "gray.50"],
      borderColor: ["transparent", "transparent", "transparent", "transparent"],
      textColorDisabled: "white.main",
    },
  },

  [ButtonVariant.OUTLINE]: {
    [ButtonColor.PRIMARY]: {
      textColor: ["violet.800", "violet.600", "violet.700"],
      backgroundColor: ["violet.50", "violet.50", "violet.50", "violet.50"],
      borderColor: ["violet.800", "violet.600", "violet.700", "violet.300"],
      textColorDisabled: "violet.300",
    },
    [ButtonColor.BLACK]: {
      textColor: [],
      backgroundColor: [],
      borderColor: [],
      textColorDisabled: "",
    },
    [ButtonColor.WHITE]: {
      textColor: [],
      backgroundColor: [],
      borderColor: [],
      textColorDisabled: "",
    },
  },
};

const stateMap: Record<ButtonState, number> = {
  [ButtonState.DEFAULT]: 0,
  [ButtonState.HOVER]: 1,
  [ButtonState.ACTIVE]: 2,
  [ButtonState.DISABLED]: 3,
};

const getColors = (
  color: ButtonColor,
  variant: ButtonVariant,
  state: ButtonState
) => {
  const stateIndex = stateMap[state];
  return {
    textColor: buttonColorsMap[variant][color].textColor[stateIndex],
    backgroundColor:
      buttonColorsMap[variant][color].backgroundColor[stateIndex],
    borderColor: buttonColorsMap[variant][color].borderColor[stateIndex],
    colorDisabled: buttonColorsMap[variant][color].textColorDisabled,
  };
};

export default getColors;
