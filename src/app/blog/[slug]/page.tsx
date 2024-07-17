import RelatedArticles from "@/components/articlePage/relatedArticles";
import { Posts } from "@/components/blogPage/allPosts/data";
import { Featured } from "@/components/blogPage/featuredPosts/data";
import { Badge, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import React from "react";

export async function getArticle(slug: string) {
  const allPosts = Posts.concat(Featured);

  const article = allPosts.find((post) => post.slug === slug);
  if (!article) {
    notFound();
  }
  return article;
}

export default async function Article({ params }: { params: any }) {
  const slug = params.slug;
  const article = await getArticle(slug);
  const { title, description, author, date, img, tags } = article;

  return (
    <Stack
      px={[7, 0]}
      maxWidth={["full", 1220]}
      overflow={["hidden", "visible"]}
      w={"full"}
      margin={[0, "auto"]}
      spacing={5}
      my={[10, 16]}
    >
      <Image
        src={img}
        alt="blog-1"
        width={"full"}
        height={["fit-content", 350]}
      />
      <Text
        mt={5}
        as="span"
        fontSize={"sm"}
        fontWeight={"semibold"}
        color="nox.text-blog-date"
      >
        {author + " • " + date}
      </Text>
      <Stack
        justifyContent={"space-between"}
        align={"center"}
        direction={"row"}
      >
        <Heading
          as="h1"
          fontSize={"2xl"}
          fontWeight={"semibold"}
          color="nox.text-blog"
        >
          {title}
        </Heading>
      </Stack>
      <Stack direction={"row"} wrap={"wrap"} spacing={2}>
        {tags.map((tag, index) => (
          <Badge
            key={tag + index}
            colorScheme="green"
            borderRadius={"full"}
            fontSize={"xs"}
            fontWeight={"semibold"}
            textColor={"nox.primary"}
            background={"#0AC05E20"}
            px={4}
            py={1}
          >
            {tag}
          </Badge>
        ))}
      </Stack>
      <GenericContent />
      <RelatedArticles currentArticle={slug}></RelatedArticles>
    </Stack>
  );
}

export function GenericContent() {
  return (
    <Text
      fontWeight={"medium"}
      my={5}
      color="nox.text-blog-light"
      textAlign={"justify"}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Text>
  );
}
