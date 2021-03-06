import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    blackBkg: '#24292e',
    white: '#ffffff',
    lightGray: '#d3d3d3',
    errorRed: '#d73a4a',
    yellow: '#ffefba'

  },
  fontSizes:{
    body: 14,
    subheading: 16,
    heading: 24,
  },
  fonts:{
    main: Platform.select({
      android: 'Roboto',
      ios:'Arial',
      default:'System'
    }),
  },
  fontWeights:{
    normal: '400',
    bold:'700',
  },
  appBar:{
    height: 40
  }
};

export default theme;