import * as React from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";

import "../styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
