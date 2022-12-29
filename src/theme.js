import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import "@fontsource/source-code-pro/variable-full.css";
import "@fontsource/source-code-pro/variable-full-italic.css";

const breakpoints = {
    values: {
        xs: 0,
        sm: 0, // Phone
        md: 768, // Tablet/Laptop
        lg: 1500, // Desktop
        xl: 2000
    }
};

// Create a theme instance.
const theme = createTheme({
    palette: {
        background: {
            default: '#000027',
        },
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

theme.typography.h1 = {
    fontSize: '3.8rem',
    '@media (min-width:600px)': {
        fontSize: '4rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '5.8rem',
    },
};

theme.typography.h2 = {
    fontSize: '2.0rem',
    '@media (min-width:600px)': {
        fontSize: '3.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '5.0rem',
    }
}

theme.typography.h5 = {
    fontSize: '0.9rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.2rem',
    },
};

theme.typography.h4 = {
    fontSize: '1.3rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.0rem',
    },
};



export default theme;
