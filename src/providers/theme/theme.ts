import type { HEX } from "@/utils/color/types";

type ThemeType = { [K in string]: HEX | ThemeType };

const theme = {
  primary: {
    100: "#bea3ff",
    200: "#a984ff",
    300: "#9366ff",
    400: "#7e47ff",
    500: "#530aff",
    600: "#4600ea",
    700: "#3d00cc",
    800: "#3400ad",
    900: "#2a008a",
    950: "#190052",
  },
  secondary: {
    100: "#e1ff89",
    200: "#dbff6f",
    300: "#d4ff56",
    400: "#ceff3c",
    500: "#c1ff09",
    600: "#b2ef00",
    700: "#9fd500",
    800: "#8cbc00",
    900: "#79a200",
    950: "#4d8b00",
  },
  blue: {
    100: "#acc5fe",
    200: "#93b4fd",
    300: "#79a2fd",
    400: "#6091fd",
    500: "#2e6efc",
    600: "#155dfc",
    700: "#034ef4",
    800: "#0346da",
    900: "#033ec1",
    950: "#0236a8",
  },
  gray: {
    100: "#ffffff",
    200: "#e4e7ec",
    300: "#c3cad5",
    400: "#a2adbf",
    500: "#62748e",
    600: "#4b596d",
    700: "#343e4c",
    800: "#1d232a",
    900: "#060809",
    950: "#020618",
  },
  white: "#FFFFFF",
  black: "#000000",
} as const satisfies ThemeType;

export type Theme = typeof theme;

export default theme;
