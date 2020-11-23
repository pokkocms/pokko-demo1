import React from "react";
import Head from "next/head";
import { Article } from "../templates/Article";

const ArticlePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Article - Pokko</title>
      </Head>
      <Article />
    </>
  );
};

export default ArticlePage;
