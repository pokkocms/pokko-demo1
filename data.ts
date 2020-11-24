import { ArticleProps, HomeProps } from "./types";

export const articles: ArticleProps[] = [
  {
    metadata: {
      description: "Brendan",
      title: "Demo",
      imageUrl: "",
    },
    author: "Brendan",
    category: "Demo",
    imageUrl: "",
    id: "0",
    title: "Ut enim ad minim veniam",
    summary:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2020-03-02",
    alias: "ut-enim-ad-minim-veniam",
    body: [
      {
        type: "Markdown",
        body:
          "Justo donec enim diam vulputate ut pharetra sit amet aliquam. Dui sapien eget mi proin sed libero enim. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Gravida cum sociis natoque penatibus et. Vel turpis nunc eget lorem dolor.",
      },
      {
        type: "Image",
        source: {
          url: "https://cdn.pokko.io/p/pokko-sharing.png",
        },
      },
      {
        type: "Markdown",
        body:
          "Proin sed libero enim sed. Id aliquet risus feugiat in ante metus.",
      },
    ],
  },
  {
    metadata: { imageUrl: "", description: "Demo", title: "Demo" },
    author: "Brendan",
    body: [],
    category: "Demo",
    imageUrl: "",
    id: "1",
    title: "Ultrices mi tempus imperdiet nulla malesuada",
    summary:
      "Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Vulputate dignissim suspendisse in est. Facilisi etiam dignissim diam quis",
    date: "2020-05-17",
    alias: "ultrices-mi-tempus-imperdiet-nulla-malesuada",
  },
  {
    metadata: { imageUrl: "", description: "", title: "" },
    author: "Brendan",
    body: [],
    category: "Demo",
    imageUrl: "",
    id: "2",
    title: "A scelerisque purus semper eget duis at tellus",
    summary:
      "Lacus viverra vitae congue eu consequat ac felis. Sit amet volutpat consequat mauris nunc congue nisi vitae.",
    date: "2019-11-20",
    alias: "a-scelerisque-purus-semper-eget-duis-at-tellus",
  },
];

export const home: HomeProps = {
  metadata: {
    title: "Hello, Pokko.",
    description: "Integration demonstration of Pokko and NextJS",
  },
  title: "Welcome, friends.",
  summary: `This templated site that will demonstrate how Pokko integrates with NextJS.
      
Purposely left looking rather bland, this demonstration aims to highlight the ease at which integration is achieved between Pokko and NextJS.`,
  featuredArticles: articles,
};
