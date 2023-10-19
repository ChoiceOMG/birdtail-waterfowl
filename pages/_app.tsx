import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "../styles/landingPage.module.css"; // Adjust this import

const theme = createTheme(); // Create or import your theme object here

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
