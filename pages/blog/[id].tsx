import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { articles } from "../../data";
import { Article } from "../../templates/Article";
import { ArticleProps } from "../../types";

const ArticlePage: React.FC<ArticleProps> = (props) => <Article {...props} />;

export default ArticlePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = articles.map((ent) => ({
    params: {
      id: ent.id,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const props = articles.find((ent) => ent.id === context.params.id);

  return {
    notFound: !props,
    props,
  };
};
