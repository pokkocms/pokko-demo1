import * as React from "react";
import { ArticleList } from "../components/articles/ArticleList";
import { MainLayout } from "../components/layout/MainLayout";
import { ArticleSummary, Metadata } from "../types";

export type ArticleListProps = {
  metadata: Metadata;
  articles: ArticleSummary[];
};

export const ArticleListPage: React.FC<ArticleListProps> = ({
  metadata,
  articles,
}) => (
  <MainLayout metadata={metadata}>
    <h1>All articles</h1>
    <hr />
    <ArticleList list={articles} />
  </MainLayout>
);
