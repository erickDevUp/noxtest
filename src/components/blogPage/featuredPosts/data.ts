import { ArticleType } from "@/interfaces/blog";

export const Featured: ArticleType[] = [
  {
    img: "/img/blog/post1.png",
    date: "2023-04-01",
    author: "Alec Whitten",
    title: "UX review presentations",
    slug: "ux-review-presentations",
    description:
      "En esta publicación exploraremos los fundamentos de React y cómo comenzar con tu primer proyecto.",
    tags: ["React", "Desarrollo Web", "Tutorial"],
  },
  {
    img: "/img/blog/post2.png",
    date: "2023-03-15",
    author: "Alec Whitten",
    title: "Migrating to Linear 101",
    slug: "migrating-to-linear-101",
    description:
      "Un tutorial completo sobre cómo configurar y empezar a desarrollar aplicaciones con Node.js.",
    tags: ["Node.js", "Back-end", "Tutorial"],
  },
  {
    img: "/img/blog/post3.png",
    date: "2023-02-28",
    author: "Alec Whitten",
    title: "Building your API Stack",
    slug: "building-your-api-stack",
    description:
      "Profundizamos en las capacidades de CSS Grid para crear diseños responsivos y flexibles.",
    tags: ["CSS", "Grid", "Diseño"],
  },
];
