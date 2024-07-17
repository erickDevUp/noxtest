import { Box, Flex, Stack } from "@chakra-ui/react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { navRoutes } from "./data";
import Image from "next/image";
import { MainBtnsNav } from "./BtnNav";
import Link from "next/link";

export default function Nav() {
  return (
    <Box bg="linear-gradient(#F0FAF4 , #F3FBF6 , #FFFFFF )" paddingY={10}>
      <Stack
        maxW={1220}
        px={[7, 0]}
        margin={"auto"}
        justifyContent={"space-between"}
        direction="row"
        align="center"
        color={"nox.text"}
      >
        <Stack
          spacing={5}
          direction="row"
          align="center"
          justifyContent={["space-between", "normal"]}
          w="full"
        >
          <Link href="/">
            <Image
              src={"/img/logotipo_nox.svg"}
              alt="logotipo"
              width={87}
              height={40}
            />
          </Link>
          <Flex align="center">
            <DesktopNav routes={navRoutes} />
            <MobileNav routes={navRoutes} />
          </Flex>
        </Stack>
        <Stack
          display={["none", "none", "flex", "flex"]}
          direction="row"
          align="center"
          spacing={2}
        >
          <MainBtnsNav />
        </Stack>
      </Stack>
    </Box>
  );
}
