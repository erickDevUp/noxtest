import { Stack } from "@chakra-ui/react";
import TitleSection from "../customs/titleSection";
import FeaturedPost from "./featuredPost";
import MainPost from "./mainPost";
import { Featured } from "./data";

export default function FeaturedPosts() {
  const Posts = Featured;
  return (
    <Stack direction={"column"}>
      <TitleSection title="Post destacados" />
      <Stack
        mt={5}
        direction={["column", "row"]}
        justifyContent={["center", "center", "center", "normal"]}
        wrap={["nowrap", "wrap"]}
        spacing={8}
        maxH={["full", "fit-content"]}
      >
        <MainPost
          img={Posts[0].img}
          date={Posts[0].date}
          author={Posts[0].author}
          title={Posts[0].title}
          description={Posts[0].description}
          tags={Posts[0].tags}
          slug={Posts[0].slug}
        />
        <Stack spacing={8} w={["full", "48%"]}>
          <FeaturedPost
            img={Posts[1].img}
            date={Posts[1].date}
            author={Posts[1].author}
            title={Posts[1].title}
            description={Posts[1].description}
            tags={Posts[1].tags}
            slug={Posts[1].slug}
          />
          <FeaturedPost
            img={Posts[2].img}
            date={Posts[2].date}
            author={Posts[2].author}
            title={Posts[2].title}
            description={Posts[2].description}
            tags={Posts[2].tags}
            slug={Posts[2].slug}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
