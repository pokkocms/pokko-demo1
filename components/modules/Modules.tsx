import * as React from "react";
import Markdown from "react-markdown";

export type ModuleProps = Image | Markdown;

export type ModuleBase = {
  type: string;
};

export type Image = ModuleBase & {
  type: "Image";
  source: {
    url: string;
  };
};
export type Markdown = ModuleBase & {
  type: "Markdown";
  body: string;
};

export const Module: React.FC<ModuleProps> = (props) => {
  switch (props.type) {
    case "Markdown":
      return <Markdown className="content">{props.body}</Markdown>;
    case "Image":
      if (props.source?.url) {
        return <img src={props.source.url} />;
      }
  }
  return null;
};
