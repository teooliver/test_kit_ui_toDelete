import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-globally";
import "../styles/styles.scss";
import { initialState } from "../initialState";
import Navbar from "../components/NavBar";

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider globalState={initialState}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}
