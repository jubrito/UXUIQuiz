import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  // Reset
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Ubuntu', sans-serif;
    // Branco no começo
    color: ${({ theme }) => theme.colors.black};
  }
  .relative {
    position: relative;
  }
  .mt-15 {
    margin-top: 15px;
  }
  ul {
    padding-left: 20px;
    li {
      margin-bottom: 10px;
      padding-left: 0px;
    }
  }
  .source {
    font-style:italic;
    font-size: 13px;
    a {
      padding-left: 5px;
      color: ${({ theme }) => theme.colors.secondary};
    }
    @media screen and (max-width: 1215px) {
      font-size: 12px !important;
    }
  }
 
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{db.title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700" rel="stylesheet"/>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* GlobalStyle dentro do theme para que o db json seja lido em todos os componentes */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
