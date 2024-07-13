// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const chakraTheme = extendTheme({
  colors: {
    nox: {
      "primary": "#0AC05E",
      "dark": "#313131",
      "light": "#FBFBFB",
      "text": "#111827",
      "text-blog": "#181818",
      "text-blog-light": "#7B7B7B",
    },
  },
})
