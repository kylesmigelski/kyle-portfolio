import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import Layout from '../components/Layout';
import '../global.css';
import { GoogleAnalytics } from "nextjs-google-analytics";
import Particles from "react-particles";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const theme = createTheme({
  typography: {
    fontFamily:
      'Source Code Pro',
  },
  palette: {
    background: {
      default: '#000000',
    },
    primary: {
      main: '#ffffff',
    },
  }
});

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
      <>
        <GoogleAnalytics trackPageViews gaMeasurementId={process.env.NEXT_PUBLIC_GA_ID} />

        <Layout>
          <CacheProvider value={emotionCache}>
            <Head>
              <meta name="viewport" content="initial-scale=1, width=device-width" />
              <meta name="author" content="Kyle Smigelski" />
            </Head>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </CacheProvider>
        </Layout>
      </>
  );
}


MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
