import * as React from "react";
import Markdown from "react-markdown";
import { ArticleList } from "../components/articles/ArticleList";
import { MainLayout } from "../components/layout/MainLayout";
import { HomeProps } from "../types";

export const Home: React.FC<HomeProps> = ({
  metadata,
  title,
  summary,
  featuredArticles,
}) => (
  <MainLayout metadata={metadata}>
    <h1>{title}</h1>
    <Markdown>{summary}</Markdown>
    <hr />
    <h2>Latest articles</h2>
    <ArticleList list={featuredArticles} />
  </MainLayout>
);
