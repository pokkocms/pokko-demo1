import React from "react";
import Head from "next/head";
import { Home } from "../templates/Home";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Demo - Pokko</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
