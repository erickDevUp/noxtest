
import Contact from "@/components/homePage/contact";
import Hero from "@/components/homePage/hero";
import HowWeWork from "@/components/homePage/howWeWork";
import Services from "@/components/homePage/services";
import Team from "@/components/homePage/team";
import Works from "@/components/homePage/works";
import { Box, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Stack paddingX={[7,0]} maxW={["full",1220]} margin={"auto"} spacing={[32,48]} my={[32,48]}>
        <Hero />
        <Services />
        <HowWeWork />
        <Team />
        <Works />
      </Stack>
      <Contact />

    </Box>
  );
}
