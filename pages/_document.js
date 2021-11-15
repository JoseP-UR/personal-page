// pages/_document.js

import { ColorModeScript } from "@chakra-ui/react"
import { localStorageManager } from "@chakra-ui/color-mode"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import theme from "../themes/theme"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} colorModeManager="localStorageManager" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}