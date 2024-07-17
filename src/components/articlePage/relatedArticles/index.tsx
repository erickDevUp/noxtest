import React from "react";
import { Stack } from "@chakra-ui/react";
import CardPost from "@/components/blogPage/customs/cardPost";
import TitleSection from "@/components/blogPage/customs/titleSection";
import { Featured } from "@/components/blogPage/featuredPosts/data";
import { Posts } from "@/components/blogPage/allPosts/data";

export default function RelatedArticles({
  currentArticle,
}: {
  currentArticle: string;
}) {
  const allPosts = Posts.concat(Featured);
  const RelatedPosts = allPosts
    .filter((post) => post.slug !== currentArticle)
    .slice(0, 3);
  return (
    <Stack direction={"column"}>
      <TitleSection title="Artículos Realacionados" />
      <Stack
        mt={5}
        direction={["column", "row"]}
        wrap={["nowrap", "wrap"]}
        maxW={["full", "fit-content"]}
        spacing={8}
        justify={"center"}
      >
        {RelatedPosts.map((post) => (
          <CardPost
            slug={post.slug}
            author={post.author}
            date={post.date}
            title={post.title}
            description={post.description}
            tags={post.tags}
            img={post.img}
            key={post.slug}
          />
        ))}
      </Stack>
    </Stack>
  );
}
