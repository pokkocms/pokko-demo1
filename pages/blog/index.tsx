import * as React from "react";
import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import { client } from "../../lib/pokko";
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

const query = gql`
  query {
    entries {
      allArticle(skip: 0, take: 25, orderBy: DATE_DESC) {
        nodes {
          id
          title
          summary
          date
          alias
        }
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.query({ query });

  const props: BlogListPageProps = {
    articles: res.data.entries.allArticle.nodes.map(
      (ent) =>
        ({
          id: ent.id,
          alias: ent.alias,
          date: ent.date,
          summary: ent.summary,
          title: ent.title,
        } as ArticleSummary)
    ),
  };

  return {
    props,
  };
};
