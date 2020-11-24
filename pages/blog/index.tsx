import { GetStaticProps } from "next";
import * as React from "react";
import { articles } from "../../data";
import { ArticleListPage } from "../../templates/ArticleList";
import { ArticleSummary } from "../../types";

export type BlogListPageProps = { articles: ArticleSummary[] };

const BlogListPage: React.FC<BlogListPageProps> = ({ articles }) => (
  <ArticleListPage
    metadata={{
      title: "All articles",
      description: "",
    }}
    articles={articles}
  />
);

export default BlogListPage;

export const getStaticProps: GetStaticProps = async () => {
  const props: BlogListPageProps = { articles };

  return {
    props,
  };
};
