import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    mono: "Menlo, monospace"
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700
  },
  radii: {
    ...theme.radii,
    sm: "4px",
    lg: "24px"
  },
  fontSizes: {
    ...theme.fontSizes,
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px"
  },
  colors: {
    ...theme.colors,
    pink: {
      ...theme.colors.pink,
      500: "#E48ABF",
      600: "#A51C60",
      700: "#7F1856"
    },
    gray: {
      500: "#958FA3",
      600: "#625C70",
      700: "#312E38"
    }
  }
};

export default customTheme;
