import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import "@fontsource/source-code-pro/variable-full.css";
import "@fontsource/source-code-pro/variable-full-italic.css";

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#0277bd',
        },
        darkGray: {
            main: '#333333'
        },
    },
  typography: {
      fontFamily: 'Source Code Pro'
  },
});

export default theme;
