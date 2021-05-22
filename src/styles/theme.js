import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  initialColorMode: "Dark",
  useSystemColorMode: false,
  fonts: {
    heading: 'Nunito, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif'
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  },
  radii: {
    sm: '5px',
    md: '8px'
  },
  colors: {
    blue: {
      1000: '#004DCF',
      700: '#085AE5'
    },
    gray: {
      300: '#EEEEEE'
    }
  },
});

export default customTheme;
