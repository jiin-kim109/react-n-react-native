/* eslint-disable */
import { DefaultTheme } from 'react-native-paper';

interface ValidColorList {
  white: "#ffffff",
  black: "#000000",
  primaryRed: "#ff0000",
  secondaryRed: "#993333",
  primaryBlue: "#006699",
  lightBlue: "#3399cc",
  darkBlue: "#003366",
  primaryGreen: "#33cc99",
  secondaryGreen: "#28df99",
  Mint: "#ccffcc",
  Sky: "#99ccff",
};

const theme = {
  ...DefaultTheme,
  roundness: 2,

  colors: {
    ...DefaultTheme.colors,
    white: "#ffffff",
    black: "#000000",
    primaryRed: "#ff0000",
    secondaryRed: "#993333",
    primaryBlue: "#006699",
    lightBlue: "#3399cc",
    darkBlue: "#003366",
    primaryGreen: "#33cc99",
    secondaryGreen: "#28df99",
    Mint: "#ccffcc",
    Sky: "#99ccff",

    specialColors: {
      statusBar: "rgba(240,240,240,0.3)",
      disabledBorder: "rgba(112,112,112,0.4)",
      disabledText: "rgba(120,120,120,0.3)",
    },
    gradient: {
      primary: {
        colors: ["#3399cc", "#006699", "#003366"],
        start: { x: 0.4, y: 0.1 },
        end: { x: 0.8, y: 1.0 },
        locations: [0, 0.65, 0.85],
      },
      secondary: {
        colors: ["#28df99", "#3399cc"],
        start: { x: 0.4, y: 0.1 },
        end: { x: 0.8, y: 1.0 },
        locations: [0, 0.9],
      }
    }
  },
  
  fontsets: {
    paragraph: {
      fontSize: 14,
      fontFamily: 'OpenSans-Regular',
    },
    header: {
      fontSize: 38,
      fontFamily: 'Roboto-Regular',
    },
    header2: {
      fontSize: 32,
      fontFamily: 'Roboto-Regular',
    },
    header3: {
      fontSize: 24,
      fontFamily: 'Roboto-Regular'
    },
    header4: {
      fontSize: 18,
      fontFamily: 'Roboto-Regular'            
    },  
  }
};

export default theme

declare global {  
  namespace ReactNativePaper {
    type Gradient = {
      colors: string[],
      start: { x: number, y: number },
      end: { x: number, y: number }
      locations: number[]
    }
    type Fontset = {
      fontSize: number,
      fontFamily: string
    }
    type ValidColor = ValidColorList[keyof ValidColorList];

    interface ThemeColors {
      white: string,
      black: string,
      primaryRed: string,
      secondaryRed: string,
      primaryBlue: string,
      lightBlue: string,
      darkBlue: string,
      primaryGreen: string,
      secondaryGreen: string,
      Mint: string,
      Sky: string,
  
      specialColors: {
        statusBar: string
        disabledBorder: string
        disabledText: string
      }
      gradient: {
        primary: Gradient,
        secondary: Gradient,
      }
    }
    interface Theme {
      fontsets: {
        paragraph: Fontset
        header: Fontset
        header2: Fontset
        header3: Fontset
        header4: Fontset
      }
    }
  }
}