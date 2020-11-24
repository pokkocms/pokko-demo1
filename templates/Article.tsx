import * as React from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Module } from "../components/modules/Modules";
import { ArticleProps } from "../types";

export const Article: React.FC<ArticleProps> = ({
  metadata,
  title,
  summary,
  date,
  imageUrl,
  category,
  author,
  body,
}) => (
  <MainLayout metadata={metadata}>
    <h1>{title}</h1>
    <p>{summary}</p>
    <p>By {author}</p>
    <p>Filed under {category}</p>
    <time dateTime={new Date(date).toISOString()}>
      Posted {new Date(date).toLocaleDateString()}
    </time>
    {imageUrl ? <img src={imageUrl} /> : null}
    {body.map((ent, idx) => (
      <Module {...ent} key={idx} />
    ))}
  </MainLayout>
);
