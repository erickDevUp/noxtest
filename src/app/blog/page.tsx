import AllPosts from "@/components/blogPage/allPosts";
import FeaturedPosts from "@/components/blogPage/featuredPosts";
import { Stack } from "@chakra-ui/react";

export default function Blog() {
  return (
    <Stack px={[7,0]} maxWidth={["full",1220]} overflow={["hidden","visible"]} w={"full"} justify={"center"} align={"center"}margin={"auto"} spacing={10} my={[10,16]}>
      <FeaturedPosts />
      <AllPosts />
    </Stack>
  )
}