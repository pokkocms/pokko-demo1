import Link from "next/link";
import * as React from "react";
import { ArticleSummary } from "../../types";

export type ArticleListProps = {
  list: ArticleSummary[];
};

export const ArticleList: React.FC<ArticleListProps> = ({ list }) => (
  <ul className="article-list__container">
    {list.map((ent) => (
      <li key={ent.id} className="article-list__item">
        <div>
          <Link href={`/blog/${ent.id}`}>
            <a>
              <strong>{ent.title}</strong>
            </a>
          </Link>
          <time>
            {new Date(ent.date).toLocaleDateString(undefined, {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
        </div>
        <p>{ent.summary}</p>
      </li>
    ))}
  </ul>
);
