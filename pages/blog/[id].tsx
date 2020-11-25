import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { articles } from "../../data";
import { Article } from "../../templates/Article";
import { ArticleProps } from "../../types";
import { gql } from "@apollo/client";
import { client } from "../../lib/pokko";

const ArticlePage: React.FC<ArticleProps> = (props) => <Article {...props} />;

export default ArticlePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query {
      entries {
        allArticle(skip: 0, take: 25) {
          nodes {
            id
          }
        }
      }
    }
  `;

  const res = await client.query({ query });

  const paths = res.data.entries.allArticle.nodes.map((ent) => ({
    params: {
      id: ent.id,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const query = gql`
    query($id: String) {
      entry(id: $id) {
        ... on Article {
          id
          title
          summary
          date
          alias
          metaTitle
          metaDescription
          image {
            url
          }
          category {
            ... on Category {
              name
            }
          }
          author {
            ... on Author {
              name
            }
          }
          body {
            type: __typename
            ... on Markdown {
              body
            }
            ... on Image {
              image {
                url
              }
            }
          }
        }
      }
    }
  `;

  const res = await client.query({
    query,
    variables: { id: context.params.id },
  });

  const entry = res.data.entry;

  if (!entry) {
    return { notFound: true };
  }

  const props: ArticleProps = {
    alias: entry.alias,
    author: entry.author?.name || "",
    body: entry.body,
    category: entry.category?.name || "",
    title: entry.title,
    date: entry.date,
    id: entry.id,
    imageUrl: entry.image?.url || "",
    metadata: {
      title: entry.metaTitle,
      description: entry.metaDescription,
    },
    summary: entry.summary,
  };

  return {
    props,
  };
};
