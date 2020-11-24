import { ModuleProps } from "./components/modules/Modules";

export type Metadata = {
  title: string;
  description: string;
  imageUrl?: string;
};

export type ArticleSummary = {
  id: string;
  title: string;
  summary: string;
  date: string;
  alias: string;
};

export type ArticleProps = ArticleSummary & {
  metadata: Metadata;
  imageUrl: string | null;
  category: string;
  author: string;
  body: ModuleProps[];
};

export type HomeProps = {
  metadata: Metadata;
  title: string;
  summary: string;
  featuredArticles: ArticleSummary[];
};
