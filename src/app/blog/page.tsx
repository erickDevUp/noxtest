import AllPosts from "@/components/blogPage/allPosts";
import FeaturedPosts from "@/components/blogPage/featuredPosts";
import { getMetadata } from "@/utils/metaSEO";
import { Stack } from "@chakra-ui/react";
import { Metadata } from "next";
import { Suspense } from "react";

export default async function Blog() {

  // ...

  return (
    <Stack
      px={[7, 0]}
      maxWidth={["full", 1220]}
      overflow={["hidden", "visible"]}
      w={"full"}
      justify={"center"}
      align={"center"}
      margin={"auto"}
      spacing={10}
      my={[10, 16]}
    >

      <FeaturedPosts />
      <Suspense>
        <AllPosts />
      </Suspense>
    </Stack>
  );
}



export function generateMetadata(): Metadata {
  return getMetadata({
    titleSEO: "Blog Nox Agency",
    descriptionSEO: "El blog de Nox Agency es un blog de desarrollo web y diseño ",
    keywordsSEO: ["blog", "nox", "agency"],
    ogImg: "/img/ph.jpg",
  });
}