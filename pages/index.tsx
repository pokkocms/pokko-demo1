import { GetStaticProps } from "next";
import React from "react";
import { home } from "../data";
import { Home } from "../templates/Home";
import { HomeProps } from "../types";

const HomePage: React.FC<HomeProps> = (props) => <Home {...props} />;

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const props: HomeProps = home;

  return {
    props,
  };
};
