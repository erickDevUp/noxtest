import Contact from "@/components/homePage/contact";
import Hero from "@/components/homePage/hero";
import HowWeWork from "@/components/homePage/howWeWork";
import Reviews from "@/components/homePage/reviews";
import Services from "@/components/homePage/services";
import Team from "@/components/homePage/team";
import Works from "@/components/homePage/works";
import { getMetadata } from "@/utils/metaSEO";
import { Box, Stack } from "@chakra-ui/react";
import { Metadata } from "next";

export default function Home() {
  return (
    <Box>
      <Stack
        paddingX={[7, 0]}
        maxW={["full", 1220]}
        margin={"auto"}
        spacing={[32, 48]}
        my={[32, 48]}
      >
        <Hero />
        <Services />
        <HowWeWork />
        <Team />
        <Works />
        <Reviews />
      </Stack>
      <Contact />
    </Box>
  );
}


export function generateMetadata(): Metadata {
  return getMetadata({
    titleSEO: "Nox Agency",
    descriptionSEO: "Nox Agency es una agencia de desarrollo web y diseño",
    keywordsSEO: ["nox", "agency", "desarrollo", "web", "diseño"],
    ogImg: "/img/ph.jpg",
  });
}
