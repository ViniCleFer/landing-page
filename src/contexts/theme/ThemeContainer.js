import React from "react";
import {
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  CSSReset
} from "@chakra-ui/core";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

import theme from "../../styles/theme";

export default function ThemeContainer({ children }) {
  return (
    <ChakraThemeProvider theme={theme}>
      <ColorModeProvider value="light">
        <EmotionThemeProvider theme={theme}>
          <CSSReset />
          {children}
        </EmotionThemeProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  );
}
