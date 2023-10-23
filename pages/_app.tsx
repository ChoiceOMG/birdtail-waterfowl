import { ThemeProvider, createTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../styles/landingPage.module.css"; // Adjust this import
import { ApolloProvider } from "@apollo/client";
import client from "../lib/wordpressGraphQL"; // Adjust path based on your folder structure
import Navbar from "components/navbar/navbar";
import { AppProps } from "next/app";

const theme = createTheme(); // Create or import your theme object here

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
