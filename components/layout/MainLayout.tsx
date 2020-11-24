import Head from "next/head";
import * as React from "react";
import { Metadata } from "../../types";
import { Navbar } from "../nav/Navbar";

export type MainLayoutProps = {
  metadata?: Metadata;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  metadata,
  children,
}) => (
  <>
    {metadata ? (
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.imageUrl ? (
          <meta property="og:image" content={metadata.imageUrl} />
        ) : null}
      </Head>
    ) : null}
    <div className="main-layout">
      <Navbar />
      <main>{children}</main>
    </div>
  </>
);
