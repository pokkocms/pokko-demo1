import React from "react";
import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import { home } from "../data";
import { Home } from "../templates/Home";
import { ArticleSummary, HomeProps } from "../types";
import { client } from "../lib/pokko";

const HomePage: React.FC<HomeProps> = (props) => <Home {...props} />;

export default HomePage;

const query = gql`
  query {
    entries {
      allHome(skip: 0, take: 1) {
        nodes {
          id
          title
          summary
          metaTitle
          metaDescription
          featuredArticles {
            ... on Article {
              id
              title
              summary
              date
              alias
            }
          }
        }
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.query({ query });

  const entry = res.data.entries.allHome.nodes[0];

  const props: HomeProps = {
    title: entry.title,
    summary: entry.summary,
    metadata: {
      title: entry.metaTitle,
      description: entry.metaDescription,
    },
    featuredArticles: entry.featuredArticles.map(
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
