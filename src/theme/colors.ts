import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#FFB606",
  primaryBright: "#FFB606",
  primaryDark: "#55A3AB",
  secondary: "#ffeaa1",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#1C1C1C",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#FFB606",
  tertiary: "#1C1C1C",
  text: "#ffeaa1",
  textDisabled: "#BDC2C4",
  textSubtle: "#ffeaa1",
  borderColor: "#E9EAEB",
  card: "#3B3B3B",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#000000",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#55A3AB",
  tertiary: "#353547",
  text: "#add8e6",
  textDisabled: "#666171",
  textSubtle: "#add8e6",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
